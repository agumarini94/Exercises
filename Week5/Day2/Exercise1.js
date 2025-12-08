// Crea una clase Employeecon las siguientes propiedades:
// Una propiedad privada namede tipo string.
// Una propiedad privada salaryde tipo number.
// Una propiedad pública positionde tipo string.
// Una propiedad protegida departmentde tipo string.
// Además, incluya un constructor para inicializar estas propiedades.Cree un método público getEmployeeInfoque devuelva el nombre y el puesto del empleado.
var Employee = /** @class */ (function () {
    function Employee(name, salary, position, department) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
    }
    Employee.prototype.getEmployeeInfo = function () {
        return "name ".concat(this.name, ", and the position is ").concat(this.position);
    };
    return Employee;
}());
var employee = new Employee('Betel', 500, 'Boss', 'High tech');
console.log(employee.getEmployeeInfo());
