/**
 * Footer Component
 * Site footer with copyright and additional information
 */
function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://linkedin.com/in/ajeetkrsingh', icon: '💼' },
    { name: 'GitHub', url: 'https://github.com/ajeetsingh1985', icon: '💻' },
    { name: 'Email', url: 'mailto:ajeet.cs7@gmail.com', icon: '📧' }
  ];

  const quickLinks = [
    { name: 'About', path: '#about' },
    { name: 'Career', path: '#career' },
    { name: 'Education', path: '#education' },
    { name: 'Family', path: '#family' }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About Column */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Ajeet Singh</h3>
            <p className="text-sm leading-relaxed">
              Principal Software Engineer and Technology Leader with 20+ years of experience 
              in building exceptional software and high-performing teams.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.path}
                    className="text-sm hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Connect</h3>
            <div className="space-y-3">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="flex items-center text-sm hover:text-primary-400 transition-colors duration-200"
                >
                  <span className="text-xl mr-2">{link.icon}</span>
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm mb-4 md:mb-0">
              © {currentYear} Ajeet Singh. All rights reserved.
            </p>
            <p className="text-sm text-gray-500">
              Built with  ❤️
            </p>
          </div>
        </div>
      </div>
      
    </footer>
  );
}

export default Footer;
