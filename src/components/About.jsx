import { useState } from 'react';

/**
 * About Section Component
 * Describes professional identity and leadership qualities
 */
function About() {
const [hoveredCard, setHoveredCard] = useState(null);

return (
    <section id="about" className="section-container relative overflow-hidden">
        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-primary-50/30 to-white -z-10">
          <div className="absolute inset-0 opacity-[0.02]">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%233b82f6' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
              backgroundSize: '100px 100px'
            }}></div>
          </div>
        </div>
        
        <div className="text-center mb-16 relative z-10">
            <div className="inline-block mb-4">
              <span className="bg-gradient-to-r from-primary-50 to-indigo-50 text-primary-700 font-semibold text-sm uppercase tracking-wide px-6 py-3 rounded-full border-2 border-primary-200 shadow-md">
                Who i am?
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-gray-900 via-primary-600 to-indigo-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="flex justify-center gap-2 mt-4">
              <div className="h-1 w-12 bg-gradient-to-r from-primary-500 to-indigo-500 rounded-full"></div>
              <div className="h-1 w-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
              <div className="h-1 w-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
            </div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-12 mb-16">
                {/* Enhanced Profile Image */}
                <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-indigo-400 rounded-3xl blur-2xl opacity-0 group-hover:opacity-30 transition-all duration-500"></div>
                    <div className="relative aspect-square rounded-3xl bg-gradient-to-br from-primary-100 to-indigo-100 overflow-hidden shadow-2xl border-4 border-white transform group-hover:scale-105 group-hover:rotate-1 transition-all duration-500">
                        <img 
                            src="\images\MySelf.JPG" 
                            alt="Ajeet Singh" 
                            className="w-full h-full object-cover"
                        />
                        {/* Overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
                          <span className="text-white font-bold text-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            Principal Engineer
                          </span>
                        </div>
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500"></div>
                    <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500"></div>
                </div>
                
                <div className="flex flex-col justify-center space-y-6">
                    <p className="text-lg text-gray-700 leading-relaxed">
                        I am a <span className="font-bold text-primary-600">results-driven technology leader</span> with <span className="font-bold text-indigo-600">20+ years</span> of expertise in enterprise 
                        software engineering and high-performance team leadership. My career has been defined 
                        by a relentless pursuit of technical excellence, continuous innovation, and the 
                        conviction that transformative solutions emerge from empowered, collaborative teams.
                    </p>
                    
                    <div className="space-y-3">
                        {[
                          { icon: '👔', title: 'Current Role', detail: 'Principal Software Engineer at Assurant Inc.', gradient: 'from-blue-500 to-cyan-500' },
                          { icon: '📍', title: 'Location', detail: 'West Chester, Pennsylvania, United States', gradient: 'from-purple-500 to-pink-500' },
                          { icon: '💼', title: 'Experience', detail: '18+ years in Software Engineering', gradient: 'from-orange-500 to-red-500' }
                        ].map((item, index) => (
                          <div 
                            key={index}
                            className="group flex items-start gap-4 p-4 rounded-xl bg-white border-2 border-gray-100 hover:border-transparent hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer overflow-hidden relative"
                            onMouseEnter={() => setHoveredCard(index)}
                            onMouseLeave={() => setHoveredCard(null)}
                          >
                            <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                            <div className="relative flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-100 to-indigo-100 rounded-xl flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 shadow-md">
                                <span className="text-2xl">{item.icon}</span>
                            </div>
                            <div className="relative flex-1">
                                <h4 className="font-bold text-gray-900 group-hover:text-primary-600 transition-colors mb-1">{item.title}</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">{item.detail}</p>
                            </div>
                            <span className={`text-primary-400 group-hover:translate-x-1 transition-transform ${hoveredCard === index ? 'opacity-100' : 'opacity-0'}`}>→</span>
                          </div>
                        ))}
                    </div>
                </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
                {[
                  {
                    icon: '🎯',
                    title: 'Leadership Philosophy',
                    content: 'I cultivate high-performing teams by fostering trust, maintaining transparent communication, and architecting environments where innovation flourishes. My leadership approach synergizes deep technical acumen with emotional intelligence to unlock team potential and drive sustainable excellence.',
                    gradient: 'from-blue-500 to-indigo-600',
                    pattern: 'from-blue-50 to-indigo-50'
                  },
                  {
                    icon: '⚡',
                    title: 'Technical Expertise',
                    content: 'Specialized in enterprise-scale architecture, Microsoft Azure cloud ecosystems, microservices patterns, and advanced database optimization. I excel at translating intricate business requirements into robust, scalable, and maintainable technical solutions that deliver measurable value.',
                    gradient: 'from-purple-500 to-pink-600',
                    pattern: 'from-purple-50 to-pink-50'
                  }
                ].map((card, index) => (
                  <div 
                    key={index}
                    className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer border-2 border-gray-100 hover:border-transparent"
                  >
                    {/* Glow effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500`}></div>
                    
                    {/* Gradient border */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    <div className="absolute inset-[2px] bg-white rounded-2xl"></div>
                    
                    <div className={`relative p-8 bg-gradient-to-br ${card.pattern} group-hover:bg-opacity-50 transition-all duration-500`}>
                      {/* Icon */}
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-14 h-14 bg-gradient-to-br ${card.gradient} rounded-2xl flex items-center justify-center text-2xl shadow-lg transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500`}>
                          {card.icon}
                        </div>
                        <h3 className={`text-xl font-bold bg-gradient-to-r ${card.gradient} bg-clip-text text-transparent`}>
                          {card.title}
                        </h3>
                      </div>
                      
                      {/* Content */}
                      <p className="text-gray-700 leading-relaxed">
                        {card.content}
                      </p>
                      
                      {/* Decorative corner */}
                      <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-gray-200 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </div>
                ))}
            </div>
            
            {/* Enhanced Core Values */}
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-gray-100">
              {/* Gradient border effect */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-indigo-500 to-purple-500"></div>
              
              <div className="p-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center text-3xl shadow-lg transform hover:rotate-12 transition-transform duration-300">
                    💎
                  </div>
                  <div>
                    <h3 className="text-2xl font-black bg-gradient-to-r from-gray-900 to-primary-600 bg-clip-text text-transparent">
                      Core Values
                    </h3>
                    <p className="text-sm text-gray-600">Principles that guide my journey</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { icon: '💡', title: 'Innovation', detail: 'Always seeking better ways to solve problems', color: 'from-yellow-500 to-orange-500' },
                    { icon: '🤝', title: 'Integrity', detail: 'Building trust through honest and transparent communication', color: 'from-blue-500 to-cyan-500' },
                    { icon: '👥', title: 'Collaboration', detail: 'Achieving excellence through teamwork', color: 'from-purple-500 to-pink-500' },
                    { icon: '📚', title: 'Continuous Learning', detail: 'Staying current with emerging technologies', color: 'from-emerald-500 to-teal-500' }
                  ].map((value, index) => (
                    <div 
                      key={index}
                      className="group flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-gray-50 to-white hover:from-primary-50 hover:to-indigo-50 border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer"
                    >
                      <div className={`flex-shrink-0 w-10 h-10 bg-gradient-to-br ${value.color} rounded-lg flex items-center justify-center shadow-md group-hover:scale-125 group-hover:rotate-12 transition-all duration-300`}>
                        <span className="text-xl">{value.icon}</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-1">{value.title}</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">{value.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
        </div>
    </section>
);
}

export default About;
