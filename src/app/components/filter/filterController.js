angular.module('filter.controller', [])
.controller('filterController', ['$scope', function ($scope) {

  var slider = new Swiper('.filters', {
    effect: 'fade'
  });
  var thumbs = new Swiper('.filter-thumbs', {
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: 'auto',
    touchRatio: 1,
    slideToClickedSlide: true,
    preventClicks: false,
    preventClicksPropagation: false
  });



  slider.params.control = thumbs;
  thumbs.params.control = slider;
}]);