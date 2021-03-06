// @flow

import HexletLinq from '../src';

describe('HexletLinq', () => {
  let coll;
  let cars;

  beforeEach(() => {
    cars = [
      { brand: 'bmw', model: 'm5', year: 2014 },
      { brand: 'bmw', model: 'm4', year: 2013 },
      { brand: 'kia', model: 'sorento', year: 2014 },
      { brand: 'kia', model: 'rio', year: 2010 },
      { brand: 'kia', model: 'sportage', year: 2012 },
    ];
    coll = HexletLinq.from(cars);
  });

  it('should be immutable', () => {
    coll.orderBy((car) => car.year, 'asc').toArray();
    const result = coll.where((car) => car.brand === 'kia')
      .where((car) => car.year > 2011);

    expect(result.toArray()).toEqual([cars[2], cars[4]]);
  });

  it('should be immutable 2', () => {
    const result = coll
      .where((car) => car.brand === 'kia')
      .where((car) => car.year > 2011);

    const result2 = coll
      .orderBy((car) => car.year, 'asc')
      .where((car) => car.model === 'sorento');
    expect(result2.length).toBe(1);
    expect(result2.length).toBe(1);

    expect(result.length).toBe(2);
    expect(result.toArray()).toEqual([cars[2], cars[4]]);
    expect(result.toArray()).toEqual([cars[2], cars[4]]);
  });

  it('#where', () => {
    const result = coll
      .where((car) => car.brand === 'kia')
      .where((car) => car.year > 2011);

    expect(result.length).toBe(2);
    expect(result.toArray()).toEqual([cars[2], cars[4]]);
  });

  it('#select', () => {
    const result = coll.where((car) => car.brand === 'bmw').select((car) => car.model);

    expect(result.length).toBe(2);
    expect(result.toArray()).toEqual(['m5', 'm4']);
  });

  it('#orderBy', () => {
    const result = coll.orderBy((car) => car.year)
      .where((car) => car.brand === 'kia')
      .select((car) => car.model);

    expect(result.length).toBe(3);
    expect(result.toArray()).toEqual(['rio', 'sportage', 'sorento']);

    const result2 = coll.orderBy((car) => car.year, 'desc')
      .where((car) => car.brand === 'kia')
      .select((car) => car.model);

    expect(result2.length).toBe(3);
    expect(result2.toArray()).toEqual(['sorento', 'sportage', 'rio']);
  });
});
