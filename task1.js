function hourSalary(moneyPerHour,hours){
  this.hours = hours;
  var money = moneyPerHour;
  this.setMoney = function(cmoneyPerHour){
    money = cmoneyPerHour;
  }
  this.getMoney = function(){
    return money;
  }
}
hourSalary.prototype.getResultAmount = function(){
  var daysMoney = this.hours*this.getMoney();
  var monthMoney = 20*daysMoney;
  return 12*monthMoney;
}

function monthSalary(omoney){
  var money = omoney;
  this.setMoney = function(cmoney){
    money = cmoney;
  }
  this.getMoney = function(){
    return money;
  }
}
monthSalary.prototype.getResultAmount = function(){
  return 12*this.getMoney();
}

var employee1 = new hourSalary(40,6);
employee1.setMoney(90);
console.log(employee1.getResultAmount());
var employee2 = new monthSalary();
employee2.setMoney(4500);
console.log(employee2.getResultAmount());
