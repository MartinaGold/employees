angular.module('main').controller('Main', function($scope, EmployeeService){
	$scope.employeesStatistics = [];

	getEmployeesStatistics();

	$scope.$on('EMPLOYEES_CHANGED', getEmployeesStatistics);

	function getEmployeesStatistics() {
		EmployeeService.getEmployeesStatistics().then(function(employeesStatistics){
			$scope.employeesStatistics = employeesStatistics;
		});
	}
});