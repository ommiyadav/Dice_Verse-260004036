let diceContainer = document.getElementById('diceContainer')
let rollBtn = document.getElementById('rollBtn')
let diceCountSelect = document.getElementById('diceCount');
let totalScoreEl = document.getElementById('totalScore')
let historyList = document.getElementById('historyList');

let rollHistory = []

function rollDice(){
  let count = parseInt(diceCountSelect.value);
  diceContainer.innerHTML = '';
  
  let currentRolls = [];
  let sum = 0

  // show temporary question mark while rolling
  for(let i=0; i<count; i++) {
    let tempDiv = document.createElement('div')
    tempDiv.className = 'dice rolling'
    tempDiv.innerText = '?'
    diceContainer.appendChild(tempDiv)
  }

  rollBtn.disabled = true;

  setTimeout(function() {
    diceContainer.innerHTML = '';
    
    for (let i = 0; i < count; i++) {
      let roll = Math.floor(Math.random() * 6) + 1;
      currentRolls.push(roll);
      sum += roll;

      let d = document.createElement('div');
      d.className = 'dice';
      d.innerText = roll;
      diceContainer.appendChild(d);
    }

    totalScoreEl.innerText = "Total: " + sum;
    
    // update history log
    let logText = "Rolled: [ " + currentRolls.join(', ') + " ] | Total: " + sum;
    rollHistory.unshift(logText);

    if (rollHistory.length > 5) {
      rollHistory.pop()
    }

    historyList.innerHTML = '';
    for(let j=0; j < rollHistory.length; j++){
      let item = document.createElement('li')
      item.innerText = rollHistory[j]
      historyList.appendChild(item)
    }

    rollBtn.disabled = false
  }, 400);
}

rollBtn.addEventListener('click', rollDice)

// initial roll on load
rollDice();
