function findMinMax() {
  let array = [3, 1, 4, 1, 5, 9, 2, 6, 5]; // Sample array

  let minValue = Math.min.apply(null, array);
  let maxValue = Math.max.apply(null, array);

  let result = "Minimum value: " + minValue + "<br> Maximum value: " + maxValue;

  document.getElementById("result").innerHTML = result;
}