/**
 * Family Highlight Component
 * Compact family showcase positioned early in the page
 */
function FamilyHighlight() {
  return (
    <section className="relative py-16 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-10 right-10 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-10 left-1/2 w-64 h-64 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="bg-gradient-to-r from-pink-50 to-purple-50 text-pink-700 font-semibold text-sm uppercase tracking-wide px-6 py-3 rounded-full border-2 border-pink-200 shadow-md">
                ❤️ Beyond the code
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              Family First
            </h2>
            <p className="text-gray-600 italic text-lg">
              Husband, father of two, forever learning
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-[1fr_400px] gap-8 items-center">
            
            {/* Left: Life Timeline Cards */}
            <div className="space-y-4">
              {[
                { 
                  year: '2012', 
                  title: 'Married', 
                  icon: '💑', 
                  gradient: 'from-pink-500 to-rose-600',
                  bgGradient: 'from-pink-50 to-rose-50',
                  desc: 'Started our journey together'
                },
                { 
                  year: '2016', 
                  title: 'Daughter Born', 
                  icon: '👧', 
                  gradient: 'from-purple-500 to-fuchsia-600',
                  bgGradient: 'from-purple-50 to-fuchsia-50',
                  desc: 'Our precious daughter arrived'
                },
                { 
                  year: '2020', 
                  title: 'Son Born', 
                  icon: '👦', 
                  gradient: 'from-blue-500 to-cyan-600',
                  bgGradient: 'from-blue-50 to-cyan-50',
                  desc: 'Family became complete'
                }
              ].map((milestone, idx) => (
                <div 
                  key={idx}
                  className={`group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer border-2 border-gray-100 hover:border-transparent overflow-hidden`}
                >
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${milestone.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  
                  <div className="relative flex items-center gap-6">
                    {/* Icon Circle */}
                    <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${milestone.gradient} rounded-2xl flex items-center justify-center text-3xl shadow-lg transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-300`}>
                      {milestone.icon}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`inline-block bg-gradient-to-r ${milestone.gradient} text-white px-3 py-1 rounded-full text-sm font-bold`}>
                          {milestone.year}
                        </span>
                        <h3 className="text-xl font-bold text-gray-900">{milestone.title}</h3>
                      </div>
                      <p className="text-gray-600 text-sm">{milestone.desc}</p>
                    </div>
                    
                    {/* Arrow indicator */}
                    <div className={`flex-shrink-0 text-2xl text-gray-300 group-hover:text-${milestone.gradient.split('-')[1]}-500 transform group-hover:translate-x-1 transition-all duration-300`}>
                      →
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Family Photo Showcase */}
            <div className="relative">
              <div className="relative bg-white rounded-3xl p-6 shadow-2xl border-4 border-white">
                {/* Decorative corners */}
                <div className="absolute -top-3 -left-3 w-24 h-24 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full blur-2xl opacity-50"></div>
                <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full blur-2xl opacity-50"></div>
                
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                  <img 
                    src="/images/IMG_0039.jpg" 
                    alt="Family" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = '<div class="flex items-center justify-center w-full h-full bg-gradient-to-br from-pink-100 to-purple-100"><span class="text-9xl">👨‍👩‍👧‍👦</span></div>';
                    }}
                  />
                </div>
                
                {/* Badge overlay */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full shadow-xl border-2 border-pink-200">
                  <div className="text-center">
                    <div className="text-2xl mb-1">👨‍👩‍👧‍👦</div>
                    <div className="text-xs font-bold text-gray-700">Family of Four</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <a 
              href="#family" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
            >
              <span>Explore Full Family Story</span>
              <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FamilyHighlight;
