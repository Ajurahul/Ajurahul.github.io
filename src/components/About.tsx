import { Calendar, MapPin, Mail, Phone, User, Download } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            About <span className="text-blue-400">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            3-year experienced software engineer with expertise in Java, Spring Boot and application Security.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="relative">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-2xl p-1">
                <img
                  src="../../images/aju-sqr.png"
                  alt="Aju K"
                  className="w-full h-96 object-cover rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <div className="flex items-center space-x-3 mb-2">
                  <User className="text-blue-400" size={20} />
                  <span className="text-gray-400 font-medium">Name:</span>
                </div>
                <span className="text-white">Aju K</span>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <div className="flex items-center space-x-3 mb-2">
                  <Calendar className="text-blue-400" size={20} />
                  <span className="text-gray-400 font-medium">Date of birth:</span>
                </div>
                <span className="text-white">March 25, 1999</span>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <div className="flex items-center space-x-3 mb-2">
                  <MapPin className="text-blue-400" size={20} />
                  <span className="text-gray-400 font-medium">Address:</span>
                </div>
                <span className="text-white">Chennai, 603002</span>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <div className="flex items-center space-x-3 mb-2">
                  <Mail className="text-blue-400" size={20} />
                  <span className="text-gray-400 font-medium">Email:</span>
                </div>
                <a href="mailto:ajurahul02@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                  ajurahul02@gmail.com
                </a>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 md:col-span-2">
                <div className="flex items-center space-x-3 mb-2">
                  <Phone className="text-blue-400" size={20} />
                  <span className="text-gray-400 font-medium">Phone:</span>
                </div>
                <a href="tel:+917904015843" className="text-blue-400 hover:text-blue-300 transition-colors">
                  +91 7904015843
                </a>
              </div>
            </div>

            <div className="text-center">
              <a
                href="https://drive.google.com/uc?export=download&id=13ABAUyi6rrWp1WdAO9bkKz6hN1CiuL_4"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
              >
                <Download className="mr-2" size={20} />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}