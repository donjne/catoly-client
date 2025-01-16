const AnimatedSphere = () => {
    return (
      <div className="relative w-96 h-96 max-w-full">
        <div className="absolute inset-0">
          {/* SVG definitions for masks */}
          <svg width="0" height="0">
            <defs>
              <clipPath id="yinPath">
                <path d="M50,0 A50,50 0 0,1 50,100 A25,25 0 0,1 50,50 A25,25 0 0,0 50,0" />
              </clipPath>
              <clipPath id="yangPath">
                <path d="M50,0 A50,50 0 0,0 50,100 A25,25 0 0,0 50,50 A25,25 0 0,1 50,0" />
              </clipPath>
            </defs>
          </svg>
  
          {/* Container for the rotating parts */}
          <div className="relative w-full h-full rounded-full overflow-hidden">
            {/* Original colored part */}
            <div 
              className="absolute inset-0"
              style={{
                animation: 'rotateYin 4s linear infinite'
              }}
            >
              <div style={{ clipPath: 'url(#yinPath)' }}>
                <img 
                  src="/sideguy.png" 
                  alt="Colored half"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
  
            {/* Black and white part */}
            <div 
              className="absolute inset-0"
              style={{
                animation: 'rotateYang 4s linear infinite'
              }}
            >
              <div style={{ clipPath: 'url(#yangPath)' }}>
                <img 
                  src="/sideguy.png" 
                  alt="B&W half"
                  className="w-full h-full object-cover grayscale"
                />
              </div>
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
      @keyframes rotateYin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      @keyframes rotateYang {
        from { transform: rotate(180deg); }
        to { transform: rotate(540deg); }
      }
    `;
    document.head.appendChild(styleSheet);
  }
  
  export default AnimatedSphere;