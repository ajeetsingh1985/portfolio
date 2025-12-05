import { useState, useEffect } from 'react';

/**
 * Hero Section Component
 * Displays main introduction with name, title, and tagline
 */
function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20,
        y: (e.clientY / window.innerHeight) * 20
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative py-20 md:py-32 overflow-hidden min-h-screen flex items-center">
      {/* Dynamic Animated Gradient Background with Parallax */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-indigo-50">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary-300 to-primary-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob"
            style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-300 to-indigo-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"
            style={{ transform: `translate(-${mousePosition.x}px, ${mousePosition.y}px)` }}></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-gradient-to-br from-purple-300 to-purple-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob" 
            style={{ animationDelay: '4s', transform: `translate(${mousePosition.x / 2}px, -${mousePosition.y}px)` }}></div>
        </div>
      </div>
      
      {/* Geometric Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            {/* Animated Badge */}
            <div className={`inline-block mb-6 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
              <span className="relative inline-flex items-center gap-2 bg-gradient-to-r from-primary-50 to-indigo-50 text-primary-700 font-semibold text-sm uppercase tracking-wide px-6 py-3 rounded-full border-2 border-primary-200 shadow-lg hover:shadow-xl transition-all duration-300 group backdrop-blur-sm">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-500"></span>
                </span>
                Welcome to my journey...The path I've taken so far...
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </div>
            
            {/* Animated Name with Gradient */}
            <h1 className={`text-5xl md:text-7xl lg:text-8xl font-black mb-6 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
              <span className="bg-gradient-to-r from-gray-900 via-primary-600 to-indigo-600 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                Ajeet Singh
              </span>
            </h1>
            
            {/* Animated Title with Icon */}
            <div className={`flex items-center justify-center gap-3 mb-6 transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary-600"></div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-600 relative">
                <span className="relative inline-block">
                  Principal Software Engineer
                  <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-indigo-500 rounded-full"></div>
                </span>
              </h2>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary-600"></div>
            </div>
            
            {/* Animated Description with Icons */}
            <p className={`text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
              <span className="inline-flex items-center gap-2 hover:text-primary-600400 transition-colors">
                <span className="text-2xl">🏗️</span>
                Architecting enterprise-scale solutions
              </span>
              <span className="mx-2 text-gray-400">•</span>
              <span className="inline-flex items-center gap-2 hover:text-primary-600400 transition-colors">
                <span className="text-2xl">☁️</span>
                Driving cloud transformation
              </span>
              <span className="mx-2 text-gray-400">•</span>
              <span className="inline-flex items-center gap-2 hover:text-primary-600400 transition-colors">
                <span className="text-2xl">👥</span>
                Building exceptional teams
              </span>
            </p>
            
            {/* Family Tagline */}
            <p className={`text-base md:text-lg text-gray-500 italic max-w-2xl mx-auto mb-8 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
              <span className="inline-flex items-center gap-2">
                <span className="text-xl">❤️</span>
                Husband, father of two, forever learning
              </span>
            </p>
          </div>
          
          {/* Enhanced CTA Buttons */}
          <div className={`flex flex-wrap gap-4 justify-center mb-16 transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <a
              href="#about"
              className="group relative bg-gradient-to-r from-primary-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                Learn More
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a
              href="#career"
              className="group relative bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold border-2 border-primary-600 hover:bg-primary-50700 transition-all duration-300 transform hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Career
                <span className="text-xl group-hover:rotate-12 transition-transform">💼</span>
              </span>
            </a>
          </div>
          
          {/* Enhanced Interactive Stats with Hover Effects */}
          <div className={`grid grid-cols-3 gap-6 max-w-4xl mx-auto transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {[
              { value: '20+', label: 'Years Experience', icon: '🚀', gradient: 'from-blue-500 to-cyan-500' },
              { value: '50+', label: 'Projects', icon: '💡', gradient: 'from-purple-500 to-pink-500' },
              { value: '15+', label: 'Team Members', icon: '👥', gradient: 'from-orange-500 to-red-500' }
            ].map((stat, index) => (
              <div key={index} className="group relative">
                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-3050 transition-opacity duration-500`}></div>
                
                <div className="relative text-center p-6 bg-white rounded-2xl shadow-lg border-2 border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-500 transform group-hover:scale-110 group-hover:-translate-y-2 cursor-pointer overflow-hidden">
                  {/* Animated background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-1020 transition-opacity duration-500`}></div>
                  
                  {/* Icon */}
                  <div className="text-4xl mb-3 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                    {stat.icon}
                  </div>
                  
                  {/* Value */}
                  <div className={`text-4xl md:text-5xl font-black bg-gradient-to-br ${stat.gradient} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300`}>
                    {stat.value}
                  </div>
                  
                  {/* Label */}
                  <div className="text-sm font-semibold text-gray-600 group-hover:text-gray-800 transition-colors">
                    {stat.label}
                  </div>
                  
                  {/* Sparkle effects */}
                  <div className="absolute top-2 right-2 w-2 h-2 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
                  <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
