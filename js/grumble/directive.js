(function(){
  angular
    .module("Grumblr")
    .directive("grumble", Grumble);

  function Grumble(){
    return{
      restrict: "E",
      replace: true,
      templateUrl: "./js/grumble/view.html"
    }
  }
})();
