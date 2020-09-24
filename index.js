function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`
}


function mondayWork(activity = "go to the office") {
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(vFlair = "*") {
  return (adjective = "special") => {
    return `You are ${vFlair}${adjective}${vFlair}!`
  }
}

let Calculator = {};

Calculator.add = (first,second) => {
  return first + second;
}

Calculator.subtract = (first,second) => {
  return first - second;
}

Calculator.multiply = (first,second) => {
  return first * second;
}

Calculator.divide = (first,second) => {
  return first / second;
}

function actionApplyer (startingInt, funArray) {
  if (funArray.length === 0) {
    return startingInt
  }
  else {
    funArray.forEach(func => startingInt = func(startingInt))
    return startingInt;
  }
}