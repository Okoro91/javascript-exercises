const fibs = (n) => {
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  const sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    const nextFib = sequence[i - 1] + sequence[i - 2];
    sequence.push(nextFib);
  }
  return sequence;
};
console.log(fibs(8));

const fibsRec = (n) => {
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  const sequence = fibsRec(n - 1);
  const nextFib = sequence[sequence.length - 1] + sequence[sequence.length - 2];
  sequence.push(nextFib);
  return sequence;
};

console.log(fibsRec(8));

const mergesort = (array) => {
  if (array.length <= 1) return array;

  const mid = Math.floor(array.length / 2);
  const left = mergesort(array.slice(0, mid));
  const right = mergesort(array.slice(mid));

  return merge(left, right);
};

const merge = (left, right) => {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
};

console.log(mergesort([38, 27, 43, 3, 9, 82, 10]));
