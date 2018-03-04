import { sideBarComponent } from './app-side-bar.component';
import './app-side-bar.scss';

export const appSideBar = angular
    .module('common.app-side-bar', [])
    .component('appSideBar', sideBarComponent)
    .name;
