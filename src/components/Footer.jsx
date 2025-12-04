/**
 * Footer Component
 * Site footer with copyright and additional information
 */
function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://linkedin.com/in/ajeetkrsingh', icon: '💼', gradient: 'from-blue-500 to-cyan-500' },
    { name: 'GitHub', url: 'https://github.com/ajeetsingh1985', icon: '💻', gradient: 'from-purple-500 to-pink-500' },
    { name: 'Email', url: 'mailto:ajeet.cs7@gmail.com', icon: '📧', gradient: 'from-orange-500 to-red-500' }
  ];

  const quickLinks = [
    { name: 'About', path: '#about' },
    { name: 'Career', path: '#career' },
    { name: 'Education', path: '#education' },
    { name: 'Family', path: '#family' }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* About Column - Enhanced */}
          <div className="group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-indigo-500 rounded-xl flex items-center justify-center text-white font-black text-lg shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                AS
              </div>
              <h3 className="text-white text-xl font-bold bg-gradient-to-r from-white to-primary-300 bg-clip-text text-transparent">
                Ajeet Singh
              </h3>
            </div>
            <p className="text-sm leading-relaxed text-gray-400 group-hover:text-gray-300 transition-colors">
              Principal Software Engineer and Technology Leader with 20+ years of experience 
              in building exceptional software and high-performing teams.
            </p>
          </div>

          {/* Quick Links - Enhanced */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4 flex items-center gap-2">
              <span className="text-xl">🔗</span>
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.path}
                    className="group flex items-center gap-2 text-sm text-gray-400 hover:text-primary-400 transition-all duration-200 transform hover:translate-x-2"
                  >
                    <span className="text-primary-500 group-hover:text-primary-400 transition-colors">→</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect - Enhanced */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4 flex items-center gap-2">
              <span className="text-xl">💬</span>
              Connect
            </h3>
            <div className="space-y-3">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-all duration-300 p-3 rounded-xl hover:bg-white/10 backdrop-blur-sm transform hover:scale-105"
                >
                  <div className={`w-10 h-10 bg-gradient-to-br ${link.gradient} rounded-lg flex items-center justify-center shadow-md group-hover:scale-125 group-hover:rotate-12 transition-all duration-300`}>
                    <span className="text-xl">{link.icon}</span>
                  </div>
                  <span className="font-medium">{link.name}</span>
                  <span className="ml-auto text-primary-400 opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Bar */}
        <div className="border-t border-gray-800/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400 flex items-center gap-2">
              <span>© {currentYear}</span>
              <span className="text-primary-400 font-semibold">Ajeet Singh</span>
              <span>• All rights reserved</span>
            </p>
            
            <div className="flex items-center gap-4">
              <p className="text-sm text-gray-500 flex items-center gap-2">
                <span>Built with</span>
                <span className="text-red-500 animate-pulse text-lg">❤️</span>
                <span>and</span>
                <span className="text-yellow-500 text-lg">⚡</span>
              </p>
              
              {/* Scroll to top button */}
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="group flex items-center gap-2 bg-white/10 hover:bg-primary-500 text-white px-4 py-2 rounded-xl transition-all duration-300 transform hover:scale-110 backdrop-blur-sm"
              >
                <span className="text-sm font-medium">Back to Top</span>
                <span className="transform group-hover:-translate-y-1 transition-transform">↑</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
    </footer>
  );
}

export default Footer;
