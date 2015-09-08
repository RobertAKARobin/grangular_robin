(function(){
  angular
    .module("Grumblr")
    .factory("GrumbleFactory", ["API", GrumbleFactory]);

  function GrumbleFactory($api){
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

    function update(){

    }
  }
})();
