import { useState } from 'react';

/**
 * Career Timeline Component
 * Interactive timeline from 2005 to present with major milestones
 */
function CareerTimeline() {
  const [selectedMilestone, setSelectedMilestone] = useState(null);

  const milestones = [
    {
      year: '2005 - 2010',
      title: 'Foundation & Early Career',
      company: 'Freelancer → Cybastra → Infosys Technologies',
      role: 'Junior Developer → Software Engineer → Senior Engineer',
      description: 'Built strong programming foundation with C/C++, progressed to enterprise application development on major projects for global clients.',
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
      company: 'TCS → NetSmartz → Assurant',
      role: 'Senior Software Engineer → Tech Lead → Application Architect',
      description: 'Successfully relocated to USA, architected enterprise solutions, and joined Assurant to pioneer .NET ecosystem adoption.',
      technologies: ['.NET Framework', 'C#', 'ASP.NET MVC', 'SQL Server', 'WCF', 'Windows Services', 'IIS'],
      achievements: [
        'Led complex system architecture for financial services',
        'Successfully transitioned from offshore to US market',
        'Established .NET development best practices at Assurant'
      ]
    },
    {
      year: '2014 - 2021',
      title: 'Senior Technical Leadership',
      company: 'Assurant Inc.',
      role: 'Senior Software Engineer → Technical Lead',
      description: 'Drove technical excellence and cloud transformation, leading teams through Azure migration and microservices architecture adoption.',
      technologies: ['.NET Core', 'C#', 'Azure App Services', 'Azure SQL', 'Azure Functions', 'API Management', 'Service Bus', 'Azure DevOps'],
      achievements: [
        'Architected migration from monolith to microservices (40% performance gain)',
        'Led complete Azure cloud transformation',
        'Established CI/CD pipelines and DevOps culture'
      ]
    },
    {
      year: '2021 - Present',
      title: 'Principal Software Engineer',
      company: 'Assurant Inc.',
      role: 'Principal Software Engineer',
      description: 'Leading cloud-native architecture with Azure serverless technologies, driving database optimization, and mentoring high-performing engineering teams.',
      technologies: ['C#', 'Azure Functions', 'Cosmos DB', 'Azure SQL', 'APIM', 'Event Grid', 'Azure Storage', 'Azure Monitor', 'Application Insights', 'Azure Kubernetes (AKS)'],
      achievements: [
        'Architected real-time Status Service using serverless (Azure Functions + Event Grid)',
        'Achieved 50%+ database performance improvement (SQL + Cosmos optimization)',
        'Built and mentored 3 high-performing .NET teams (30% productivity increase)',
        'Established cloud-native patterns and enterprise-wide best practices'
      ]
    }
  ];

  return (
    <section id="career" className="section-container bg-gradient-to-br from-gray-50 via-white to-primary-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}></div>
      </div>

      {/* Floating orbs decoration */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      
      <div className="relative z-10">
        <div className="text-center mb-4">
          <div className="inline-block">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary-600"></div>
              <h2 className="section-title mb-0">Career Journey</h2>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary-600"></div>
            </div>
          </div>
        </div>
        <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto text-lg">
          20 years from C/C++ to Cloud • Microsoft Stack Expert • Principal Engineer
        </p>

      {/* Modern Interactive Timeline Visualization */}
      <div className="max-w-7xl mx-auto mb-16 relative" id="career-timeline-top">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        {/* Year markers for desktop - Modern card style */}
        <div className="hidden lg:grid grid-cols-4 gap-6 mb-12 px-4 relative z-10">
          {milestones.map((milestone, index) => (
            <button
              key={index}
              onClick={() => {
                setSelectedMilestone(milestone);
                setTimeout(() => {
                  document.getElementById(`milestone-${index}`)?.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'center' 
                  });
                }, 100);
              }}
              className={`group relative transition-all duration-500 transform ${
                selectedMilestone?.year === milestone.year
                  ? 'scale-105 z-20'
                  : 'hover:scale-105 hover:z-10'
              }`}
            >
              {/* Connection line to next milestone */}
              {index < milestones.length - 1 && (
                <div className={`absolute top-12 left-full w-full h-0.5 transition-all duration-500 ${
                  selectedMilestone && milestones.findIndex(m => m.year === selectedMilestone.year) >= index
                    ? 'bg-gradient-to-r from-primary-600 to-indigo-600'
                    : 'bg-gray-300'
                }`}>
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-primary-600 rounded-full"></div>
                </div>
              )}

              {/* Modern card design */}
              <div className={`relative bg-white rounded-2xl p-4 shadow-lg transition-all duration-500 ${
                selectedMilestone?.year === milestone.year
                  ? 'shadow-2xl border-2 border-primary-500'
                  : 'border border-gray-200 hover:shadow-xl hover:border-primary-300'
              }`}>
                {/* Year badge */}
                <div className={`mx-auto w-16 h-16 rounded-xl flex items-center justify-center font-bold text-base mb-3 relative overflow-hidden ${
                  selectedMilestone?.year === milestone.year
                    ? 'bg-gradient-to-br from-primary-600 to-indigo-600 text-white shadow-lg'
                    : 'bg-gradient-to-br from-primary-50 to-indigo-50 text-primary-700 group-hover:from-primary-100 group-hover:to-indigo-100'
                }`}>
                  {milestone.year.includes('Present') ? (
                    <div className="text-center relative z-10">
                      <div className="text-sm leading-tight">{milestone.year.split('-')[0].trim()}</div>
                      <div className="text-[9px] font-normal opacity-90">Now</div>
                    </div>
                  ) : milestone.year.includes('-') ? (
                    <div className="text-center relative z-10">
                      <div className="text-[11px] leading-tight font-semibold">{milestone.year.replace(' - ', '\n')}</div>
                    </div>
                  ) : (
                    <span className="relative z-10">{milestone.year}</span>
                  )}
                  
                  {/* Animated background */}
                  {selectedMilestone?.year === milestone.year && (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-indigo-400 animate-pulse opacity-50"></div>
                      <div className="absolute -inset-1 bg-primary-500 rounded-xl blur opacity-30 animate-ping"></div>
                    </>
                  )}
                </div>

                {/* Title with truncation */}
                <div className="text-[11px] font-bold text-gray-800 text-center leading-tight min-h-[2.5rem] px-1">
                  {milestone.title}
                </div>

                {/* Role indicator dot */}
                <div className="flex justify-center mt-2">
                  <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    selectedMilestone?.year === milestone.year
                      ? 'bg-primary-600 scale-150'
                      : 'bg-gray-400 group-hover:bg-primary-400'
                  }`}></div>
                </div>

                {/* Hover tooltip */}
                <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs py-2 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-30">
                  {milestone.role}
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Mobile timeline - Vertical compact design */}
        <div className="lg:hidden space-y-3 px-4">
          {milestones.map((milestone, index) => (
            <button
              key={index}
              onClick={() => {
                setSelectedMilestone(milestone);
                setTimeout(() => {
                  document.getElementById(`milestone-${index}`)?.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'center' 
                  });
                }, 100);
              }}
              className={`w-full flex items-center gap-4 bg-white rounded-xl p-4 shadow-md transition-all duration-300 ${
                selectedMilestone?.year === milestone.year
                  ? 'ring-2 ring-primary-500 shadow-xl'
                  : 'hover:shadow-lg'
              }`}
            >
              <div className={`w-14 h-14 flex-shrink-0 rounded-lg flex items-center justify-center font-bold text-sm ${
                selectedMilestone?.year === milestone.year
                  ? 'bg-gradient-to-br from-primary-600 to-indigo-600 text-white'
                  : 'bg-gradient-to-br from-primary-50 to-indigo-50 text-primary-700'
              }`}>
                {milestone.year.split('-')[0].trim()}
              </div>
              <div className="flex-1 text-left">
                <div className="font-bold text-sm text-gray-800">{milestone.title}</div>
                <div className="text-xs text-gray-600">{milestone.company}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Detailed Timeline Cards */}
      <div className="max-w-6xl mx-auto space-y-6">
        {milestones.map((milestone, index) => (
          <div
            key={index}
            id={`milestone-${index}`}
            className={`group relative bg-white rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 scroll-mt-20 ${
              selectedMilestone?.year === milestone.year
                ? 'ring-2 ring-primary-500 shadow-2xl scale-[1.02]'
                : 'shadow-md hover:shadow-2xl hover:scale-[1.01]'
            }`}
            onClick={() => setSelectedMilestone(milestone)}
          >
            {/* Gradient border effect */}
            <div className={`absolute inset-0 bg-gradient-to-r from-primary-500 via-indigo-500 to-purple-500 opacity-0 transition-opacity duration-500 ${
              selectedMilestone?.year === milestone.year ? 'opacity-100' : 'group-hover:opacity-50'
            }`} style={{padding: '2px'}}>
              <div className="absolute inset-[2px] bg-white rounded-2xl"></div>
            </div>

            <div className="relative flex flex-col md:flex-row gap-6 p-8">
              {/* Year Badge - Enhanced */}
              <div className="flex-shrink-0">
                <div className="relative w-28 h-28 rounded-2xl bg-gradient-to-br from-primary-600 via-primary-500 to-indigo-600 shadow-2xl flex flex-col items-center justify-center text-white overflow-hidden group-hover:scale-110 transition-transform duration-500">
                  {/* Animated background shine */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  
                  <span className="text-3xl font-bold relative z-10">{milestone.year.split('-')[0]}</span>
                  {milestone.year.includes('Present') && (
                    <span className="text-xs font-medium relative z-10 bg-white/20 px-2 py-0.5 rounded-full mt-1">Present</span>
                  )}
                  
                  {/* Corner decoration */}
                  <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-white/40 rounded-tr"></div>
                  <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-white/40 rounded-bl"></div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 relative">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                  <div className="flex-1">
                    {/* Company badge */}
                    <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-xs font-semibold mb-3 border border-primary-200">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full animate-pulse"></div>
                      {milestone.company}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                      {milestone.title}
                    </h3>
                    <h4 className="text-lg font-semibold bg-gradient-to-r from-primary-600 to-indigo-600 bg-clip-text text-transparent mb-3">
                      {milestone.role}
                    </h4>
                  </div>
                  
                  {/* Back to Top Button - Modern */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      document.getElementById('career-timeline-top')?.scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'start' 
                      });
                    }}
                    className="flex-shrink-0 group/btn flex items-center gap-2 bg-gray-50 hover:bg-primary-50 text-primary-600 hover:text-primary-700 px-4 py-2 rounded-xl font-semibold text-sm transition-all duration-300 border border-gray-200 hover:border-primary-300 hover:shadow-md"
                  >
                    <span className="group-hover/btn:-translate-y-0.5 transition-transform">↑</span>
                    <span>Timeline</span>
                  </button>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6">{milestone.description}</p>

                {/* Technologies - Modern pills */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-px flex-1 bg-gradient-to-r from-primary-200 to-transparent"></div>
                    <h5 className="text-xs font-bold text-gray-500 uppercase tracking-wider">Tech Stack</h5>
                    <div className="h-px flex-1 bg-gradient-to-l from-primary-200 to-transparent"></div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {milestone.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="group/tech relative bg-gradient-to-r from-primary-50 to-indigo-50 text-primary-700 px-4 py-2 rounded-lg text-sm font-semibold border border-primary-200 hover:border-primary-400 hover:shadow-md transition-all duration-300 cursor-default"
                      >
                        <span className="relative z-10">{tech}</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-primary-100 to-indigo-100 rounded-lg opacity-0 group-hover/tech:opacity-100 transition-opacity"></div>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements - Modern list */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-px flex-1 bg-gradient-to-r from-primary-200 to-transparent"></div>
                    <h5 className="text-xs font-bold text-gray-500 uppercase tracking-wider">Key Wins</h5>
                    <div className="h-px flex-1 bg-gradient-to-l from-primary-200 to-transparent"></div>
                  </div>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {milestone.achievements.map((achievement, idx) => (
                      <li key={idx} className="group/achievement flex items-start gap-3 bg-gray-50 p-3 rounded-xl hover:bg-primary-50 transition-colors">
                        <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-primary-500 to-indigo-500 rounded-lg flex items-center justify-center text-white text-xs font-bold shadow-sm group-hover/achievement:scale-110 transition-transform">
                          ✓
                        </div>
                        <span className="text-gray-700 text-sm leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Career Summary - Modern Stats */}
      <div className="mt-20 max-w-5xl mx-auto relative">
        {/* Glassmorphism card */}
        <div className="relative bg-gradient-to-br from-primary-600 via-primary-500 to-indigo-600 rounded-3xl shadow-2xl overflow-hidden">
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}></div>
          </div>
          
          {/* Content */}
          <div className="relative p-10">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-2">Career at a Glance</h3>
              <p className="text-primary-100">Achievements that define excellence</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { value: '20+', label: 'Years Experience', icon: '🚀' },
                { value: '50+', label: 'Projects Delivered', icon: '💡' },
                { value: '15+', label: 'Teams member Mentored', icon: '👥' }
              ].map((stat, idx) => (
                <div key={idx} className="relative group">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                    <div className="text-5xl mb-3 filter grayscale-0 group-hover:scale-110 transition-transform">{stat.icon}</div>
                    <div className="text-5xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-primary-100 font-medium">{stat.label}</div>
                  </div>
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-white/5 rounded-2xl blur-xl group-hover:bg-white/10 transition-all"></div>
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

export default CareerTimeline;
