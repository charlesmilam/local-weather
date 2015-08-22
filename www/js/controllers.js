angular.module('starter.controllers', [])

.controller('CurrentCtrl', function($scope, geoLocation, currConditions) {
  navigator.geolocation.getCurrentPosition(function(position, error) {
    if (error) {
      console.log('position error');
      console.log(err);
      geoLocation.setGeolocation(30.330392, -97.736796)
    }

    geoLocation.setGeolocation(position.coords.latitude, position.coords.longitude);
    geoLocation.setGeoCity();
    geoLocation.getGeoCity();

    currConditions.getCurrConditions();
    // console.log(geoLocation.getGeolocation());
    // console.log(geoLocation.getGeoCity());
  })
})

.controller('ForecastCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('SettingsCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
