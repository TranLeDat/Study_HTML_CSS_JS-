class Wallet{
    #pin; //private fields
    #balance; //private fields
    #isPinEntered = false; //private fields
    constructor(nameBank, pin){
        this.nameBank = nameBank;
        this.#pin = pin;
        this.#balance = 0;

    }
    // Private method
    #validatePin(pin){
        return this.#pin === pin;
        
    }
    // Public method
    enterPin(pin){
        if(this.#validatePin(pin)){
            this.#isPinEntered = true;
        }else{
            console.log("Invalid pin");
            
        }
    }


    deposit(value){
        if(!this.#isPinEntered){
            console.log("kiem tra lai ma pin");
            return;
        }
        console.log(`nap thanh cong ${value} vao tk`);
        return this.#balance += value;
    }
    withdraw(value){
        if(!this.#isPinEntered){ 
            console.log("kiem tra lai ma pin");
            return;
        }
        if(value <= this.#balance){
            console.log("Rut tin thanh cong");
            this.#balance -=value;
        }else{
            console.log("So tien trong tk ko du");
        }
    }
    get getNameBank(){
        return this.nameBank;
        
    }
    set setNameBank(nameBank){
        this.nameBank = nameBank;
    }

    get getPin(){
        if(!this.#isPinEntered){
            // console.log("Kiem tra lai ma pin");
            return 'Kiem tra lai ma pin';
        }
        return this.#pin;
        
    }
    set setPin(pin){
        this.#pin = pin;
    }

    get getBalance(){
        if(!this.#isPinEntered){
            console.log("Kiem tra lai ma ");
            return ;
            
        }
        return this.#balance;
        
    }
    set setBalance(balance){
        this.#balance = balance;
    }
}

const w1 = new Wallet();
const w2 = new Wallet("cau", "90");

// console.log(w2.#balance);
//set doi tuong w1
w1.setNameBank = "thanh ngu";
w1.setPin = "109";
console.log(w1);
console.log(w2);


w1.enterPin("109");

w1.deposit(100);
console.log(w1.getBalance);
w1.withdraw(99);
console.log(w1.getBalance);




