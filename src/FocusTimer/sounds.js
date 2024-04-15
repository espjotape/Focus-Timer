export const buttonPressAudio = new Audio('./assets/sounds/button-press.wav')

export const kitchenTimer = new Audio('./assets/sounds/kichen-timer.mp3')

export const forest = new Audio('./assets/sounds/floresta.wav')

export const rain = new Audio('./assets/sounds/chuva.wav')

export const coffeeShop = new Audio('./assets/sounds/cafeteria.wav')

export const fireplace = new Audio('./assets/sounds/lareira.wav')

forest.loop = true
rain.loop = true
coffeeShop.loop = true
fireplace.loop = true


export function boxSoundForest() {
  const boxForest = document.querySelector('.sound-forest')

  if(boxForest.classList.toggle('active')) {
    forest.play()
    } else {
      forest.pause()
    }
}

export function boxSoundRain() {
  const boxRain = document.querySelector('.sound-rain')

  if(boxRain.classList.toggle('active')) {
    rain.play()
    } else {
      rain.pause()
    }
}

export function boxSoundCoffe() {
  const boxSoundCoffe = document.querySelector('.sound-coffe')

  if(boxSoundCoffe.classList.toggle('active')) {
    coffeeShop.play()
    } else {
      coffeeShop.pause()
    }
}


export function boxSoundFireplace() {
  const boxSoundFireplace = document.querySelector('.sound-fireplace')

  if(boxSoundFireplace.classList.toggle('active')) {
    fireplace.play()
    } else {
      fireplace.pause()
    }
}
