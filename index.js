let a = [
  { name: 'ichiri-age-7', value: '50' },
  { name: 'ichiri-id-7', value: '80' },
  { name: 'ichiri-name-8', value: 'ok' },
  { name: 'ichiri-age-8', value: '60' },
  { name: 'ichiri-id-8', value: '100' },
];
let myJSON = JSON.stringify(a);
let regex = RegExp('^ichiri-id');
let arr = a.filter(function (value) {
  return regex.test(value.name);
});
console.log(a);
console.log(arr);
console.log(myJSON);
let myObj = JSON.parse(myJSON);
console.log(myObj);
