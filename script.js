
document.addEventListener("DOMContentLoaded", function () {
    var inputElement = document.getElementById("input-text");
    var textElement = document.getElementById("percent");
    var circleElement = document.querySelector("circle[stroke='#EB3349']");
    var eligibleMsg = document.querySelector(".parent__card--msg--eligible");
    var notEligibleMsg = document.querySelector(".parent__card--msg--not_eligible");

  
    inputElement.addEventListener("input", function () {
       
        var inputValue = inputElement.value;
        textElement.textContent = inputValue + "%";
        var dashArray = (inputValue / 100) * 1069;
        circleElement.setAttribute("stroke-dasharray", dashArray + " 1069");

        if (inputValue >= 40) {
            eligibleMsg.style.display = "flex";
            notEligibleMsg.style.display = "none";
        } else {
            eligibleMsg.style.display = "none";
            notEligibleMsg.style.display = "flex";
        }
    });
});



