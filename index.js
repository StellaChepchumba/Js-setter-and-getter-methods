var kiosk={
    fruits:["peach"],
    fruit2:["mango"],
 set fruit(fruit){
    this.fruit2=this.fruit2
  },
  get fruit(){
    return this.fruit2
  },
}
kiosk.fruits;
console.log(kiosk.fruits);
console.log(kiosk.fruit2);
  
