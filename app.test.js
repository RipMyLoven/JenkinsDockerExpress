const { hello } = require('./app.js');

test('Film function should return Minu lemmik reisisihtkoht on Jaapan.', () => {
expect(hello("Alien")).toBe('Minu lemmik reisisihtkoht on Jaapan.');
});