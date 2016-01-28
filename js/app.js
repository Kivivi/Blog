  angular
    
    // 1) Déclaration de mon ng-app + le module qui intéragit avec mon application 'ngRoute'
    .module('MonApp', ['ngRoute'])
    
    // 2)* Suite à la déclaration du module 'ngRoute', il est nécessaire de configurer notre système de route
    // Permet la navigation entre les pages
    .config(['$routeProvider',  function($routeProvider) {
        
        $routeProvider
            .when('/', {
                templateUrl: 'home.html',
                //controller: 'blogsCtrl'
            })
            .when('/article', {
                templateUrl: 'article.html',
                //controller: 'PhoneDetailCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }])
  
    // Tous les traitement de notre controller blogsCtrl
    .controller('blogsCtrl', function($scope, $http) {
      
        // Charger les valeurs stocké en JSON
          $http.get('json/articles.json').success(function(data) {
            $scope.blogs = data;
          });
    });
    