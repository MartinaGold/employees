var app = angular.module('main');

app.factory('EmployeeService', function($http, $q){
	var employeeService = {};

	employeeService.addNewEmployee = function (employee){
		return $q(function(resolve, reject){
            $http.post('http://devel.usu.co.at:1504/HRDemo/api/employees', employee).then(function (data) {
                if( ! data){
                    return reject();
                }
                
                resolve(data);
            });
        });
	};

	employeeService.getAllEmployees = function(){
        return $q(function(resolve, reject){
            $http.get('http://devel.usu.co.at:1504/HRDemo/api/employees').then(function (responseData){
                if( ! responseData){
                    return reject();
                }
                
                return resolve(responseData.data);
            });
        });
    };

    employeeService.removeEmployee = function(employeeId){
        return $q(function(resolve, reject){
            $http.delete('http://devel.usu.co.at:1504/HRDemo/api/employees/' + employeeId).then(function (data){
                if( ! data){
                    return reject();
                }
                
                return resolve();
            });
        });
    };

    employeeService.getEmployeeStatistics = function(){
        return $q(function(resolve, reject){
            $http.get('http://devel.usu.co.at:1504/HRDemo/api/employees/statistics_by_position').then(function (employeeStatistics){
                if( ! employeeStatistics){
                    return reject();
                }
                
                return resolve(employeeStatistics.data);
            });
        });
    };

	return employeeService;
});