let currencies = [
    ['Hundred dollars', 100],
    ['Fifty dollars', 50],
    ['Twenty dollars', 20],
    ['Ten dollars', 10], 
    ['Five dollars', 5], 
    ['Dollar', 1], 
    ['Quarters', 0.25], 
    ['Dimes', 0.10], 
    ['Nickels', 0.05], 
    ['Pennies', 0.01], 
];

function calculateChange() {
    let due = document.getElementById('amount-due').value;
    let received = document.getElementById('amount-received').value;
    let resultText = "";
    let change = Number(received - due);
    document.getElementById('final').innerText = `$${change}`;

    for (let i = 0; i < currencies.length; i++) {
    let money = currencies[i];
    let currencyName = money[0];
    let amount = money[1];
    let total = Math.floor(change / amount);

    change = Number((change % amount).toFixed(2));
    resultText += `${currencyName}: ${total}\n`;
    document.getElementById('result').innerText = resultText;
    }
}
