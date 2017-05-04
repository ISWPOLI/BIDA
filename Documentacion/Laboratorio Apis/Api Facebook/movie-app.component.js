(function() {

  "use stric";

  var module = angular.module("psMovies");

  module.component("movieApp", {

    templateUrl: "movie-app.component.html",
    $routeConfig:[
      
      {path:"/Home",component:"movieList",name:"List"},
      {path:"/About",component:"appAbout",name:"About"},
      {path:"/Detail/:id",component:"movieDetails",name:"Details"},
      {path:"/**",redirectTo:["List"]}
      ]
  


  });

}());