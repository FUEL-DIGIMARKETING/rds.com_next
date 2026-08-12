import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - River Day Spa',
  description: 'Get in touch with River Day Spa. Book your appointment or inquire about our services.',
}

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#F8F5F0] pt-32">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-[#8D7B68] mb-8">
          Contact Us
        </h1>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-[#8D7B68] mb-4">Get in Touch</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-800">Phone</h3>
                  <p className="text-gray-600">+91-82878-11111</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Address</h3>
                  <p className="text-gray-600">
                    New No.7A, Old No 2/4 1st Floor,<br />
                    Tamil Salai, Egmore,<br />
                    Chennai - 600008
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Hours</h3>
                  <p className="text-gray-600">Monday - Sunday: 10:00 AM - 10:00 PM</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-[#8D7B68] mb-4">Send Message</h2>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8D7B68]"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8D7B68]"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8D7B68]"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-[#8D7B68] text-white py-3 rounded-lg hover:bg-[#7A6B58] transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}