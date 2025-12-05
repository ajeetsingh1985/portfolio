import { useState, useRef, useEffect } from 'react';

/**
 * Career Evolution Component
 * Unified view of entire career journey with expandable Assurant section and Strategic Initiatives
 */
function CareerEvolution() {
  const [selectedMilestone, setSelectedMilestone] = useState(null);
  const [expandedSection, setExpandedSection] = useState(null);
  const detailPanelRef = useRef(null);

  useEffect(() => {
    if (selectedMilestone && detailPanelRef.current) {
      setTimeout(() => {
        detailPanelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [selectedMilestone]);

  const milestones = [
    {
      year: '2005 - 2010',
      title: 'Foundation & Early Career',
      company: 'Freelancer → Cybastra → Infosys Technologies',
      role: 'Junior Developer → Software Engineer → Senior Engineer',
      description: 'Built a solid programming foundation with C/C++, then transitioned to enterprise web development for global clients.',
      technologies: ['C', 'C++', 'VB.Net', 'ASP.Net', 'SQL Server', 'Web Services'],
      achievements: [
        'Delivered enterprise solutions for Fortune 500 clients',
        'Mastered full software development lifecycle',
        'Transitioned from systems programming to enterprise web development'
      ]
    },
    {
      year: '2010 - 2014',
      title: 'USA Relocation & Technical Leadership',
      company: 'TCS → NetSmartz → Xerox → EY',
      role: 'Senior Software Engineer → Tech Lead → Application Architect',
      description: 'Successfully relocated to the U.S., architected enterprise solutions, and joined Assurant to pioneer the .NET ecosystem.',
      technologies: ['.NET Framework', 'C#', 'ASP.NET MVC', 'SQL Server', 'WCF', 'Windows Services', 'IIS'],
      achievements: [
        'Led complex system architecture for financial services',
        'Successfully transitioned from offshore to the U.S. market',
        'Established .NET development best practices'
      ]
    },
    {
      year: '2014 - Present',
      title: 'Senior Technical Leadership',
      company: 'Assurant Inc.',
      role: 'Senior Software Engineer → Technical Lead → Principal Software Engineer',
      description: 'Spearheaded massive technical modernization, Azure migrations, and real-time service architecture while mentoring high-performing engineering teams.',
      technologies: [
        'C#',
        '.NET Core',
        'Azure App Services',
        'Azure SQL',
        'Azure Functions',
        'Cosmos DB',
        'API Management',
        'Service Bus',
        'Event Grid',
        'Azure DevOps',
        'Application Insights'
      ],
      achievements: [
        'Enhancing the performance of modernized legacy systems',
        'Delivered reliability during Azure cloud transformation',
        'Implemented CI/CD automation and championed DevOps culture',
        'Mentored high-performing .NET teams to enhance productivity',
        'Established enterprise best practices around cloud-native patterns'
      ],
      isAssurant: true
    }
  ];

  const assurantJourney = {
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
        description: 'Spearheaded comprehensive modernization initiatives including Warehouse Application optimization, CVision platform enhancements, and Buyer\'s Remorse implementation.',
        impact: [
          'Reduced deployment time through streamlined processes',
          'Improved system scalability and performance',
          'Enhanced code maintainability and accelerated developer productivity'
        ],
        technologies: ['ASP Classic', 'VB.Net', 'WCF', 'C#', 'SQL Server']
      },
      {
        name: 'Azure Cloud Transformation',
        period: '2018-2021',
        description: 'End-to-end migration of mission-critical business applications to Microsoft Azure platform with zero downtime.',
        impact: [
          'Significant reduction in infrastructure costs',
          'Delivered high system reliability with enhanced disaster recovery capabilities',
          'Event-driven microservices architecture'
        ],
        technologies: ['Azure App Services', 'Azure Functions', 'Event Grid', 'Cosmos DB', 'Azure Storage', 'Application Insights']
      },
      {
        name: 'Enterprise Status Service Platform',
        period: '2022-Present',
        description: 'Next-generation Status Service platform leveraging serverless architecture with real-time monitoring and intelligent alerting.',
        impact: [
          'Real-time integration with 10+ external systems',
          'Improved logging for faster incident detection and response',
          'Build configurable systems for dynamic business needs'
        ],
        technologies: ['C#', '.NET Core', 'Azure Functions', 'Cosmos DB', 'Azure Storage', 'Application Insights', 'Azure API Management', 'EDI Building and Transformation']
      }
    ]
  };

  return (
    <section id="career" className="section-container bg-gradient-to-br from-gray-50 via-white to-primary-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}></div>
      </div>

      <div className="absolute top-20 right-10 w-64 h-64 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="relative z-10">
        {/* Hero Banner - Compact */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="relative bg-gradient-to-br from-primary-600 via-indigo-600 to-purple-600 rounded-2xl shadow-xl overflow-hidden p-6 md:p-8">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                backgroundSize: '40px 40px'
              }}></div>
            </div>
            
            <div className="relative">
              <div className="text-center mb-6">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Career Evolution</h2>
                <p className="text-primary-100 text-sm md:text-base">20 years of technical excellence • C/C++ to Cloud-Native Azure</p>
              </div>

              <div className="grid grid-cols-3 gap-3 md:gap-6 mb-6">
                {[
                  { value: '20+', label: 'Years', icon: '🚀', color: 'from-yellow-400 to-orange-500' },
                  { value: '50+', label: 'Projects', icon: '💡', color: 'from-green-400 to-emerald-500' },
                  { value: '15+', label: 'Teams', icon: '👥', color: 'from-blue-400 to-cyan-500' }
                ].map((stat, idx) => (
                  <div key={idx} className="text-center group">
                    <div className="text-3xl md:text-4xl mb-1 group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    <div className={`text-2xl md:text-3xl font-bold text-white mb-1 group-hover:scale-105 transition-transform`}>
                      {stat.value}
                    </div>
                    <div className="text-xs md:text-sm text-primary-100 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Career Arc Timeline */}
              <div className="relative h-16 flex items-end justify-between px-4">
                <div className="absolute inset-x-0 bottom-6 h-0.5 bg-white/20"></div>
                {milestones.map((milestone) => (
                  <button
                    key={milestone.year}
                    onClick={() => setSelectedMilestone(milestone)}
                    className="relative group z-10 flex flex-col items-center"
                  >
                    <div className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 ${
                      selectedMilestone?.year === milestone.year 
                        ? 'bg-yellow-400 ring-4 ring-yellow-400/30 scale-150' 
                        : 'bg-white/60 hover:bg-white hover:scale-125'
                    }`}></div>
                    <span className="absolute -bottom-6 text-xs md:text-sm text-white/80 group-hover:text-white whitespace-nowrap font-medium">
                      {milestone.year.split(' - ')[0]}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Track with Cards */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid gap-8">
            {milestones.map((milestone, idx) => (
              <div key={idx} className="relative">
                {/* Timeline connector line */}
                {idx < milestones.length - 1 && (
                  <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-gradient-to-b from-primary-300 to-indigo-300 transform translate-x-1/2 hidden md:block"></div>
                )}

                {/* Milestone Card */}
                <div className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 ${
                  selectedMilestone?.year === milestone.year ? 'ring-4 ring-primary-400' : ''
                }`}>
                  {/* Year Badge */}
                  <div className="absolute -left-4 top-6 md:relative md:left-0 md:top-0">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white font-bold shadow-lg">
                      <div className="text-center">
                        <div className="text-xs md:text-sm">{milestone.year.split(' - ')[0]}</div>
                        <div className="text-xs opacity-75">↓</div>
                        <div className="text-xs md:text-sm">{milestone.year.split(' - ')[1]}</div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 md:p-8 ml-16 md:ml-0">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">{milestone.title}</h3>
                        <p className="text-lg font-semibold text-primary-600 mb-1">{milestone.company}</p>
                        <p className="text-sm text-gray-600">{milestone.role}</p>
                      </div>
                      <button
                        onClick={() => setSelectedMilestone(selectedMilestone?.year === milestone.year ? null : milestone)}
                        className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-primary-500 to-indigo-600 hover:from-primary-600 hover:to-indigo-700 text-white rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg hover:scale-110 group"
                        title={selectedMilestone?.year === milestone.year ? 'Collapse' : 'Expand Details'}
                      >
                        <span className="transform transition-transform duration-300 group-hover:scale-125">
                          {selectedMilestone?.year === milestone.year ? '↑' : '↓'}
                        </span>
                      </button>
                    </div>

                    {/* Expanded Details */}
                    {selectedMilestone?.year === milestone.year && (
                      <div ref={detailPanelRef} className="mt-6 space-y-6 animate-fadeIn">
                        <p className="text-gray-700 leading-relaxed">{milestone.description}</p>

                        {/* Technologies */}
                        <div>
                          <h4 className="text-sm font-bold text-gray-700 mb-3">Technologies & Tools:</h4>
                          <div className="flex flex-wrap gap-2">
                            {milestone.technologies.map((tech, i) => (
                              <span key={i} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium border border-blue-200">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Achievements */}
                        <div>
                          <h4 className="text-sm font-bold text-gray-700 mb-3">Key Achievements:</h4>
                          <ul className="space-y-2">
                            {milestone.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start text-sm text-gray-700">
                                <span className="text-green-500 mr-2 flex-shrink-0 mt-0.5">✓</span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Assurant Deep Dive Button */}
                        {milestone.isAssurant && (
                          <button
                            onClick={() => setExpandedSection(expandedSection === 'assurant' ? null : 'assurant')}
                            className="group w-full mt-4 px-6 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 relative overflow-hidden"
                          >
                            <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                            <span className="text-2xl transform transition-transform duration-300 group-hover:rotate-180 relative z-10">
                              {expandedSection === 'assurant' ? '🔼' : '🔽'}
                            </span>
                            <span className="relative z-10">{expandedSection === 'assurant' ? 'Hide' : 'Explore'} Assurant Journey ({assurantJourney.totalYears}+ Years)</span>
                            <span className="text-xl relative z-10">🚀</span>
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Assurant Deep Dive Section */}
                {milestone.isAssurant && expandedSection === 'assurant' && selectedMilestone?.year === milestone.year && (
                  <div className="mt-8 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 shadow-xl animate-fadeIn">
                    <h3 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                      Assurant Journey Deep Dive
                    </h3>

                    {/* Promotions Timeline */}
                    <div className="mb-12">
                      <h4 className="text-xl font-bold text-gray-800 mb-6">Career Progression</h4>
                      <div className="grid md:grid-cols-2 gap-6">
                        {assurantJourney.promotions.map((promotion, i) => (
                          <div key={i} className="relative bg-white p-6 rounded-xl shadow-lg">
                            <div className="absolute -top-3 -left-3 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                              {promotion.year}
                            </div>
                            <div className="ml-6">
                              <h5 className="text-lg font-bold text-gray-800 mb-2">{promotion.title}</h5>
                              <p className="text-sm text-gray-600">{promotion.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Major Projects */}
                    <div>
                      <h4 className="text-xl font-bold text-gray-800 mb-6">Major Projects & Initiatives</h4>
                      <div className="space-y-6">
                        {assurantJourney.majorProjects.map((project, i) => (
                          <div key={i} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                            <div className="flex items-start justify-between mb-4">
                              <div className="flex-1">
                                <h5 className="text-lg font-bold text-gray-800 mb-1">{project.name}</h5>
                                <p className="text-sm text-indigo-600 font-semibold">{project.period}</p>
                              </div>
                              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl flex items-center justify-center text-2xl">
                                {i === 0 ? '🔧' : i === 1 ? '☁️' : '🚀'}
                              </div>
                            </div>
                            
                            <p className="text-sm text-gray-700 mb-4">{project.description}</p>

                            <div className="grid md:grid-cols-2 gap-4">
                              <div>
                                <h6 className="text-xs font-bold text-gray-700 mb-2">Business Impact:</h6>
                                <ul className="space-y-1">
                                  {project.impact.map((item, j) => (
                                    <li key={j} className="text-xs text-gray-600 flex items-start">
                                      <span className="text-green-500 mr-1">•</span>
                                      <span>{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <h6 className="text-xs font-bold text-gray-700 mb-2">Technologies:</h6>
                                <div className="flex flex-wrap gap-1">
                                  {project.technologies.map((tech, j) => (
                                    <span key={j} className="px-2 py-0.5 bg-indigo-50 text-indigo-700 rounded text-[10px] font-medium">
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Leadership Excellence & Individual Contributions */}
                    <div className="mt-12">
                      <h4 className="text-xl font-bold text-gray-800 mb-4 text-center">Leadership Excellence & Technical Impact</h4>
                      <p className="text-center text-gray-600 mb-6 text-sm">Leading teams while driving hands-on technical innovation</p>

                      <div className="grid md:grid-cols-2 gap-6 items-stretch">
                        {/* Senior Engineering Leadership */}
                        <div className="group relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                          <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border-2 border-blue-200 group-hover:border-blue-400 transition-all duration-300">
                            <div className="flex items-center gap-3 mb-4">
                              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-2xl shadow-md">
                                👥
                              </div>
                              <h5 className="text-lg font-bold text-gray-900">Senior Engineering Leadership</h5>
                            </div>
                            <ul className="space-y-3 text-sm text-gray-700">
                              <li className="flex items-start gap-2">
                                <span className="flex-shrink-0 w-5 h-5 bg-blue-500 rounded-md flex items-center justify-center text-white text-xs mt-0.5">✓</span>
                                <span><strong>Lead engineering teams of 10+ developers</strong> across multiple projects</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="flex-shrink-0 w-5 h-5 bg-blue-500 rounded-md flex items-center justify-center text-white text-xs mt-0.5">✓</span>
                                <span><strong>Assisted with onboarding senior engineers,</strong> fostering culture of excellence</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="flex-shrink-0 w-5 h-5 bg-blue-500 rounded-md flex items-center justify-center text-white text-xs mt-0.5">✓</span>
                                <span><strong>Drive sprint planning and Agile ceremonies</strong> aligned with business objectives</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="flex-shrink-0 w-5 h-5 bg-blue-500 rounded-md flex items-center justify-center text-white text-xs mt-0.5">✓</span>
                                <span><strong>Established engineering standards</strong> adopted organization-wide</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="flex-shrink-0 w-5 h-5 bg-blue-500 rounded-md flex items-center justify-center text-white text-xs mt-0.5">✓</span>
                                <span><strong>Conduct performance reviews and career development</strong> for team members</span>
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
                              <h5 className="text-lg font-bold text-gray-900">Individual Contributor Impact</h5>
                            </div>
                            <ul className="space-y-3 text-sm text-gray-700">
                              <li className="flex items-start gap-2">
                                <span className="flex-shrink-0 w-5 h-5 bg-purple-500 rounded-md flex items-center justify-center text-white text-xs mt-0.5">✓</span>
                                <span><strong>Hands-on architect and developer</strong> designing critical enterprise systems</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="flex-shrink-0 w-5 h-5 bg-purple-500 rounded-md flex items-center justify-center text-white text-xs mt-0.5">✓</span>
                                <span><strong>Write production code daily,</strong> contributing in hands-on development</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="flex-shrink-0 w-5 h-5 bg-purple-500 rounded-md flex items-center justify-center text-white text-xs mt-0.5">✓</span>
                                <span><strong>Pioneered Azure cloud migration</strong> and serverless architecture patterns</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="flex-shrink-0 w-5 h-5 bg-purple-500 rounded-md flex items-center justify-center text-white text-xs mt-0.5">✓</span>
                                <span><strong>Conduct rigorous code reviews</strong> ensuring architectural consistency</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="flex-shrink-0 w-5 h-5 bg-purple-500 rounded-md flex items-center justify-center text-white text-xs mt-0.5">✓</span>
                                <span><strong>Resolve complex production issues,</strong> maintaining system reliability</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Strategic Initiatives Section - Compact */}
        <div className="max-w-6xl mx-auto">
          <div className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-6 md:p-8 shadow-xl overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                backgroundSize: '30px 30px'
              }}></div>
            </div>

            <div className="relative">
              <div className="text-center mb-6">
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/60 mb-1">2025 Execution Pillars</p>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Strategic Initiatives</h3>
                <p className="text-white/80 max-w-2xl mx-auto text-sm">
                  Interconnected pillars driving organizational excellence
                </p>
              </div>

              {/* Central Impact Core - Smaller */}
              <div className="flex items-center justify-center mb-6">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-md border-2 border-white/30 flex items-center justify-center shadow-xl">
                    <div className="text-center">
                      <div className="text-3xl mb-1">🎯</div>
                      <div className="text-[10px] text-white font-bold">Strategic</div>
                      <div className="text-[9px] text-white/70">Impact</div>
                    </div>
                  </div>
                  <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-ping"></div>
                  <div className="absolute -inset-2 rounded-full border border-white/10 animate-pulse"></div>
                </div>
              </div>

              {/* Initiative Cards Grid - Compact */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { 
                    icon: '🚀', 
                    title: 'Modernization', 
                    desc: 'Cloud-native microservices, serverless architecture & containerization',
                    metrics: ['Microservices', 'Serverless', 'Containers']
                  },
                  { 
                    icon: '⚡', 
                    title: 'Performance', 
                    desc: 'Advanced caching, database optimization & lightning-fast experiences',
                    metrics: ['+70% Speed', 'Edge Cache', 'DB Tuning']
                  },
                  { 
                    icon: '🎓', 
                    title: 'Innovation', 
                    desc: 'AI/ML adoption, advanced analytics & continuous learning culture',
                    metrics: ['AI/ML', 'Analytics', 'Learning']
                  },
                  { 
                    icon: '🛡️', 
                    title: 'Reliability', 
                    desc: '99.9% SLA guarantee, chaos engineering & automated incident response',
                    metrics: ['99.9% SLA', 'Chaos Test', 'Auto-Recovery']
                  }
                ].map((initiative, idx) => (
                  <div 
                    key={idx}
                    className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 hover:bg-white/20 hover:scale-105 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-white/20 to-white/10 flex items-center justify-center text-2xl mb-3 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                      {initiative.icon}
                    </div>
                    <h4 className="font-bold text-white text-base mb-2">{initiative.title}</h4>
                    <p className="text-xs text-white/80 mb-3 leading-relaxed">{initiative.desc}</p>
                    <div className="flex flex-wrap gap-1">
                      {initiative.metrics.map((metric, i) => (
                        <span key={i} className="text-[10px] bg-white/20 text-white px-2 py-0.5 rounded-full">
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CareerEvolution;
