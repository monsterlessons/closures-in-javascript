var addTo = function (passed) {
  var add = function (inner) {
    return passed + inner
  }

  return add
}

var addThree = addTo(3)
var addOne = addTo(1)

console.log(addThree(3))
console.log(addOne(2))
