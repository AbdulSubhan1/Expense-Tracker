var nme = document.getElementById('name');
var date = document.getElementById('date');
var amount = document.getElementById('amount');
var addbtn = document.getElementById('add');

addbtn.addEventListener('click',(e)=>{
    var table = document.getElementById('table');
    var tableRow = document.createElement('tr');
    var cName = document.createElement('td');
    var cDate = document.createElement('td');
    var cAmount = document.createElement('td');
    cName.appendChild(document.createTextNode(nme.value));
    console.log(cName);
    
    cDate.appendChild(document.createTextNode(date.value));
    console.log(cDate);

    cAmount.appendChild(document.createTextNode(amount.value));
    console.log(cAmount);

    tableRow.appendChild(cName);
    tableRow.appendChild(cDate);
    tableRow.appendChild(cAmount);

    table.appendChild(tableRow);


});