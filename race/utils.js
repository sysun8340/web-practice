const carsData = [
  {id: 0, name: 'car1', div: null, time: 0, isFinished: false},
  {id: 1, name: 'car2', div: null, time: 0, isFinished: false},
  {id: 2, name: 'car3', div: null, time: 0, isFinished: false},
  {id: 3, name: 'car4', div: null, time: 0, isFinished: false},
  {id: 4, name: 'car5', div: null, time: 0, isFinished: false},
]
carsData.forEach(carData => {
  carData.div = document.getElementById(carData.name)
})

let startTime = null

const distance = 400

const getCarPosition = car => car.div.getBoundingClientRect().left - 28

const move = car => {
  const distanceToLeft = Math.random()*2 + getCarPosition(car)
  car.div.style.left = distanceToLeft + 'px'
}

const isFinished = car => {
  if(getCarPosition(car) > distance) return true
}
const isAllFinished = carsData => {
  return carsData.reduce((result, car) => {
    return result&&car.isFinished
  }, true)
}

const outPutResults = () => {
  carsData.sort((a,b) => a.time - b.time)
  document.getElementById('results').innerHTML = carsData.map((car, index) =>
    `第${index+1}名是 ${car.name}，用时 ${car.time}豪秒`
  ).join('<br/>')
}

const race = car => {
  if(isFinished(car)) {
    car.isFinished = true
    car.time = new Date() - startTime
    if(isAllFinished(carsData)){
      outPutResults()
      return
    }
    return
  }
  move(car)
  setTimeout(() => {race(car)}, 5)
}

const start = () => {
  startTime = new Date()
  carsData.forEach(car => 
    race(car)
  )
}

const button = document.getElementById('button')
button.addEventListener('click', start)