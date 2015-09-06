(function(){
  angular
    .module("Grumblr")
    .factory("API", ["$http", API]);

  function API($http){
    var baseURL = "http://grumblr.wdidc.org/";
    return {
      get: function(endpoint){
        return $http.get(baseURL + endpoint);
      },
      post: function(endpoint){
        return $http.post(baseURL + endpoint);
      },
      put: function(endpoint){

      }
    }
  }
})();
