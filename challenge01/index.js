import { users } from "./users.js"
const test = `usr:@midudev eme:mi@gmail.com psw:123456 age:22 loc:bcn fll:82

fll:111 eme:yrfa@gmail.com usr:@codember psw:123456 age:21 loc:World

psw:11133 loc:Canary fll:333 usr:@pheralb eme:pheralb@gmail.com

usr:@itziar age:19 loc:isle psw:aaa fll:222 eme:itzi@gmail.com sads:sadsa

usr: age:19 loc:isle psw:aaa fll:222 eme:itzi@gmail.com

psw:1 loc:Canary
fll:333 usr:@pheralb
eme:pheralb@gmail.com
age:11
sad:asdsad

psw:2 loc:Canary
fll:333 usr:@pheralb
eme:pheralb@gmail.com
sad:asdsad

psw:3 loc:Canary
fll:333 usr:@pheralb
eme:pheralb@gmail.com
age:44
sad:asdsad

fll:111 eme:yrfa@gmail.com usr:@codember
psw:123456 age:21 eme:World
`

const REQUIRED = ["usr:", "eme:", "psw:", "age:", "loc:", "fll:"]

// console.log(REQUIRED.every(field => 'usr:@midudev eme:mi@gmail.com psw:123456 age:22 loc:bcn fll:82'.includes(field)))

const checkValidUsers = (input = "") => {
  let concatString = ""
  const validUsers = []

  input.split("\n").forEach((line) => {
    if (line.length > 0) {
      concatString = concatString.concat(line + " ")
    }

    if (REQUIRED.every((field) => concatString.includes(field))) {
      validUsers.push(concatString)
    }

    concatString = ""
  })

  return {
    length: validUsers.length,
    lastUser: validUsers[validUsers.length - 1]
  }
}

const result = checkValidUsers(users)
console.log(result)
