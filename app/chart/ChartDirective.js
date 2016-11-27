angular.module('main').directive('chart', function(){
	return {
		templateUrl: 'app/chart/chart.html',
		controller: function($scope){
			$scope.chartLabels = [];
  			$scope.pieData = [];
  			$scope.horizontalBarData = [];
			
			$scope.$watch('employeeStatistics', function(_new, _old){
				if (_new !== _old){
					initStatistics();
				};
			});

			function initStatistics(){
				emptyAllData();
				for (i = 0; i < $scope.employeeStatistics.length; i++){
					$scope.pieData.push($scope.employeeStatistics[i].count); 
					$scope.chartLabels.push($scope.employeeStatistics[i].position);
					$scope.horizontalBarData.push(Math.round($scope.employeeStatistics[i].age));
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