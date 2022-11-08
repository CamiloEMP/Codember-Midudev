import { users } from "./users.mjs"
const test = `usr:@midudev eme:mi@gmail.com psw:123456 age:22 loc:bcn fll:82

fll:111 eme:yrfa@gmail.com usr:@codember psw:123456 age:21 loc:World

psw:11133 loc:Canary fll:333 usr:@pheralb eme:pheralb@gmail.com

usr:@itziar age:19 loc:isle psw:aaa fll:222 eme:itzi@gmail.com

psw:11133 loc:Canary
fll:333 usr:@pheralb
eme:pheralb@gmail.com
age:11
`

const REQUIRED = ["usr:", "eme:", "psw:", "age:", "loc:", "fll:"]

const checkValidUsers = (input = "") => {
  let concatString = ""
  let stringToValidate = ""
  const validUsers = []

  input.split("\n").forEach((line, index) => {
    if (line.length === 0) {
      stringToValidate = concatString
      concatString = ""
    }
    concatString = concatString.concat(line + ' ')

    if (stringToValidate.length > 0) {
      const checkString = []
      stringToValidate.split(" ").forEach((string) => {
        REQUIRED.forEach((required) => {
          if (string.startsWith(required)) {
            checkString.push(string)
          }
        }) 
      })
      if (checkString.length === 6) {
        stringToValidate = ''
        validUsers.push([...checkString])
      }
    }
  })

  return {
    length: validUsers.length,
    lastUser: validUsers[validUsers.length - 1]
  }
}

const result = checkValidUsers(users)
console.log(result)