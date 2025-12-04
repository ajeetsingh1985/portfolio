import { useState } from 'react';

/**
 * Geographic Journey Component
 * Interactive map showing journey from Rudrapur → Delhi → Pennsylvania
 */
function GeographicJourney() {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const locations = [
    {
      id: 1,
      name: 'Rudrapur',
      title: 'Birth',
      years: '1984 - 1985',
      description: 'Born in this industrial town of Uttarakhand, beginning my life\'s journey in the foothills of the Himalayas.',
      highlights: [
        'Birthplace in Uttarakhand',
        'Near Kumaon foothills',
        'Foundation of values'
      ],
      image: '/images/Rudrapur.jpg',
      townInfo: 'Known for: Automotive manufacturing hub, SIDCUL industrial estate, Gateway to Kumaon region',
      coordinates: { top: '35%', left: '18%' }
    },
    {
      id: 2,
      name: 'Delhi',
      title: 'School Years',
      years: '1985 - 2001',
      description: 'Grew up in India\'s vibrant capital, completing primary and secondary education in the heart of the nation.',
      highlights: [
        'Completed schooling',
        'Early tech interests',
        'Cultural exposure'
      ],
      image: '/images/Delhi.jpg',
      townInfo: 'Famous for: India Gate, Red Fort, Qutub Minar, Political capital, Rich Mughal history',
      coordinates: { top: '30%', left: '25%' }
    },
    {
      id: 3,
      name: 'Nainital',
      title: 'Bachelor\'s',
      years: '2002 - 2005',
      description: 'Pursued undergraduate studies in this scenic hill station, known for its pristine lake and quality educational institutions.',
      highlights: [
        'Bachelor\'s degree',
        'Hill station education',
        'Strong peer network'
      ],
      image: '/images/Nainital.jpg',
      townInfo: 'Famous for: Naini Lake, Hill station beauty, Quality colleges, Colonial architecture',
      coordinates: { top: '30%', left: '35%' }
    },
    {
      id: 4,
      name: 'Dehradun',
      title: 'Master\'s',
      years: '2005 - 2008',
      description: 'Completed postgraduate education in Uttarakhand\'s capital, a city known for its academic excellence and natural beauty.',
      highlights: [
        'Master\'s degree',
        'Technical expertise',
        'Started freelancing'
      ],
      image: '/images/Dehradun.jpg',
      townInfo: 'Famous for: Doon School, Forest Research Institute, Robber\'s Cave, Gateway to Mussoorie',
      coordinates: { top: '30%', left: '45%' }
    },
    {
      id: 5,
      name: 'Delhi/CHD/KOL',
      title: 'Career Start',
      years: '2008 - 2012',
      description: 'Launched professional career across three major Indian cities, gaining diverse experience and building technical foundation.',
      highlights: [
        'Career began',
        'Multi-city experience',
        'Technical growth'
      ],
      image: '/images/Chandigarh.jpg',
      townInfo: 'Cities: Delhi (Capital), Chandigarh (Planned by Le Corbusier), Kolkata (Cultural capital)',
      coordinates: { top: '30%', left: '55%' }
    },
    {
      id: 6,
      name: 'New York',
      title: 'USA Move',
      years: '2013 - 2014',
      description: 'Relocated to the United States, joining Xerox Corporation in the city that never sleeps.',
      highlights: [
        'Joined Xerox',
        'International career',
        'High-impact projects'
      ],
      image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&h=300&fit=crop',
      townInfo: 'Famous for: Statue of Liberty, Times Square, Wall Street, Global financial hub',
      coordinates: { top: '25%', left: '70%' }
    },
    {
      id: 7,
      name: 'West Chester, PA',
      title: 'Current Home',
      years: '2014 - Present',
      description: 'Settled in Pennsylvania, joining Assurant and advancing from Technical Lead to Engineering Manager.',
      highlights: [
        'Joined Assurant',
        'Multiple promotions',
        'Leadership role',
        'Current residence'
      ],
      image: '/images/WestChester.jpg',
      townInfo: 'Famous for: Historic downtown, University presence, Near Philadelphia, Colonial heritage',
      coordinates: { top: '25%', left: '80%' }
    }
  ];

  const oldLocations = [
    {
      id: 1,
      name: 'Rudrapur, India',
      title: 'The Beginning',
      years: '1984 - 1985',
      description: 'Born and raised in this vibrant city of Uttarakhand, where my foundation was built with strong family values and academic excellence.',
      highlights: [
     
        'Developed passion for technology',
        'Foundation of values and culture'
      ],
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Cdefs%3E%3ClinearGradient id="g1" x1="0%25" y1="0%25" x2="100%25" y2="100%25"%3E%3Cstop offset="0%25" style="stop-color:%233B82F6;stop-opacity:1" /%3E%3Cstop offset="100%25" style="stop-color:%232563EB;stop-opacity:1" /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width="400" height="300" fill="url(%23g1)"/%3E%3Ctext x="200" y="130" font-family="Arial, sans-serif" font-size="36" font-weight="bold" fill="white" text-anchor="middle"%3ERudrapur%3C/text%3E%3Ctext x="200" y="170" font-family="Arial, sans-serif" font-size="20" fill="rgba(255,255,255,0.9)" text-anchor="middle"%3EUttarakhand, India%3C/text%3E%3Ccircle cx="50" cy="50" r="20" fill="rgba(255,255,255,0.3)"/%3E%3Ccircle cx="350" cy="250" r="30" fill="rgba(255,255,255,0.2)"/%3E%3Ccircle cx="300" cy="80" r="15" fill="rgba(255,255,255,0.25)"/%3E%3C/svg%3E',
      coordinates: { top: '35%', left: '18%' }
    },
    {
      id: 2,
      name: 'Delhi, India',
      title: 'Education & Career Start',
      years: '1985 - 2001',
      description: 'The capital city where I pursued higher education and began my professional journey in software engineering.',
      highlights: [
           'Completed early education',
        'Bachelor\'s and Master\'s degrees',
        'Started career at Infosys',
        'Grew technical expertise',
        'Built professional network'
      ],
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Cdefs%3E%3ClinearGradient id="g2" x1="0%25" y1="0%25" x2="100%25" y2="100%25"%3E%3Cstop offset="0%25" style="stop-color:%236366F1;stop-opacity:1" /%3E%3Cstop offset="100%25" style="stop-color:%234F46E5;stop-opacity:1" /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width="400" height="300" fill="url(%23g2)"/%3E%3Ctext x="200" y="130" font-family="Arial, sans-serif" font-size="40" font-weight="bold" fill="white" text-anchor="middle"%3EDelhi%3C/text%3E%3Ctext x="200" y="170" font-family="Arial, sans-serif" font-size="20" fill="rgba(255,255,255,0.9)" text-anchor="middle"%3ECapital of India%3C/text%3E%3Cpath d="M200 50 L220 90 L270 90 L230 120 L250 170 L200 140 L150 170 L170 120 L130 90 L180 90 Z" fill="rgba(255,255,255,0.3)"/%3E%3Ccircle cx="100" cy="240" r="25" fill="rgba(255,255,255,0.2)"/%3E%3Ccircle cx="320" cy="60" r="18" fill="rgba(255,255,255,0.25)"/%3E%3C/svg%3E',
      coordinates: { top: '30%', left: '43%' }
    },
    {
      id: 3,
      name: 'Nainital, India',
      title: 'Education – Graduation',
      years: '2002 - 2005',
      description: 'The capital city where I pursued higher education and began my professional journey in software engineering.',
      highlights: [
           'Completed Bachelor\'s degree',
        'Started career at Infosys',
        'Grew technical expertise',
        'Developed a strong network of friends.'
      ],
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Cdefs%3E%3ClinearGradient id="g2" x1="0%25" y1="0%25" x2="100%25" y2="100%25"%3E%3Cstop offset="0%25" style="stop-color:%236366F1;stop-opacity:1" /%3E%3Cstop offset="100%25" style="stop-color:%234F46E5;stop-opacity:1" /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width="400" height="300" fill="url(%23g2)"/%3E%3Ctext x="200" y="130" font-family="Arial, sans-serif" font-size="40" font-weight="bold" fill="white" text-anchor="middle"%3EDelhi%3C/text%3E%3Ctext x="200" y="170" font-family="Arial, sans-serif" font-size="20" fill="rgba(255,255,255,0.9)" text-anchor="middle"%3ECapital of India%3C/text%3E%3Cpath d="M200 50 L220 90 L270 90 L230 120 L250 170 L200 140 L150 170 L170 120 L130 90 L180 90 Z" fill="rgba(255,255,255,0.3)"/%3E%3Ccircle cx="100" cy="240" r="25" fill="rgba(255,255,255,0.2)"/%3E%3Ccircle cx="320" cy="60" r="18" fill="rgba(255,255,255,0.25)"/%3E%3C/svg%3E',
      coordinates: { top: '30%', left: '43%' }
    },
     {
      id: 4,
      name: 'Dehradun, India',
      title: 'Education – Master’s degree',
      years: '2005 - 2008',
      description: 'The capital city where I pursued higher education and began my professional journey in software engineering.',
      highlights: [
        'Completed Master\'s degree',
        'Grew technical expertise',
        'Started working as a freelancer',
        'Developed a strong network of friends.'
      ],
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Cdefs%3E%3ClinearGradient id="g2" x1="0%25" y1="0%25" x2="100%25" y2="100%25"%3E%3Cstop offset="0%25" style="stop-color:%236366F1;stop-opacity:1" /%3E%3Cstop offset="100%25" style="stop-color:%234F46E5;stop-opacity:1" /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width="400" height="300" fill="url(%23g2)"/%3E%3Ctext x="200" y="130" font-family="Arial, sans-serif" font-size="40" font-weight="bold" fill="white" text-anchor="middle"%3EDelhi%3C/text%3E%3Ctext x="200" y="170" font-family="Arial, sans-serif" font-size="20" fill="rgba(255,255,255,0.9)" text-anchor="middle"%3ECapital of India%3C/text%3E%3Cpath d="M200 50 L220 90 L270 90 L230 120 L250 170 L200 140 L150 170 L170 120 L130 90 L180 90 Z" fill="rgba(255,255,255,0.3)"/%3E%3Ccircle cx="100" cy="240" r="25" fill="rgba(255,255,255,0.2)"/%3E%3Ccircle cx="320" cy="60" r="18" fill="rgba(255,255,255,0.25)"/%3E%3C/svg%3E',
      coordinates: { top: '30%', left: '43%' }
    },
    {
      id: 5,
      name: 'Delhi - Chandigarh - Kolkata, India',
      title: 'Beginning and Development of a Professional Career',
      years: '2008 - 2012',
      description: 'The capital city where I pursued higher education and began my professional journey in software engineering.',
      highlights: [
        'Completed Master\'s degree',
        'Grew technical expertise',
        'Started working as a freelancer',
        'Developed a strong network of friends.'
      ],
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Cdefs%3E%3ClinearGradient id="g2" x1="0%25" y1="0%25" x2="100%25" y2="100%25"%3E%3Cstop offset="0%25" style="stop-color:%236366F1;stop-opacity:1" /%3E%3Cstop offset="100%25" style="stop-color:%234F46E5;stop-opacity:1" /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width="400" height="300" fill="url(%23g2)"/%3E%3Ctext x="200" y="130" font-family="Arial, sans-serif" font-size="40" font-weight="bold" fill="white" text-anchor="middle"%3EDelhi%3C/text%3E%3Ctext x="200" y="170" font-family="Arial, sans-serif" font-size="20" fill="rgba(255,255,255,0.9)" text-anchor="middle"%3ECapital of India%3C/text%3E%3Cpath d="M200 50 L220 90 L270 90 L230 120 L250 170 L200 140 L150 170 L170 120 L130 90 L180 90 Z" fill="rgba(255,255,255,0.3)"/%3E%3Ccircle cx="100" cy="240" r="25" fill="rgba(255,255,255,0.2)"/%3E%3Ccircle cx="320" cy="60" r="18" fill="rgba(255,255,255,0.25)"/%3E%3C/svg%3E',
      coordinates: { top: '30%', left: '43%' }
    },
    {
      id: 4,
      name: 'Newyork, USA',
      title: 'Professional Growth',
      years: '2013 - 2014',
      description: 'Moved to the United States to join Xerox, where I\'ve grown from Technical Lead to Engineering Manager, leading transformative projects.',
      highlights: [
        'Joined Xerox Corporation',
        'Led major initiatives',
        'Worked on projects with high visibility.',
      ],
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Cdefs%3E%3ClinearGradient id="g3" x1="0%25" y1="0%25" x2="100%25" y2="100%25"%3E%3Cstop offset="0%25" style="stop-color:%238B5CF6;stop-opacity:1" /%3E%3Cstop offset="100%25" style="stop-color:%237C3AED;stop-opacity:1" /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width="400" height="300" fill="url(%23g3)"/%3E%3Ctext x="200" y="120" font-family="Arial, sans-serif" font-size="32" font-weight="bold" fill="white" text-anchor="middle"%3EPennsylvania%3C/text%3E%3Ctext x="200" y="160" font-family="Arial, sans-serif" font-size="20" fill="rgba(255,255,255,0.9)" text-anchor="middle"%3EUnited States%3C/text%3E%3Ctext x="200" y="190" font-family="Arial, sans-serif" font-size="16" fill="rgba(255,255,255,0.8)" text-anchor="middle"%3ECurrent Home%3C/text%3E%3Crect x="30" y="30" width="50" height="30" fill="rgba(255,255,255,0.3)" rx="3"/%3E%3Crect x="320" y="220" width="50" height="30" fill="rgba(255,255,255,0.25)" rx="3"/%3E%3Ccircle cx="350" cy="80" r="20" fill="rgba(255,255,255,0.2)"/%3E%3Ccircle cx="60" cy="250" r="15" fill="rgba(255,255,255,0.3)"/%3E%3C/svg%3E',
      coordinates: { top: '25%', left: '70%' }
    },
    {
      id: 5,
      name: 'West Chester - Pennsylvania, USA',
      title: 'Professional Growth',
      years: '2014 - Present',
      description: 'Moved to Pennsylvania to join Assurant, where I\'ve grown from Technical Lead to Engineering Manager, leading transformative projects.',
      highlights: [
        'Joined Assurant Inc.',
        'Multiple promotions',
        'Led major initiatives',
        'Built high-performing teams',
        'Current residence'
      ],
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Cdefs%3E%3ClinearGradient id="g3" x1="0%25" y1="0%25" x2="100%25" y2="100%25"%3E%3Cstop offset="0%25" style="stop-color:%238B5CF6;stop-opacity:1" /%3E%3Cstop offset="100%25" style="stop-color:%237C3AED;stop-opacity:1" /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width="400" height="300" fill="url(%23g3)"/%3E%3Ctext x="200" y="120" font-family="Arial, sans-serif" font-size="32" font-weight="bold" fill="white" text-anchor="middle"%3EPennsylvania%3C/text%3E%3Ctext x="200" y="160" font-family="Arial, sans-serif" font-size="20" fill="rgba(255,255,255,0.9)" text-anchor="middle"%3EUnited States%3C/text%3E%3Ctext x="200" y="190" font-family="Arial, sans-serif" font-size="16" fill="rgba(255,255,255,0.8)" text-anchor="middle"%3ECurrent Home%3C/text%3E%3Crect x="30" y="30" width="50" height="30" fill="rgba(255,255,255,0.3)" rx="3"/%3E%3Crect x="320" y="220" width="50" height="30" fill="rgba(255,255,255,0.25)" rx="3"/%3E%3Ccircle cx="350" cy="80" r="20" fill="rgba(255,255,255,0.2)"/%3E%3Ccircle cx="60" cy="250" r="15" fill="rgba(255,255,255,0.3)"/%3E%3C/svg%3E',
      coordinates: { top: '25%', left: '70%' }
    }
  ];

  return (
    <section id="journey" className="section-container bg-gradient-to-b from-white to-primary-50">
      <div className="text-center mb-12">
        <span className="text-primary-600 font-semibold text-sm uppercase tracking-wide">The Journey</span>
        <h2 className="section-title mt-2">Geographic Journey</h2>
        <p className="section-subtitle">
          A journey across continents, driven by ambition, learning, and the pursuit of excellence
        </p>
      </div>

      {/* Interactive Animated World Map */}
      <div className="max-w-6xl mx-auto mb-12">
        <div className="card relative h-[500px] overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 group/map">
          {/* Animated stars background */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  opacity: Math.random() * 0.7 + 0.3
                }}
              ></div>
            ))}
          </div>

          {/* SVG World Map with Journey Path */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid slice">
            <defs>
              {/* Gradient for the path */}
              <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#EC4899" stopOpacity="0.8" />
              </linearGradient>
              
              {/* Animated dash for path */}
              <linearGradient id="animatedGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#60A5FA">
                  <animate attributeName="stop-color" values="#60A5FA;#A78BFA;#F472B6;#60A5FA" dur="3s" repeatCount="indefinite" />
                </stop>
                <stop offset="100%" stopColor="#A78BFA">
                  <animate attributeName="stop-color" values="#A78BFA;#F472B6;#60A5FA;#A78BFA" dur="3s" repeatCount="indefinite" />
                </stop>
              </linearGradient>

              {/* Glow filter */}
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {/* Simplified continent outlines */}
            <g opacity="0.15" stroke="#60A5FA" strokeWidth="1" fill="none">
              {/* India outline (simplified) */}
              <path d="M 280 200 Q 285 190, 295 185 Q 305 180, 315 185 Q 325 190, 328 200 Q 330 220, 325 235 Q 320 245, 310 250 Q 295 255, 285 250 Q 275 240, 275 225 Q 275 210, 280 200 Z" />
              
              {/* USA outline (simplified) */}
              <path d="M 700 150 Q 750 145, 800 155 Q 850 165, 880 180 Q 900 195, 895 220 Q 885 240, 865 250 Q 840 255, 810 250 Q 780 245, 750 235 Q 720 220, 700 200 Q 685 180, 690 165 Q 695 155, 700 150 Z" />
            </g>

            {/* Animated journey path connecting all locations */}
            <g>
              {/* Path segments with animation */}
              <path
                d="M 180,175 Q 220,170 260,180 Q 280,185 310,195 Q 330,200 370,205 Q 400,208 450,210 Q 500,205 550,200 Q 600,190 650,185 Q 700,180 750,185 Q 780,188 800,190"
                stroke="url(#pathGradient)"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                strokeDasharray="10 5"
                opacity="0.6"
                filter="url(#glow)"
              >
                <animate attributeName="stroke-dashoffset" from="0" to="30" dur="2s" repeatCount="indefinite" />
              </path>
              
              {/* Glowing overlay path */}
              <path
                d="M 180,175 Q 220,170 260,180 Q 280,185 310,195 Q 330,200 370,205 Q 400,208 450,210 Q 500,205 550,200 Q 600,190 650,185 Q 700,180 750,185 Q 780,188 800,190"
                stroke="url(#animatedGradient)"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                opacity="0.9"
              >
                <animate attributeName="stroke-dasharray" values="0 1000; 1000 0" dur="4s" repeatCount="indefinite" />
                <animate attributeName="stroke-dashoffset" from="1000" to="0" dur="4s" repeatCount="indefinite" />
              </path>
            </g>

            {/* Location markers with precise coordinates */}
            {locations.map((location, idx) => {
              const xPositions = [180, 260, 310, 370, 450, 650, 800];
              const yPositions = [175, 180, 195, 205, 210, 185, 190];
              return (
                <g key={location.id}>
                  {/* Pulsing circle */}
                  <circle
                    cx={xPositions[idx]}
                    cy={yPositions[idx]}
                    r="20"
                    fill={selectedLocation?.id === location.id ? '#FCD34D' : '#3B82F6'}
                    opacity="0.3"
                  >
                    <animate attributeName="r" values="20;30;20" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.3;0.1;0.3" dur="2s" repeatCount="indefinite" />
                  </circle>
                  
                  {/* Main location marker */}
                  <circle
                    cx={xPositions[idx]}
                    cy={yPositions[idx]}
                    r="12"
                    fill={selectedLocation?.id === location.id ? '#FCD34D' : '#60A5FA'}
                    stroke="white"
                    strokeWidth="3"
                    filter="url(#glow)"
                    className="cursor-pointer hover:r-[16px] transition-all"
                    onClick={() => {
                      setSelectedLocation(selectedLocation?.id === location.id ? null : location);
                      setTimeout(() => {
                        document.getElementById(`location-${location.id}`)?.scrollIntoView({ 
                          behavior: 'smooth', 
                          block: 'nearest' 
                        });
                      }, 100);
                    }}
                  />
                  
                  {/* Location number */}
                  <text
                    x={xPositions[idx]}
                    y={yPositions[idx] + 5}
                    textAnchor="middle"
                    fill="white"
                    fontSize="12"
                    fontWeight="bold"
                    className="pointer-events-none"
                  >
                    {location.id}
                  </text>
                  
                  {/* Location label */}
                  <text
                    x={xPositions[idx]}
                    y={yPositions[idx] + 35}
                    textAnchor="middle"
                    fill="white"
                    fontSize="10"
                    fontWeight="600"
                    opacity="0.9"
                    className="pointer-events-none"
                  >
                    {location.name}
                  </text>
                </g>
              );
            })}

            {/* Animated plane icon traveling along path */}
            <g>
              <text fontSize="24" fill="#FCD34D" filter="url(#glow)">
                <animateMotion
                  dur="12s"
                  repeatCount="indefinite"
                  path="M 180,175 Q 220,170 260,180 Q 280,185 310,195 Q 330,200 370,205 Q 400,208 450,210 Q 500,205 550,200 Q 600,190 650,185 Q 700,180 750,185 Q 780,188 800,190"
                >
                </animateMotion>
                ✈️
              </text>
            </g>
          </svg>

          {/* Legend */}
          <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-3 text-white text-xs">
            <div className="font-bold mb-2">🗺️ Journey Map</div>
            <div className="flex items-center gap-2 mb-1">
              <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
              <span>India Journey (1984-2012)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-pink-400 rounded-full"></div>
              <span>USA Career (2013-Present)</span>
            </div>
          </div>

          {/* Interaction hint */}
          <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-2 text-white text-xs opacity-0 group-hover/map:opacity-100 transition-opacity duration-300">
            <div className="flex items-center gap-2">
              <span>💡</span>
              <span>Click markers to explore each location</span>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline View - Smaller, Cleaner Cards */}
      <div className="max-w-5xl mx-auto map-container">
        <div className="flex flex-wrap justify-center gap-3">
          {locations.map((location) => (
            <div key={location.id} id={`location-${location.id}`} className="relative w-32 scroll-mt-20">
              {/* Mini Card - Always Visible and Clickable */}
              <button
                onClick={() => {
                  setSelectedLocation(selectedLocation?.id === location.id ? null : location);
                  // Scroll to this card
                  setTimeout(() => {
                    document.getElementById(`location-${location.id}`)?.scrollIntoView({ 
                      behavior: 'smooth', 
                      block: 'center' 
                    });
                  }, 100);
                }}
                className={`w-full bg-white border rounded-lg p-2 transition-all duration-300 hover:border-primary-500 hover:shadow-lg cursor-pointer ${selectedLocation?.id === location.id ? 'border-2 border-primary-600 shadow-xl' : 'border border-gray-300'}`}
              >
                {/* Year Badge - Smaller */}
                <div className="flex items-center justify-center mb-1">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center shadow-sm">
                    <span className="text-white font-bold text-xs">{location.id}</span>
                  </div>
                </div>
                
                {/* Year Range - Compact */}
                <div className="text-center mb-1">
                  <span className="text-[10px] font-semibold text-primary-600 bg-primary-50 px-1.5 py-0.5 rounded-full">
                    {location.years}
                  </span>
                </div>
                
                {/* Location Name - Smaller */}
                <h4 className="text-center text-xs font-bold text-gray-800 leading-tight">
                  {location.name}
                </h4>
              </button>

              {/* Expanded Details - Shown on Click (below the timeline) */}
              {selectedLocation?.id === location.id && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-96 bg-white border-2 border-primary-500 rounded-xl p-6 shadow-2xl z-50">
                  {/* Arrow pointing up */}
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-l-2 border-t-2 border-primary-500 rotate-45"></div>
                  
                  {/* Close button */}
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedLocation(null);
                    }}
                    className="absolute top-2 right-2 w-6 h-6 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center text-gray-600 transition-colors"
                  >
                    ✕
                  </button>
                  
                  {/* Image */}
                  <div className="mb-4 rounded-lg overflow-hidden shadow-md">
                    <img
                      src={location.image}
                      alt={location.name}
                      className="w-full h-48 object-cover"
                      onError={(e) => {
                        e.target.src = `https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=${encodeURIComponent(location.name)}`;
                      }}
                    />
                  </div>
                  
                  {/* Location Header */}
                  <div className="mb-3">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{location.name}</h3>
                    <p className="text-sm font-semibold text-primary-600 mb-2">{location.title} • {location.years}</p>
                  </div>
                  
                  {/* Town Information */}
                  {location.townInfo && (
                    <div className="mb-3 p-3 bg-amber-50 border-l-4 border-amber-400 rounded">
                      <p className="text-xs text-amber-900 font-medium">📍 {location.townInfo}</p>
                    </div>
                  )}
                  
                  {/* Description */}
                  <p className="text-sm text-gray-600 mb-3">{location.description}</p>
                  
                  {/* Highlights */}
                  <div className="space-y-1">
                    <h5 className="text-xs font-semibold text-gray-700 mb-2">Personal Highlights:</h5>
                    <ul className="space-y-1.5">
                      {location.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-xs text-gray-600 flex items-start">
                          <span className="text-primary-500 mr-2 mt-0.5">✓</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Historical Context Note */}
      <div className="mt-12 max-w-4xl mx-auto bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-lg">
        <h3 className="text-lg font-semibold text-indigo-900 mb-2">
          📍 A Journey of Growth
        </h3>
        <p className="text-indigo-800">
          Each location represents a chapter in my life story - from the roots that shaped my 
          character in Rudrapur, to the education and professional foundation in Delhi, and 
          finally to the international opportunities and leadership growth in Pennsylvania. 
          This journey reflects not just geographic movement, but continuous personal and 
          professional evolution.
        </p>
      </div>
    </section>
  );
}

export default GeographicJourney;
