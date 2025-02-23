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
//       <div className="relative w-64 h-64 max-w-full">
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
//                   clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)'
//                 }}
//               >
//                 <img 
//                   src="/sideguy.png" 
//                   alt="Left half" 
//                   className="w-full h-full object-cover grayscale"
//                 />
//                 {/* Yin dot (white) */}
//                 {/* <div className="absolute top-[65%] left-[35%] w-16 h-16 rounded-full bg-white" /> */}
//               </div>
  
//               {/* Right side (Yang - Color) */}
//               <div 
//                 className="absolute inset-0"
//                 style={{
//                   clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)'
//                 }}
//               >
//                 <img 
//                   src="/sideguy.png" 
//                   alt="Right half" 
//                   className="w-full h-full object-cover"
//                 />
//                 {/* Yang dot (black) */}
//                 {/* <div className="absolute top-[35%] left-[65%] w-16 h-16 rounded-full bg-black" /> */}
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
//                   clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)'
//                 }}
//               >
//                 <img 
//                   src="/sideguy.png" 
//                   alt="Left half" 
//                   className="w-full h-full object-cover"
//                 />
//                 {/* Yang dot (black) */}
//                 {/* <div className="absolute top-[65%] left-[35%] w-16 h-16 rounded-full bg-black" /> */}
//               </div>
  
//               {/* Right side (Yin - B&W) */}
//               <div 
//                 className="absolute inset-0"
//                 style={{
//                   clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)'
//                 }}
//               >
//                 <img 
//                   src="/sideguy.png" 
//                   alt="Right half" 
//                   className="w-full h-full object-cover grayscale"
//                 />
//                 {/* Yin dot (white) */}
//                 {/* <div className="absolute top-[35%] left-[65%] w-16 h-16 rounded-full bg-white" /> */}
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
//                   clipPath: 'path("M200 0 A200 200 0 0 0 200 400 C 300 300, 350 100, 200 0")'
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
//                   clipPath: 'path("M200 0 A200 200 0 0 1 200 400 C 200 300, 50 100, 200 0")'
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
//                   clipPath: 'path("M200 0 A200 200 0 0 0 200 400 C 300 300, 350 100, 200 0")'
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
//                   clipPath: 'path("M200 0 A200 200 0 0 1 200 400 C 200 300, 50 100, 200 0")'
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

// const AnimatedSphere = () => {
//     return (
//       <div className="relative w-96 h-96 max-w-full">
//         <div className="absolute inset-0 rounded-full overflow-hidden">
//           <div 
//             className="relative w-full h-full" 
//             style={{ animation: 'rotateYinYang 4s linear infinite' }}
//           >
//             {/* Left side (B&W) */}
//             <div 
//               className="absolute inset-0"
//               style={{
//                 clipPath: 'path("M200 0 C100 100, 100 150, 200 200 C300 250, 300 300, 200 400")'
//               }}
//             >
//               <img 
//                 src="/sideguy.png" 
//                 alt="Left half" 
//                 className="w-full h-full object-cover grayscale"
//               />
//               {/* White dot */}
//               <div className="absolute top-[65%] left-[35%] w-16 h-16 rounded-full bg-white" />
//             </div>
  
//             {/* Right side (Color) */}
//             <div 
//               className="absolute inset-0"
//               style={{
//                 clipPath: 'path("M200 0 C300 100, 300 150, 200 200 C100 250, 100 300, 200 400")'
//               }}
//             >
//               <img 
//                 src="/sideguy.png" 
//                 alt="Right half" 
//                 className="w-full h-full object-cover"
//               />
//               {/* Black dot */}
//               <div className="absolute top-[35%] left-[65%] w-16 h-16 rounded-full bg-black" />
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };
  
//   // Add the rotation animation
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
//       <div className="relative w-64 h-64 max-w-full">
//         {/* Particle effects */}
//         <div className="particles absolute inset-0">
//           {[...Array(6)].map((_, i) => (
//             <div
//               key={i}
//               className={`particle-${i} absolute w-2 h-2 bg-yellow-400 rounded-full opacity-0`}
//             />
//           ))}
//         </div>
  
//         <div className="absolute inset-0 rounded-full overflow-hidden">
//           <div 
//             className="sphere relative w-full h-full" 
//           >
//             {/* Left side (B&W) */}
//             <div 
//               className="absolute inset-0"
//               style={{
//                 clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)'
//               }}
//             >
//               <img 
//                 src="/sideguy.png" 
//                 alt="Left half" 
//                 className="w-full h-full object-cover grayscale"
//               />
//               {/* White dot */}
//               <div className="absolute top-[65%] left-[35%] w-8 h-8 rounded-full bg-white" />
//             </div>
  
//             {/* Right side (Color) */}
//             <div 
//               className="absolute inset-0"
//               style={{
//                 clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)'
//               }}
//             >
//               <img 
//                 src="/sideguy.png" 
//                 alt="Right half" 
//                 className="w-full h-full object-cover"
//               />
//               {/* Black dot */}
//               <div className="absolute top-[35%] left-[65%] w-8 h-8 rounded-full bg-black" />
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };
  
//   // Add animations
//   if (typeof document !== 'undefined') {
//     const styleSheet = document.createElement('style');
//     styleSheet.textContent = `
//       .sphere {
//         animation: rotateAndSpeed 8s ease-in-out infinite;
//         transform-origin: center;
//       }
  
//       @keyframes rotateAndSpeed {
//         0% { transform: rotate(0deg); }
//         50% { transform: rotate(180deg); }
//         75% { transform: rotate(540deg); }
//         100% { transform: rotate(720deg); }
//       }
  
//       /* Particle animations */
//       .particles div {
//         animation: particleShoot 2s ease-out infinite;
//       }
  
//       ${[...Array(6)].map((_, i) => `
//         .particle-${i} {
//           left: 50%;
//           top: 50%;
//           animation-delay: ${i * 0.3}s !important;
//           transform-origin: center;
//         }
//       `).join('')}
  
//       @keyframes particleShoot {
//         0% {
//           transform: translate(0, 0) scale(0);
//           opacity: 0;
//         }
//         10% {
//           opacity: 1;
//         }
//         90% {
//           opacity: 1;
//         }
//         100% {
//           opacity: 0;
//           transform: translate(
//             ${(Math.random() * 200) - 100}px,
//             ${(Math.random() * 200) - 100}px
//           ) scale(1);
//         }
//       }
  
//       /* Add a pulse effect */
//       .sphere::before {
//         content: '';
//         position: absolute;
//         inset: -4px;
//         border: 4px solid rgba(255, 255, 255, 0.5);
//         border-radius: 50%;
//         animation: pulse 2s ease-out infinite;
//       }
  
//       @keyframes pulse {
//         0% {
//           transform: scale(1);
//           opacity: 0.5;
//         }
//         100% {
//           transform: scale(1.5);
//           opacity: 0;
//         }
//       }
//     `;
//     document.head.appendChild(styleSheet);
//   }
  
//   export default AnimatedSphere;

// const AnimatedSphere = () => {
//     return (
//       <div className="relative w-64 h-64 max-w-full">
//         {/* Particle effects */}
//         <div className="particles absolute inset-0">
//           {[...Array(6)].map((_, i) => (
//             <div
//               key={i}
//               className={`particle-${i} absolute w-2 h-2 bg-yellow-400 rounded-full opacity-0`}
//             />
//           ))}
//         </div>
  
//         <div className="absolute inset-0 rounded-full overflow-hidden">
//           <div 
//             className="sphere relative w-full h-full" 
//           >
//             {/* Left side (B&W) */}
//             <div 
//               className="absolute inset-0"
//               style={{
//                 clipPath: 'path("M128 32 A50 50 0 1 1 128 128 A50 50 0 1 0 128 224")'
//               }}
//             >
//               <img 
//                 src="/sideguy.png" 
//                 alt="Left half" 
//                 className="w-full h-full object-cover grayscale"
//               />
//             </div>
  
//             {/* Right side (Color) */}
//             <div 
//               className="absolute inset-0"
//               style={{
//                 clipPath: 'path("M128 32 A50 50 0 0 0 128 128 A50 50 0 0 1 128 224")'
//               }}
//             >
//               <img 
//                 src="/sideguy.png" 
//                 alt="Right half" 
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };
  
//   // Add animations
//   if (typeof document !== 'undefined') {
//     const styleSheet = document.createElement('style');
//     styleSheet.textContent = `
//       .sphere {
//         animation: rotateAndSpeed 8s ease-in-out infinite;
//         transform-origin: center;
//       }
  
//       @keyframes rotateAndSpeed {
//         0% { transform: rotate(0deg); }
//         50% { transform: rotate(180deg); }
//         75% { transform: rotate(540deg); }
//         100% { transform: rotate(720deg); }
//       }
  
//       /* Particle animations */
//       .particles div {
//         animation: particleShoot 2s ease-out infinite;
//       }
  
//       ${[...Array(6)].map((_, i) => `
//         .particle-${i} {
//           left: 50%;
//           top: 50%;
//           animation-delay: ${i * 0.3}s !important;
//           transform-origin: center;
//         }
//       `).join('')}
  
//       @keyframes particleShoot {
//         0% {
//           transform: translate(0, 0) scale(0);
//           opacity: 0;
//         }
//         10% {
//           opacity: 1;
//         }
//         90% {
//           opacity: 1;
//         }
//         100% {
//           opacity: 0;
//           transform: translate(
//             ${(Math.random() * 200) - 100}px,
//             ${(Math.random() * 200) - 100}px
//           ) scale(1);
//         }
//       }
  
//       /* Add a pulse effect */
//       .sphere::before {
//         content: '';
//         position: absolute;
//         inset: -4px;
//         border: 4px solid rgba(255, 255, 255, 0.5);
//         border-radius: 50%;
//         animation: pulse 2s ease-out infinite;
//       }
  
//       @keyframes pulse {
//         0% {
//           transform: scale(1);
//           opacity: 0.5;
//         }
//         100% {
//           transform: scale(1.5);
//           opacity: 0;
//         }
//       }
//     `;
//     document.head.appendChild(styleSheet);
//   }
  
//   export default AnimatedSphere;

// const AnimatedSphere = () => {
//     return (
//       <div className="relative w-64 h-64 max-w-full">
//         <div className="absolute inset-0 rounded-full overflow-hidden">
//           {/* Color switching layers */}
//           <div className="relative w-full h-full">
//             {/* First state (0-180 degrees) */}
//             <div className="absolute inset-0">
//               {/* Left side (Yin - B&W) */}
//               <div 
//                 className="absolute inset-0"
//                 style={{
//                   clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)'
//                 }}
//               >
//                 <img 
//                   src="/sideguy.png" 
//                   alt="Left half" 
//                   className="w-full h-full object-cover grayscale"
//                 />
//               </div>
  
//               {/* Right side (Yang - Color) */}
//               <div 
//                 className="absolute inset-0"
//                 style={{
//                   clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)'
//                 }}
//               >
//                 <img 
//                   src="/sideguy.png" 
//                   alt="Right half" 
//                   className="w-full h-full object-cover"
//                 />
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
//                   clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)'
//                 }}
//               >
//                 <img 
//                   src="/sideguy.png" 
//                   alt="Left half" 
//                   className="w-full h-full object-cover"
//                 />
//               </div>
  
//               {/* Right side (Yin - B&W) */}
//               <div 
//                 className="absolute inset-0"
//                 style={{
//                   clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)'
//                 }}
//               >
//                 <img 
//                   src="/sideguy.png" 
//                   alt="Right half" 
//                   className="w-full h-full object-cover grayscale"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };
  
//   // Add color switching keyframes
//   if (typeof document !== 'undefined') {
//     const styleSheet = document.createElement('style');
//     styleSheet.textContent = `
//       @keyframes colorSwitch {
//         0% { opacity: 0; }
//         24.99% { opacity: 0; }
//         25% { opacity: 1; }
//         74.99% { opacity: 1; }
//         75% { opacity: 0; }
//       }
//     `;
//     document.head.appendChild(styleSheet);
//   }
  
//   export default AnimatedSphere;

"use client"
const AnimatedSphere = () => {
    return (
      <div className="relative w-64 h-64 max-w-full">
        <div className="absolute inset-0 rounded-full overflow-hidden">
          {/* Base sphere with color switching layers */}
          <div className="relative w-full h-full">
            {/* Glow effect container */}
            <div className="glow-container absolute inset-0 rounded-full" />
            
            {/* First state (0-180 degrees) */}
            <div className="absolute inset-0">
              {/* Left side (Yin - B&W) */}
              <div 
                className="absolute inset-0"
                style={{
                  clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)'
                }}
              >
                <img 
                  src="/sideguy.png" 
                  alt="Left half" 
                  className="w-full h-full object-cover grayscale"
                />
              </div>
  
              {/* Right side (Yang - Color) */}
              <div 
                className="absolute inset-0"
                style={{
                  clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)'
                }}
              >
                <img 
                  src="/sideguy.png" 
                  alt="Right half" 
                  className="w-full h-full object-cover"
                />
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
                  clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)'
                }}
              >
                <img 
                  src="/sideguy.png"
                  alt="Left half" 
                  className="w-full h-full object-cover"
                />
              </div>
  
              {/* Right side (Yin - B&W) */}
              <div 
                className="absolute inset-0"
                style={{
                  clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)'
                }}
              >
                <img 
                  src="/sideguy.png" 
                  alt="Right half" 
                  className="w-full h-full object-cover grayscale"
                />
              </div>
            </div>
  
            {/* Radar Overlay */}
            <div className="radar-sweep absolute inset-0">
              {/* Particle trails */}
              <div className="particles absolute inset-0">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className={`particle-${i} absolute w-1 h-1 bg-gradient-to-r from-gray-200 to-green-200 rounded-full opacity-0`}
                  />
                ))}
              </div>
            </div>
            
            {/* Center point pulse */}
            <div className="center-point absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-ping" />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  // Add animations
  if (typeof document !== 'undefined') {
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
      @keyframes colorSwitch {
        0% { opacity: 0; }
        24.99% { opacity: 0; }
        25% { opacity: 1; }
        74.99% { opacity: 1; }
        75% { opacity: 0; }
      }
  
      .radar-sweep {
        animation: radarSweep 4s linear infinite;
      }
  
      .radar-sweep::before {
        content: '';
        position: absolute;
        width: 50%;
        height: 100%;
        top: 0;
        left: 50%;
        transform-origin: left;
        background: linear-gradient(90deg, 
            rgba(75, 85, 99, 0) 0%,
            rgba(34, 197, 94, 0.4) 50%,
            rgba(75, 85, 99, 0) 100%
        );
        filter: blur(5px);
        pointer-events: none;
      }
  
      .glow-container::before {
        content: '';
        position: absolute;
        inset: -2px;
        background: radial-gradient(circle at var(--x, 50%) var(--y, 50%), 
          rgba(96, 165, 200, 0.3) 0%,
          rgba(96, 165, 200, 0) 60%
        );
        animation: moveGlow 4s linear infinite;
      }
  
      @keyframes moveGlow {
        0% { --x: 50%; --y: 0%; }
        25% { --x: 100%; --y: 50%; }
        50% { --x: 50%; --y: 100%; }
        75% { --x: 0%; --y: 50%; }
        100% { --x: 50%; --y: 0%; }
      }
  
      @keyframes radarSweep {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
  
      /* Particle animations */
      .particles div {
        animation: particleFade 1s ease-out infinite;
      }
  
      ${[...Array(8)].map((_, i) => `
        .particle-${i} {
          left: 50%;
          top: 50%;
          transform: rotate(${i * 45}deg) translateY(${20 + (i % 3) * 10}px);
          animation-delay: ${i * 0.5}s !important;
        }
      `).join('')}
  
      @keyframes particleFade {
        0% {
          opacity: 0;
          transform: scale(0);
        }
        20% {
          opacity: 0.8;
          transform: scale(1);
        }
        100% {
          opacity: 0;
          transform: scale(1.5);
        }
      }
    `;
    document.head.appendChild(styleSheet);
  }
  
  export default AnimatedSphere;