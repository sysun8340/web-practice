const carsData = [
  {id: 0, name: 'car1', time: 0, distance: 0},
  {id: 1, name: 'car2', time: 0, distance: 0},
  {id: 2, name: 'car3', time: 0, distance: 0},
  {id: 3, name: 'car4', time: 0, distance: 0},
  {id: 4, name: 'car5', time: 0, distance: 0},
]
const distance = 400

const getCarPosition = car => car.getBoundingClientRect().left - 28

const move = car => {
  const distance = Math.random() + parseFloat(car.style.left)
  car.style.left = distance + 'px'
}

const isFinished = car => {
  if(getCarPosition(car) > distance) {
    return true
  }
}

const race = car => {
  if(isFinished(car)) return
  move(car)
  setTimeout(() => {race(car)}, 10)
}

const start = () => {
  carsData.forEach(carData => {
    const car = document.getElementById(carData.name)
    race(car)
  })
}

const button = document.getElementById('button')
button.addEventListener('click', start)