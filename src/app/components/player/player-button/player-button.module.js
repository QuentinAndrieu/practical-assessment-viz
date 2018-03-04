import { playerButtonComponent } from './player-button.component';
import './player-button.scss';

export const playerButton = angular
    .module('components.player.player-button', [
    ])
    .component('playerButton', playerButtonComponent)
    .name;
