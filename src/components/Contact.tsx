import { useState } from 'react';
import { Mail, Phone, MapPin, Globe, Send, User, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      content: 'Veerapuram, Mahendra City, Chennai - 603004',
      link: 'https://maps.app.goo.gl/zKYrKKjSrxGpdUk3A',
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: Phone,
      title: 'Contact Number',
      content: '+91 7904015843',
      link: 'tel://7904015843',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Mail,
      title: 'Email Address',
      content: 'ajurahul02@gmail.com',
      link: 'mailto:ajurahul02@gmail.com',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Globe,
      title: 'Website',
      content: 'ajurahul.github.io',
      link: 'https://ajurahul.github.io/',
      color: 'from-purple-500 to-violet-500',
    },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Contact <span className="text-blue-400">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            "Life is a journey that must be traveled no matter how bad the roads and accommodations." - Oliver Goldsmith
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${info.color} mb-4`}>
                <info.icon className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">
                {info.title}
              </h3>
              <a
                href={info.link}
                target={info.link.startsWith('http') ? '_blank' : undefined}
                rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="text-blue-400 hover:text-blue-300 transition-colors text-sm break-all"
              >
                {info.content}
              </a>
            </div>
          ))}
        </div>

        {/* Contact Form and Image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-12 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                  required
                />
              </div>

              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-12 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                  required
                />
              </div>

              <div className="relative">
                <MessageSquare className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-12 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                  required
                />
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg py-4 font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <Send className="mr-2" size={20} />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Image */}
          <div className="relative">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-2xl p-1">
                <img
                  src="https://images.pexels.com/photos/3777946/pexels-photo-3777946.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Contact"
                  className="w-full h-96 object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}