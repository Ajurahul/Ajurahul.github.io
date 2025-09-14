import { Award, ExternalLink, Trophy, Star, Medal, Target } from 'lucide-react';

const certificates = [
  {
    title: 'Certified Application Security Specialist',
    issuer: 'Infosys',
    link: 'https://drive.google.com/uc?export=download&id=1tfNY5K3JaGBdqrMo6NsVRy9ZNQhJuC41',
    icon: Award,
  },
  {
    title: 'Certified Java SE8 Developer',
    issuer: 'Infosys',
    link: 'https://drive.google.com/uc?export=download&id=1vBMp5BU8fQ5_ghqgx6QquiCh6KH20hfS',
    icon: Award,
  },
  {
    title: 'Global Agile Developer Certification',
    issuer: 'Infosys',
    link: 'https://drive.google.com/uc?export=download&id=1uRolrHRyMyF49MlBhS9GSSqj-JIaf1xt',
    icon: Award,
  },
  {
    title: 'Certified Google Cloud Architect Professional',
    issuer: 'Infosys',
    link: 'https://drive.google.com/uc?export=download&id=1v6-Ga7t1zzAydFVnOBd7gGFXvB7RjOc7',
    icon: Award,
  },
  {
    title: 'Certified DevOps Professional',
    issuer: 'Infosys',
    link: 'https://drive.google.com/uc?export=download&id=1v1m-8nrkndB2ygocYum-XdgZt5dGWZEv',
    icon: Award,
  },
  {
    title: 'Certified Professional - Generative AI for All',
    issuer: 'Infosys',
    link: 'https://drive.google.com/uc?export=download&id=1tVCFeljbhydIXMVxdZ5-6D4QelD_SV4k',
    icon: Award,
  },
];

const achievements = [
  {
    title: 'Platinum Club Member',
    description: 'Recognized as a top 3% performer at Infosys, selected for outstanding performance and exemplary contributions as part of the prestigious Platinum Club.',
    icon: Trophy,
    color: 'from-yellow-500 to-orange-500',
  },
  {
    title: 'Outstanding Performer Award',
    description: 'Received Outstanding Performance Award from Infosys/DTCC with a Certificate of Recognition (February 2024).',
    icon: Star,
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Crawler Discord Bot',
    description: 'Developed and deployed a versatile Discord bot leveraging Python for novel crawling, translation to requested languages.',
    icon: Medal,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Jenkins Deployment Verifier - Automation',
    description: 'Implemented Jenkins Deployment Verifier to ensure seamless and error-free deployment processes, validating application integrity across various environments.',
    icon: Target,
    color: 'from-green-500 to-emerald-500',
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            My <span className="text-blue-400">Achievements</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Recognition for excellence in software development and professional contributions
          </p>
        </div>

        {/* Certificates Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-3">
                    <cert.icon className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {cert.title}
                    </h4>
                    <p className="text-gray-400 text-sm mb-4">
                      Issued by: {cert.issuer}
                    </p>
                    <a
                      href={cert.link}
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      View Certificate
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Other Achievements</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start space-x-6">
                  <div className={`bg-gradient-to-r ${achievement.color} rounded-xl p-4`}>
                    <achievement.icon className="text-white" size={32} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {achievement.title}
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}