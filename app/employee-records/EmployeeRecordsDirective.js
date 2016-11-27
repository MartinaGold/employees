angular.module('main').directive('employeeRecords', function(){
	return {
		templateUrl: 'app/employee-records/employee-records.html',
		controller: function($scope, EmployeeService, $mdDialog, $rootScope){
			$scope.employee = {
				age: '',
				name: '',
				position: ''
			};
			$scope.employees = [];

			initAllEmployees();

			$scope.addNewEmployee = function(){
				EmployeeService.addNewEmployee($scope.employee).then(function(){
					broadcastEmployeesChanged();
					initAllEmployees();
				});
			};

			$scope.removeEmployee = function(index, employeeId){
				var confirm = $mdDialog.confirm()
				    .title('Smazat zaměstnance')
				    .textContent('Opravdu chcete zaměsnance smazat?')
				    .ok('Ano')
				    .cancel('Ne');

				$mdDialog.show(confirm).then(function() {
		    		EmployeeService.removeEmployee(employeeId).then(function(){
		    			broadcastEmployeesChanged();
		    			$scope.employees.splice(index, 1)
		    		});		
		    	});
			};

			$scope.isFormValid = function(form) {
				return form.$valid;
			};

			function broadcastEmployeesChanged(){
				$rootScope.$broadcast('EMPLOYEES_CHANGED');
			}

			function initAllEmployees(){
				EmployeeService.getAllEmployees().then(function(employees){
					$scope.employees = employees;
				});
			}
		}
	};
});