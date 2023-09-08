class person {
    constructor(name){
        this.name = name
    }

    sayhi(){
        console.log(typeof this.name)
 console.log(this.name)   
}
}

let user = new person('john')
user.sayhi()
console.log(typeof person)
console.log(typeof user)
