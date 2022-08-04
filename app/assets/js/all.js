// console.log('Hello!');

// $(document).ready(() => {
//   console.log('HesSchool Hello!');
// });


$(function(){
  $('.js-menu-btn').on('click', (e) => { 
    e.preventDefault;
    $('.js-menu').slideToggle();
  });
})