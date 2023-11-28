function minMax(...array) {
  let min = Math.min(array)
let max = Math.max(array)
console.log(`highest number: ${Math.max(...array)}`)
console.log(`lowest number: ${Math.min(...array)}`)
}
minMax(7, 12, 31227, 1948, 75)
