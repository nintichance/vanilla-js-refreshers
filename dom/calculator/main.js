const buttons = document.querySelector('.button-wrapper')
const userInputs = []
const numbers = []
const input = document.querySelector('input')

buttons.addEventListener('click', (event)=>{
  if(event.target.textContent === '=') {
    userInputs.push(numbers.join())
    numbers.splice(0, numbers.length)
    input.value = performOperations(userInputs[1], parseInt(userInputs[0]), parseInt(userInputs[2]))
  } else if (event.target.className === 'operator') {
    userInputs.push(numbers.join())
    userInputs.push(event.target.textContent)
    numbers.splice(0, numbers.length)
    input.value=''
  } else if (event.target.className === 'num') {
    input.value+=event.target.textContent
    numbers.push(event.target.textContent)
  } else if (event.target.id === 'clear') {
    input.value=''
  }
})

const performOperations = (operator, num1, num2) => {
  console.log(operator, num1, num2)
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
