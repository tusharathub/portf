// import { gsap } from "gsap";

// export function scrambleText(element: HTMLElement, originalText: string) {
//   const chars = "!<>-_\\/[]";
//   const duration = 0.8;
//   const steps = Math.floor(duration * 60);
//   let frame = 0;

//   const scramble = () => {
//     let output = "";
//     for (let i = 0; i < originalText.length; i++) {
//       if (Math.random() < frame / steps) {
//         output += originalText[i];
//       } else {
//         output += chars[Math.floor(Math.random() * chars.length)];
//       }
//     }

//     element.textContent = output;

//     if (frame++ < steps) {
//       requestAnimationFrame(scramble);
//     } else {
//       element.textContent = originalText;
//     }
//   };

//   scramble();
// }
