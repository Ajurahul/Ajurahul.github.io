import { GraduationCap, Briefcase, Calendar } from 'lucide-react';

export default function Resume() {
  return (
    <section id="resume" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            My <span className="text-blue-400">Resume</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A Tech enthusiast exploring the realms of coding and software magic to create meaningful experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <GraduationCap className="mr-3 text-blue-400" size={28} />
              Education
            </h3>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 rounded-lg p-3">
                  <Calendar className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <span className="inline-block bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium mb-3">
                    2016-2020
                  </span>
                  <h4 className="text-xl font-bold text-white mb-2">
                    Bachelor Degree of Engineering
                  </h4>
                  <p className="text-blue-400 font-semibold mb-2">
                    Kumaraguru College of Technology
                  </p>
                  <p className="text-gray-400 mb-4">Coimbatore</p>
                  <p className="text-gray-300 leading-relaxed">
                    Excelled academically at Kumaraguru College of Technology, achieving first-class marks, 
                    and actively participated in projects, gaining hands-on experience in mechatronics engineering. 
                    Demonstrated dedication to academic excellence and a passion for applying theoretical knowledge to practical challenges.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <Briefcase className="mr-3 text-blue-400" size={28} />
              Experience
            </h3>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-600 rounded-lg p-3">
                  <Calendar className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <span className="inline-block bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full text-sm font-medium mb-3">
                    2021-2024
                  </span>
                  <h4 className="text-xl font-bold text-white mb-2">
                    Senior Systems Engineer
                  </h4>
                  <p className="text-purple-400 font-semibold mb-4">
                    Infosys Ltd.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Contributed significantly to software development and security initiatives during a 3-year tenure at Infosys, 
                    excelling in Application Security, Life Cycle Management, and Modernization projects, garnering accolades 
                    for excellence and achieving certifications in multiple domains.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="https://drive.google.com/uc?export=download&id=13ABAUyi6rrWp1WdAO9bkKz6hN1CiuL_4"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}