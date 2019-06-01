import {
  Character,
} from '../src/js/Character';

test('Test Bowman', () => {
  const result = new Character('Персонаж', 'Bowman');

  const expected = {
    name: 'Персонаж',
    type: 'Bowman',
    attack: 25,
    defense: 25,
  };
  expect(result).toEqual(expected);
});

test('Test long name', () => {
  const result = new Character('Какой-то шушпанцер', 'Bowman');
  const expected = {};
  expect(result).toEqual(expected);
});

test('Test short name', () => {
  const result = new Character('A', 'Bowman');
  const expected = {};
  expect(result).toEqual(expected);
});

test('Test wrong type', () => {
  const result = new Character('Персонаж', 'Непонятно что');
  const expected = {};
  expect(result).toEqual(expected);
});
