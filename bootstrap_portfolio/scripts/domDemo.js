console.log(document);


function testTheDom(){
    console.log("Inside test the dom");

    var nodes = document.getElementsByTagName("li"); // grabbing list items
    console.log(nodes);

    for(let node of nodes){
        console.log(node.textContent);
    }


    
    console.log(checkingNode.textContent);
    //checkingNode.textContent = "Changed";

    







}


function depositChecking(){
    var checkingNode = document.getElementById("checking");
    var balance = parseInt(checkingNode.textContent); // it is now a numeric value
    balance += 100;
    checkingNode.textContent = balance;

}

function depositSavings(){
    var headerNode = document.getElementById("bankAccount");
    headerNode.textContent = "Bank Accounts";
    var savingsNode = document.getElementById("savings");
    var savingsBal = parseInt(savingsNode.textContent);
    savingsBal += 100;
    savingsNode.textContent = savingsBal;
}

function emptySavings(){
    var headerNode = document.getElementById("bankAccount");
    headerNode.textContent = "Alert: Savings Empty";
    var savingsNode = document.getElementById("savings");
    var savingsBal = parseInt(savingsNode.textContent);
    savingsNode.textContent = 0;


    


}