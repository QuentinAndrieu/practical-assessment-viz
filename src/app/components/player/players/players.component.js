import templateUrl from './players.html';

export const playersComponent = {
    bindings: {
        players: '<',
    },
    templateUrl,
    controller: class PlayersComponent {

        constructor($state) {
            'ngInject';

            this.$state = $state;
            this.reverse = true;
            this.propertyName = 'id';
        }

        sortBy(propertyName){
            this.reverse = (this.propertyName === propertyName) ? !this.reverse : false;
            this.propertyName = propertyName;
        }
    },
};
