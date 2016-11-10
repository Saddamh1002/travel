import angular from 'angular';
import ngSanitize from 'angular-sanitize';
import angularUIRouter from 'angular-ui-router';
import angularUIBootstrap from 'angular-ui-bootstrap';
import angularUISelect from 'ui-select';
import travelApp from './compositions/test.js';


export default angular
    .module('app', [
        ngSanitize,
        angularUIRouter,
        angularUIBootstrap,
        angularUISelect,
        travelApp

    ])