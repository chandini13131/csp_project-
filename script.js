function calculateBMI(){

let height =
parseFloat(document.getElementById("height").value);

let weight =
parseFloat(document.getElementById("weight").value);

let result =
document.getElementById("result");

let status =
document.getElementById("status");

let tips =
document.getElementById("tips");

let bmiImage =
document.getElementById("bmiImage");

if(height <= 0 || weight <= 0){

result.innerHTML =
"Please enter valid details";

return;

}

/* Convert feet to meters */

height = height * 0.3048;

/* BMI Formula */

let bmi =
weight / (height * height);

bmi = bmi.toFixed(2);

result.innerHTML =
"Your BMI is: " + bmi;

tips.innerHTML = "";


/* UNDERWEIGHT */

if(bmi < 18.5){

status.innerHTML =
"Underweight";

status.style.color = "orange";

bmiImage.src =
"https://images.unsplash.com/photo-1490645935967-10de6ba17061";

let suggestions = [

"Increase protein-rich foods",

"Drink milk daily",

"Eat bananas and dry fruits",

"Take healthy snacks between meals",

"Include eggs and paneer",

"Do light strength exercises",

"Vitamin foods: Carrot, Orange, Spinach",

"Protein foods: Eggs, Chicken, Paneer",

"Fiber foods: Oats, Fruits, Vegetables"

];

for(let i=0;i<suggestions.length;i++){

tips.innerHTML +=
"<li>" + suggestions[i] + "</li>";

}

}



/* NORMAL */

else if(bmi >= 18.5 && bmi < 25){

status.innerHTML =
"Normal Weight";

status.style.color = "green";

bmiImage.src =
"https://images.unsplash.com/photo-1518611012118-696072aa579a";

let suggestions = [

"Great! You are in good health",

"Maintain balanced diet",

"Continue regular exercise",

"Drink enough water",

"Vitamin foods: Orange, Mango, Tomato",

"Protein foods: Milk, Eggs, Dal",

"Fiber foods: Apple, Oats, Vegetables"

];

for(let i=0;i<suggestions.length;i++){

tips.innerHTML +=
"<li>" + suggestions[i] + "</li>";

}

}



/* OVERWEIGHT */

else if(bmi >= 25 && bmi < 30){

status.innerHTML =
"Overweight";

status.style.color = "red";

bmiImage.src =
"https://images.unsplash.com/photo-1512621776951-a57141f2eefd";

let suggestions = [

"Exercise daily",

"Avoid oily foods",

"Drink more water",

"Eat vegetables and fruits",

"Walk 30 minutes daily",

"Vitamin foods: Leafy vegetables",

"Protein foods: Sprouts, Dal",

"Fiber foods: Brown rice, Oats"

];

for(let i=0;i<suggestions.length;i++){

tips.innerHTML +=
"<li>" + suggestions[i] + "</li>";

}

}



/* OBESE */

else{

status.innerHTML =
"Obese";

status.style.color = "darkred";

bmiImage.src =
"https://images.unsplash.com/photo-1498837167922-ddd27525d352";

let suggestions = [

"Consult a doctor",

"Follow healthy diet",

"Perform regular exercise",

"Reduce sugar intake",

"Avoid junk food",

"Vitamin foods: Fruits and vegetables",

"Protein foods: Fish, Dal",

"Fiber foods: Oats, Beans"

];

for(let i=0;i<suggestions.length;i++){

tips.innerHTML +=
"<li>" + suggestions[i] + "</li>";

}

}

}