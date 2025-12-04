import { useState } from 'react';

/**
 * Education Timeline Component
 * Displays academic credentials with institution information
 */
function EducationTimeline() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  const education = [
    {
      degree: 'Master of Computer Applications (MCA)',
      shortDegree: 'MCA',
      institution: 'Hemvati Nandan Bahuguna Garhwal University (HNBGU), Srinagar',
      location: 'Dehradun, Uttarakhand, India',
      year: '2005 - 2008',
      duration: '3 Years',
      description: 'Advanced studies in computer science, software engineering, and information systems.',
      achievements: [
        'Specialized in Software Engineering',
        'Focus on Database Management Systems',
        'Advanced programming and algorithms'
      ],
      icon: '🎓',
      color: 'from-purple-500 to-indigo-600',
      bgGradient: 'from-purple-50 to-indigo-50'
    },
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      shortDegree: 'BCA',
      institution: 'Kumaun University, Nainital',
      location: 'Nainital, Uttarakhand, India',
      year: '2002 - 2005',
      duration: '3 Years',
      description: 'Foundation in computer science principles, programming, and software development.',
      achievements: [
        'Strong foundation in programming',
        'Database and networking concepts',
        'Software development methodologies'
      ],
      icon: '🎓',
      color: 'from-blue-500 to-cyan-600',
      bgGradient: 'from-blue-50 to-cyan-50'
    },
    {
      degree: 'Higher Secondary Education',
      shortDegree: 'HSE',
      institution: 'Intermediate College',
      location: 'Delhi, India',
      year: '1998 - 2001',
      duration: '3 Years',
      description: 'Focused on Science and Mathematics, building analytical and problem-solving skills.',
      achievements: [
        'Science and Mathematics focus',
        'Academic excellence',
        'Foundation for technology career'
      ],
      icon: '📚',
      color: 'from-emerald-500 to-teal-600',
      bgGradient: 'from-emerald-50 to-teal-50'
    }
  ];

  return (
    <section id="education" className="section-container bg-gradient-to-b from-white to-blue-50">
      <h2 className="section-title">Education Timeline</h2>
      <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
        Academic journey that laid the foundation for a successful career in technology
      </p>

      <div className="max-w-6xl mx-auto">
        {/* Animated Connection Lines */}
        <div className="hidden md:flex items-center justify-center mb-8 gap-4">
          {education.map((item, index) => (
            <div key={index} className="flex items-center">
              <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${item.color} animate-pulse`}></div>
              {index < education.length - 1 && (
                <div className="w-16 h-0.5 bg-gradient-to-r from-gray-300 to-gray-400"></div>
              )}
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {education.map((item, index) => (
            <div 
              key={index} 
              className="relative group perspective"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Glowing background effect on hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
              
              <div className={`relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col ${
                hoveredIndex === index ? 'transform -translate-y-2 scale-105' : ''
              }`}>
                {/* Animated gradient header */}
                <div className={`relative bg-gradient-to-r ${item.color} p-6 text-white overflow-hidden`}>
                  {/* Animated background pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-full h-full" 
                         style={{
                           backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                           backgroundSize: '20px 20px'
                         }}>
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-5xl animate-bounce-slow">{item.icon}</span>
                      <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                        <span className="text-xs font-bold">{item.duration}</span>
                      </div>
                    </div>
                    
                    {/* Large degree abbreviation */}
                    <div className="text-4xl font-black mb-2 tracking-tight opacity-90">
                      {item.shortDegree}
                    </div>
                    
                    <div className="bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-lg inline-block">
                      <span className="text-sm font-semibold">{item.year}</span>
                    </div>
                  </div>

                  {/* Decorative corner */}
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
                </div>

                {/* Content section */}
                <div className={`flex-1 p-6 bg-gradient-to-br ${item.bgGradient}`}>
                  <h3 className="text-base font-bold text-gray-800 mb-2 leading-tight">
                    {item.degree}
                  </h3>
                  <h4 className="text-sm font-semibold text-gray-700 mb-2 leading-snug">
                    {item.institution}
                  </h4>
                  <p className="text-xs text-gray-600 mb-4 flex items-center gap-1">
                    <span className="text-lg">📍</span>
                    <span>{item.location}</span>
                  </p>
                  
                  {/* Expandable achievements */}
                  <div className={`space-y-2 transition-all duration-500 ${
                    hoveredIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 md:max-h-96 md:opacity-100'
                  }`}>
                    <div className="text-xs font-semibold text-gray-700 mb-2">Key Highlights:</div>
                    {item.achievements.map((achievement, idx) => (
                      <div 
                        key={idx} 
                        className="flex items-start text-xs text-gray-700 transform transition-all duration-300"
                        style={{ 
                          transitionDelay: `${idx * 50}ms`,
                          transform: hoveredIndex === index ? 'translateX(0)' : 'translateX(-10px)'
                        }}
                      >
                        <div className={`flex-shrink-0 w-5 h-5 rounded-md bg-gradient-to-br ${item.color} flex items-center justify-center mr-2 mt-0.5`}>
                          <span className="text-white text-xs">✓</span>
                        </div>
                        <span className="flex-1">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom accent bar */}
                <div className={`h-1 bg-gradient-to-r ${item.color}`}></div>
              </div>

              {/* Number badge */}
              <div className={`absolute -top-3 -left-3 w-10 h-10 rounded-full bg-gradient-to-br ${item.color} text-white flex items-center justify-center font-bold text-lg shadow-lg z-20 transition-transform duration-300 ${
                hoveredIndex === index ? 'scale-125 rotate-12' : ''
              }`}>
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Summary Box - Enhanced with Fun Facts */}
      <div className="mt-16 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Core Values Section */}
          <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden group">
            {/* Animated gradient border */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-emerald-500 opacity-75"></div>
            <div className="absolute inset-[2px] bg-white rounded-2xl"></div>
            
            <div className="relative p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center text-2xl shadow-lg transform group-hover:rotate-12 transition-transform duration-300">
                    🌟
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    Educational Foundation
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    10+ years combining formal university education with continuous self-learning in computer science.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <div className="bg-gradient-to-r from-purple-50 to-indigo-50 px-3 py-1.5 rounded-lg border border-purple-200">
                  <span className="text-xs font-semibold text-purple-700">10+ Years Learning</span>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 px-3 py-1.5 rounded-lg border border-blue-200">
                  <span className="text-xs font-semibold text-blue-700">CS Specialization</span>
                </div>
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 px-3 py-1.5 rounded-lg border border-emerald-200">
                  <span className="text-xs font-semibold text-emerald-700">Strong Foundation</span>
                </div>
              </div>
            </div>
          </div>

          {/* Fun Facts Section - Interactive Flip Cards */}
          <div className="relative bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 rounded-2xl shadow-xl overflow-hidden p-[2px]">
            <div className="bg-white rounded-2xl h-full">
              <div className="p-6 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl flex items-center justify-center text-2xl shadow-lg animate-bounce-slow">
                    🎯
                  </div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                    Fun Facts
                  </h3>
                </div>

                {/* Interactive rotating fact cards */}
                <div className="flex-1 relative">
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { icon: '☕', fact: 'Coffee Enthusiast', detail: '5+ cups daily fuel' },
                      { icon: '🌅', fact: 'Early Riser', detail: '5 AM productivity' },
                      { icon: '📚', fact: 'Lifelong Learner', detail: 'Always exploring' },
                      { icon: '🎓', fact: 'Tech Mentor', detail: '15+ engineers guided' },
                      { icon: '🌍', fact: 'Two Continents', detail: 'India → USA journey' },
                      { icon: '💻', fact: 'Code Poet', detail: 'Clean code advocate' }
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="group/card relative h-20 perspective"
                        style={{
                          animation: `fadeIn 0.5s ease-out ${idx * 0.1}s both`
                        }}
                      >
                        <div className="relative w-full h-full transition-transform duration-500 transform-gpu group-hover/card:scale-105">
                          <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 rounded-xl border-2 border-pink-200 p-3 flex flex-col items-center justify-center text-center hover:border-pink-400 transition-all duration-300 hover:shadow-lg cursor-pointer overflow-hidden">
                            {/* Shimmer effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover/card:opacity-30 transform -translate-x-full group-hover/card:translate-x-full transition-transform duration-700"></div>
                            
                            <div className="text-2xl mb-1 transform group-hover/card:scale-125 group-hover/card:rotate-12 transition-all duration-300 relative z-10">
                              {item.icon}
                            </div>
                            <div className="text-xs font-bold text-gray-800 leading-tight mb-0.5 relative z-10">
                              {item.fact}
                            </div>
                            <div className="text-[10px] text-gray-600 relative z-10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                              {item.detail}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick stats at bottom */}
                <div className="mt-4 pt-3 border-t border-gray-200 flex justify-around text-center">
                  <div>
                    <div className="text-lg font-bold text-pink-600">3</div>
                    <div className="text-[10px] text-gray-600">Degrees</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-purple-600">20+</div>
                    <div className="text-[10px] text-gray-600">Years</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-orange-600">∞</div>
                    <div className="text-[10px] text-gray-600">Learning</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EducationTimeline;
