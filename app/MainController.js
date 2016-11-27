angular.module('main').controller('Main', function($scope, EmployeeService){
	$scope.employeeStatistics = [];

	getEmployeeStatistics();

	$scope.$on('EMPLOYEES_CHANGED', getEmployeeStatistics);

	function getEmployeeStatistics() {
		EmployeeService.getEmployeeStatistics().then(function(employeeStatistics){
			$scope.employeeStatistics = employeeStatistics;
		});
	}
});