import { ExternalLink, Github, Calendar, MapPin, Users, Code, ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 'selfcare',
    title: 'Selfcare Split – Microservices Transformation',
    company: 'Sky Italy / Comcast',
    duration: '2025 Jan – Present',
    role: 'Software Developer',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Led the transformation of a monolithic selfcare application into domain-driven microservices, modernizing the architecture for scalability and cloud-native deployment.',
    technologies: ['Java 21', 'Spring Boot', 'AWS', 'Docker', 'Terraform', 'JUnit 5', 'WireMock'],
    highlights: [
      'Transformed monolithic selfcare application into multiple domain-driven microservices',
      'Designed and implemented private APIs for reusable components',
      'Migrated authentication logic and critical flows into secure services',
      'Automated infrastructure provisioning using Terraform'
    ]
  },
  {
    id: 'prospect',
    title: 'Prospect – Seller & Customer Onboarding',
    company: 'Sky UK / Comcast',
    duration: '2024 Oct – Present',
    role: 'Software Developer',
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Developed and enhanced backend services for Sky UK\'s seller and customer prospect journey, supporting both AOL (customer flow) and AFD (seller-assisted flow).',
    technologies: ['Java 21', 'Spring Boot', 'AWS', 'Docker', 'Jenkins', 'WireMock', 'Tavern'],
    highlights: [
      'Implemented double discounts and new seller roles',
      'Migrated application from Java 8/13 to Java 21',
      'Integrated Microsoft Authentication (Elena 2.0)',
      'Enhanced testing quality with CI/CD integration'
    ]
  },
  {
    id: 'public-calculator',
    title: 'Public Calculator DTCC',
    company: 'DTCC',
    duration: 'Jan 2024 – Present',
    role: 'Senior Software Engineer',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Developed a robust and scalable public calculator application for financial calculations with high accuracy and reliability using microservices architecture.',
    technologies: ['JavaScript', 'jQuery', 'HTML', 'Spring Boot', 'Snowflake', 'OpenShift'],
    highlights: [
      'Converted SQL stored procedures to Java Spring Boot applications',
      'Implemented image and audio CAPTCHA generation features',
      'Integrated SMTP email functionality for OTP verification',
      'Deployed to Red Hat OpenShift Container Platform'
    ]
  },
  {
    id: 'lcm',
    title: 'Life Cycle Management',
    company: 'DTCC',
    duration: 'Jun 2023 – Jan 2024',
    role: 'Senior Software Engineer',
    image: 'https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Automated Life Cycle Management (LCM) project, orchestrating backend development and database management, enabling centralized FOSS upgrades.',
    technologies: ['Java', 'Spring Boot', 'Spring MVC', 'Liquibase', 'JUnit'],
    highlights: [
      'Key contributor to backend development for LCM application',
      'Managed database operations with Liquibase',
      'Automated FOSS upgrades across DTCC applications',
      'Achieved 80% code coverage for reliable functionalities'
    ]
  },
  {
    id: 'mrd',
    title: 'Master Reference Data and Program Management',
    company: 'DTCC',
    duration: 'Jan 2023 – Apr 2023',
    role: 'Senior Software Engineer',
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Application Developer in Master Reference Data Area focusing on maintenance and enhancements.',
    technologies: ['JavaScript', 'jQuery', 'Spring Boot', 'Spring MVC', 'DB2'],
    highlights: [
      'Maintenance and enhancements of specific applications',
      'Added new features and improvements to existing features',
      'Fixed FOSS, Fortify, pen, and security findings',
      'Upgraded Java in AWS from Java 8 to Java 8.al2'
    ]
  },
  {
    id: 'security',
    title: 'Application Security and Remediation',
    company: 'DTCC',
    duration: 'Jan 2022 – Dec 2022',
    role: 'Senior Software Engineer',
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Fixed FOSS, Pen findings, fortify issues, and other security vulnerabilities found in applications.',
    technologies: ['Java', 'Spring Boot', 'Spring MVC', 'Security Tools'],
    highlights: [
      'Fixed FOSS issues found in TRM testing',
      'Resolved penetration test findings',
      'Fixed fortify issues during Jenkins packaging',
      'Migrated from EOL components to new components'
    ]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            My <span className="text-blue-400">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Dynamic projects showcasing diverse expertise in software development, application security and modernization.
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } flex flex-col lg:flex`}
            >
              {/* Project Image */}
              <div className="lg:w-2/5 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 lg:h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              {/* Project Content */}
              <div className="lg:w-3/5 p-8 lg:p-12">
                <div className="mb-6">
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-2" />
                      {project.duration}
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-2" />
                      {project.company}
                    </div>
                    <div className="flex items-center">
                      <Users size={16} className="mr-2" />
                      {project.role}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                    <Code size={20} className="mr-2 text-blue-400" />
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm border border-blue-600/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Highlights */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-white mb-4">Key Highlights</h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start text-gray-300">
                        <ArrowRight size={16} className="mr-3 mt-1 text-blue-400 flex-shrink-0" />
                        <span className="leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <button className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                    <ExternalLink size={18} className="mr-2" />
                    View Details
                  </button>
                  <button className="flex items-center px-6 py-3 bg-white/10 border border-white/20 text-gray-300 rounded-lg font-semibold hover:bg-white/20 hover:text-white transition-all duration-300">
                    <Github size={18} className="mr-2" />
                    Source Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}