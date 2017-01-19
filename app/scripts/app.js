"use strict";

(function() {
  angular.module("rudiQuartier", ["rudiQuartier.core", "rudiQuartier.config"])
    .config(function(appVersion) {
      console.log("config movieCatalog" + appVersion);
    });
})();
