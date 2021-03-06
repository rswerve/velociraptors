// invokes function from mainFactory.js to sign in a user
myApp.controller('SigninController', function($scope, Auth, $window) {
  $scope.user = {};
  $scope.signin = function(user) {
    Auth.signin(user).then(function(user){
      if(!user.email){
        console.log('Wrong username and password');
      } else{
        Auth.setLoggedIn(true);
        // redirect
        $window.location.href = '/#/create';
      }
    });
  };
});
