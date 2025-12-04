/**
 * Education Timeline Component
 * Displays academic credentials with institution information
 */
function EducationTimeline() {
  const education = [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'Hemvati Nandan Bahuguna Garhwal University (HNBGU), Srinagar',
      location: 'Dehradun, Uttarakhand, India',
      year: '2005 - 2008',
      description: 'Advanced studies in computer science, software engineering, and information systems.',
      achievements: [
        'Specialized in Software Engineering',
        'Focus on Database Management Systems',
        'Advanced programming and algorithms'
      ],
      icon: '🎓'
    },
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'Kumaun University, Nainital',
      location: 'Nainital, Uttarakhand, India',
      year: '2002 - 2005',
      description: 'Foundation in computer science principles, programming, and software development.',
      achievements: [
        'Strong foundation in programming',
        'Database and networking concepts',
        'Software development methodologies'
      ],
      icon: '🎓'
    },
    {
      degree: 'Higher Secondary Education',
      institution: 'Intermediate College',
      location: 'Delhi, India',
      year: '1998 - 2001',
      description: 'Focused on Science and Mathematics, building analytical and problem-solving skills.',
      achievements: [
        'Science and Mathematics focus',
        'Academic excellence',
        'Foundation for technology career'
      ],
      icon: '📚'
    }
  ];

  return (
    <section id="education" className="section-container bg-gradient-to-b from-white to-blue-50">
      <h2 className="section-title">Education Timeline</h2>
      <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
        Academic journey that laid the foundation for a successful career in technology
      </p>

      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-200"></div>

          {/* Education items */}
          <div className="space-y-12">
            {education.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-primary-600 rounded-full items-center justify-center text-2xl z-10 border-4 border-white shadow-lg">
                  {item.icon}
                </div>

                {/* Content card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                  <div className="card hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start mb-3 md:hidden">
                      <span className="text-3xl mr-3">{item.icon}</span>
                      <div className="flex-1">
                        <span className="inline-block bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold mb-2">
                          {item.year}
                        </span>
                      </div>
                    </div>
                    
                    <div className="hidden md:block mb-3">
                      <span className="inline-block bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {item.year}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {item.degree}
                    </h3>
                    <h4 className="text-lg font-semibold text-primary-600 mb-1">
                      {item.institution}
                    </h4>
                    <p className="text-sm text-gray-500 mb-3">📍 {item.location}</p>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    
                    <div className="space-y-1">
                      {item.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-start text-sm text-gray-600">
                          <span className="text-primary-500 mr-2">✓</span>
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Summary Box */}
      <div className="mt-12 max-w-3xl mx-auto bg-gradient-to-r from-primary-50 to-indigo-50 p-6 rounded-lg border border-primary-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          🌟 Educational Foundation
        </h3>
        <p className="text-gray-700">
          My educational journey spans over a decade, combining formal university education 
          with continuous self-learning. This foundation in computer science, combined with 
          hands-on experience, has enabled me to excel in enterprise software development 
          and technology leadership.
        </p>
      </div>
    </section>
  );
}

export default EducationTimeline;
