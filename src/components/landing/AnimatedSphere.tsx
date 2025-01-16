const AnimatedSphere = () => {
    return (
      <div className="relative w-96 h-96 max-w-full">
        {/* Static base container */}
        <div className="absolute inset-0 rounded-full overflow-hidden">
          {/* Static base image */}
          <img 
            src="/sphere-image.jpg" 
            alt="Sphere" 
            className="w-full h-full object-cover"
          />
  
          {/* Black and white filter for yin part (left side) */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(90deg, rgba(0,0,0,0.9), rgba(255,255,255,0.1))',
              mixBlendMode: 'saturation',
              clipPath: 'path("M48,0 A48,48 0 0,1 48,96 A24,24 0 0,1 48,48 A24,24 0 0,0 48,0")',
              transform: 'scale(1.05)'  // Slight scale to avoid edge artifacts
            }}
          />
  
          {/* Rotating gradient overlays */}
          <div 
            className="absolute inset-0"
            style={{ animation: 'rotateGradients 8s linear infinite' }}
          >
            {/* Yin side gradient (purples) */}
            <div 
              className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-40"
              style={{
                clipPath: 'path("M48,0 A48,48 0 0,1 48,96 A24,24 0 0,1 48,48 A24,24 0 0,0 48,0")',
                mixBlendMode: 'overlay'
              }}
            />
            
            {/* Yang side gradient (blues) */}
            <div 
              className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-40"
              style={{
                clipPath: 'path("M48,96 A48,48 0 0,1 48,0 A24,24 0 0,0 48,48 A24,24 0 0,1 48,96")',
                mixBlendMode: 'overlay'
              }}
            />
          </div>
  
          {/* Static dots */}
          <div className="absolute left-1/2 top-1/4 w-8 h-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black">
            <div className="absolute inset-1 rounded-full bg-white" />
          </div>
          <div className="absolute left-1/2 top-3/4 w-8 h-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white">
            <div className="absolute inset-1 rounded-full bg-black" />
          </div>
        </div>
      </div>
    );
  };
  
  // Add the rotation keyframe
  if (typeof document !== 'undefined') {
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
      @keyframes rotateGradients {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
    `;
    document.head.appendChild(styleSheet);
  }
  
  export default AnimatedSphere;