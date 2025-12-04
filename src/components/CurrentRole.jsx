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

      {/* 2025 Priorities */}
      <div className="max-w-5xl mx-auto mb-12 relative z-10">
        <div className="bg-gradient-to-r from-primary-600 to-indigo-600 text-white p-8 rounded-xl shadow-xl">
          <h3 className="text-3xl font-bold mb-2 text-center">2025 Strategic Roadmap</h3>
          <p className="text-center text-primary-100 mb-8">Transformative objectives driving organizational excellence</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-4 text-primary-100 flex items-center gap-2">
                <span>🎯</span>
                <span>Technical Excellence</span>
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-3 text-green-300">✓</span>
                  <span>Deliver enterprise Status Service with 99.9% uptime SLA guarantee</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-green-300">✓</span>
                  <span>Achieve 70% database performance gains through advanced optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-green-300">✓</span>
                  <span>Deploy AI-driven monitoring with predictive incident prevention</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-green-300">✓</span>
                  <span>Optimize Azure infrastructure reducing operational costs by 40%</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-4 text-primary-100 flex items-center gap-2">
                <span>👥</span>
                <span>Team & Culture</span>
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-3 text-green-300">✓</span>
                  <span>Scale team from 8 to 20+ high-performing engineers</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-green-300">✓</span>
                  <span>Establish Center of Excellence for database optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-green-300">✓</span>
                  <span>Launch internal mentorship program for junior engineers</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-green-300">✓</span>
                  <span>Foster innovation culture with monthly hackathons</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Strategic Initiatives */}
      <div className="max-w-6xl mx-auto relative z-10">
        <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Strategic Initiatives</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card bg-gradient-to-br from-blue-50 to-indigo-50 border-t-4 border-blue-500 hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">🚀</div>
            <h4 className="text-lg font-bold text-gray-800 mb-3">Modernization</h4>
            <p className="text-gray-700 text-sm">
              Driving cloud-native transformation with microservices architecture, 
              containerization, and serverless technologies for scalable solutions.
            </p>
          </div>
          
          <div className="card bg-gradient-to-br from-green-50 to-emerald-50 border-t-4 border-green-500 hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">⚡</div>
            <h4 className="text-lg font-bold text-gray-800 mb-3">Performance</h4>
            <p className="text-gray-700 text-sm">
              Implementing cutting-edge optimization techniques, caching strategies, 
              and database tuning to deliver lightning-fast user experiences.
            </p>
          </div>
          
          <div className="card bg-gradient-to-br from-purple-50 to-pink-50 border-t-4 border-purple-500 hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">🎓</div>
            <h4 className="text-lg font-bold text-gray-800 mb-3">Innovation</h4>
            <p className="text-gray-700 text-sm">
              Creating a culture of continuous learning, experimentation, and 
              adoption of emerging technologies like AI/ML and advanced analytics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CurrentRole;
