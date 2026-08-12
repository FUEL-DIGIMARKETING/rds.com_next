'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, User } from 'lucide-react'

const products = [
  {
    id: 1,
    name: "Unlock Your Curls with the Best Hair Stylist at Riverdayspa in chennai",
    image: "/images/best-haircut-for-curly-hair-coimbatore.webp",
    description: "Dressing up a woman's hair is perhaps taking care of more than fifty percent of her looks because the way she wears her hair projects her personality type and her overall persona. We help you to choose a hair style which will enhance your personality. We add the locks which you have wishing for. Our therapists and beauticians help you to take care of any hair trouble that you might have right from dandruff or a frizzy hair due to lack of care gets sorted with a hair spa at River Day Spa & Salon",
  },
  {
    id: 2,
    name: "My Favorite Nail Care & Art at Riverdayspa",
    image: "/images/best-nail-art-in-coimbatore.webp",
    description: "As you sit back and enjoy leafing through a magazine our beautician will take you through the routine manicure and pedicure services. We pamper your hand and feet by dipping it in warm water and cleansing it with care and moisturizing and massaging it till it shines. After the service they look dainty and pretty to showcase to your friends. We help you with the latest trend of nail art which will redefine your beauty.",
  },
  {
    id: 3,
    name: "Get Your Hair Styled by the Best in the Industry",
    image: "/images/best-hair-salon-coimbatore.webp",
    description: "At Riverday spa we have hair stylists who know how to style the hair with care and passion. You love the magic we do and you love the reflection you see. If you have been thinking to style your hair in the most modern way you know where you need to go. Walk to a River day spa and salon nearest to your location and let the magic unfold.",
  },
  {
    id: 4,
    name: "Bridal and Facials You Dreamt of at Riverdayspa",
    image: "/images/bridal-hair-cut-in-tiruppur.webp",
    description: "Marriages are occasions to dine and shine. To look your best and gather the attention of people who come to attend your wedding. A planner who would see you through all the important days of the wedding process. Gives you a new look for each occasion and dresses you to be star of the evening of all special days. At Riverday spa the makeup we use highlights your looks and mesmerizes the onlookers with your shine and style. Book the bridal slot with our beauticians and carry the star in your eyes on the wedding night.",
  },
]

const testimonials = [
  { id: 1, name: "Sai Pawan", feedback: "Riverday spa is a place to go with modern and aesthetic surroundings I got my solution to many problems which I was going through. I usually went to them for haircuts however I had serious issues regarding the quality of my hair. They helped me to get rid of the problem with a hair spa and suggested a balanced diet to enrich its upkeep. I regularly visit them for a hair massage which has enriched my hair growth. The stylists are knowledgeable and understanding" },
  { id: 2, name: "Himani Ramachandran", feedback: "I visited them a while ago when I wanted to go for a pedicure and nail art. We were supposed to go to a party and we wanted to do some basic cleanup for the purpose. The beauticians were understanding and they saw to it that we both could take the session together. The nail art portfolio with them is great and if anyone is looking for these services, I will recommend them to come to this place." },
  { id: 3, name: "Dhruv Shashidharan", feedback: "I have always enjoyed myself whenever I visited their outlet near my home. Their massages and facials are just great experiences. I chose an aromatic oil that suited my skin and a massage suitable for my age. They use organic products so you can rest assured about their quality." },
  { id: 4, name: "Nandini Sharma", feedback: "My bridal package was something I was actually worried about. However, all my thoughts were put to rest when I went to Riverday spa. My special day was so beautiful absolutely like a dream sequence. I have never been happier. I was admired for my looks by all members of my family specially my better half loved the way I looked. Their packages are good value for money." },
  { id: 5, name: "Sheetal Godhra", feedback: "I have two grandchildren and I like to color my hair and get my hair styled. I go for massages regularly. People can hardly guess my age. When I tell them I have grandchildren they are surprised. Riverday spa helped me to locate my style I have my favorite hairdresser and she attends me regularly. You will feel truly at home being with them." },
  { id: 6, name: "Bela", feedback: "I have gathered problem with my skin. My face had frequent eruptions of acne and pimple. I have been going for facials regularly and have been able to treat the skin problem effectively. I now have a membership program with them and I am able to get rid of the frequent skin eruptions. The people working with River day spa are friendly and helpful." },
]

export default function HairSalonPage() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8F5F0] via-white to-[#F8F5F0]">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url('/images/best-hair-style-cutting-gents-in-coimbatore.jpg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />

        <motion.div
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.p
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-2xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            River Hair Studio
          </motion.p>
        </motion.div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl font-bold mb-6 text-[#8D7B68]">
                Your Beauty, Our Passion
              </h1>
              <p className="text-base mb-4 text-justify text-[#3E3636]/90">
                Have you ever felt your true personality is not appearing in public because your hairdo is not, right? Have you ever thought you could be the next show stopper in your office if the right hairdresser could make a few changes with the way, you wear your hair? Or have you ever felt the need to change the way you look? Your hairstyle plays a major role in the way you are perceived by the people at large. A care free hairdo that is appraised by the people in the fashion industry is the dream of every young heart. At <Link href="/" className="text-[#8D7B68] font-bold hover:text-[#6B5B4F] transition-colors">River Salon & Day Spa</Link> in Chennai, we look after your dreams through the talent that we have acquired over so many years.
              </p>
              <p className="text-base text-justify text-[#3E3636]/90">
                Do you feel you have not been doing justice to your long beautiful hair and it is suffering due to overall neglect? Our hair spa treatment is one of the best in Chennai. We believe in the natural care and provide the best treatment.
              </p>
            </div>

            <div>
              <img

                src="/images/best-hair-cut-style-for-women-tiruppur.webp"
                alt="hair-Styling-at-River-Day-Spa"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>

          <div className="mt-8 space-y-4 text-[#3E3636]/90">
            <p className="text-base text-justify">
              Our Salon is a place of delight. Built aesthetically and elegantly displayed ornamentation we draw the attention of all age groups. In the dimly lit environment filled with a beautiful aroma, you will get the charm of your looks from perfectly curated hands who know all about wellness and fashion trends.
            </p>
            <p className="text-base text-justify">
              With vast years of experience, our team of hair stylists will help you choose a style that will suit the structure of your face, and the hair falling naturally on your nape will increase your beauty and enhance your personality. We also help you to enhance the texture of your hair and boost your confidence when you look at your reflection.
            </p>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.section
          className="relative bg-gradient-to-r from-[#8D7B68] to-[#6B5B4F] py-16 px-8 rounded-3xl text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto text-white">
            <h2 className="text-3xl font-bold mb-4">
              Cute Cut for Adam and Eve
            </h2>
            <p className="mb-8 text-lg opacity-90">
              At all Riverday Hair Studios, we provide you the best care for your hair and styles which daunts the fashion magazines and is aspired by young minds. We style everyone's hair be it young, old, or a child. We look into your preferences before making our suggestions and hold great respect for your choices. Our styling pods and recliners talk about luxury and style. Mesmerize your senses in our care.
            </p>
            <Link href="/book-spa-service-appointment">
              <motion.button
                className="bg-white text-[#8D7B68] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Check our Catalogue
              </motion.button>
            </Link>
          </div>
        </motion.section>

        {/* Services Highlight */}
        <motion.section
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl italic text-[#8D7B68] font-bold mb-4">
            Indulge In One Of Our Facial Spa Services And Become The Most Beautiful You
          </h3>
          <h2 className="text-4xl font-bold mb-6 text-[#3E3636]">
            Flaunts Your Straighties, Unlock Those Curls With The Best Hair Stylist In Chennai
          </h2>
          <div className="max-w-4xl mx-auto space-y-4 text-[#3E3636]/90">
            <p className="text-base">
              Are u looking for a beautician to enhance the special you. A look for a marriage which takes everyone's breath away. A personalized care for your skin and hair. At River day spa & Salon our clients keep coming back to us because we deliver much more than you ever asked for. We impress you with our comfortable upkeep and décor.
            </p>
            <p className="text-base">
              We educate our clients regarding the latest fashion trends and you become a part of it after receiving the services from our beauticians and stylists. We give our clients the most modern experience in a luxurious setting. We are aesthete at heart and function in style.
            </p>
          </div>
        </motion.section>

        {/* Services Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-[#8D7B68] mb-8">Hair Stylists and Beauticians at Their Very Best</h2>
          <p className="text-2xl text-[#3E3636] text-center font-bold mb-10">
            Our Unique Skin Care Services for All Age Groups in Chennai
          </p>
          <p className="text-xl font-bold text-center text-[#8D7B68] mb-12">The Urban Man with Elite Groomed Looks at Our River day spa and salon in Chennai</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
              >
                {/* Image Section */}
                <div className="relative h-64 md:h-80 lg:h-96">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Text Section */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#8D7B68] mb-3">{product.name}</h3>
                  <p className="text-[#3E3636]/90 text-justify leading-relaxed">{product.description}</p>
                </div>
              </motion.div>

            ))}
          </div>
        </div>

        {/* Testimonials */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-[#8D7B68] mb-12 text-center">Thousands Of Happy Clients</h2>
          <div className="relative flex items-center justify-center">
            <button
              onClick={prevTestimonial}
              className="absolute left-0 p-3 bg-[#8D7B68] rounded-full hover:bg-[#6B5B4F] transition-colors z-10"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <motion.div
              key={testimonials[currentIndex].id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl text-center mx-16"
            >
              <div className="w-16 h-16 mx-auto rounded-full mb-6 border-2 border-[#8D7B68] flex items-center justify-center bg-[#F8F5F0]">
                <User className="w-10 h-10 text-[#8D7B68]" />
              </div>
              <p className="text-[#3E3636]/90 italic text-lg mb-6">"{testimonials[currentIndex].feedback}"</p>
              <h3 className="text-[#8D7B68] font-semibold text-lg">- {testimonials[currentIndex].name}</h3>
            </motion.div>

            <button
              onClick={nextTestimonial}
              className="absolute right-0 p-3 bg-[#8D7B68] rounded-full hover:bg-[#6B5B4F] transition-colors z-10"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </motion.section>
      </div>

      {/* Get In Touch Section */}
      <section className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="bg-gray-900 shadow-xl rounded-lg p-8 w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-white">Get In Touch</h2>
              <ContactForm />
            </div>

            {/* Google Map */}
            <div className="w-full md:w-1/2">
              <iframe
                title="Google Map"
                className="w-full h-[500px] rounded-lg shadow-lg border border-gray-700"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7772.770852921523!2d80.257836!3d13.074742!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52660c5c545527%3A0xe95070688b879bb2!2sRiver%20Group%20Of%20Salon%20And%20Spa!5e0!3m2!1sen!2sin!4v1741083538312!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    // Add form submission logic here
    console.log('Form submitted:', formData)
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full p-3 border border-gray-700 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full p-3 border border-gray-700 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500"
        required
      />
      <input
        type="text"
        name="subject"
        placeholder="Subject"
        value={formData.subject}
        onChange={handleChange}
        className="w-full p-3 border border-gray-700 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500"
        required
      />
      <textarea
        name="message"
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
        className="w-full p-3 border border-gray-700 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500 h-32"
        required
      />
      <button
        type="submit"
        className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-500 transition-all duration-300 shadow-lg hover:shadow-green-500"
      >
        Mail Us Now
      </button>
    </form>
  )
}