angular.module("LocalWeather.weather-settings")
.controller('SettingsCtrl', function($scope, ChangeUnits) {
  $scope.settings = {
    enableMetric: ChangeUnits.getIsMetric()
  };
  $scope.toggleChange = function() {
    ChangeUnits.setIsMetric($scope.settings.enableMetric);
    $scope.metricNotificationChange();
    // $scope.getConditions;
  };

  $scope.metricNotificationChange = function() {
   console.log('metric changed', $scope.settings.enableMetric);
  };

});
