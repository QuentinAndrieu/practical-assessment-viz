import { players } from './players/players.module';
import { playerButton } from './player-button/player-button.module';
import { PlayerService } from './player.service';

export const player = angular
    .module('components.player', [
        players,
        playerButton
    ])
    .service('PlayerService', PlayerService)
    .name;
