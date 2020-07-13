const buttons = document.querySelector('.button-wrapper')
const input = document.querySelector('input')
const userInputs = []
const numbers = []

buttons.addEventListener('click', (event)=>{
  console.log(event)
  if(event.target.textContent === '=') {
    userInputs.push(numbers.join())
    numbers.splice(0, numbers.length)
    input.value = performOperations(userInputs[1], parseInt(userInputs[0]), parseInt(userInputs[2]))
  } else if (event.target.textContent === 'C') {
    input.value=''
    userInputs.splice(0, userInputs.length)
    numbers.splice(0, numbers.length)
  } else if (event.target.className === 'operator') {
    userInputs.push(numbers.join())
    userInputs.push(event.target.textContent)
    numbers.splice(0, numbers.length)
    input.value=''
  } else if (event.target.className === 'num') {
    input.value+=event.target.textContent
    numbers.push(event.target.textContent)
  } 
})

const performOperations = (operator, num1, num2) => {
  if (operator === '+') {
    return num1 + num2
  } else if (operator === '-') {
    return num1 - num2
  } else if (operator === '*') {
    return num1 * num2
  } else if (operator === '%') {
    return num1 / num2
  }
}
