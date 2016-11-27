var url = 'http://localhost:8000/';

module.exports = {
    tags: ['google'],
    'check all directives are properly rendered': function (client) {
        client
            .url(url)
            .waitForElementVisible('body', 1000);
        client.expect.element('employee-records form[name="formEmployee"]').to.be.present
        client.expect.element('employee-records table').to.be.present
        client.expect.element('employees-statistics table').to.be.present
        client.expect.element('chart .chart canvas').to.be.present
        client.expect.element('chart .horizontal-bar canvas').to.be.present
    },
    'check employee records form works properly': function (client) {
        client.expect.element('employee-records button').to.have.attribute('disabled');
        client.setValue('input[ng-model="employee.name"]', 'Karel Novak');
        client.setValue('input[ng-model="employee.age"]', '19');
        client.setValue('input[ng-model="employee.position"]', 'BACKEND_DEVELOPER');

        client.expect.element('employee-records button').to.not.have.attribute('disabled');
    },
    'check add new employee': function (client) {
        client.elements('css selector', 'employee-records table tr', function (result) {
            var employeeRecordsLength = result.value.length;
            client.click('employee-records button');
            client.pause(1000);

            client.elements('css selector', 'employee-records table tr', function (result) {
                var length = result.value.length;

                client.assert.equal(length, employeeRecordsLength + 1);

                client.end();
            });
        });
    }
};
