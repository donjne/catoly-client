const AnimatedSphere = () => {
    return (
      <div className="relative w-96 h-96 max-w-full">
        <div className="absolute inset-0 rounded-full overflow-hidden">
          {/* Container for both halves that will rotate */}
          <div 
            className="relative w-full h-full" 
            style={{ animation: 'rotateYinYang 4s linear infinite' }}
          >
            {/* Left half (Yin - B&W) */}
            <div className="absolute inset-0">
              <div 
                className="absolute inset-0"
                style={{
                  clipPath: 'path("M200 0 A200 200 0 0 0 200 400 A100 100 0 0 0 200 200 A100 100 0 0 1 200 0")'
                }}
              >
                <img 
                  src="/sideguy.png" 
                  alt="Left half" 
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              {/* Yin dot */}
              <div className="absolute top-3/4 left-1/2 w-12 h-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gray-800" />
            </div>
  
            {/* Right half (Yang - Color) */}
            <div className="absolute inset-0">
              <div 
                className="absolute inset-0"
                style={{
                  clipPath: 'path("M200 0 A200 200 0 0 1 200 400 A100 100 0 0 1 200 200 A100 100 0 0 0 200 0")'
                }}
              >
                <img 
                  src="/sideguy.png" 
                  alt="Right half" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Yang dot */}
              <div className="absolute top-1/4 left-1/2 w-12 h-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gray-200" />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  // Add the rotation keyframes
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