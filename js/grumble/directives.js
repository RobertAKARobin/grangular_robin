(function(){
  angular
    .module("Grumblr")
    .directive("grumbleInfo", grumbleInfo)
    .directive("grumbleForm", grumbleForm);

  function grumbleInfo(){
    return{
      restrict: "E",
      replace: true,
      templateUrl: "./js/grumble/views/info.html"
    }
  }

  function grumbleForm(){
    return{
      restrict: "E",
      replace: true,
      templateUrl: "./js/grumble/views/form.html"
    }
  }
})();
