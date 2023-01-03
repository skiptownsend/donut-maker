// Increase # of Donuts Made
let donutCount = 0
const dCounter = document.querySelector('#chocoB')
let displayDonutCount = document.querySelector('#dCount')

dCounter.addEventListener('click', () => {
  if(ownedMultis === 0){
    donutCount++
  } else {
    donutCount = donutCount + Math.pow(1.2, ownedMultis)
  }
  displayDonutCount.innerHTML = donutCount.toFixed(2)
})

// Shrink & Expand Image Size on Click
// counter.addEventListener('mousedown', () => {
//   document.getElementById("chocoB").setAttribute('width', '390px');
// });
// counter.addEventListener('mouseup', () => {
//   document.getElementById("chocoB").setAttribute('width', '100%');
// });

// Auto-Clickers
let ownedClickers = 0
let clickerCost = 100
const cCounter = document.querySelector('#autoClickerButton')
let displayClickerCount = document.querySelector('#cCount')
let displayClickerCost = document.querySelector('#cToNC')

cCounter.addEventListener('click', () => {
  if(donutCount >= clickerCost){ 
    ownedClickers++
    donutCount -= clickerCost
    clickerCost = clickerCost * 1.1
    displayClickerCount.innerHTML = ownedClickers
    displayClickerCost.innerHTML = clickerCost.toFixed(2)
    
    setInterval(() => {
      donutCount = donutCount + Math.pow(1.2, ownedMultis)
      displayDonutCount.innerHTML = donutCount.toFixed(2)
    },1000)
  } else {
    alert("You need more donuts!")
    return
  }
})

// Donut Multi-Plier
let ownedMultis = 0
let multiCost = 10
const mCounter = document.querySelector('#buyMultiButton')
const dPerClick = document.querySelector('#dPC')
let displayMultiCount = document.querySelector('#mCount')
let displayMultiCost = document.querySelector('#cToNM')
let displayMultiImpact = document.querySelector('#dPC')

mCounter.addEventListener('click', () => {
  if(donutCount >= multiCost){
    ownedMultis++
    donutCount -= multiCost
    displayDonutCount.innerHTML = donutCount.toFixed(2)
    multiCost = multiCost * 1.1
    displayMultiCount.innerHTML = ownedMultis
    displayMultiCost.innerHTML = multiCost.toFixed(2)
    displayMultiImpact.innerHTML = Math.pow(1.2, ownedMultis).toFixed(2)
  } else {
    alert("You need more donuts!")
  }
})

// About Us Modal
const open1 = document.getElementById('open1')
const modal_container1 = document.getElementById('modal_container1')
const close1 = document.getElementById('close1')

open1.addEventListener('click', () => {
  modal_container1.classList.add('show')
})
close1.addEventListener('click', () => {
  modal_container1.classList.remove('show')
})

// About the Developer Modal
const open2 = document.getElementById('open2')
const modal_container2 = document.getElementById('modal_container2')
const close2 = document.getElementById('close2')

open2.addEventListener('click', () => {
  modal_container2.classList.add('show')
})
close2.addEventListener('click', () => {
  modal_container2.classList.remove('show')
})



