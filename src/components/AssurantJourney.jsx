/**
 * Assurant Journey Component
 * Detailed view of projects and promotions at Assurant
 */
function AssurantJourney() {
  const journey = {
    startYear: 2015,
    currentYear: new Date().getFullYear(),
    totalYears: new Date().getFullYear() - 2015,
    promotions: [
      {
        year: 2020,
        title: 'Technical Lead',
        description: 'Promoted to full-time employee in recognition of outstanding technical contributions and proven leadership excellence'
      },
      {
        year: 2022,
        title: 'Principal Software Engineer',
        description: 'Elevated to principal engineer role, driving strategic technical initiatives across multiple engineering teams'
      }
    ],
    majorProjects: [
      {
        name: 'Legacy System Modernization',
        period: '2014-2017',
        description: 'Spearheaded comprehensive modernization initiatives including Warehouse Application optimization (query tuning for faster page rendering), Asset Recovery, CVision platform enhancements (new features and maintenance), and Buyer\'s Remorse implementation—a strategic initiative that established deep domain expertise and significantly improved operational efficiency.',
        impact: [
          'Reduced deployment time through streamlined processes',
          'Dramatically improved system scalability and performance',
          'Enhanced code maintainability and accelerated developer productivity'
        ],
        technologies: ['ASP Classic', 'VB.Net', 'C#', 'ASP.Net', 'WCF', 'SQL Server']
      },
      {
        name: 'Azure Cloud Transformation',
        period: '2018-2021',
        description: 'Helped team in end-to-end migration of mission-critical business applications to Microsoft Azure platform. Orchestrated seamless execution and ongoing support while maintaining zero downtime. Collaborated cross-functionally to proactively resolve technical challenges and implement enterprise-grade best practices for scalability, reliability, and security.',
        impact: [
          'Achieved reduction in infrastructure operational costs',
          'Delivered high system reliability with enhanced disaster recovery',
          'Architected event-driven microservices with asynchronous messaging'
        ],
        technologies: ['Azure App Services', 'Azure Functions', 'Azure Storage', 'Event Grid', 'Cosmos DB']
      },
      {
        name: 'Enterprise Status Service Platform',
        period: '2022-Present',
        description: 'Architecting and spearheading development of next-generation Status Service platform leveraging serverless architecture. Delivering enterprise-grade real-time monitoring, intelligent alerting, and comprehensive system observability across distributed microservices ecosystem.',
        impact: [
          'Deployed real-time integration framework connecting 10+ external systems',
          'Accelerated incident detection and response time by 40% through proactive monitoring',
          'Enhanced system-wide observability with centralized telemetry and analytics',
          'Reduced operational overhead by 50% with automated health monitoring'
        ],
        technologies: ['C#', '.NET Core', 'Azure Functions', 'Cosmos DB', 'Event Grid', 'Application Insights']
      }
    ]
  };

  return (
    <section id="assurant" className="section-container bg-gradient-to-b from-white via-indigo-50 to-white">
      <h2 className="section-title">Assurant Journey</h2>
      <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
        {journey.totalYears}+ years of continuous growth, technical innovation, and leadership excellence at Assurant Inc.
      </p>

      {/* Journey Overview */}
      <div className="max-w-5xl mx-auto mb-12">
        <div className="bg-gradient-to-r from-primary-600 to-indigo-600 text-white p-8 rounded-xl shadow-2xl">
          <h3 className="text-2xl font-bold mb-8 text-center">Career Progression at Assurant</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {journey.promotions.map((promotion, index) => (
              <div key={index} className="relative bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                    <span className="text-3xl font-bold">{promotion.year}</span>
                  </div>
                  <div className="text-xl font-bold mb-3">{promotion.title}</div>
                  <div className="text-sm text-primary-100 leading-relaxed">{promotion.description}</div>
                </div>
                {index < journey.promotions.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-white/40 text-2xl">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Major Projects */}
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary-600"></div>
              <h3 className="text-3xl font-bold text-gray-800">Major Projects & Initiatives</h3>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary-600"></div>
            </div>
          </div>
          <p className="text-gray-600 mt-2">Transformative initiatives driving business value</p>
        </div>
        
        <div className="space-y-6">
          {journey.majorProjects.map((project, index) => (
            <div 
              key={index} 
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]"
            >
              {/* Gradient accent border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-indigo-500 to-purple-500"></div>
              
              <div className="p-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform">
                        {index + 1}
                      </div>
                      <h4 className="text-2xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                        {project.name}
                      </h4>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{project.description}</p>
                  </div>
                  
                  <div className="flex-shrink-0">
                    <span className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-50 to-indigo-50 text-primary-700 px-4 py-2 rounded-full text-sm font-bold border-2 border-primary-200">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {project.period}
                    </span>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Technologies */}
                  <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-5 rounded-xl border border-indigo-100">
                    <div className="flex items-center gap-2 mb-4">
                      <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                      <h5 className="text-sm font-bold text-indigo-900 uppercase tracking-wider">Tech Stack</h5>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="group/tech relative bg-white text-indigo-700 px-3 py-1.5 rounded-lg text-xs font-semibold border border-indigo-200 hover:border-indigo-400 hover:shadow-md transition-all cursor-default"
                        >
                          <span className="relative z-10">{tech}</span>
                          <div className="absolute inset-0 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg opacity-0 group-hover/tech:opacity-100 transition-opacity"></div>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Impact */}
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-xl border border-green-100">
                    <div className="flex items-center gap-2 mb-4">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                      <h5 className="text-sm font-bold text-green-900 uppercase tracking-wider">Business Impact</h5>
                    </div>
                    <ul className="space-y-2">
                      {project.impact.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 group/item">
                          <div className="flex-shrink-0 w-5 h-5 bg-gradient-to-br from-green-500 to-emerald-600 rounded-md flex items-center justify-center text-white text-xs font-bold mt-0.5 group-hover/item:scale-110 transition-transform">
                            ✓
                          </div>
                          <span className="text-sm text-green-800 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Leadership Impact & Individual Contributions */}
      <div className="mt-12 max-w-5xl mx-auto">
        <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-primary-100">
          {/* Gradient accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-indigo-500 to-purple-500"></div>
          
          <div className="p-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3 mb-3">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-indigo-600 rounded-2xl flex items-center justify-center text-2xl shadow-lg">
                  🎯
                </div>
                <h3 className="text-2xl font-black bg-gradient-to-r from-gray-900 to-primary-600 bg-clip-text text-transparent">
                  Leadership Excellence & Technical Impact
                </h3>
              </div>
              <p className="text-gray-600">Leading teams while driving hands-on technical innovation</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Senior Engineering Leadership */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border-2 border-blue-200 group-hover:border-blue-400 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-2xl shadow-md">
                      👥
                    </div>
                    <h4 className="text-lg font-bold text-gray-900">Senior Engineering Leadership</h4>
                  </div>
                  <ul className="space-y-3 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="flex-shrink-0 w-5 h-5 bg-blue-500 rounded-md flex items-center justify-center text-white text-xs mt-0.5">✓</span>
                      <span><strong>Lead engineering teams of 10+ developers</strong> across multiple projects, providing technical direction and mentorship</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="flex-shrink-0 w-5 h-5 bg-blue-500 rounded-md flex items-center justify-center text-white text-xs mt-0.5">✓</span>
                      <span><strong>Recruited and onboarded senior engineers,</strong> fostering culture of excellence and continuous improvement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="flex-shrink-0 w-5 h-5 bg-blue-500 rounded-md flex items-center justify-center text-white text-xs mt-0.5">✓</span>
                      <span><strong>Drive sprint planning and Agile ceremonies,</strong> ensuring alignment with business objectives and technical roadmap</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="flex-shrink-0 w-5 h-5 bg-blue-500 rounded-md flex items-center justify-center text-white text-xs mt-0.5">✓</span>
                      <span><strong>Established engineering standards and best practices</strong> adopted across organization-wide development teams</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="flex-shrink-0 w-5 h-5 bg-blue-500 rounded-md flex items-center justify-center text-white text-xs mt-0.5">✓</span>
                      <span><strong>Conduct performance reviews and career development</strong> for team members, accelerating their technical growth</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Individual Contributor Excellence */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                <div className="relative bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border-2 border-purple-200 group-hover:border-purple-400 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center text-2xl shadow-md">
                      💻
                    </div>
                    <h4 className="text-lg font-bold text-gray-900">Individual Contributor Impact</h4>
                  </div>
                  <ul className="space-y-3 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="flex-shrink-0 w-5 h-5 bg-purple-500 rounded-md flex items-center justify-center text-white text-xs mt-0.5">✓</span>
                      <span><strong>Hands-on architect and developer</strong> designing and implementing critical enterprise systems and microservices</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="flex-shrink-0 w-5 h-5 bg-purple-500 rounded-md flex items-center justify-center text-white text-xs mt-0.5">✓</span>
                      <span><strong>Write production code daily,</strong> contributing 20-30% hands-on development while leading strategic initiatives</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="flex-shrink-0 w-5 h-5 bg-purple-500 rounded-md flex items-center justify-center text-white text-xs mt-0.5">✓</span>
                      <span><strong>Pioneered Azure cloud migration and serverless architecture,</strong> establishing patterns for enterprise adoption</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="flex-shrink-0 w-5 h-5 bg-purple-500 rounded-md flex items-center justify-center text-white text-xs mt-0.5">✓</span>
                      <span><strong>Conduct rigorous code reviews and pair programming,</strong> ensuring architectural consistency and knowledge transfer</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="flex-shrink-0 w-5 h-5 bg-purple-500 rounded-md flex items-center justify-center text-white text-xs mt-0.5">✓</span>
                      <span><strong>Resolve complex production issues and performance bottlenecks,</strong> maintaining 99.9% system reliability</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Strategic Vision */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 rounded-2xl p-6 border-2 border-orange-200 group-hover:border-orange-400 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center text-2xl shadow-md">
                    🚀
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">Strategic Vision & Future Goals</h4>
                </div>
                <div className="prose prose-sm max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-3">
                    <strong>Aspiring to elevate technical leadership on high-profile, enterprise-scale initiatives</strong> that drive organizational transformation. 
                    Focused on expanding influence as a <strong>Staff/Principal Engineer or Engineering Manager</strong> leading cross-functional teams 
                    of 15-20+ engineers on mission-critical systems.
                  </p>
                  <div className="grid md:grid-cols-3 gap-3 mt-4">
                    <div className="bg-white p-3 rounded-lg border border-orange-200">
                      <div className="font-bold text-orange-700 text-sm mb-1">🎯 Technical Strategy</div>
                      <div className="text-xs text-gray-600">Define technology roadmap and architectural vision for enterprise platforms</div>
                    </div>
                    <div className="bg-white p-3 rounded-lg border border-red-200">
                      <div className="font-bold text-red-700 text-sm mb-1">👔 Executive Influence</div>
                      <div className="text-xs text-gray-600">Partner with C-suite on technical decisions driving business outcomes</div>
                    </div>
                    <div className="bg-white p-3 rounded-lg border border-pink-200">
                      <div className="font-bold text-pink-700 text-sm mb-1">🌟 Team Scaling</div>
                      <div className="text-xs text-gray-600">Build and mentor engineering organizations exceeding 20+ members</div>
                    </div>
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

export default AssurantJourney;
