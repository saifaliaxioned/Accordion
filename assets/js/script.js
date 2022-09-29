// Accordion function
var accordionList = document.querySelectorAll('.accordion-list');

// accordionList.forEach(function (list) {
//   list.addEventListener('click',function () {
//     var activeList = document.querySelector('.active-list');
//     list.classList.toggle('active-list');
//   });
// });

accordionList.forEach(function (list) {
  list.addEventListener('click',function () {
    var activeList = document.querySelector('.active-list');
    activeList.classList.remove('active-list');
    list.classList.add('active-list');
  });
});























