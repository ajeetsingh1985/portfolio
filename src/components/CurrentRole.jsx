/**
 * Current Role Component
 * Focuses on 2025 priorities and forward-looking goals
 */
function CurrentRole() {
  return (
    <section id="current-role" className="section-container relative overflow-hidden">
      {/* Modern Tech Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-indigo-50 to-purple-50 -z-10">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cpolygon fill='%233b82f6' points='120 120 60 120 90 90 120 60 120 0 120 0 60 60 0 0 0 60 30 90 60 120 120 120 '/%3E%3C/svg%3E")`,
            backgroundSize: '120px 120px'
          }}></div>
        </div>
      </div>
      
      <h2 className="section-title relative z-10">Strategic Vision</h2>
      <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto relative z-10">
        Architecting the next generation of engineering excellence and innovation at Assurant
      </p>

      {/* Strategic Initiatives - Full Width */}
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-12 shadow-2xl overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '30px 30px'
            }}></div>
          </div>

          <div className="relative">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-[0.4em] text-white/60 mb-2">2025 Execution Pillars</p>
              <h3 className="text-4xl font-bold text-white mb-4">Strategic Initiatives</h3>
              <p className="text-white/80 max-w-2xl mx-auto">
                Interconnected pillars driving organizational excellence through innovation, performance, and reliability
              </p>
            </div>

            {/* Central Impact Core */}
            <div className="flex items-center justify-center mb-12">
              <div className="relative">
                <div className="w-40 h-40 rounded-full bg-white/10 backdrop-blur-md border-2 border-white/30 flex items-center justify-center shadow-2xl">
                  <div className="text-center">
                    <div className="text-5xl mb-2">🎯</div>
                    <div className="text-sm text-white font-bold">Strategic</div>
                    <div className="text-xs text-white/70">Impact</div>
                  </div>
                </div>
                <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-ping"></div>
                <div className="absolute -inset-2 rounded-full border border-white/10 animate-pulse"></div>
              </div>
            </div>

            {/* Initiative Cards Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { 
                  icon: '🚀', 
                  title: 'Modernization', 
                  desc: 'Cloud-native microservices, serverless architecture & containerization',
                  color: 'from-blue-400 to-cyan-500',
                  metrics: ['Microservices', 'Serverless', 'Containers']
                },
                { 
                  icon: '⚡', 
                  title: 'Performance', 
                  desc: 'Advanced caching, database optimization & lightning-fast experiences',
                  color: 'from-green-400 to-emerald-500',
                  metrics: ['+70% Speed', 'Edge Cache', 'DB Tuning']
                },
                { 
                  icon: '🎓', 
                  title: 'Innovation', 
                  desc: 'AI/ML adoption, advanced analytics & continuous learning culture',
                  color: 'from-yellow-400 to-orange-500',
                  metrics: ['AI/ML', 'Analytics', 'Learning']
                },
                { 
                  icon: '🛡️', 
                  title: 'Reliability', 
                  desc: '99.9% SLA guarantee, chaos engineering & automated incident response',
                  color: 'from-purple-400 to-pink-500',
                  metrics: ['99.9% SLA', 'Chaos Test', 'Auto-Recovery']
                }
              ].map((initiative, idx) => (
                <div 
                  key={idx}
                  className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/20 hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${initiative.color} flex items-center justify-center text-4xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                    {initiative.icon}
                  </div>
                  <h4 className="font-bold text-white text-xl mb-3">{initiative.title}</h4>
                  <p className="text-sm text-white/80 mb-4 leading-relaxed">{initiative.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {initiative.metrics.map((metric, i) => (
                      <span key={i} className="text-xs bg-white/20 text-white px-2 py-1 rounded-full">
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
    </section>
  );
}

export default CurrentRole;
