import uiRouter from 'angular-ui-router';
import { appComponent } from './app.component';
import { appHeader } from './app-header/app-header.module';

import './app.scss';

export const app = angular
  .module('common.app', [
    uiRouter,
    appHeader
  ])
  .component('app', appComponent)
  .config(($stateProvider) => {
    'ngInject';

    $stateProvider
      .state('app', {
        redirectTo: 'players',
        url: '/',
        component: 'app'
      });
  })
  .name;
