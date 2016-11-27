angular.module('main').directive('chart', function(){
	return {
		templateUrl: 'app/chart/chart.html',
		controller: function($scope){
			$scope.chartLabels = [];
  			$scope.pieData = [];
  			$scope.horizontalBarData = [];
			
			$scope.$watch('employeesStatistics', function(_new, _old){
				if (_new !== _old){
					initStatistics();
				};
			});

			function initStatistics(){
				emptyAllData();
				for (i = 0; i < $scope.employeesStatistics.length; i++){
					$scope.pieData.push($scope.employeesStatistics[i].count); 
					$scope.chartLabels.push($scope.employeesStatistics[i].position);
					$scope.horizontalBarData.push(Math.round($scope.employeesStatistics[i].age));
				};
			};

			function emptyAllData() {
				$scope.chartLabels = [];
  				$scope.pieData = [];
  				$scope.horizontalBarData = [];	
			}			
		}
	};
});