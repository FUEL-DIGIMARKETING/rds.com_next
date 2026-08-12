import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Careers - River Day Spa',
  description: 'Join our team at River Day Spa. Explore career opportunities in spa and wellness industry.',
}

const careers = [
  {
    title: "Beautician (Female/Male)",
    description: "Looking for skilled beauticians to provide professional beauty services including facials, hair treatments, and skincare.",
    requirements: ["Beauty certification", "2+ years experience", "Customer service skills"],
    location: "All Locations"
  },
  {
    title: "Female Massage Therapist",
    description: "Experienced female massage therapists for various massage techniques including Swedish, Deep tissue, and Ayurvedic massages.",
    requirements: ["Massage therapy certification", "Professional training", "Good communication skills"],
    location: "Chennai, Bangalore, Coimbatore"
  },
  {
    title: "Floor Manager",
    description: "Manage daily spa operations, coordinate with staff, and ensure excellent customer experience.",
    requirements: ["Management experience", "Leadership skills", "Spa industry knowledge"],
    location: "Chennai Egmore"
  },
  {
    title: "Hair Dresser",
    description: "Professional hair stylists for cutting, coloring, and styling services.",
    requirements: ["Hair styling certification", "Creative skills", "Latest trend knowledge"],
    location: "All Locations"
  },
  {
    title: "Housekeeping",
    description: "Maintain cleanliness and hygiene standards throughout the spa facilities.",
    requirements: ["Attention to detail", "Reliability", "Previous housekeeping experience"],
    location: "All Locations"
  },
  {
    title: "Receptionists",
    description: "Front desk operations, appointment scheduling, and customer service.",
    requirements: ["Communication skills", "Computer literacy", "Customer service experience"],
    location: "All Locations"
  }
]

export default function Careers() {
  return (
    <div className="min-h-screen bg-[#F8F5F0] pt-32">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#8D7B68] mb-4">
            Join Our Team
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Be part of Chennai's leading spa and wellness destination. We offer competitive packages, 
            professional growth opportunities, and a positive work environment.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {careers.map((job, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-[#8D7B68] mb-3">{job.title}</h3>
              <p className="text-gray-600 mb-4">{job.description}</p>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Requirements:</h4>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  {job.requirements.map((req, idx) => (
                    <li key={idx}>{req}</li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-4">
                <span className="text-sm font-medium text-green-600">📍 {job.location}</span>
              </div>
              
              <button className="w-full bg-[#8D7B68] text-white py-2 rounded-lg hover:bg-[#7A6B58] transition-colors">
                Apply Now
              </button>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-[#8D7B68] mb-4">How to Apply</h2>
            <p className="text-gray-600 mb-4">
              Send your resume and cover letter to our HR department or visit any of our locations for a direct interview.
            </p>
            <div className="space-y-2 text-sm text-gray-600">
              <p><strong>Email:</strong> careers@riverdayspa.com</p>
              <p><strong>Phone:</strong> +91 82878 11111</p>
              <p><strong>Address:</strong> New No.7A, Old No 2/4 1st Floor, Tamil Salai, Egmore, Chennai - 600008</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}