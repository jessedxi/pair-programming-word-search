const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''))
    let copy = transpose(letters);
    let verticalJoin = copy.map(ls => ls.join(''));
    let result = false;

    for (l of horizontalJoin) {
        if (l.includes(word)) result = true;
    }
    for (l of verticalJoin) {
        if (l.includes(word)) result = true;
    }
    
    return result;
};

const transpose = function(matrix) {
  let copy = []
  for (let i = 0; i < matrix.length; i++){
    for (let j = 0; j <matrix[i].length; j++) {
       // skip undefined values to preserve empty array
      if (matrix[i][j] === undefined) continue;
      // create row if it doesn't exist yet
      if (copy[j] === undefined) copy[j] = [];
       // swap the x and y values for the copy array from input
      copy[j][i] = matrix[i][j];
    }
  }
  return copy;
};  

    module.exports = wordSearch
module.exports = wordSearch