class Wallet{
    constructor(nameBank, pin){
        this.nameBank = nameBank;
        this.pin = pin;
        this.balance = 0;

    }
    deposit(value){
        console.log(`nap thanh cong ${value} vao tk`);
        return this.balance += value;
    }
    withdraw(value){
        if(value <= this.balance){
            console.log("Rut tin thanh cong");
            this.balance -=value;
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
        return this.pin;
        
    }
    set setPin(pin){
        this.pin = pin;
    }

    get getBalance(){
        return this.balance;
        
    }
    set setBalance(balance){
        this.balance = balance;
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




