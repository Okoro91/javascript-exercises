const isObject = (value) => typeof value === "object" && value !== null;

const totalIntegers = (data) => {
  let count = 0;

  if (!isObject(data)) {
    return;
  }

  const elements = Object.values(data);

  for (const el of elements) {
    if (Number.isInteger(el)) {
      count++;
    } else if (isObject(el)) {
      count += totalIntegers(el);
    }
  }
  return count;
};

// Do not edit below this line
module.exports = totalIntegers;
