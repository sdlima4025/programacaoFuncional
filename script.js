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


// Funcional: Instância e This
let person = {
  name: 'Sérgio',
  lastName: 'Lima',
  age: 52,
  getFullName() {
      return `Seu nome é: ${this.name} ${this.lastName} e você tem ${this.age} anos`;
  },
  start() {
    console.log('deu start na pessoa!');
  }
}
person.start();
console.log(person.getFullName());
*/

// Funcional: Herança
// Objeto Padrão
const defaultUser = {
  name:'',
  email:'',
  level: 1
}

// operador spread ==...nome da variavél clona o objeto
let user1 = {
  ...defaultUser,
  name:'Sérgio',
  email:'sergiolima@gmail.com'
}
console.log(user1);

let adm1 = {
  ...defaultUser,
  name: 'admin',
  email: 'admin@gmail.com.br',
  level: 2
}
console.log(adm1);