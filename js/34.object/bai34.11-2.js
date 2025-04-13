class Wallet{
    constructor(nameBank, pin){
        this.nameBank = nameBank;
        this._pin = pin;
        this._balance = 0;

    }
    deposit(value){
        console.log(`nap thanh cong ${value} vao tk`);
        return this._balance += value;
    }
    withdraw(value){
        if(value <= this._balance){
            console.log("Rut tin thanh cong");
            this._balance -=value;
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
        return this._pin;
        
    }
    set setPin(pin){
        this._pin = pin;
    }

    get getBalance(){
        return this._balance;
        
    }
    set setBalance(balance){
        this._balance = balance;
    }
}

const w1 = new Wallet();

w1.setNameBank = "thanh ngu";
w1.setPin = 109;

console.log(w1);

w1.deposit(100);
console.log(w1.getBalance);
w1.withdraw(99);
console.log(w1.getBalance);




