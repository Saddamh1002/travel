import angular from 'angular';
import angularUIRouter from 'angular-ui-router';

var moduleName = 'app.test';

angular
    .module(moduleName, [
        angularUIRouter
    ])
    .config(require('../components/test/test-routes'));

export default moduleName;
