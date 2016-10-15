angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {};
  $scope.filterQuery = '';
    
  Links.getAll().then(function(links) {
    $scope.data.links = links;
    $scope.filteredLinks = links;
  });

  $scope.$watch('filterQuery', function() {
    if ($scope.data.links) {
      $scope.filteredLinks = $scope.data.links.filter(function(link) {
        return link.title.toLowerCase().includes($scope.filterQuery.toLowerCase());
      });
    }
  });
});

