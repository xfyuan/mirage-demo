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

test('I see all cars on the index page', (assert)=> {
  server.create('car');
  visit('/cars');

  andThen(()=> {
    const cars = find('li.car');
    assert.equal(cars.length, 1);
  });
});

test('I can add a new car', (assert)=> {
  server.createList('car', 10);
  visit('/cars');

  click('#add-car');
  fillIn('input[name="car-name"]', 'My new car');
  click('button');

  andThen(()=> {
    const newCar = find('li.car:contains("My new car")');
    assert.equal(newCar.text().trim(), 'My new car');
  });
});
