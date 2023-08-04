// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

// For example:

// 1.08 --> 30

function cockroachSpeed(s) {
    //Good Luck!
    return Math.floor(s * 27.777777777778);
  }

  // another solution using big arrow

  const cockroachSpeed = s => Math.floor(s / 0.036);