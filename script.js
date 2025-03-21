console.log('Inicializar script');

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello(){
        return `hola mi nombre es ${this.name}`
    }
}

const juan = new Person('Juan', 15);
juan.sayHello();
