import { motion } from 'framer-motion';
import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

export default function ContactSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-white p-8">
      <motion.div 
        className="max-w-4xl w-full bg-gray-100 p-10 rounded-2xl shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold text-center mb-8">Contact Us</h2>
        
        <div className="space-y-8">
          {contactInfo.map((item, index) => (
            <motion.div 
              key={index} 
              className="flex items-center space-x-6 p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <item.icon className="text-5xl text-blue-500" />
              <div>
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

const contactInfo = [
  {
    title: 'Email',
    description: 'contact@yourcompany.com',
    icon: FaEnvelope,
  },
  {
    title: 'WhatsApp',
    description: '+123 456 7890',
    icon: FaWhatsapp,
  },
  {
    title: 'Address',
    description: '123 Main St, City, Country',
    icon: FaMapMarkerAlt,
  },
  {
    title: 'Office Hours',
    description: 'Mon - Fri: 9:00 AM - 5:00 PM',
    icon: FaClock,
  },
];

// This setup gives you a sleek, animated contact section with responsive styles and hover effects! Let me know if you want me to tweak anything or add more details. ✨