class Ninja{
    constructor(name){
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }

    sayName(){
        console.log(`My name is ${this.name}`);
        return this;
    }

    showStats(){
        for(const property in this){
            console.log(`${property}: ${this[property]}`);
        }
        return this;
    }

    drinkSake(){
        this.health += 10;
        return this;
    }
}

class Sensei extends Ninja{
    constructor(name){
        super(name)
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }

    speakWisdom(){
        this.drinkSake();
        console.log("The best time to plant a tree is 10 years ago, the second best is today.");
        return this
    }
}
const ninja1 = new Ninja("Veronica")
const sensei1 = new Sensei("Alex");

// sensei1.sayName();
// sensei1.speakWisdom();
sensei1.showStats();
ninja1.showStats();