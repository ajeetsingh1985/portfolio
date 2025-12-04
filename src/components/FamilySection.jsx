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

  const hobbies = [
    {
      icon: '📚',
      title: 'Reading',
      description: 'Enjoy reading technical books, biographies, and fiction',
      favorites: ['Technology books', 'Leadership books', 'Science fiction']
    },
    {
      icon: '🏃',
      title: 'Fitness',
      description: 'Staying active through regular exercise and outdoor activities',
      favorites: ['Cycling', 'Hiking', 'Yoga', 'Meditation']
    },
    {
      icon: '🎮',
      title: 'Technology Exploration',
      description: 'Experimenting with new gadgets and software',
      favorites: ['Latest tech gadgets', 'New programming languages', 'AI tools']
    },
    {
      icon: '✈️',
      title: 'Travel',
      description: 'Exploring new places and experiencing different cultures',
      favorites: ['National parks', 'Long road trips', 'Historical sites', 'Tech hubs']
    }
  ];

  const funFacts = [
    {
      icon: '🌟',
      fact: 'Coffee enthusiast',
      description: 'Can\'t start the day without a good cup of coffee'
    },
    {
      icon: '🎯',
      fact: 'Early riser',
      description: 'Most productive hours are between 5 AM and 9 AM'
    },
    {
      icon: '🎓',
      fact: 'Lifelong learner',
      description: 'Always taking online courses and learning new skills'
    },
    {
      icon: '🤝',
      fact: 'Mentor at heart',
      description: 'Love helping others grow in their careers'
    },
    {
      icon: '🌍',
      fact: 'Two continents',
      description: 'Built career across India and United States'
    },
    {
      icon: '💻',
      fact: 'Code poet',
      description: 'Believe that clean code is like poetry'
    }
  ];

  const values = [
    'Family First',
    'Work-Life Balance',
    'Continuous Growth',
    'Gratitude',
    'Authenticity',
    'Empathy'
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

      {/* Life Timeline - Major Milestones */}
      <div className="max-w-6xl mx-auto mb-12">
        <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Life's Beautiful Journey</h3>
        
        <div className="grid md:grid-cols-3 gap-6">
          {/* Marriage - 2012 */}
          <div className="card hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-pink-50 to-rose-50 border-2 border-pink-200">
            <div className="flex items-center justify-center mb-4">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center text-4xl shadow-lg">
                💑
              </div>
            </div>
            <div className="text-center mb-4">
              <span className="inline-block bg-pink-600 text-white px-4 py-1 rounded-full text-lg font-bold mb-2">
                2012
              </span>
              <h4 className="text-2xl font-bold text-gray-800 mb-2">Got Married</h4>
              <p className="text-gray-600">
                Started our journey together, building a life filled with love, support, and partnership
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-inner">
              <div className="aspect-video bg-gradient-to-br from-pink-200 to-rose-300 rounded-lg flex items-center justify-center overflow-hidden">
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
          <div className="card hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-purple-50 to-fuchsia-50 border-2 border-purple-200">
            <div className="flex items-center justify-center mb-4">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-fuchsia-600 rounded-full flex items-center justify-center text-4xl shadow-lg">
                👧
              </div>
            </div>
            <div className="text-center mb-4">
              <span className="inline-block bg-purple-600 text-white px-4 py-1 rounded-full text-lg font-bold mb-2">
                2016
              </span>
              <h4 className="text-2xl font-bold text-gray-800 mb-2">Daughter Born</h4>
              <p className="text-gray-600">
                Our precious daughter arrived, bringing immeasurable joy and a new meaning to life
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-inner">
              <div className="aspect-video bg-gradient-to-br from-purple-200 to-fuchsia-300 rounded-lg flex items-center justify-center overflow-hidden">
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
          <div className="card hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200">
            <div className="flex items-center justify-center mb-4">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center text-4xl shadow-lg">
                👦
              </div>
            </div>
            <div className="text-center mb-4">
              <span className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-lg font-bold mb-2">
                2020
              </span>
              <h4 className="text-2xl font-bold text-gray-800 mb-2">Son Born</h4>
              <p className="text-gray-600">
                Our wonderful son completed our family, adding more laughter and adventure to our lives
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-inner">
              <div className="aspect-video bg-gradient-to-br from-blue-200 to-cyan-300 rounded-lg flex items-center justify-center overflow-hidden">
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
      </div>

      {/* Hobbies & Personal Values - Simplified */}
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Beyond Work</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Hobbies */}
          <div className="card bg-gradient-to-br from-blue-50 to-indigo-50">
            <h4 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <span className="text-3xl">🎯</span>
              <span>Hobbies & Interests</span>
            </h4>
            <div className="grid grid-cols-2 gap-4">
              {hobbies.map((hobby, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl mb-2">{hobby.icon}</div>
                  <h5 className="font-semibold text-gray-800 text-sm">{hobby.title}</h5>
                </div>
              ))}
            </div>
          </div>

          {/* Values */}
          <div className="card bg-gradient-to-br from-green-50 to-emerald-50">
            <h4 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <span className="text-3xl">⭐</span>
              <span>Core Values</span>
            </h4>
            <div className="flex flex-wrap gap-3">
              {values.map((value, index) => (
                <span
                  key={index}
                  className="bg-gradient-to-r from-primary-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md hover:shadow-lg transition-all hover:scale-105"
                >
                  {value}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

export default FamilySection;
