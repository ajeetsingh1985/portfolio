import { useState, useEffect } from 'react';

/**
 * Scroll Progress Bar Component
 * Shows reading progress at the top of the page
 */
function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (scrollPx / winHeightPx) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50 pointer-events-none">
      <div 
        className="h-full bg-gradient-to-r from-primary-500 via-indigo-500 to-purple-500 transition-all duration-150 ease-out relative overflow-hidden"
        style={{ width: `${scrollProgress}%` }}
      >
        {/* Animated shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer"></div>
      </div>
    </div>
  );
}

export default ScrollProgress;
