var term = {
Беларусь:-17,
Литва:-15,
Латвия:-16,
Польша:-20,
Россия:-22,
Украина:-17
};

function pogoda(term) {
var str = "<tr><td>страна</td><td>температура в °C</td></tr>";
for(k in term) {
str += "<tr><td>"+k+"</td><td>"+ term[k]+"</td></tr>";
}
document.getElementById('object').innerHTML = str;
}

function getSredZn(term){
let sum = 0, count = 0;
for(let i in term){
count++;
sum += term[i];
}
sr=(sum/count).toFixed(2);
document.getElementById('sredZn').innerHTML = sr;
}

function getMaxZn(term) {
let max = "-60";
for(let i in term){
if (term[i] > max){
max = term[i];
}
}
document.getElementById('maxZn').innerHTML = max;
}