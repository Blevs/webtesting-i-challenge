const enhancer = require('./enhancer.js');

describe('repair', () => {
  it('reset durability', () => {
    const item = {
      durability: 75,
      name: "test",
      enhancement: 20
    };
    const newItem = enhancer.repair(item);
    expect(newItem.durability).toBe(100);
  });
  it('only change durability', () => {
    const item = {
      durability: 75,
      name: "test",
      enhancement: 20
    };
    const newItem = enhancer.repair(item);
    expect(newItem.name).toBe("test");
    expect(newItem.enhancement).toBe(20);
  });
  it('new object', () => {
    const item = {
      durability: 75,
      name: "test",
      enhancement: 20
    };
    enhancer.repair(item);
    expect(item.durability).toBe(75);
    expect(item.name).toBe("test");
    expect(item.enhancement).toBe(20);
  })
});
