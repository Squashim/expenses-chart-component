const rows = Array.from(document.querySelectorAll(".rect"));
const daysName = Array.from(document.querySelectorAll(".text"));

let chart = [
    {
      "day": "mon",
      "amount": 17.45
    },
    {
      "day": "tue",
      "amount": 34.91
    },
    {
      "day": "wed",
      "amount": 52.36
    },
    {
      "day": "thu",
      "amount": 31.07
    },
    {
      "day": "fri",
      "amount": 23.39
    },
    {
      "day": "sat",
      "amount": 43.28
    },
    {
      "day": "sun",
      "amount": 25.48
    }
  ]

for(let i=0; i<chart.length; i++){
    daysName[i].textContent = chart[i].day;
    rows[i].style.height = (chart[i].amount * 300) / 100 + "px";
}


function heightCalc(){

}
