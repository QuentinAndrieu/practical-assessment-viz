import templateUrl from './app-side-bar.html';

export const sideBarComponent = {
  bindings: {
  },
  templateUrl,
  controller: class SideBarComponent {

      constructor($state) {
          'ngInject';

          this.$state = $state;
      }
  },
};
