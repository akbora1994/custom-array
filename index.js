function myArray(){
    Object.defineProperty(this, "length", {
    value: 0,
    writable: true,
    enumerable: false, 
  });

this.length= arguments.length;


for(let i=0;i<this.length;i++){
    this[i]= arguments[i];
}
}

  let  a2=new myArray("x","y","z") ;

  myArray.prototype.ढकला  = function(value){
  let index=this.length;
  this[index]=value;
  this.length++;
};

  myArray.prototype.काढा   = function(value){
  let index=this.length-1;
  delete this[index]
  this.length--;
};

  myArray.prototype.वरचा   = function(value){
  let index=this.length-1;
  return console.log(this[index])

};
 myArray.prototype.छापा    = function(value){
     return console.log(this)
    };

    myArray.prototype.उलटछापा   = function(value){
       let a=[];
       for(let i=a2.length-1;i>=0;i--){
           a.push(a2[i])
       }
       return console.log(a)
        };

        myArray.prototype.लांबी    = function(value){
           
           return console.log(this.length) 
            };


a2.ढकला("a")
a2.काढा()
a2.वरचा()
a2.छापा()
a2.उलटछापा()
a2. लांबी()

console.log ("a2:", Object.values(a2))                 