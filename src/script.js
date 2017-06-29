function Person(name,age){
  this.name =name;
  this.age=age;
}

var person1 = new Person("manu",28);
Person.prototype.getname = function(){
  return this.name;
}
//console.log(person1.getname());


var str = new String("manu jha");
for( var i=0;i<str.length;i++){
  
  console.log(str.charAt(i));
}



