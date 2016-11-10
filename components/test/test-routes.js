import homeTemplate from './index.html';
import stepHomeTemplate from './home.html';
import stepOneTemplate from './step-one.html';
import stepTwoTemplate from './step-two.html';
import stepThreeTemplate from './step-three.html';
import appController from './test-controller.js';

export default function appRoutes($stateProvider, $urlRouterProvider) {
    'ngInject';

    $urlRouterProvider.when('/', '/booking');
    $urlRouterProvider.otherwise('/booking');

    $stateProvider
        .state('app', {
            abstract  : true,
            url       : '',
            template  : '<ui-view></ui-view>',
            controller: appController
        })
        .state('app.test', {
            url     : '/booking',
            template: homeTemplate,
            controller: appController
        })
        .state('app.test.home', {
            url     : '/home',
            template: stepHomeTemplate
        })
       .state('app.test.step-one', {
            url     : '/step-one',
            template: stepOneTemplate
        })
        .state('app.test.step-two', {
            url     : '/step-two',
            template: stepTwoTemplate
        })
       .state('app.test.step-three', {
            url     : '/step-three',
            template: stepThreeTemplate
        });
}