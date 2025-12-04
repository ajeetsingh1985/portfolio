/**
 * Hero Section Component
 * Displays main introduction with name, title, and tagline
 */
function Hero() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-indigo-50">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob" style={{animationDelay: '4s'}}></div>
        </div>
      </div>
      
      {/* Geometric Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="text-primary-600 font-semibold text-sm uppercase tracking-wide">Welcome to my portfolio</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900">
              Ajeet Singh
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium mb-6 text-primary-600">
              Principal Software Engineer
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Architecting enterprise-scale solutions • Driving cloud transformation • 
              Building exceptional engineering teams
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <a
              href="#about"
              className="bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Learn More
            </a>
            <a
              href="#career"
              className="bg-white text-primary-600 px-6 py-3 rounded-lg font-medium border-2 border-primary-600 hover:bg-primary-50 transition-all duration-300"
            >
              View Career
            </a>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-gray-100">
              <div className="text-3xl font-bold text-primary-600">20+</div>
              <div className="text-sm text-gray-600 mt-1">Years Experience</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-gray-100">
              <div className="text-3xl font-bold text-primary-600">50+</div>
              <div className="text-sm text-gray-600 mt-1">Projects</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-gray-100">
              <div className="text-3xl font-bold text-primary-600">15+</div>
              <div className="text-sm text-gray-600 mt-1">Team Members</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
