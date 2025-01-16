// const AnimatedSphere = () => {
//     return (
//       <div className="relative w-96 h-96 max-w-full">
//         <div className="absolute inset-0 rounded-full overflow-hidden">
//           {/* Container for both halves that will rotate */}
//           <div 
//             className="relative w-full h-full" 
//             style={{ animation: 'rotateYinYang 4s linear infinite' }}
//           >
//             {/* Left half (Yin - B&W) */}
//             <div className="absolute inset-0">
//               <div 
//                 className="absolute inset-0"
//                 style={{
//                   clipPath: 'path("M200 0 A200 200 0 0 0 200 400 A100 100 0 0 0 200 200 A100 100 0 0 1 200 0")'
//                 }}
//               >
//                 <img 
//                   src="/sideguy.png" 
//                   alt="Left half" 
//                   className="w-full h-full object-cover grayscale"
//                 />
//               </div>
//               {/* Yin dot */}
//               <div className="absolute top-3/4 left-1/2 w-12 h-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gray-800" />
//             </div>
  
//             {/* Right half (Yang - Color) */}
//             <div className="absolute inset-0">
//               <div 
//                 className="absolute inset-0"
//                 style={{
//                   clipPath: 'path("M200 0 A200 200 0 0 1 200 400 A100 100 0 0 1 200 200 A100 100 0 0 0 200 0")'
//                 }}
//               >
//                 <img 
//                   src="/sideguy.png" 
//                   alt="Right half" 
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               {/* Yang dot */}
//               <div className="absolute top-1/4 left-1/2 w-12 h-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gray-200" />
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };
  
//   // Add the rotation keyframes
//   if (typeof document !== 'undefined') {
//     const styleSheet = document.createElement('style');
//     styleSheet.textContent = `
//       @keyframes rotateYinYang {
//         from { transform: rotate(0deg); }
//         to { transform: rotate(360deg); }
//       }
//     `;
//     document.head.appendChild(styleSheet);
//   }
  
//   export default AnimatedSphere;

// const AnimatedSphere = () => {
//     return (
//       <div className="relative w-96 h-96 max-w-full">
//         <div className="absolute inset-0 rounded-full overflow-hidden">
//           {/* Color switching layers */}
//           <div 
//             className="relative w-full h-full" 
//             style={{ animation: 'rotateYinYang 4s linear infinite' }}
//           >
//             {/* First state (0-180 degrees) */}
//             <div className="absolute inset-0">
//               {/* Left side (Yin - B&W) */}
//               <div 
//                 className="absolute inset-0"
//                 style={{
//                   clipPath: 'path("M200 0 A200 200 0 0 0 200 400 Q 300 300, 350 200 Q 300 100, 200 0")'
//                 }}
//               >
//                 <img 
//                   src="/sideguy.png" 
//                   alt="Left half" 
//                   className="w-full h-full object-cover grayscale"
//                 />
//                 {/* Yin dot (transparent) */}
//                 <div className="absolute top-[60%] left-[35%] w-16 h-16 rounded-full bg-transparent border-2 border-white" />
//               </div>
  
//               {/* Right side (Yang - Color) */}
//               <div 
//                 className="absolute inset-0"
//                 style={{
//                   clipPath: 'path("M200 0 A200 200 0 0 1 200 400 Q 100 300, 50 200 Q 100 100, 200 0")'
//                 }}
//               >
//                 <img 
//                   src="/sideguy.png" 
//                   alt="Right half" 
//                   className="w-full h-full object-cover"
//                 />
//                 {/* Yang dot (black) */}
//                 <div className="absolute top-[40%] left-[65%] w-16 h-16 rounded-full bg-black" />
//               </div>
//             </div>
  
//             {/* Second state (180-360 degrees) - colors reversed */}
//             <div 
//               className="absolute inset-0"
//               style={{
//                 opacity: 0,
//                 animation: 'colorSwitch 4s linear infinite'
//               }}
//             >
//               {/* Left side (Yang - Color) */}
//               <div 
//                 className="absolute inset-0"
//                 style={{
//                   clipPath: 'path("M200 0 A200 200 0 0 0 200 400 Q 300 300, 350 200 Q 300 100, 200 0")'
//                 }}
//               >
//                 <img 
//                   src="/sideguy.png" 
//                   alt="Left half" 
//                   className="w-full h-full object-cover"
//                 />
//                 {/* Yang dot (black) */}
//                 <div className="absolute top-[60%] left-[35%] w-16 h-16 rounded-full bg-black" />
//               </div>
  
//               {/* Right side (Yin - B&W) */}
//               <div 
//                 className="absolute inset-0"
//                 style={{
//                   clipPath: 'path("M200 0 A200 200 0 0 1 200 400 Q 100 300, 50 200 Q 100 100, 200 0")'
//                 }}
//               >
//                 <img 
//                   src="/sideguy.png" 
//                   alt="Right half" 
//                   className="w-full h-full object-cover grayscale"
//                 />
//                 {/* Yin dot (transparent) */}
//                 <div className="absolute top-[40%] left-[65%] w-16 h-16 rounded-full bg-transparent border-2 border-white" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };
  
//   // Add the rotation and color switching keyframes
//   if (typeof document !== 'undefined') {
//     const styleSheet = document.createElement('style');
//     styleSheet.textContent = `
//       @keyframes rotateYinYang {
//         from { transform: rotate(0deg); }
//         to { transform: rotate(360deg); }
//       }
  
//       @keyframes colorSwitch {
//         0% { opacity: 0; }
//         49.99% { opacity: 0; }
//         50% { opacity: 1; }
//         99.99% { opacity: 1; }
//         100% { opacity: 0; }
//       }
//     `;
//     document.head.appendChild(styleSheet);
//   }
  
//   export default AnimatedSphere;

// const AnimatedSphere = () => {
//     return (
//       <div className="relative w-96 h-96 max-w-full">
//         <div className="absolute inset-0 rounded-full overflow-hidden">
//           {/* Color switching layers */}
//           <div 
//             className="relative w-full h-full" 
//             style={{ animation: 'rotateYinYang 4s linear infinite' }}
//           >
//             {/* First state (0-180 degrees) */}
//             <div className="absolute inset-0">
//               {/* Left side (Yin - B&W) */}
//               <div 
//                 className="absolute inset-0"
//                 style={{
//                   clipPath: 'path("M200 0 A200 200 0 0 0 200 400 Q 300 200, 200 0")'
//                 }}
//               >
//                 <img 
//                   src="/sideguy.png" 
//                   alt="Left half" 
//                   className="w-full h-full object-cover grayscale"
//                 />
//                 {/* Yin dot (white) */}
//                 <div className="absolute top-[65%] left-[35%] w-16 h-16 rounded-full bg-white" />
//               </div>
  
//               {/* Right side (Yang - Color) */}
//               <div 
//                 className="absolute inset-0"
//                 style={{
//                   clipPath: 'path("M200 0 A200 200 0 0 1 200 400 Q 100 200, 200 0")'
//                 }}
//               >
//                 <img 
//                   src="/sideguy.png" 
//                   alt="Right half" 
//                   className="w-full h-full object-cover"
//                 />
//                 {/* Yang dot (black) */}
//                 <div className="absolute top-[35%] left-[65%] w-16 h-16 rounded-full bg-black" />
//               </div>
//             </div>
  
//             {/* Second state (180-360 degrees) - colors reversed */}
//             <div 
//               className="absolute inset-0"
//               style={{
//                 opacity: 0,
//                 animation: 'colorSwitch 4s linear infinite'
//               }}
//             >
//               {/* Left side (Yang - Color) */}
//               <div 
//                 className="absolute inset-0"
//                 style={{
//                   clipPath: 'path("M200 0 A200 200 0 0 0 200 400 Q 300 200, 200 0")'
//                 }}
//               >
//                 <img 
//                   src="/sideguy.png" 
//                   alt="Left half" 
//                   className="w-full h-full object-cover"
//                 />
//                 {/* Yang dot (black) */}
//                 <div className="absolute top-[65%] left-[35%] w-16 h-16 rounded-full bg-black" />
//               </div>
  
//               {/* Right side (Yin - B&W) */}
//               <div 
//                 className="absolute inset-0"
//                 style={{
//                   clipPath: 'path("M200 0 A200 200 0 0 1 200 400 Q 100 200, 200 0")'
//                 }}
//               >
//                 <img 
//                   src="/sideguy.png" 
//                   alt="Right half" 
//                   className="w-full h-full object-cover grayscale"
//                 />
//                 {/* Yin dot (white) */}
//                 <div className="absolute top-[35%] left-[65%] w-16 h-16 rounded-full bg-white" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };
  
//   // Add the rotation and color switching keyframes
//   if (typeof document !== 'undefined') {
//     const styleSheet = document.createElement('style');
//     styleSheet.textContent = `
//       @keyframes rotateYinYang {
//         from { transform: rotate(0deg); }
//         to { transform: rotate(360deg); }
//       }
  
//       @keyframes colorSwitch {
//         0% { opacity: 0; }
//         49.99% { opacity: 0; }
//         50% { opacity: 1; }
//         99.99% { opacity: 1; }
//         100% { opacity: 0; }
//       }
//     `;
//     document.head.appendChild(styleSheet);
//   }
  
//   export default AnimatedSphere;

const AnimatedSphere = () => {
    return (
      <div className="relative w-96 h-96 max-w-full">
        <div className="absolute inset-0 rounded-full overflow-hidden">
          {/* Color switching layers */}
          <div 
            className="relative w-full h-full" 
            style={{ animation: 'rotateYinYang 4s linear infinite' }}
          >
            {/* First state (0-180 degrees) */}
            <div className="absolute inset-0">
              {/* Left side (Yin - B&W) */}
              <div 
                className="absolute inset-0"
                style={{
                  clipPath: 'path("M200 0 A200 200 0 0 0 200 400 C 350 300, 350 100, 200 0")'
                }}
              >
                <img 
                  src="/sideguy.png" 
                  alt="Left half" 
                  className="w-1/2 h-1/2 object-cover grayscale"
                />
                {/* Yin dot (white) */}
                <div className="absolute top-[65%] left-[35%] w-16 h-16 rounded-full bg-white" />
              </div>
  
              {/* Right side (Yang - Color) */}
              <div 
                className="absolute inset-0"
                style={{
                  clipPath: 'path("M200 0 A200 200 0 0 1 200 400 C 50 300, 50 100, 200 0")'
                }}
              >
                <img 
                  src="/sideguy.png" 
                  alt="Right half" 
                  className="w-1/2 h-1/2 object-cover"
                />
                {/* Yang dot (black) */}
                <div className="absolute top-[35%] left-[65%] w-16 h-16 rounded-full bg-black" />
              </div>
            </div>
  
            {/* Second state (180-360 degrees) - colors reversed */}
            <div 
              className="absolute inset-0"
              style={{
                opacity: 0,
                animation: 'colorSwitch 4s linear infinite'
              }}
            >
              {/* Left side (Yang - Color) */}
              <div 
                className="absolute inset-0"
                style={{
                  clipPath: 'path("M200 0 A200 200 0 0 0 200 400 C 250 300, 350 100, 200 0")'
                }}
              >
                <img 
                  src="/sideguy.png" 
                  alt="Left half" 
                  className="w-full h-full object-cover"
                />
                {/* Yang dot (black) */}
                <div className="absolute top-[65%] left-[35%] w-16 h-16 rounded-full bg-black" />
              </div>
  
              {/* Right side (Yin - B&W) */}
              <div 
                className="absolute inset-0"
                style={{
                  clipPath: 'path("M200 0 A200 200 0 0 1 200 400 C 150 300, 50 100, 200 0")'
                }}
              >
                <img 
                  src="/sideguy.png" 
                  alt="Right half" 
                  className="w-full h-full object-cover grayscale"
                />
                {/* Yin dot (white) */}
                <div className="absolute top-[35%] left-[65%] w-16 h-16 rounded-full bg-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  // Add the rotation and color switching keyframes
  if (typeof document !== 'undefined') {
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
      @keyframes rotateYinYang {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
  
      @keyframes colorSwitch {
        0% { opacity: 0; }
        49.99% { opacity: 0; }
        50% { opacity: 1; }
        99.99% { opacity: 1; }
        100% { opacity: 0; }
      }
    `;
    document.head.appendChild(styleSheet);
  }
  
  export default AnimatedSphere;