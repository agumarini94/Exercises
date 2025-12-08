
class Employee{ //--> inicio la clase 
    private name: string; //---> privada y solo recibe string
    private salary: number;
    position: string;
    protected department: string;
    
    constructor(name: string, salary: number, position: string, department: string) {
        // --> Estos son los datos del objeto que voy a recibir .
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
    }
    getEmployeeInfo(): string { //este es el metodo. 
        return `name ${this.name}, and the position is ${this.position}`;
    }
}

let employee = new Employee('Betel', 500, 'Boss', 'High tech');
console.log(employee.getEmployeeInfo());
