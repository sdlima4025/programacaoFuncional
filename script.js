// Funcional: Factory
/*function createPerson(name, lastName, age) {
  return{
    name,
    lastName,
    age,
    getFullName() {
      return`${this.name} ${this.lastName}`;
    }
  }
  
}

let person1 = createPerson('Sérgio', 'Lima', 52);
let person2 = createPerson('Silvio', 'Santana', 56);

console.log(person1, person2);
*/

// Funcional: Instância e This
let person = {
  name: 'Sérgio',
  lastName: 'Lima',
  age: 52,
  getFullName() {
      return `Seu nome é: ${this.name} ${this.lastName} e você tem ${this.age} anos`;
  }
}
console.log(person.getFullName());