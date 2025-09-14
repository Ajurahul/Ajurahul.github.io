import { ArrowRight, Heart } from 'lucide-react';

export default function Footer() {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black/40 backdrop-blur-sm border-t border-white/10 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Navigation Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="flex items-center text-gray-400 hover:text-white transition-colors text-left py-2"
                >
                  <ArrowRight size={16} className="mr-2 text-blue-400" />
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Get In Touch</h3>
            <div className="space-y-3 text-gray-400">
              <p>Email: ajurahul02@gmail.com</p>
              <p>Phone: +91 7904015843</p>
              <p>Location: Chennai, India</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            © 2024 Aju K. Made with <Heart className="mx-2 text-red-500" size={16} /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}