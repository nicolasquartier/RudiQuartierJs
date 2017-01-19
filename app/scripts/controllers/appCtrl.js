"use strict";

(function() {
  angular.module("rudiQuartier")
    .controller("appCtrl", AppCtrl);

  function AppCtrl(appVersion) {
    var that = this;
    that.ver = appVersion;
  }


})();
