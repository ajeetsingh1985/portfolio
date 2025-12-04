import { useState, useRef, useEffect } from 'react';

const milestones = [
  {
    year: '2005 - 2010',
    title: 'Foundation & Early Career',
    company: 'Freelancer → Cybastra → Infosys Technologies',
    role: 'Junior Developer → Software Engineer → Senior Engineer',
    description:
      'Built a solid programming foundation with C/C++, then transitioned to enterprise web development for global clients.',
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
    description:
      'Successfully relocated to the U.S., architected enterprise solutions, and joined Assurant to pioneer the .NET ecosystem.',
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
    role: 'Senior Software Engineer → Technical Lead → Senior Technical Lead → Principal Software Engineer',
    description:
      'Spearheaded massive technical modernization, Azure migrations, and real-time service architecture while mentoring high-performing engineering teams.',
    technologies: [
      'ASP Classic',
      'VB.Net',
      'WCF',
      'C#',
      '.NET Framework',
      '.NET Core',
      'Azure App Services',
      'Azure SQL',
      'Azure Functions',
      'Cosmos DB',
      'API Management',
      'Service Bus',
      'Event Grid',
      'Azure DevOps',
      'Application Insights',
      'SQL Server'
    ],
    achievements: [
      'Modernized legacy systems (CVision, Warehouse Application, Buyer’s Remorse)',
      'Architected migration from monolith to microservices (+40% performance)',
      'Delivered 99.9% reliability during the Azure cloud transformation',
      'Implemented CI/CD automation and championed DevOps culture',
      'Promoted to full-time Technical Lead (2020) and led Status Service architecture',
      'Mentored high-performing .NET teams with a 30% productivity boost',
      'Established enterprise best practices around cloud-native patterns'
    ]
  }
];

function CareerTimeline() {
  const [selectedMilestone, setSelectedMilestone] = useState(null);
  const detailPanelRef = useRef(null);

  useEffect(() => {
    if (selectedMilestone && detailPanelRef.current) {
      setTimeout(() => {
        detailPanelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [selectedMilestone]);

  return (
    <section
      id="career"
      className="section-container bg-gradient-to-br from-gray-50 via-white to-primary-50 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}
        ></div>
      </div>

      <div className="absolute top-20 right-10 w-64 h-64 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="relative z-10">
        {/* Hero Stats Banner */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="relative bg-gradient-to-br from-primary-600 via-indigo-600 to-purple-600 rounded-3xl shadow-2xl overflow-hidden p-8 md:p-12">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                backgroundSize: '40px 40px'
              }}></div>
            </div>
            
            <div className="relative">
              <div className="text-center mb-8">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">Career Journey</h2>
                <p className="text-primary-100 text-lg">20 years of technical excellence • C/C++ to Cloud-Native Azure</p>
              </div>

              <div className="grid grid-cols-3 gap-4 md:gap-8 mb-8">
                {[
                  { value: '20+', label: 'Years', icon: '🚀', color: 'from-yellow-400 to-orange-500' },
                  { value: '50+', label: 'Projects', icon: '💡', color: 'from-green-400 to-emerald-500' },
                  { value: '15+', label: 'Teams', icon: '👥', color: 'from-blue-400 to-cyan-500' }
                ].map((stat, idx) => (
                  <div key={idx} className="text-center group">
                    <div className="text-4xl md:text-5xl mb-2 group-hover:scale-125 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    <div className={`text-3xl md:text-4xl font-bold text-white mb-1 group-hover:scale-110 transition-transform`}>
                      {stat.value}
                    </div>
                    <div className="text-sm md:text-base text-primary-100 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Career Arc Visualization */}
              <div className="relative h-24 flex items-end justify-between px-4">
                <div className="absolute inset-x-0 bottom-8 h-0.5 bg-white/20"></div>
                {milestones.map((milestone, idx) => (
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

        <div className="max-w-6xl mx-auto space-y-10">
          <div className="relative pl-12 md:pl-20">
            <div className="absolute left-8 top-10 bottom-10 w-1 rounded-full bg-gradient-to-b from-primary-500 to-indigo-500 opacity-80"></div>
            <div className="space-y-8">
              {milestones.map((milestone) => (
                <button
                  key={milestone.year}
                  type="button"
                  onClick={() => setSelectedMilestone(milestone)}
                  className={`relative w-full text-left flex flex-col gap-3 rounded-3xl border p-6 bg-white/90 backdrop-blur-sm shadow-lg border-gray-100 transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 ${
                    selectedMilestone?.year === milestone.year ? 'border-primary-400 shadow-primary-400/30 scale-[1.01]' : 'hover:border-primary-300 hover:shadow-xl'
                  }`}
                >
                  <div className="absolute -left-5 top-6 h-4 w-4 rounded-full bg-white border-2 border-primary-500 shadow-lg"></div>
                  <div className="flex flex-col gap-1">
                    <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.35em] text-primary-500">
                      <span>{milestone.year}</span>
                      <span className="text-gray-400">•</span>
                      <span>{milestone.company.split(' → ').pop()}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{milestone.title}</h3>
                    <p className="text-sm font-semibold text-gray-600">{milestone.role}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{milestone.description}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {selectedMilestone && (
            <div ref={detailPanelRef} className="rounded-3xl border border-gray-200 bg-white/90 backdrop-blur-sm px-8 py-10 shadow-2xl scroll-mt-20">
              <div className="flex items-start justify-between mb-6">
                <p className="text-xs uppercase tracking-[0.4em] text-gray-400">Detailed View</p>
                <button
                  onClick={() => setSelectedMilestone(null)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Close detail panel"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="flex flex-col gap-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.35em] text-primary-500 mb-3">
                    <span>{selectedMilestone.year}</span>
                    <span className="text-gray-400">•</span>
                    <span>{selectedMilestone.company.split(' → ').pop()}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{selectedMilestone.title}</h3>
                  <p className="text-sm font-semibold text-gray-600 mb-4">{selectedMilestone.role}</p>
                  <p className="text-gray-700 leading-relaxed">{selectedMilestone.description}</p>
                </div>
              </div>

              <div className="mt-10 grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedMilestone.technologies.map((tech, idx) => (
                      <span key={idx} className="text-xs font-semibold text-gray-700 bg-gray-100 px-3 py-1 rounded-full border border-gray-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-3">Key Wins</h4>
                  <ul className="space-y-3 text-sm text-gray-600">
                    {selectedMilestone.achievements.map((achievement, idx) => (
                      <li key={idx} className="relative pl-6">
                        <span className="absolute left-0 top-1 w-4 h-4 rounded-full bg-primary-500/20 border border-primary-500"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default CareerTimeline;
