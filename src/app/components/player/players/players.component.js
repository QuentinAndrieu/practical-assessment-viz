import templateUrl from './players.html';

export const playersComponent = {
    bindings: {
        players: '<'
    },
    templateUrl,
    controller: class PlayersComponent {

        constructor($state) {
            'ngInject';

            this.$state = $state;
        }
    },
};
