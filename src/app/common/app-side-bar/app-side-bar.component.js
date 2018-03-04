import templateUrl from './app-side-bar.html';

export const sideBarComponent = {
  bindings: {
  },
  templateUrl,
  controller: class SideBarComponent {

      constructor($state, $uibModal) {
          'ngInject';

          this.$state = $state;
      }

      openModal(){

      }
  },
};
