"use strict";

(function() {
  angular.module("rudiQuartier.core").factory("customHeaderService", function() {
    return {
      request: function(config) {
        config.headers["myHeader"] = "Rudi Quartier";
        return config;
      }
    }
  });
})();
