/**
 * Family Roots Component
 * Displays family heritage - parents, grandparents, and family background
 */
function FamilyRoots() {
  const familyMembers = {
    parents: {
      title: 'Parents',
      description: 'Add description about your parents - their values, sacrifices, and the foundation they provided. Share their influence on your life and career.',
      image: '/images/parents.jpg',
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

  return (
    <section id="roots" className="section-container bg-gradient-to-b from-white via-amber-50 to-orange-50">
      <div className="text-center mb-16">
        <span className="text-primary-600 font-semibold text-sm uppercase tracking-wide">Heritage</span>
        <h2 className="section-title mt-2">Family Roots</h2>
        <p className="section-subtitle max-w-3xl mx-auto">
          The foundation that shaped who I am - values, traditions, and wisdom passed down through generations
        </p>
      </div>

      {/* Family Members Section */}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="text-center mb-10">
          <h3 className="text-3xl font-bold text-gray-800 mb-3">👨‍👩‍👦 My Family</h3>
          <p className="text-gray-600">The pillars of support and sources of unconditional love</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Parents Card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100">
            {/* Image Container */}
            <div className="relative h-80 bg-gradient-to-br from-primary-100 to-indigo-100 overflow-hidden">
              <img 
                src={familyMembers.parents.image} 
                alt={familyMembers.parents.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = `<div class="flex items-center justify-center w-full h-full"><span class="text-9xl">${familyMembers.parents.icon}</span></div>`;
                }}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              
              {/* Title overlay on image */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h4 className="text-3xl font-bold mb-1">{familyMembers.parents.title}</h4>
                <p className="text-lg text-white/90">The guiding lights</p>
              </div>
            </div>
            
            {/* Content */}
            <div className="p-6">
              <p className="text-gray-700 leading-relaxed mb-4">{familyMembers.parents.description}</p>
              
              {/* Values */}
              <div className="border-t border-gray-200 pt-4">
                <h5 className="text-sm font-semibold text-gray-600 mb-3 uppercase tracking-wide">Core Values Taught</h5>
                <div className="flex flex-wrap gap-2">
                  {familyMembers.parents.values.map((value, idx) => (
                    <span 
                      key={idx}
                      className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm font-medium border border-primary-200"
                    >
                      {value}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sibling Card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100">
            {/* Image Container */}
            <div className="relative h-80 bg-gradient-to-br from-green-100 to-teal-100 overflow-hidden">
              <img 
                src={familyMembers.sibling.image} 
                alt={familyMembers.sibling.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = `<div class="flex items-center justify-center w-full h-full"><span class="text-9xl">${familyMembers.sibling.icon}</span></div>`;
                }}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              
              {/* Name overlay on image */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h4 className="text-3xl font-bold mb-1">{familyMembers.sibling.name}</h4>
                <p className="text-lg text-white/90">{familyMembers.sibling.role}</p>
              </div>
            </div>
            
            {/* Content */}
            <div className="p-6">
              <p className="text-gray-700 leading-relaxed">{familyMembers.sibling.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Family Values Section */}
      <div className="max-w-5xl mx-auto mb-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Family Values & Traditions
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {familyValues.map((value, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 rounded-lg bg-gradient-to-br from-primary-50 to-indigo-50 border border-primary-100">
                <div className="text-4xl flex-shrink-0">{value.icon}</div>
                <div>
                  <h4 className="text-lg font-bold text-gray-800 mb-1">{value.title}</h4>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="border-t border-gray-200 pt-6">
            <blockquote className="text-center">
              <p className="text-lg text-gray-700 italic mb-3">
                "The values and principles instilled by my family have been the compass guiding my personal and professional journey. Their wisdom, sacrifices, and unconditional love shaped not just who I am, but who I aspire to be."
              </p>
              <cite className="text-primary-600 font-semibold">- Ajeet Singh</cite>
            </blockquote>
          </div>
        </div>
      </div>

      {/* Family Heritage Note */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
          <h4 className="text-lg font-semibold text-amber-900 mb-2 flex items-center">
            <span className="text-2xl mr-2">🌳</span>
            Our Family Legacy
          </h4>
          <p className="text-amber-800 leading-relaxed">
            Every family has a unique story that spans generations. The values, traditions, and 
            experiences passed down from our parents and grandparents form the foundation of who 
            we become. This section honors that legacy and the profound impact it continues to 
            have on my life and work.
          </p>
        </div>
      </div>
    </section>
  );
}

export default FamilyRoots;
