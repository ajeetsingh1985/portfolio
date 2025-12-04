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
              Built with React, Tailwind CSS, and ❤️
            </p>
          </div>
        </div>
      </div>
      
      {/* Tech Stack Badge */}
      <a
        href="https://vitejs.dev"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 z-50 group"
        style={{
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif'
        }}
      >
        <div className="flex items-center gap-2">
          <svg width="20" height="20" viewBox="0 0 410 404" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M399.641 59.5246L215.643 388.545C211.844 395.338 202.084 395.378 198.228 388.618L10.5817 59.5563C6.38087 52.1896 12.6802 43.2665 21.0281 44.7586L205.223 77.6824C206.398 77.8924 207.601 77.8904 208.776 77.6763L389.119 44.8058C397.439 43.2894 403.768 52.1434 399.641 59.5246Z" fill="url(#paint0_linear)"/>
            <path d="M292.965 1.5744L156.801 28.2552C154.563 28.6937 152.906 30.5903 152.771 32.8664L144.395 174.33C144.198 177.662 147.258 180.248 150.51 179.498L188.42 170.749C191.967 169.931 195.172 173.055 194.443 176.622L183.18 231.775C182.422 235.487 185.907 238.661 189.532 237.56L212.947 230.446C216.577 229.344 220.065 232.527 219.297 236.242L201.398 322.875C200.278 328.294 207.486 331.249 210.492 326.603L212.5 323.5L323.454 102.072C325.312 98.3645 322.108 94.137 318.036 94.9228L279.014 102.454C275.347 103.161 272.227 99.746 273.262 96.1583L298.731 7.86689C299.767 4.27314 296.636 0.855181 292.965 1.5744Z" fill="url(#paint1_linear)"/>
            <defs>
              <linearGradient id="paint0_linear" x1="6.00017" y1="32.9999" x2="235" y2="344" gradientUnits="userSpaceOnUse">
                <stop stopColor="#41D1FF"/>
                <stop offset="1" stopColor="#BD34FE"/>
              </linearGradient>
              <linearGradient id="paint1_linear" x1="194.651" y1="8.81818" x2="236.076" y2="292.989" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFEA83"/>
                <stop offset="0.0833333" stopColor="#FFDD35"/>
                <stop offset="1" stopColor="#FFA800"/>
              </linearGradient>
            </defs>
          </svg>
          <span className="text-sm font-medium text-gray-800 group-hover:text-primary-600 transition-colors">
            Powered by Vite + React
          </span>
        </div>
      </a>
    </footer>
  );
}

export default Footer;
