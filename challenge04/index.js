const MIN = 11098
const MAX = 98123

const inAscOrder = (number = 0) => {
  const arr = `${number}`.split('')

  return arr.every((_, i) => {
    return Number(i) === 0 || arr[i] >= arr[Number(i) - 1];
  });
}

const generatePasswords = () => {
  const passwordsAccepted = []
  let currValue = MIN
  for (let i = MIN; i <= MAX; i++) {
    if (!inAscOrder(i)) continue

    if (`${i}`.replaceAll('5', '').length <= 3) {
      passwordsAccepted.push(i)
      continue
    }
  }

  console.log(`submit ${passwordsAccepted.length}-${passwordsAccepted[55]}`)
}

generatePasswords()