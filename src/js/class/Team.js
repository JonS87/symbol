export class Team {
  constructor() {
    this.characters = []; 
  }

  addCharacter(character) {
    this.characters.push(character);
  }

  *[Symbol.iterator]() {
    let index = 0;
    const lineCount = this.characters.length;
    while (index < lineCount) {
      yield this.characters[index]
      index++;
    }
  }
  // [Symbol.iterator]() {
  //   let index = 0;
  //   return {
  //     next: () => {
  //       if (index < this.characters.length) {
  //         return {
  //           value: this.characters[index++],
  //           done: false
  //         }
  //       }

  //       return {
  //         value: undefined,
  //         done: true
  //       }
  //     }
  //   }
  // }
}
