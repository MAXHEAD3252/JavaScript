class person{
    sayhi(name){
        this.name = name
    }
}
class you extends person{
    
    hello(name){
       console.log(this.sayhi = name)
    }
}
let u = new you()
u.hello('john')
