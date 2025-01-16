const AnimatedSphere = () => {
    return (
      <div className="relative w-96 h-96 max-w-full">
        {/* Base container */}
        <div className="absolute inset-0 rounded-full overflow-hidden">
          {/* Original colored image (base layer) */}
          <img 
            src="/sphere-image.jpg" 
            alt="Sphere" 
            className="w-full h-full object-cover"
          />
  
          {/* Black and white version of the same image */}
          <div className="absolute inset-0" style={{ mixBlendMode: 'saturation' }}>
            <img 
              src="/sphere-image.jpg" 
              alt="Sphere" 
              className="w-full h-full object-cover grayscale"
            />
          </div>
  
          {/* Rotating mask that reveals/hides the B&W layer */}
          <div 
            className="absolute inset-0"
            style={{ 
              animation: 'rotateYinYang 8s linear infinite',
              backgroundImage: `
                radial-gradient(circle at 50% 25%, black 0, black 18px, transparent 18px),
                radial-gradient(circle at 50% 75%, white 0, white 18px, transparent 18px),
                linear-gradient(90deg, transparent 50%, black 50%)
              `,
              maskImage: `
                radial-gradient(circle at 50% 25%, white 0, white 18px, transparent 18px),
                radial-gradient(circle at 50% 75%, black 0, black 18px, transparent 18px),
                linear-gradient(90deg, white 50%, transparent 50%)
              `,
              WebkitMaskImage: `
                radial-gradient(circle at 50% 25%, white 0, white 18px, transparent 18px),
                radial-gradient(circle at 50% 75%, black 0, black 18px, transparent 18px),
                linear-gradient(90deg, white 50%, transparent 50%)
              `,
              maskComposite: 'source-in',
              WebkitMaskComposite: 'source-in',
              transform: 'scale(1.01)' // Slight scale to avoid edge artifacts
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