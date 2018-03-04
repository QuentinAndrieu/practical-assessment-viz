import uiRouter from 'angular-ui-router';
import { playersComponent } from './players.component';
import './players.scss';

export const players = angular
    .module('components.player.players', [
        uiRouter
    ])
    .component('players', playersComponent)
    .config(($stateProvider) => {
        'ngInject';

        $stateProvider
            .state('players', {
                parent: 'app',
                url: 'players',
                component: 'players',
                resolve: {
                    players(PlayerService) {
                        'ngInject';

                        return PlayerService.getPlayers().then((players) => {
                            return players;
                        });
                    }
                },
            });
    })
    .name;
