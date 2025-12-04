/**
 * What Excites Component
 * Showcases motivations, passions, and what drives professional enthusiasm
 */
function WhatExcites() {
  const passions = [
    {
      icon: '💡',
      title: 'Innovation & Technology',
      description: 'Pioneering cutting-edge solutions and architecting scalable systems that solve complex enterprise challenges',
      examples: [
        'Azure cloud-native architectures',
        'AI/ML-powered intelligent systems',
        'Advanced performance optimization',
        'Modern DevOps and CI/CD practices'
      ]
    },
    {
      icon: '🚀',
      title: 'Solving Complex Challenges',
      description: 'Tackling difficult technical problems that have significant business impact',
      examples: [
        'System architecture design',
        'Performance bottleneck resolution',
        'Scalability challenges',
        'Technical debt reduction'
      ]
    },
    {
      icon: '📚',
      title: 'Continuous Learning',
      description: 'Staying current with technology trends and sharing knowledge with others',
      examples: [
        'Reading technical books and articles',
        'Attending conferences and webinars',
        'Experimenting with new tools',
        'Contributing to tech communities'
      ]
    }
  ];

  const motivations = [
    {
      title: 'Impact at Scale',
      description: 'Creating solutions that positively affect millions of users and transactions',
      icon: '🌍'
    },
    {
      title: 'Technical Excellence',
      description: 'Pursuing the highest standards in code quality, architecture, and engineering practices',
      icon: '⭐'
    },
    {
      title: 'Team Growth',
      description: 'Watching team members develop their skills and advance in their careers',
      icon: '🌱'
    },
    {
      title: 'Business Value',
      description: 'Translating technical solutions into tangible business outcomes',
      icon: '💼'
    }
  ];

  const leadershipFocus = [
    'Strategic mentoring and technical coaching',
    'Building psychologically safe environments',
    'Empowering autonomous decision-making',
    'Recognizing and amplifying achievements'
  ];

  return (
    <section id="what-excites" className="section-container bg-gradient-to-b from-white to-primary-50">
      <h2 className="section-title">What Drives Me</h2>
      <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
        The core passions fueling my commitment to technology excellence and transformative leadership
      </p>

      {/* Main Passions */}
      <div className="max-w-6xl mx-auto mb-12">
        <div className="grid md:grid-cols-3 gap-6">
          {passions.map((passion, index) => (
            <div key={index} className="card hover:shadow-xl transition-all duration-300">
              <div className="text-5xl mb-4">{passion.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{passion.title}</h3>
              <p className="text-gray-600 mb-4">{passion.description}</p>
              
              <div className="bg-primary-50 p-4 rounded-lg">
                <h4 className="text-sm font-semibold text-primary-800 mb-2">Specific Interests:</h4>
                <ul className="space-y-1">
                  {passion.examples.map((example, idx) => (
                    <li key={idx} className="text-sm text-gray-700 flex items-start">
                      <span className="text-primary-600 mr-2">•</span>
                      <span>{example}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Core Motivations */}
      <div className="max-w-5xl mx-auto mb-12">
        <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Core Motivations</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {motivations.map((motivation, index) => (
            <div key={index} className="card text-center hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-4xl mb-3">{motivation.icon}</div>
              <h4 className="text-lg font-bold text-gray-800 mb-2">{motivation.title}</h4>
              <p className="text-sm text-gray-600 mb-2">{motivation.description}</p>
              {motivation.focusItems && (
                <p className="text-xs text-gray-500">
                  Focus: {motivation.focusItems.join(' • ')}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Vision Statement */}
      <div className="max-w-4xl mx-auto">
        <div className="card bg-gradient-to-r from-primary-600 to-indigo-600 text-white">
          <h3 className="text-2xl font-bold mb-4 text-center">My Vision</h3>
          <p className="text-lg text-center leading-relaxed mb-4">
            "To architect transformative software solutions that drive business value, cultivate
            cultures of innovation and technical excellence, and create lasting positive impact
            on both technology ecosystems and the people who build them."
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-xs text-white/80 mb-6">
            {leadershipFocus.map((item, index) => (
              <span key={index} className="rounded-full border border-white/30 bg-white/10 px-3 py-1">
                {item}
              </span>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg">
              <div className="text-3xl font-bold mb-2">Technology</div>
              <div className="text-sm text-primary-100">
                Building scalable, efficient, and innovative solutions
              </div>
            </div>
            <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg">
              <div className="text-3xl font-bold mb-2">People</div>
              <div className="text-sm text-primary-100">
                Developing and empowering talented engineers
              </div>
            </div>
            <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg">
              <div className="text-3xl font-bold mb-2">Impact</div>
              <div className="text-sm text-primary-100">
                Creating value for businesses and users
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quote */}
      <div className="mt-12 max-w-3xl mx-auto text-center">
        <blockquote className="text-xl italic text-gray-700 border-l-4 border-primary-500 pl-6 py-4 bg-white rounded-r-lg shadow-md">
          "Excellence in engineering isn't merely about writing code—it's about architecting 
          solutions that transform businesses, empowering teams to reach their full potential, 
          and creating systems that stand the test of time and scale."
        </blockquote>
        <p className="mt-4 text-gray-600 font-semibold">- Ajeet Singh</p>
      </div>
    </section>
  );
}

export default WhatExcites;
