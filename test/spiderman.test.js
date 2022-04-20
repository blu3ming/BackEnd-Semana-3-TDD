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

describe("Unit test for Spiderman info", () => {
    test('2) Get info from an spiderman', () => {
        const tomHolland = new Spiderman("Spiderman Marvel",25,"Tom Holland",5,"Marvel")
        expect(tomHolland.getInfo()).toBe("Hey, I'm Tom Holland from Marvel studio");
    })
})