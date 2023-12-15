
class Animal {
  constructor(name, legCount) {
    this.name = name
    this.legCount = legCount
  }
  static animal() {
    console.log("This is a animal");
  }
  describe() {
    return `${this.name} has ${this.legCount} legs`
  }
}
Animal.animal()  //This is a animal
const obj = new Animal('cow', 4);
const ans = obj.describe();
console.log(ans);   // cow has 4 legs.

