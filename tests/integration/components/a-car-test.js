import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import setupMirage from '../../helpers/mirage-integration';

moduleForComponent('a-car', 'Integration | Component | a car', {
  integration: true,
  setup() {
    setupMirage(this.container);
  }
});

test('it renders', function(assert) {
  const car = server.create('car');
  this.set('car', car);
  this.render(hbs`{{a-car car=car}}`);

  assert.equal(this.$().text().trim(), 'Car 1');
});
