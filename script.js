function calculate() {
  // Pegar o valor da viagem selecionada
  const selectedTrip = document.querySelector('input[name="hours-type"]:checked').value;
  const tripCost = parseFloat(selectedTrip);

  // Pegar o valor da hora de trabalho
  const hourlyRateInput = document.getElementById('value-hour-day');
  const hourlyRate = parseFloat(hourlyRateInput.value);


  const hoursPerDayInput = document.getElementById('hours-per-day');
  const hours = parseFloat(hoursPerDayInput.value);

  console.log(hourlyRate);
  console.log(tripCost);


  // Calcular quantas horas por dia são necessárias para pagar a viagem em 365 dias
  const dailyEarnings = hourlyRate * hours; 
  const daysNeeded = tripCost / dailyEarnings;
  const hoursPerDay = daysNeeded / 365 * hours;

  // Exibir os resultados
  document.getElementById('hours-needed').innerText = `${Math.floor(hoursPerDay)} h ${Math.round((hoursPerDay % 1) * 60)} min`;
  document.getElementById('value-needed').innerText = (tripCost / 365).toFixed(2);

  if (tripCost/365> 0.25*dailyEarnings){
    document.getElementById('is-not-possible').innerText = "Não é uma meta realista";
    document.getElementById('is-not-possible').style.display='block';
} else {
  document.getElementById('is-not-possible').innerText = '';
  document.getElementById('is-not-possible').style.display= 'none';
}
}


