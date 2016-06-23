var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];

var employees = [atticus, jem, boo, scout];

for (var i = 0; i < employees.length; i++) {
  console.log(calcBonus(employees[i]));
}

function calcBonus(employee){

  var stiPer = (calcSti(employee) * 100) + "\%";
  var anComp = Math.round((calcSti(employee) * employee[2]) + parseInt(employee[2]));
  var totBonus = Math.round((calcSti(employee) * employee[2]));

  return [employee[0], stiPer, anComp, totBonus];
}

function calcSti(arr) {
  // set the base
var percentSti = 0.0;

  if(arr[3] <= 2 ){
    percentSti = 0.0;
  }
  else if (arr[3] == 3){
    percentSti = 0.04;
  }
  else if (arr[3] == 4) {
    percentSti = 0.06;
  }
  else if (arr[3] == 5) {
    percentSti = 0.1;
  }

////
  if(arr[1].length == 4){
    percentSti += 0.05;
  }
  if(arr[2] > 65000){
    percentSti -= 0.01;
  }

  if (percentSti > 0.13){
    percentSti =0.13;
  }

  return percentSti;
}
