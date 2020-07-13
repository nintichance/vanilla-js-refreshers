const buttons = document.querySelector('.button-wrapper')
const input = document.querySelector('input')
const userInputs = []
const numbers = []

buttons.addEventListener('click', (event)=>{
  const emptyInputs = (arr) => {
    arr.splice(0, arr.length)
  }
  const addToArr = (arr,val) => {
    arr.push(val)
  }
  if(event.target.textContent === '=') {
    addToArr(userInputs,numbers.join())
    emptyInputs(numbers)
    updateInput(performOperations(userInputs[1], parseInt(userInputs[0]), parseInt(userInputs[2])))
  } else if (event.target.textContent === 'C') {
    updateInput('')
    emptyInputs(userInputs)
    emptyInputs(numbers)
  } else if (event.target.className === 'operator') {
    addToArr(userInputs,numbers.join())
    addToArr(userInputs,event.target.textContent)
    emptyInputs(numbers)
    updateInput('')
  } else if (event.target.className === 'num') {
    updateInput(event.target.textContent, true)
    addToArr(numbers,event.target.textContent)
  } 
})

const updateInput = (val, append=false) => {
  if (append) {
    input.value+=val
  } else {
    input.value = val
  }
}

const performOperations = (operator, num1, num2) => {
  if (operator === '+') {
    return num1 + num2
  } else if (operator === '-') {
    return num1 - num2
  } else if (operator === 'x') {
    return num1 * num2
  } else if (operator === '%') {
    return num1 / num2
  }
}
