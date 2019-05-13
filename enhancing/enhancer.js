module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  return { ...item };
}

function fail(item) {
  const newItem =  { ...item };
  newItem.durability = Math.max(
    newItem.durability - (newItem.enhancement < 15 ? 5 : 10),
    0);
  if (newItem.enhancement > 16)
    newItem.enhancement = Math.max(newItem.enhancement-1, 0);
  return newItem;
}

function repair(item) {
  const newItem = {...item};
  newItem.durability = 100;
  return newItem;
}

function get(item) {
  return { ...item };
}
