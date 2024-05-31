function most(str) {
  var charFeq = {};

  for (let char of str) {
    if (charFeq[char]) {
      charFeq[char]++;
    } else {
      charFeq[char] = 1;
    }
  }

  var charmost = "";
  var Max = 0;

  for (let char in charFeq) {
    if (charFeq[char] > Max) {
      charmost = char;
      Max = charFeq[char];
    }
  }
  return charmost;
}

 
const str = " dcsdds";
console.log(most(str)); // Output: "l"
