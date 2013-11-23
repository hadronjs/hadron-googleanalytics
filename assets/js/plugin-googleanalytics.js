
(function(shatter) {
  shatter.use('saveSettingsCtrl', 'controllerImpl', function($scope) {
    $scope.saveGA = function(settings, invalid) {
      return $scope.save('googleAnalyticsCode', settings, invalid);
    };
  });
})(window.shatter);