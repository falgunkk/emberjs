import Route from '@ember/routing/route';

export default class ProgrammersRoute extends Route {
  model() {
    return ['Marie Curie-pro', 'Mae Jemison-pro', 'Albert Hofmann-pro'];
  }
}
