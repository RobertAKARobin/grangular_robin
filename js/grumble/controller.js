(function(){
  angular
    .module("Grumblr")
    .controller("GrumblesController", ["API", "GrumbleFactory", GrumblesController]);

  function GrumblesController($api, GrumbleFactory){
    var self = this;
    getAll();

    return self;

    function getAll(){
      self.all = [];
      return $api.get("grumbles").then(function(response){
        var x;
        for(x = response.data.length - 1; x > 0; x--){
          self.all.push(new GrumbleFactory(response.data[x]));
        }
      });
    }
  }
})();
