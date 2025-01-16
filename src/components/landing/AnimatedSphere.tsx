const AnimatedSphere = () => {
    return (
      <div className="relative w-96 h-96 max-w-full">
        {/* Base container */}
        <div className="absolute inset-0 rounded-full overflow-hidden">
          {/* Original colored image */}
          <img 
            src="/sideguy.png" 
            alt="Sphere" 
            className="w-full h-full object-cover"
          />
  
          {/* Black and white version */}
          <div className="absolute inset-0">
            <img 
              src="/sideguy.png" 
              alt="Sphere" 
              className="w-full h-full object-cover grayscale"
            />
          </div>
  
          {/* Rotating mask */}
          <div 
            className="absolute inset-0"
            style={{ 
              animation: 'rotateYinYang 4s linear infinite',
              background: 'linear-gradient(90deg, transparent 50%, black 50%)',
              maskImage: 'linear-gradient(90deg, white 50%, transparent 50%)',
              WebkitMaskImage: 'linear-gradient(90deg, white 50%, transparent 50%)',
              transform: 'scale(1.01)'
            }}
          />
        </div>
      </div>
    );
  };
  
  // Add the rotation keyframe
  if (typeof document !== 'undefined') {
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
      @keyframes rotateYinYang {
        from { transform: scale(1.01) rotate(0deg); }
        to { transform: scale(1.01) rotate(360deg); }
      }
    `;
    document.head.appendChild(styleSheet);
  }
  
  export default AnimatedSphere;