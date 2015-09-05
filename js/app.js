(function(){
  angular
    .module("Grumblr", []);

})();

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

(function(){
  angular
    .module("Grumblr")
    .factory("Comment", ["API", Comment]);

  function Comment($api){

  }
})();

(function(){
  angular
    .module("Grumblr")
    .factory("Grumble", ["API", Grumble]);

  function Grumble($api){
    return function(input){
      var self = this;
      self.comments = [];
      self.getComments = getComments;
      self.toggleEditing = toggleEditing;
      angular.extend(self, input);
      self.getComments();
    }

    function toggleEditing(){
      this.editing = this.editing ? false : true;
    }

    function getComments(){
      var self = this;
      $api
        .get("grumbles/" + self.id + "/comments")
        .then(function(response){
          self.comments = response.data;
        });
    }
  }
})();

(function(){

})();

(function(){
  angular
    .module("Grumblr")
    .controller("GrumblesController", ["API", "Grumble", GrumblesController]);

  function GrumblesController($api, Grumble){
    var self = {};
    self.all = [];
    self.getAll = getAll;
    self.getAll();
    return self;

    function getAll(){
      return $api.get("grumbles").then(function(response){
        var x;
        for(x = response.data.length - 1; x > 0; x--){
          self.all.push(new Grumble(response.data[x]));
        }
      });
    }
  }
})();
