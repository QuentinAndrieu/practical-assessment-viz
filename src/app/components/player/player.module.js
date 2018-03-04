import { players } from './players/players.module';
import { PlayerService } from './player.service';

export const player = angular
    .module('components.player', [
        players
    ])
    .service('PlayerService', PlayerService)
    .name;
