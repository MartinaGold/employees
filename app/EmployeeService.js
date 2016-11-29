var app = angular.module('main');

app.factory('EmployeeService', function($http, $q){
	var employeeService = {};
    var API_COMMANDS = {
        ADD_NEW_EMPLOYEE: 'http://devel.usu.co.at:1504/HRDemo/api/employees',
        GET_ALL_EMPLOYEES: 'http://devel.usu.co.at:1504/HRDemo/api/employees',
        REMOVE_EMPLOYEE: 'http://devel.usu.co.at:1504/HRDemo/api/employees',
        GET_EMPLOYEE_STATISTICS: 'http://devel.usu.co.at:1504/HRDemo/api/employees/statistics_by_position'
    };

	employeeService.addNewEmployee = function (employee){
		return $q(function(resolve, reject){
            $http.post(API_COMMANDS.ADD_NEW_EMPLOYEE, employee).then(function (data) {
                if( ! data){
                    return reject();
                }
                
                resolve(data);
            });
        });
	};

	employeeService.getAllEmployees = function(){
        return $q(function(resolve, reject){
            $http.get(API_COMMANDS.GET_ALL_EMPLOYEES).then(function (responseData){
                if( ! responseData){
                    return reject();
                }
                
                return resolve(responseData.data);
            });
        });
    };

    employeeService.removeEmployee = function(employeeId){
        return $q(function(resolve, reject){
            $http.delete(API_COMMANDS.REMOVE_EMPLOYEE + '/' + employeeId).then(function (data){
                if( ! data){
                    return reject();
                }
                
                return resolve();
            });
        });
    };

    employeeService.getEmployeeStatistics = function(){
        return $q(function(resolve, reject){
            $http.get(API_COMMANDS.GET_EMPLOYEE_STATISTICS).then(function (employeeStatistics){
                if( ! employeeStatistics){
                    return reject();
                }
                
                return resolve(employeeStatistics.data);
            });
        });
    };

	return employeeService;
});