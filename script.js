
document.addEventListener("DOMContentLoaded", function () {
    let inputElement = document.getElementById("input-text");
    let textElement = document.getElementById("percent");
    let circleElement = document.querySelector("circle[stroke='#EB3349']");
    let eligibleMsg = document.querySelector(".parent__card--msg--eligible");
    let notEligibleMsg = document.querySelector(".parent__card--msg--not_eligible");

  
    inputElement.addEventListener("input", function () {
        let inputValue = inputElement.value;
       if(inputValue>=0 && inputValue<=100){
        textElement.textContent = inputValue + "%";
        let dashArray = (inputValue / 100) * 1069;
        circleElement.setAttribute("stroke-dasharray", dashArray + " 1069");
       }else{
        inputElement.value=" ";
        alert("Please enter a valid percentage range between 0 and 100.")
       }
       
       
       

      
        if (inputValue >= 40) {
            eligibleMsg.style.display = "flex";
            notEligibleMsg.style.display = "none";
        } else {
            eligibleMsg.style.display = "none";
            notEligibleMsg.style.display = "flex";
        }
    });
});



