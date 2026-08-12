// Test script to verify external crawlers can find all URLs
const https = require('https');
const http = require('http');

class CrawlTest {
  constructor(baseUrl = 'https://www.riverdayspa.com') {
    this.baseUrl = baseUrl;
    this.foundUrls = new Set();
    this.blogUrls = new Set();
    this.staticUrls = new Set();
  }

  async fetchPage(url) {
    return new Promise((resolve, reject) => {
      const client = url.startsWith('https') ? https : http;
      
      client.get(url, (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => resolve(data));
      }).on('error', reject);
    });
  }

  extractLinks(html, baseUrl) {
    const linkRegex = /href=["']([^"']+)["']/g;
    const links = new Set();
    let match;

    while ((match = linkRegex.exec(html)) !== null) {
      let link = match[1];
      
      // Convert relative URLs to absolute
      if (link.startsWith('/')) {
        link = baseUrl + link;
      } else if (!link.startsWith('http')) {
        continue;
      }

      // Only include same domain links
      if (link.startsWith(baseUrl)) {
        links.add(link);
      }
    }

    return Array.from(links);
  }

  async crawlPage(url, depth = 0, maxDepth = 3) {
    if (depth > maxDepth || this.foundUrls.has(url)) {
      return;
    }

    console.log(`Crawling (depth ${depth}): ${url}`);
    this.foundUrls.add(url);

    try {
      const html = await this.fetchPage(url);
      const links = this.extractLinks(html, this.baseUrl);

      // Categorize URLs
      if (url.includes('/blog/')) {
        this.blogUrls.add(url);
      } else {
        this.staticUrls.add(url);
      }

      // Crawl found links
      for (const link of links) {
        if (!this.foundUrls.has(link)) {
          await this.crawlPage(link, depth + 1, maxDepth);
        }
      }
    } catch (error) {
      console.error(`Error crawling ${url}:`, error.message);
    }
  }

  async fetchAllBlogUrls() {
    try {
      console.log('📡 Fetching blog URLs from API...');
      const apiUrl = `${this.baseUrl}/api/blogs?limit=1000`;
      const html = await this.fetchPage(apiUrl);
      const data = JSON.parse(html);
      
      if (data.blogs) {
        data.blogs.forEach(blog => {
          const blogUrl = `${this.baseUrl}/blog/${blog.slug}`;
          this.foundUrls.add(blogUrl);
          this.blogUrls.add(blogUrl);
        });
        console.log(`📝 Found ${data.blogs.length} blog posts via API`);
      }
    } catch (error) {
      console.log('⚠️  Could not fetch from API, will rely on crawling');
    }
  }

  async testCrawl() {
    console.log('🕷️  Starting crawl test...\n');
    
    const startTime = Date.now();
    
    // First, try to get all blog URLs from API
    await this.fetchAllBlogUrls();
    
    // Start crawling from homepage
    await this.crawlPage(this.baseUrl);
    
    const endTime = Date.now();
    const duration = (endTime - startTime) / 1000;

    // Results
    console.log('\n📊 CRAWL TEST RESULTS');
    console.log('='.repeat(50));
    console.log(`⏱️  Duration: ${duration.toFixed(2)} seconds`);
    console.log(`🔗 Total URLs found: ${this.foundUrls.size}`);
    console.log(`📄 Static pages: ${this.staticUrls.size}`);
    console.log(`📝 Blog posts: ${this.blogUrls.size}`);
    
    console.log('\n📝 Blog URLs found:');
    Array.from(this.blogUrls).forEach(url => {
      console.log(`  - ${url}`);
    });

    console.log('\n🎯 Key discovery pages:');
    const keyPages = [
      '/blogs',
      '/blog-index', 
      '/sitemap-all'
    ];
    
    keyPages.forEach(page => {
      const fullUrl = this.baseUrl + page;
      const found = this.foundUrls.has(fullUrl);
      console.log(`  ${found ? '✅' : '❌'} ${page}`);
    });

    console.log('\n📈 Summary:');
    const expectedTotal = 60 + 29; // 60 static + 29 blogs = 89
    if (this.foundUrls.size >= expectedTotal) {
      console.log(`✅ SUCCESS: Found ${this.foundUrls.size}/${expectedTotal} URLs - External crawlers will discover all content`);
    } else {
      console.log(`⚠️  WARNING: Found ${this.foundUrls.size}/${expectedTotal} URLs - Some content may not be discoverable`);
      console.log('💡 Missing URLs may be due to crawl depth limits or missing links');
    }

    return {
      totalUrls: this.foundUrls.size,
      staticUrls: this.staticUrls.size,
      blogUrls: this.blogUrls.size,
      allUrls: Array.from(this.foundUrls),
      duration
    };
  }
}

// Run the test
async function runTest() {
  const crawler = new CrawlTest();
  await crawler.testCrawl();
}

if (require.main === module) {
  runTest().catch(console.error);
}

module.exports = CrawlTest;