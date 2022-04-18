// const tween = {
//   duration: 2,
//   y: '300px',
//   ease: 'bounce.out',
// };

// gsap.to('#a', { ...tween, rotate: 360 });
// gsap.to('#b', { ...tween, delay: 1.3 });
// gsap.to('#b', { ...tween, delay: 2.6, y: '-300px' });
// gsap.to('#c', { ...tween, delay: 3.9 });

// const timeLine = gsap.timeline({
//   delay : 1,
//   defaults: { duration: 2, y: '300px', ease: 'bounce.out' },
// });

// // timeLine.to('#a', { ...tween, rotate: 360 });
// // timeLine.to('#b', { ...tween });
// // timeLine.to('#b', { ...tween, y: '-300px' });
// // timeLine.to('#c', { ...tween });

// timeLine.to('#a', { rotate: 360 }).to('#b', {}).to('#b', { y: '-300px' }).to('#c', {});

// gsap.from('#a', {
//   duration: 2,
//   ease: 'bounce.out',
//   y: '300px',
//   rotate: 360,
// });

// const animation = gsap.from('#a', {
//   y: '-300px',
//   rotate: 360,
//   duration: 3,
// });

// const animation = gsap.timeline({
//   defaults: { duration: 2, y: '300px', ease: 'bounce.out' },
// });

// animation.from('#a', { rotate: 360 }).to('#a', {}).to('#a', { y: '-300px' }).to('#a', {});

// animation.pause();

// start.addEventListener('click', () => {
//   animation.play();
// });

// resume.addEventListener('click', () => {
//   animation.resume();
// });

// pause.addEventListener('click', () => {
//   animation.pause();
// });

// reverse.addEventListener('click', () => {
//   animation.reverse();
// });

gsap.from('#a', {
  y: '-300px',
  rotate: 360,
});
