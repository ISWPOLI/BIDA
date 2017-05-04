(function() {

  "use stric";

  var module = angular.module("psMovies");

  module.component("movieRating", {

    templateUrl: "movie-rating.component.html",
    bindings: {

      value: "<"

    },
    transclude: true,
    controllerAs: "model",
    controller: function() {
      var modelr = this;

      function matrizRating() {
        modelr.entries = new Array(modelr.value);
      }

      modelr.$onChanges = matrizRating;
      modelr.$onInit = matrizRating;


    }

  });

}());