import * as el from './elements.js'
import * as actions from './actions.js'

export function registerControls() {
  el.play.addEventListener('click', (event) => {
    const action = event.target.dataset.action
    if(typeof actions[action] != "function") {
      return
    }
  
    actions[action]()
  })

  el.pause.addEventListener('click', (event) => {
    const action = event.target.dataset.action
    if(typeof actions[action] != "function") {
      return
    }
    console.log("pausado")
    actions[action]()
  })

  el.stop.addEventListener('click', (event) => {
    const action = event.target.dataset.action
    if(typeof actions[action] != "function") {
      return
    }
    console.log("pausado")
    actions["toggleStop"]()
  })

  el.minus.addEventListener('click', (event) => {
    const action = event.target.dataset.action
    if(typeof actions[action] != "function") {
      return
    }
    console.log("diminui 5 minutes")
    actions["toDecreaseFive"]()
  })

  plus.addEventListener('click', (event) => {
    const action = event.target.dataset.action
    if(typeof actions[action] != "function") {
      return
    }
    console.log("diminui 5 minutes")
    actions["IncreaseFive"]()
  })
}

export function registerControlsSounds() {
  el.soundForest.addEventListener('click', (event) =>  {
    const action = event.target.dataset.action
    if (action === undefined) {
      return
    }

    actions["toggleMusicForest"]()
  })


  el.soundRain.addEventListener('click', (event) => {
    const action = event.target.dataset.action
    if (action === undefined) {
      return
    }

    actions["toggleMusicRain"]()
  })

  el.soundCoffe.addEventListener('click', (event) => {
    const action = event.target.dataset.action
    if (action === undefined) {
      return
    }

    actions["toggleMusicCoffe"]()
  })

  el.soundFireplace.addEventListener('click', (event) => {
    const action = event.target.dataset.action
    if (action === undefined) {
      return
    }

    actions["toggleMusicFireplace"]()
  })
}
