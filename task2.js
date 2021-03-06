function Rudder(){
  this.diameter;
  this.setDiameter = function(yourDiameter){
    this.diameter = yourDiameter;
  }
  this.getDiameter = function() {
    return this.diameter;
  }
}

Rudder.prototype.increaseDiametr = function(value){
  return this.diameter+=value;
}
Rudder.prototype.decreaseDiametr = function(value){
  return this.diameter-=value;
}

function Wheels(){
  this.size;
  this.setSize = function(yourSize){
    this.size = yourSize;
  }
  this.getSize = function() {
    return this.size;
  }
}

Wheels.prototype.increaseSize = function(value){
  return this.size+=value;
}
Wheels.prototype.decreaseSize = function(value){
  return this.size-=value;
}

function Body(){
  this.color;
  this.setColor = function(yourColor){
    this.color = yourColor;
  }
  this.getColor = function() {
    return this.color;
  }
}

function Car(releaseYear){
  this.model;
  this.releaseYear = releaseYear;
  this.setModel = function(yourModel){
    this.model = yourModel;
  }
  this.getModel = function(){
    return this.model;
  }
  this.body = new Body();
  this.wheels = new Wheels();
  this.rudder = new Rudder();
}
Car.prototype.setDiameter = function(yourDiameter) {
  this.rudder.setDiameter(yourDiameter);
};
Car.prototype.getDiameter = function () {
  return this.rudder.getDiameter();
};
Car.prototype.increaseDiametr = function (value) {
  this.rudder.increaseDiametr(value);
};
Car.prototype.decreaseDiametr = function (value) {
  this.rudder.decreaseDiametr(value);
};
Car.prototype.setSize = function (yourSize) {
  this.wheels.setSize(yourSize);
};
Car.prototype.getSize = function () {
  return this.wheels.getSize();
};
Car.prototype.increaseSize = function (value) {
  this.wheels.increaseSize(value);
};
Car.prototype.decreaseSize = function (value) {
  this.wheels.decreaseSize(value);
};
Car.prototype.setColor = function (yourColor) {
  this.body.setColor(yourColor);
};
Car.prototype.getColor = function () {
  return this.body.getColor();
};

var car = new Car(2000);
car.setColor('red');
car.setSize(40);
car.setModel('Mercedes-Benz');
car.setDiameter(25);

Car.prototype.Show = function () {
  console.log(car.getModel()+', рік випуску:'+this.releaseYear+', колір кузова:'+car.getColor()+', розмір коліс:'+car.getSize()+', розмір керма:'+car.getDiameter());
};
car.Show();
car.increaseSize(5);
car.Show();
car.decreaseDiametr(8);
car.Show();
