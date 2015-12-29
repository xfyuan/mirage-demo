import { test } from 'qunit';
import moduleForAcceptance from 'mirage-demo/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | cars');

test('visiting /cars', function(assert) {
  visit('/');

  click('#all-cars');

  andThen(()=> {
    assert.equal(currentURL(), '/cars');
  });
});
