import $http from 'angular';

export class PlayerService {

    constructor($http) {
        'ngInject';

        this.$http = $http;
        this.players;
    }

    createPlayer(player) {
        this.players.push(player);
    }

    getPlayers() {
        return new Promise((resolve, reject) => {
            if (this.players) {
                resolve(this.players);
            } else {
                this.$http({
                    url: 'assets/data.json',
                    method: 'GET',
                }).then((response) => {
                    this.players = response.data.players;
                    resolve(response.data.players);
                }, (response) => {
                    reject(response);
                });
            }
        });
    }
}
