const chart = [
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
const rows = document.querySelectorAll(".rect");

initialize();

function initialize(){
  drawChart();
  highlightToday();
  chartResponse();
}

function drawChart(){
  const daysName = document.querySelectorAll(".text");
  for(let i=0; i<chart.length; i++){
    daysName[i].textContent = chart[i].day;
    rows[i].style.height = (chart[i].amount * 300) / 100 + "px";
  }
}

function chartResponse(){
  rows.forEach(row => {
    const valueField = document.querySelectorAll(".value");
    const number = row.parentElement.id;
    const textValue = chart[number - 1].amount;
    row.addEventListener('mouseenter', () => showText(valueField, number, textValue))
    row.addEventListener('mouseleave', () => hideText(valueField, number));
  })
}

function hideText(arr, num){
  arr[num - 1].classList.add("hidden")
}

function showText(arr, num, text){
  arr[num - 1].classList.remove("hidden");
  arr[num - 1].textContent = "$"+text;
}

function highlightToday(){
  const date = new Date();
  const day = date.getDay();
  switch (day){
    case 1: 
      rows[0].classList.add("today");
      break;
    case 2: 
      rows[1].classList.add("today");
      break;
    case 3: 
      rows[2].classList.add("today");
      break;
    case 4: 
      rows[3].classList.add("today");
      break;
    case 5: 
      rows[4].classList.add("today");
      break;
    case 6: 
      rows[5].classList.add("today");
      break;
    case 7: 
      rows[6].classList.add("today");
  }
}
