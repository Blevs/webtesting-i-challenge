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

describe('succeed', () => {
  it('increase enhancement', () => {
    const item = {
      durability: 75,
      name: "test",
      enhancement: 15
    };
    const newItem = enhancer.succeed(item);
    expect(newItem.durability).toBe(75);
    expect(newItem.name).toBe("test");
    expect(newItem.enhancement).toBe(16);
  });
  it('max enhancement 20', () => {
    const item = {
      durability: 75,
      name: "test",
      enhancement: 20
    };
    const newItem = enhancer.succeed(item);
    expect(newItem.durability).toBe(75);
    expect(newItem.name).toBe("test");
    expect(newItem.enhancement).toBe(20);
  });
});

describe('fail', () => {
  it('enhancement < 15', () => {
    const item = {
      durability: 75,
      name: "test",
      enhancement: 10
    };
    const newItem = enhancer.fail(item);
    expect(newItem.durability).toBe(70);
    expect(newItem.name).toBe("test");
    expect(newItem.enhancement).toBe(10);
  });
  it('enhancement = 15', () => {
    const item = {
      durability: 75,
      name: "test",
      enhancement: 15
    };
    const newItem = enhancer.fail(item);
    expect(newItem.durability).toBe(65);
    expect(newItem.name).toBe("test");
    expect(newItem.enhancement).toBe(15);
  });
  it('enhancement > 16', () => {
    const item = {
      durability: 75,
      name: "test",
      enhancement: 17
    };
    const newItem = enhancer.fail(item);
    expect(newItem.durability).toBe(65);
    expect(newItem.name).toBe("test");
    expect(newItem.enhancement).toBe(16);
  });
  it('min durability 0', () => {
    const item = {
      durability: 1,
      name: "test",
      enhancement: 14
    };
    const newItem = enhancer.fail(item);
    expect(newItem.durability).toBe(0);
    expect(newItem.name).toBe("test");
    expect(newItem.enhancement).toBe(14);
  });
});

describe('get', () => {
  it('enancement 0 do nothing', () => {
    const item = {
      durability: 1,
      name: "test",
      enhancement: 0
    };
    const newItem = enhancer.get(item);
    expect(newItem.durability).toBe(1);
    expect(newItem.name).toBe("test");
    expect(newItem.enhancement).toBe(0);
  });
  it('add enancement to name', () => {
    const item = {
      durability: 1,
      name: "test",
      enhancement: 15
    };
    const newItem = enhancer.get(item);
    expect(newItem.durability).toBe(1);
    expect(newItem.name).toBe("[+15] test");
    expect(newItem.enhancement).toBe(15);
  });
  it('overwrite old enchantment', () => {
    const item = {
      durability: 1,
      name: "[+14] test",
      enhancement: 15
    };
    const newItem = enhancer.get(item);
    expect(newItem.durability).toBe(1);
    expect(newItem.name).toBe("[+15] test");
    expect(newItem.enhancement).toBe(15);
  });
});
