function change() {
    var tempatureType = document.getElementById("tempType").value;
    var tempatureValue = document.getElementById("temp").value;
    var tempature = 0;
    if (tempatureType == "CtoF") {
        alert(tempature = tempatureValue * 1.8 + 32);
    } else if (tempatureType == "CtoK") {
        alert(tempature = tempatureValue - -273.15);
    } else if (tempatureType == "KtoF") {
        alert(tempature = tempatureValue * 1.8 - 459.67);
    } else if (tempatureType == "KtoC") {
        alert(tempature = tempatureValue - 273.15);
    } else if (tempatureType == "FtoK") {
        alert((tempatureValue - -459.67) / 1.8);
    } else if (tempatureType == "FtoC") {
        alert(tempature = (tempatureValue - 32) / 1.8);
    }
}
