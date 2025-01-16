const AnimatedSphere = () => {
    return (
      <div className="relative w-96 h-96 max-w-full">
        <div className="absolute inset-0 rounded-full overflow-hidden">
          {/* Original colored image */}
          <img 
            src="/sideguy.png" 
            alt="Sphere" 
            className="w-full h-full object-cover"
          />
  
          {/* Black and white version with rotating yin-yang mask */}
          <div 
            className="absolute inset-0"
            style={{
              animation: 'rotateYinYang 4s linear infinite'
            }}
          >
            <img 
              src="/sideguy.png" 
              alt="Sphere" 
              className="w-full h-full object-cover grayscale"
              style={{
                maskImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M185.833 0.214 C 62.358 7.852,-22.118 122.875,5.199 246.167 C 28.266 350.280,127.736 415.182,236.344 396.984 C 289.830 388.023,337.459 356.898,367.158 311.500 C 370.631 306.192,371.574 304.629,375.411 297.833 C 396.625 260.258,404.944 209.713,397.150 165.749 C 392.794 141.182,385.665 120.329,375.411 102.167 C 371.574 95.371,370.631 93.808,367.158 88.500 C 337.459 43.103,289.827 11.976,236.344 3.016 C 221.013 0.448,200.473 -0.692,185.833 0.214' fill='white'/%3E%3C/svg%3E")`,
                WebkitMaskImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M185.833 0.214 C 62.358 7.852,-22.118 122.875,5.199 246.167 C 28.266 350.280,127.736 415.182,236.344 396.984 C 289.830 388.023,337.459 356.898,367.158 311.500 C 370.631 306.192,371.574 304.629,375.411 297.833 C 396.625 260.258,404.944 209.713,397.150 165.749 C 392.794 141.182,385.665 120.329,375.411 102.167 C 371.574 95.371,370.631 93.808,367.158 88.500 C 337.459 43.103,289.827 11.976,236.344 3.016 C 221.013 0.448,200.473 -0.692,185.833 0.214' fill='white'/%3E%3C/svg%3E")`,
                maskSize: 'contain',
                WebkitMaskSize: 'contain',
                maskRepeat: 'no-repeat',
                WebkitMaskRepeat: 'no-repeat',
                maskPosition: 'center',
                WebkitMaskPosition: 'center'
              }}
            />
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