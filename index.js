// const animation = gsap.to('#one', {
//   duration: 1,
//   y: 200,
// });

// animation.pause();

// one.addEventListener('click', function () {
//   animation.reverse();
//   console.log('one reversed');
// });

// two.addEventListener('click', function (e) {
//   console.log('two');
// });

// three.addEventListener('click', function (e) {
//   console.log('three');
// });

// four.addEventListener('click', function (e) {
//   animation.play();
//   e.stopPropagation();
//   console.log('four play');
// });

// ! Event Delegation
// container.addEventListener('click', function (e) {
//   console.log(e.target.id);
// });


const animation = gsap.to('#one', {
  duration: 1,
  y: 200,
});

animation.pause();

container.addEventListener('click', function (e) {
  if (e.target.id === 'one') {
    animation.reverse();
    console.log('one reversed');
  }
  if (e.target.id === 'four') {
    animation.play();
    console.log('four play');
  }
});
