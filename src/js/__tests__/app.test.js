import Validator from '../app';

test('check true username polina170-mail_ru', () => {
  const name = new Validator('polina170-mail_ru');
  expect(name.validateUsername()).toBe(true);
});

test('check false username polina170-mail_ru', () => {
  const names = new Validator('polina170-mail_');
  expect(names.validateUsername()).toBe(false);
});
