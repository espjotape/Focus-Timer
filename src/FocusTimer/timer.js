import state from './state.js'
import * as el from './elements.js'
import { reset } from './actions.js'
import { kitchenTimer } from './sounds.js'

export function countdown() {
  clearTimeout(state.countdownId)

  if(!state.isRunning) {
    return
  }

  let minutes = String(el.minutes.textContent)
  let seconds = String(el.seconds.textContent)

  seconds--

  if(seconds < 0) {
    seconds = 59
    minutes--
  }
  if (minutes < 0 ) {
    reset()
    kitchenTimer.play()
    return
  }

  updateDisplay(minutes, seconds)
  console.log('iniciou')

  state.countdownId = setTimeout(() => countdown(), 1000)
}

export function hold() {
  clearTimeout()
}

export function IncreaseFive() {
  let currentMinutes = parseInt(el.minutes.textContent);
  let currentSeconds = parseInt(el.seconds.textContent);

  currentMinutes += 5;

  el.minutes.textContent = currentMinutes.toString().padStart(2, "0");
  el.seconds.textContent = currentSeconds.toString().padStart(2, "0");
  
}

export function toDecreaseFive () {
  let currentMinutes = parseInt(el.minutes.textContent);
  let currentSeconds = parseInt(el.seconds.textContent);

  currentMinutes -= 5;

  if (currentMinutes < 0) {
    currentMinutes = 0;
  }

  el.minutes.textContent = currentMinutes.toString().padStart(2, "0");
  el.seconds.textContent = currentSeconds.toString().padStart(2, "0");
}

export function updateDisplay(minutes, seconds) {
  minutes = minutes ?? state.minutes
  seconds = seconds ?? state.seconds

  el.minutes.textContent = String(minutes).padStart(2,"0") 
  el.seconds.textContent = String(seconds).padStart(2,"0") 
}