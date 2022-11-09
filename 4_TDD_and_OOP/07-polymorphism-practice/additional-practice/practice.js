class Charity {}

class Business {
    toString(){
        return 'Give us your money.';
    }
}

class Restaurant extends Business{
    toString(){
        return 'Eat at Joe\'s!';
    }
}

class AutoRepairShop extends Business {}

class Retail extends Business{
    toString(){
        return 'Buy some stuff!';
    }
}

class ClothingStore extends Retail{}

class PhoneStore extends Retail{
    toString(){
        return 'Upgrade your perfectly good phone, now!';
    }
}

console.log(new PhoneStore().toString()); //expected: 'Upgrade your perfectly good phone, now!'
console.log(new ClothingStore().toString()); //expected: 'Buy some stuff!'
console.log(new Restaurant().toString());  //expected: 'Eat at Joe's!'
console.log(new AutoRepairShop().toString()); //expected: 'Give us your money.'
console.log(new Charity().toString()); //expected: [object Object]

/* 
PhoneStore and Restaurant use polymorphism to overload the toString()
function so that a specific message is printed.
AutoRepairShop, Charity, and ClothingStore do not have their own toString()
methods. The JavaScript runtime inspects parent objects to find a toString() 
method.
- for AutoRepairShop, it finds a toString() method on its parent class Business.
- for ClothingStore, it finds a toString() method on its parent class Retail.
- for Charity, it finds a toString() method on its implicit parent class Object.*

*Note: All objects in JavaScript share a common parent class, the Object parent class.
The Object class has a method named toString() on it. Since all objects in JavaScript
are child classes (or grandchild classes or great-grandchild classes or great-great-...),
that means that every object in JavaScript has a toString() method.
*/
