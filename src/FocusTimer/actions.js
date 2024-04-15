import state from './state.js'
import * as timer from './timer.js'
import * as sounds from './sounds.js'
import { soundForest } from './elements.js'

export function togglePlay() {
  state.isRunning = document.documentElement.classList.toggle('running')
  timer.countdown()
  
  sounds.buttonPressAudio.play()
}

export function togglePause() {
  state.isRunning = document.documentElement.classList.remove('running')
  sounds.buttonPressAudio.play()
}

export function toggleStop() {
  state.isRunning = false
  document.documentElement.classList.remove('running')
  timer.updateDisplay()

  sounds.buttonPressAudio.play()
}

export function reset() {
  state.isRunning = false
  document.documentElement.classList.remove('running')
  timer.updateDisplay()

  sounds.buttonPressAudio.play()
}
export function IncreaseFive() {
  timer.IncreaseFive()
  sounds.buttonPressAudio.play()
}

export function toDecreaseFive() {
  
  timer.toDecreaseFive()
  sounds.buttonPressAudio.play()
}

/*Sounds*/
export function toggleMusicForest() {
  sounds.buttonPressAudio.play()
  sounds.forest.play()
  sounds.boxSoundForest()
  
  console.log("Tocando som floresta")
}

export function toggleMusicRain() {
  sounds.buttonPressAudio.play()
  sounds.rain.play()
  sounds.boxSoundRain()

  console.log("Tocando som chuva")
}

export function toggleMusicCoffe() {
  sounds.buttonPressAudio.play()
  sounds.coffeeShop.play()
  sounds.boxSoundCoffe()

  console.log("Tocando som Cafeteria")
}

export function toggleMusicFireplace() {
  sounds.buttonPressAudio.play()
  sounds.fireplace.play()
  sounds.boxSoundFireplace()
}