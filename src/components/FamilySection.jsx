import ImageCarousel from './ImageCarousel';

/**
 * Family Section Component
 * Displays personal life, hobbies, fun facts, and family details with photo carousel and life timeline
 */
function FamilySection() {
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

      {/* Hobbies & Interests */}
      <div className="max-w-6xl mx-auto mb-12">
        <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Hobbies & Interests</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hobbies.map((hobby, index) => (
            <div key={index} className="card hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-3">{hobby.icon}</div>
              <h4 className="text-lg font-bold text-gray-800 mb-2">{hobby.title}</h4>
              <p className="text-sm text-gray-600 mb-3">{hobby.description}</p>
              <div className="space-y-1">
                {hobby.favorites.map((fav, idx) => (
                  <div key={idx} className="text-xs text-primary-600 flex items-center">
                    <span className="mr-1">•</span>
                    <span>{fav}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fun Facts */}
      <div className="max-w-6xl mx-auto mb-12">
        <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Fun Facts About Me</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {funFacts.map((item, index) => (
            <div key={index} className="card bg-gradient-to-br from-yellow-50 to-orange-50 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start">
                <div className="text-3xl mr-3">{item.icon}</div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-gray-800 mb-1">{item.fact}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Personal Values */}
      <div className="max-w-4xl mx-auto mb-12">
        <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Core Personal Values</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {values.map((value, index) => (
            <span
              key={index}
              className="bg-gradient-to-r from-primary-600 to-indigo-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
            >
              {value}
            </span>
          ))}
        </div>
      </div>

      {/* Work-Life Balance */}
      <div className="max-w-4xl mx-auto">
        <div className="card bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500">
          <h3 className="text-xl font-bold text-gray-800 mb-4">⚖️ Work-Life Balance Philosophy</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            While I'm passionate about technology and leadership, I believe that true success 
            comes from balance. Family time, personal hobbies, and self-care are not just 
            important—they're essential for sustained professional excellence.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-white p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">Professional</div>
              <div className="text-sm text-gray-600">Excellence in leadership</div>
            </div>
            <div className="bg-white p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">Personal</div>
              <div className="text-sm text-gray-600">Growth and learning</div>
            </div>
            <div className="bg-white p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">Family</div>
              <div className="text-sm text-gray-600">Love and connection</div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

export default FamilySection;
