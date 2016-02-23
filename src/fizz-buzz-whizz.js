var special_num = [];

var FIZZ = "Fizz";
var BUZZ = "Buzz";
var WHIZZ = "Whizz";

var NUM = 15;

function fizz_buzz_whizz(spec_num) {
  if (!(isLegal(spec_num))) {
    special_num = spec_num;
    numberOff(NUM);
  } else {

  }
}

function isLegal(spec_num) {
  for (var i = 0; i < spec_num.length; i ++) {
    if (spec_num[i] < 0 || spec_num[i]%10 != 0)
      return false;
  }
  return true;
}

function numberOff(stu_num) {
  var answer = [];
  for (var i = 1; i <= stu_num; i ++) {
    answer[i-1] = specialNum(stu_num);
  }
}

function specialNum(num) {
   if (isRule3(num) != "") {
    return isRule3(num);
   } else if (isRule2(num) != "") {
    return isRule2(num);
   } else if (isRule1(num) != "") {
    return isRule1(num);
   }
   return num;
}

function isRule1(num) {
  if (num % spec_num[0] == 0)
    return FIZZ;
  else if (num % spec_num[1] == 0)
    return BUZZ;
  else if (num % spec_num[2] == 0)
    return WHIZZ;
  else 
    return "";
}

function isRule2(num) {
  var word = "";
  if (num % spec_num[0] == 0) 
    word += FIZZ;
  if (num % spec_num[1] == 0)
    word += BUZZ;
  if (num % spec_num[2] == 0)
    word += WHIZZ;
  return word;
}

function isRule3(num) {
  for (var i = num%10; num > 0; num /= 10) {
    if (i == spec_num[0]) 
      return FIZZ;
  }
  return "";
}

