"use strict";

(function() {
  angular.module("rudiQuartier")
    .controller("beeldCtrl", BeeldCtrl);

  function BeeldCtrl($http, apiUrl, $location, dataService) {
    var that = this;

    (function() {
      // alert("test2");

      // var folder = "/images/Keramiek/";
      //
      // $.ajax({
      //   url : "../images",
      //   success: function (data) {
      //     $(data).find("a").attr("href", function (i, val) {
      //       if( val.match(/\.(jpe?g|png|gif)$/) ) {
      //         $("body").append( "<img src='"+ folder + val +"'>" );
      //       }
      //     });
      //   }
      // });

    })();
  }


})();
