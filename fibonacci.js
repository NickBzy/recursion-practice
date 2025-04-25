function fibs(n) {
  let sequence = []
  for (let i = 0; i < n; i++) {
    // console.log("This was printed iteratively")
    if (i == 0) sequence[0] = 0
    else if (i == 1) sequence[1] = 1
    else sequence[i] = sequence[i - 1] + sequence[i - 2]
  }
  return sequence
}

console.log("Iterative fibs(8): " + fibs(8))

function fibsRec(n, memo = {}) {
  //   console.log("This was printed recursively")
  if (n in memo) return memo[n]
  if (n === 1) return [0]
  if (n === 2) return [0, 1]

  const fibs = fibsRec(n - 1, memo)
  fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2])

  memo[n] = fibs
  return fibs
}
console.log("Recursive fibsRec(8): " + fibsRec(8))

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr
  }

  const middle = Math.floor(arr.length / 2)
  const left = arr.slice(0, middle)
  const right = arr.slice(middle)

  const sortedLeft = mergeSort(left)
  const sortedRight = mergeSort(right)

  return merge(sortedLeft, sortedRight)
}

function merge(left, right) {
  let answ = []
  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      answ.push(left.shift())
    } else {
      answ.push(right.shift())
    }
  }

  while (left.length > 0) {
    answ.push(left.shift())
  }

  while (right.length > 0) {
    answ.push(right.shift())
  }

  return answ
}

let arrToSort = [10, 6, 1, 5, 2, 8, 9]
console.log("Sort array [10, 6, 1, 5, 2, 8, 9]:" + mergeSort(arrToSort))
