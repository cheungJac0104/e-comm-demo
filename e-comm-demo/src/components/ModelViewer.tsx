// // components/ModelViewer.tsx
// 'use client';

// import { useEffect, useRef } from 'react';
// import '@google/model-viewer';
// /// <reference path="../types/model-viewer.d.ts" />

// export default function ModelViewer({ src }: { src: string }) {
//   const modelRef = useRef<HTMLElement>(null);

//   useEffect(() => {
//     // Component mount logic if needed
//     return () => {
//       // Cleanup logic if needed
//     };
//   }, []);

//   return (
//     <model-viewer
//       ref={modelRef}
//       src={src}
//       ar
//       camera-controls
//       style={{ width: '100%', height: '400px' }}
//     />
//   );
// }