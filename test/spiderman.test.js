const Spiderman = require('../app/spiderman')

describe("Unit test for Spiderman class", () => {
    test('1) Create an spiderman object', () => {
      const andrrewGarfield = new Spiderman("Spiderman Sony",31,"Andrew Garfield",2,"Sony")
      expect(andrrewGarfield.name).toBe("Spiderman Sony");
      expect(andrrewGarfield.age).toBe(31);
      expect(andrrewGarfield.actor).toBe("Andrew Garfield");
      expect(andrrewGarfield.movies).toBe(2);
      expect(andrrewGarfield.studio).toBe("Sony");
    });
})