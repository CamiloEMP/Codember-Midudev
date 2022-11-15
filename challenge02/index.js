import { messageEncrypted } from "./encrypted.js";

const ASCII = {
  '97': 'a',
  '98': 'b',
  '99': 'c',
  '100': 'd',
  '101': 'e',
  '102': 'f',
  '103': 'g',
  '104': 'h',
  '105': 'i',
  '106': 'j',
  '107': 'k',
  '108': 'l',
  '109': 'm',
  '110': 'n',
  '111': 'o',
  '112': 'p',
  '113': 'q',
  '114': 'r',
  '115': 's',
  '116': 't',
  '117': 'u',
  '118': 'v',
  '119': 'w',
  '120': 'x',
  '121': 'y',
  '122': 'z',
}

const decryptMessage = (message = '') => {
  const array = message.split(' ')
  
  const separateWithSpaces = array.map(string => {
    let letterAscii = ''
    let wordWithSpace = ''
    string.split('').forEach(letter => {
      if ((letter === '1' || letterAscii.startsWith('1'))) {
        letterAscii = letterAscii + letter
        if (letterAscii.length === 3) {
          wordWithSpace = wordWithSpace + ` ${letterAscii}`
          letterAscii = ''
        }
      }
      else if (letter === '9' || letterAscii.startsWith('9')) {
        letterAscii = letterAscii + letter
        if (letterAscii.length === 2) {
          wordWithSpace = wordWithSpace + ` ${letterAscii}`
          letterAscii = ''
        }
      }
    })
    return wordWithSpace
  })
  const transformCodeLetter = separateWithSpaces.map(word => {
    const wordTransformed = word.trim().split(' ').map(codeLetter => {
      return ASCII[codeLetter]
    })

    return wordTransformed
  })

  const joinMessage = transformCodeLetter.map(word => {
    return word.join('')
  })

  return joinMessage.join(' ')
}

console.log(decryptMessage(messageEncrypted))