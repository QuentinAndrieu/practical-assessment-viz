import uiRouter from 'angular-ui-router';
import { appComponent } from './app.component';
import './app.scss';

export const app = angular
  .module('common.app', [
    uiRouter,
  ])
  .component('app', appComponent)
  .config(($stateProvider) => {
    'ngInject';

    $stateProvider
      .state('app', {
        url: '/app',
        component: 'app'
      });
  })
  .name;
