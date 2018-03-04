import { player } from './player/player.module';

export const components = angular
  .module('components', [
    player
  ])
  .name;
