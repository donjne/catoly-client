const AnimatedSphere = () => {
    return (
      <div className="relative w-96 h-96 max-w-full">
        <div className="absolute inset-0 rounded-full overflow-hidden">
          {/* Container for both halves that will rotate */}
          <div className="relative w-full h-full" style={{ animation: 'rotateYinYang 4s linear infinite' }}>
            {/* Left half (Yin - B&W) */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute inset-0 origin-right">
                <img 
                  src="/sideguy.png" 
                  alt="Left half" 
                  className="w-full h-full object-cover grayscale"
                />
              </div>
            </div>
  
            {/* Right half (Yang - Color) */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute inset-0 origin-left">
                <img 
                  src="/sideguy.png" 
                  alt="Right half" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
  
            {/* Curved dividing line */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-1/2 w-12 h-12 -translate-x-1/2 rounded-full bg-gray-200"></div>
              <div className="absolute bottom-0 left-1/2 w-12 h-12 -translate-x-1/2 rounded-full bg-gray-800"></div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  // Add the rotation keyframe
  if (typeof document !== 'undefined') {
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
      @keyframes rotateYinYang {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
    `;
    document.head.appendChild(styleSheet);
  }
  
  export default AnimatedSphere;