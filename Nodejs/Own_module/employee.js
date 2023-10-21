class Student {
    constructor(name,des){
        this.name = name;
        this.des = des;
    }
    info(){
        console.log(`My Name id ${this.name} and My Designation is ${this.des} `);
    }
}

module.exports = Student;