import { mecenasData } from "./mecenas.js";

const main = (mecenas = []) => {
  let battleRoyale = mecenas.map((value, index) => ({ "name": value, "position": index }));

  while(battleRoyale.length > 1){
    let isOdd = battleRoyale.length % 2 !== 0;
    console.log(isOdd)
    battleRoyale = battleRoyale.filter((_, index) => index % 2 === 0)
    if(isOdd) battleRoyale.shift();
  }

  // console.log(battleRoyale);
  // console.log(`submit => submit ${battleRoyale[0].name}-${battleRoyale[0].position}`);
}

main(mecenasData)
