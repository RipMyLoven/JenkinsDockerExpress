const { hello } = require('./app.js');

test('Film function should return inu lemmik reisisihtkoht on Jaapan.', () => {
expect(hello("Alien")).toBe('inu lemmik reisisihtkoht on Jaapan.');
});