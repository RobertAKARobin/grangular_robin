(function(){
  angular
    .module("Grumblr")
    .controller("GrumblesController", ["API", "GrumbleFactory", GrumblesController]);

  function GrumblesController($api, $grumble){
    var self = this;
    self.all = [];
    self.getAll = getAll;

    self.getAll();

    return self;

    function getAll(){
      return $api.get("grumbles").then(function(response){
        var x;
        for(x = response.data.length - 1; x > 0; x--){
          self.all.push(new $grumble(response.data[x]));
        }
      });
    }
  }
})();
