/**
 * About Section Component
 * Describes professional identity and leadership qualities
 */
function About() {
return (
    <section id="about" className="section-container relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white -z-10">
          <div className="absolute inset-0 opacity-[0.02]">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%233b82f6' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
              backgroundSize: '100px 100px'
            }}></div>
          </div>
        </div>
        
        <div className="text-center mb-12 relative z-10">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wide">Who is Ajeet Singh?</span>
            <h2 className="section-title mt-2">About Me</h2>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* Profile Image */}
                <div className="relative">
                    <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary-100 to-indigo-100 overflow-hidden shadow-lg">
                        <img 
                            src="\images\profile.JPG" 
                            alt="Ajeet Singh" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
                
                <div className="flex flex-col justify-center">
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        I am a results-driven technology leader with 20+ years of expertise in enterprise 
                        software engineering and high-performance team leadership. My career has been defined 
                        by a relentless pursuit of technical excellence, continuous innovation, and the 
                        conviction that transformative solutions emerge from empowered, collaborative teams.
                    </p>
                    
                    <div className="space-y-4">
                        <div className="flex items-start">
                            <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center mr-3">
                                <span className="text-primary-600">👔</span>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900">Current Role</h4>
                                <p className="text-gray-600 text-sm">Principal Software Engineer at Assurant Inc.</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center mr-3">
                                <span className="text-primary-600">📍</span>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900">Location</h4>
                                <p className="text-gray-600 text-sm">West Chester, Pennsylvania, United States</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center mr-3">
                                <span className="text-primary-600">💼</span>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900">Experience</h4>
                                <p className="text-gray-600 text-sm">18+ years in Software Engineering</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="grid grid-cols-1 gap-6 mb-8">
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white border border-gray-200 p-6 rounded-xl hover:shadow-lg transition-shadow">
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            Leadership Philosophy
                        </h3>
                        <p className="text-gray-600">
                            I cultivate high-performing teams by fostering trust, maintaining transparent 
                            communication, and architecting environments where innovation flourishes. 
                            My leadership approach synergizes deep technical acumen with emotional 
                            intelligence to unlock team potential and drive sustainable excellence.
                        </p>
                    </div>
                    
                    <div className="bg-white border border-gray-200 p-6 rounded-xl hover:shadow-lg transition-shadow">
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            Technical Expertise
                        </h3>
                        <p className="text-gray-600">
                            Specialized in enterprise-scale architecture, Microsoft Azure cloud ecosystems, 
                            microservices patterns, and advanced database optimization. I excel at 
                            translating intricate business requirements into robust, scalable, and 
                            maintainable technical solutions that deliver measurable value.
                        </p>
                    </div>
                </div>
            </div>
            
            <div className="p-6 bg-gray-50 rounded-xl border-l-4 border-primary-500">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Core Values</h3>
                <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                        <span className="text-primary-600 mr-2">✓</span>
                        <span><strong>Innovation:</strong> Always seeking better ways to solve problems</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-primary-600 mr-2">✓</span>
                        <span><strong>Integrity:</strong> Building trust through honest and transparent communication</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-primary-600 mr-2">✓</span>
                        <span><strong>Collaboration:</strong> Achieving excellence through teamwork</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-primary-600 mr-2">✓</span>
                        <span><strong>Continuous Learning:</strong> Staying current with emerging technologies</span>
                    </li>
                </ul>
            </div>
        </div>
    </section>
);
}

export default About;
