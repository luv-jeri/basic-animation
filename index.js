// gsap.registerPlugin(ScrollTrigger);

// gsap.from('#up', {
//   x: 1000,
//   opacity: 1,
//   duration: 2,

//   scrollTrigger: {
//     trigger: '#up',
//     start: 'top center',
//     end: 'top 30%',
//     // scrub: 1,
//     markers: true,
//     toggleActions: 'play reverse restart reverse', // play reverse restart reverse reset pause resume pauseResume reverseResume
//     onLeave: function (e) {
//       console.log('onLeave');
//     },
//   },
// });

gsap.to('h1', {
  scale: 5,
  scrollTrigger: {
    trigger: 'section',
    start: 'top center',
    end: '-=500',
    markers: true,
    scrub: 1,
  },
});
