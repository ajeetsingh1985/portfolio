import ImageCarousel from './ImageCarousel';

/**
 * Family Section Component
 * Displays personal life, hobbies, fun facts, and family details with photo carousel and life timeline
 */
function FamilySection() {
  // Family members data
  const familyMembers = {
    parents: {
      title: 'Parents',
      description: 'My parents are the architects of my character and the foundation of everything I have become. Their unwavering support, countless sacrifices, and unconditional love have been the driving force behind every achievement in my life. They taught me that success is not just about reaching the top, but about lifting others along the way. Their wisdom, work ethic, and moral compass continue to guide me through every decision, both personal and professional. I am forever grateful for the values they instilled, the opportunities they created, and the love they showered upon me. Everything I am today, I owe to them.',
      image: '/images/parents.JPG',
      values: ['Hard Work', 'Integrity', 'Education', 'Compassion', 'Family', 'Resilience'],
      icon: '👨‍👩'
    },
    sibling: {
      title: 'Sibling',
      name: 'Brother/Sister Name',
      role: 'Brother/Sister',
      description: 'Add description about your sibling - their personality, shared memories, your bond, and special moments together.',
      image: '/images/sibling.jpg',
      icon: '👦'
    }
  };

  const familyValues = [
    {
      title: 'Education',
      description: 'A strong emphasis on learning and continuous growth',
      icon: '📚'
    },
    {
      title: 'Hard Work',
      description: 'Dedication and perseverance in all endeavors',
      icon: '💪'
    },
    {
      title: 'Integrity',
      description: 'Honesty and strong moral principles',
      icon: '⚖️'
    },
    {
      title: 'Family Unity',
      description: 'Supporting and caring for one another',
      icon: '🤝'
    }
  ];

  // Family photos from the images folder
  const familyPhotos = [
    '/images/IMG_0039.jpg',
    '/images/familypic2.JPG',
    '/images/family56.JPG',
    '/images/holi.JPG',
    '/images/familypic21111.JPG',


    '/images/family pic 3.JPG',
    '/images/familypic21.JPG',
        '/images/family pic 1.jpg',
            '/images/familypic1.JPG',
    '/images/family pic32.JPG',
    '/images/familypic2222.jpg',


  ];



  return (
    <section id="family" className="section-container bg-gradient-to-b from-white via-purple-50 to-pink-50">
      <h2 className="section-title">Family & Personal Life</h2>
      <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
        Beyond technology - the people and passions that make life meaningful
      </p>

      {/* Family Roots - My Parents */}
      <div className="max-w-4xl mx-auto mb-16">
        <div className="text-center mb-10">
          <h3 className="text-3xl font-bold text-gray-800 mb-3">👨‍👩 My Parents</h3>
          <p className="text-gray-600">The guiding lights who shaped my character and values</p>
        </div>
        
        {/* Parents Card - Single Centered Card */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100">
          {/* Image Container with contain to fit the full image */}
          <div className="relative h-96 bg-gradient-to-br from-primary-100 to-indigo-100 overflow-hidden flex items-center justify-center p-4">
            <img 
              src={familyMembers.parents.image} 
              alt={familyMembers.parents.title}
              className="max-w-full max-h-full object-contain rounded-lg"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = `<div class="flex items-center justify-center w-full h-full"><span class="text-9xl">${familyMembers.parents.icon}</span></div>`;
              }}
            />
          </div>
          
          {/* Content */}
          <div className="p-8">
            <div className="mb-6">
              <h4 className="text-3xl font-bold text-gray-800 mb-2">{familyMembers.parents.title}</h4>
              <p className="text-lg text-primary-600 font-semibold">The foundation of who I am</p>
            </div>
            
            <p className="text-gray-700 leading-relaxed text-base mb-6">{familyMembers.parents.description}</p>
            
            {/* Values */}
            <div className="border-t border-gray-200 pt-6">
              <h5 className="text-sm font-semibold text-gray-600 mb-4 uppercase tracking-wide">Core Values They Taught Me</h5>
              <div className="flex flex-wrap gap-3">
                {familyMembers.parents.values.map((value, idx) => (
                  <span 
                    key={idx}
                    className="bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-medium border border-primary-200"
                  >
                    {value}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Family Photo Carousel */}
      <div className="max-w-5xl mx-auto mb-12">
        <div className="card bg-gradient-to-br from-primary-50 to-indigo-50 p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">👨‍👩‍👧‍👦 Family Gallery</h3>
          <p className="text-center text-gray-600 mb-8">
            Cherished moments with the people who matter most
          </p>
          
          <div className="w-full h-[500px] mb-6">
            <ImageCarousel images={familyPhotos} />
          </div>
          
          <div className="text-center bg-white p-6 rounded-lg shadow-sm">
            <p className="text-gray-700 italic">
              "The greatest legacy we can leave is not what we build in our careers, but the 
              relationships we nurture and the values we pass on to the next generation."
            </p>
          </div>
        </div>
      </div>

      {/* Life Timeline with Work-Life Balance Integration */}
      <div className="max-w-7xl mx-auto mb-12">
        <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Life's Beautiful Journey</h3>
        
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Timeline events - 3 cards side by side */}
          <div className="flex-1 grid md:grid-cols-3 gap-6 items-start">
            {/* Marriage - 2012 */}
            <div className="card hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-pink-50 to-rose-50 border-2 border-pink-200 flex flex-col h-full">
              <div className="flex items-center justify-center mb-4 h-28 flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center text-4xl shadow-lg">
                  💑
                </div>
              </div>
              <div className="text-center mb-6 flex-shrink-0 h-40">
                <span className="inline-block bg-pink-600 text-white px-4 py-1 rounded-full text-lg font-bold mb-2">
                  2012
                </span>
                <h4 className="text-2xl font-bold text-gray-800 mb-2">Got Married</h4>
                <p className="text-gray-600">
                  Started our journey together, building a life filled with love, support, and partnership
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-inner h-48 flex items-center flex-shrink-0">
                <div className="w-full h-full bg-gradient-to-br from-pink-200 to-rose-300 rounded-lg flex items-center justify-center overflow-hidden relative">
                  <img 
                    src="/images/wedding.jpg" 
                    alt="Wedding 2012"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <span className="text-6xl absolute">💍</span>
                </div>
              </div>
            </div>

            {/* Daughter Born - 2016 */}
            <div className="card hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-purple-50 to-fuchsia-50 border-2 border-purple-200 flex flex-col h-full">
              <div className="flex items-center justify-center mb-4 h-28 flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-fuchsia-600 rounded-full flex items-center justify-center text-4xl shadow-lg">
                  👧
                </div>
              </div>
              <div className="text-center mb-6 flex-shrink-0 h-40">
                <span className="inline-block bg-purple-600 text-white px-4 py-1 rounded-full text-lg font-bold mb-2">
                  2016
                </span>
                <h4 className="text-2xl font-bold text-gray-800 mb-2">Daughter Born</h4>
                <p className="text-gray-600">
                  Our precious daughter arrived, bringing immeasurable joy and a new meaning to life
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-inner h-48 flex items-center flex-shrink-0">
                <div className="w-full h-full bg-gradient-to-br from-purple-200 to-fuchsia-300 rounded-lg flex items-center justify-center overflow-hidden relative">
                  <img 
                    src="/images/daughter.jpg" 
                    alt="Daughter 2016"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <span className="text-6xl absolute">👧</span>
                </div>
              </div>
            </div>

            {/* Son Born - 2020 */}
            <div className="card hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 flex flex-col h-full">
              <div className="flex items-center justify-center mb-4 h-28 flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center text-4xl shadow-lg">
                  👦
                </div>
              </div>
              <div className="text-center mb-6 flex-shrink-0 h-40">
                <span className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-lg font-bold mb-2">
                  2020
                </span>
                <h4 className="text-2xl font-bold text-gray-800 mb-2">Son Born</h4>
                <p className="text-gray-600">
                  Our wonderful son completed our family, adding more laughter and adventure to our lives
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-inner h-48 flex items-center flex-shrink-0">
                <div className="w-full h-full bg-gradient-to-br from-blue-200 to-cyan-300 rounded-lg flex items-center justify-center overflow-hidden relative">
                  <img 
                    src="/images/son.jpg" 
                    alt="Son 2020"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <span className="text-6xl absolute">👦</span>
                </div>
              </div>
            </div>
          </div>

          {/* Work-Life Balance Card */}
          <div className="lg:w-80 flex-shrink-0">
            <div className="card bg-gradient-to-br from-green-400 via-emerald-500 to-teal-600 p-6 h-full flex flex-col justify-between relative overflow-hidden shadow-2xl">
              {/* Animated background */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute w-24 h-24 bg-white rounded-full -top-8 -left-8 animate-blob"></div>
                <div className="absolute w-32 h-32 bg-white rounded-full -bottom-10 -right-10 animate-blob animation-delay-2000"></div>
              </div>
              
              <div className="relative z-10 flex flex-col justify-between h-full">
                {/* Header */}
                <div className="text-center">
                  <div className="inline-block transform hover:rotate-180 transition-transform duration-700 cursor-pointer mb-3">
                    <div className="text-5xl drop-shadow-lg">⚖️</div>
                  </div>
                  <h4 className="text-xl font-black text-white mb-2 drop-shadow-md">Life Harmony</h4>
                  <p className="text-white/90 text-xs mb-4">Finding balance in every moment</p>
                </div>

                {/* Three Pillars - Compact Vertical */}
                <div className="space-y-3 flex-1 flex flex-col justify-center">
                  {/* Professional */}
                  <div className="bg-white/25 backdrop-blur-md rounded-xl p-3 border border-white/40 hover:bg-white/35 hover:scale-105 transition-all duration-300 group cursor-pointer">
                    <div className="flex items-center gap-2">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform">
                        💼
                      </div>
                      <div className="flex-1">
                        <h5 className="text-white font-bold text-xs mb-1">Professional</h5>
                        <p className="text-white/80 text-[10px] leading-tight">Excellence in leadership</p>
                      </div>
                    </div>
                  </div>

                  {/* Personal */}
                  <div className="bg-white/25 backdrop-blur-md rounded-xl p-3 border border-white/40 hover:bg-white/35 hover:scale-105 transition-all duration-300 group cursor-pointer">
                    <div className="flex items-center gap-2">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform">
                        🌱
                      </div>
                      <div className="flex-1">
                        <h5 className="text-white font-bold text-xs mb-1">Personal</h5>
                        <p className="text-white/80 text-[10px] leading-tight">Growth and learning</p>
                      </div>
                    </div>
                  </div>

                  {/* Family */}
                  <div className="bg-white/25 backdrop-blur-md rounded-xl p-3 border border-white/40 hover:bg-white/35 hover:scale-105 transition-all duration-300 group cursor-pointer">
                    <div className="flex items-center gap-2">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform">
                        ❤️
                      </div>
                      <div className="flex-1">
                        <h5 className="text-white font-bold text-xs mb-1">Family</h5>
                        <p className="text-white/80 text-[10px] leading-tight">Love and connection</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <div className="mt-4 bg-white/30 backdrop-blur-sm rounded-lg p-3 border border-white/50 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></div>
                  <p className="text-white text-xs font-bold italic text-center relative z-10">
                    ✨ Balance = Excellence ✨
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Beyond Work - Compact Merged Card */}
      <div className="max-w-4xl mx-auto mb-16">
        <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Beyond Work</h3>
        
        <div className="card bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-200/30 to-purple-300/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-pink-200/30 to-indigo-300/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10">
            {/* Hobbies Section - Compact */}
            <div className="mb-6 pb-6 border-b border-gray-200">
              <div className="flex items-center gap-2 mb-4">
                <div className="text-3xl">🎯</div>
                <h4 className="text-xl font-bold text-gray-800">Hobbies & Interests</h4>
              </div>
              
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-2xl">🧘</span>
                  <span className="text-sm font-semibold text-gray-800">Yoga & Wellness</span>
                </div>
                <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-2xl">✈️</span>
                  <span className="text-sm font-semibold text-gray-800">Travel</span>
                </div>
                <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-2xl">👨‍👩‍👧‍👦</span>
                  <span className="text-sm font-semibold text-gray-800">Family Time</span>
                </div>
                <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-2xl">🍳</span>
                  <span className="text-sm font-semibold text-gray-800">Cooking</span>
                </div>
                <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-2xl">📚</span>
                  <span className="text-sm font-semibold text-gray-800">Reading</span>
                </div>
                <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-2xl">🎮</span>
                  <span className="text-sm font-semibold text-gray-800">Technology Exploration</span>
                </div>
                <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-2xl">💻</span>
                  <span className="text-sm font-semibold text-gray-800">Coding & Innovation</span>
                </div>
              </div>
            </div>

            {/* Core Values Section - Compact */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="text-3xl">⭐</div>
                <h4 className="text-xl font-bold text-gray-800">Core Values</h4>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <span className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-sm hover:shadow-md transition-all hover:scale-105">
                  Family First
                </span>
                <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-sm hover:shadow-md transition-all hover:scale-105">
                  Work-Life Balance
                </span>
                <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-sm hover:shadow-md transition-all hover:scale-105">
                  Continuous Growth
                </span>
                <span className="bg-gradient-to-r from-pink-500 to-rose-600 text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-sm hover:shadow-md transition-all hover:scale-105">
                  Gratitude
                </span>
                <span className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-sm hover:shadow-md transition-all hover:scale-105">
                  Authenticity
                </span>
                <span className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-sm hover:shadow-md transition-all hover:scale-105">
                  Empathy
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

export default FamilySection;
