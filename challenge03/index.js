import { colors } from "./color.js";

const findZebra = () => {
  let maxZebraPoints = 0
  let maxZebraLastColor = ""

  let lastColor = ""
  let nextColor = colors[0]
  let currMaxPoints = 1

  colors.forEach(currentColor => {
    if (currentColor !== nextColor || lastColor == currentColor) {
      currMaxPoints = 1
    }

    currMaxPoints++
    nextColor = lastColor
    lastColor = currentColor

    if (currMaxPoints > maxZebraPoints) {
      maxZebraPoints = currMaxPoints
      maxZebraLastColor = lastColor
    }
  })

  return `submit ${maxZebraPoints}@${maxZebraLastColor}`
}

console.log(findZebra())