import templateUrl from './player-button.html';

export const playerButtonComponent = {
    bindings: {
    },
    templateUrl,
    controller: class playerButtonComponent {

        constructor(PlayerService, $state) {
            'ngInject';

            this.$state = $state;
            this.player = {};
            this.playerService = PlayerService;
        }

        $onChanges(changes) {
            if (changes.player) {
                this.player = Object.assign({}, this.player);
            }
        }

        onSubmit() {
            this.playerService.createPlayer(this.player);
            this.player = {};

            $('#modalAddPlayer').modal('hide');
        }
    },
};
