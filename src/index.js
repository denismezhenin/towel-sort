
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (typeof matrix == 'undefined' || matrix.length == 0) {
    return []
  }
  matrix.reduce((acc, item, index) => index % 2  == 0 ? acc + item : acc + item.reverse())
  return matrix.flat();
}
