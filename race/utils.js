const cars = ['car1', 'car2', 'car3', 'car4', 'car5']
let timer = null

const finishLine = document.getElementById('finishLine')
const getFinishLinePosition = finishLine.getBoundingClientRect().left

const getCarPosition = car => car.getBoundingClientRect().left

const move = car => {
  console.log(car.style.left)
  const distance = Math.random()*5 + parseFloat(car.style.left)
  car.style.left = distance + 'px'
}

const isFinished = car => {
  if(getCarPosition(car) >= getFinishLinePosition) {
    clearInterval(timer)
    return
  }
}

const race = car => {
  isFinished(car)
  move(car)
}

const start = () => {
  const car1 = document.getElementById('car1')
  timer = setInterval(() => {race(car1)}, 100)
}
