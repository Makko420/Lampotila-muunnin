function change() {
    var tempatureType = document.getElementById("tempType").value;
    var tempatureValue = document.getElementById("temp").value;
    var tempature = 0;

    const rbs = document.querySelectorAll('input[name="desimaali"]');
    let selectedValue = 0;
    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }


    if (tempatureValue == "") {
        alert("Syötä lämpötila!")
    } else if (selectedValue == 0) {
        alert("Valitse jokin desimaali!")
    }


    if (tempatureType == "CtoF") {
        tempature = tempatureValue * 1.8 + 32;
    } else if (tempatureType == "CtoK") {
        tempature = tempatureValue - -273.15;
    } else if (tempatureType == "KtoF") {
        tempature = tempatureValue * 1.8 - 459.67;
    } else if (tempatureType == "KtoC") {
        tempature = tempatureValue - 273.15;
    } else if (tempatureType == "FtoK") {
        (tempatureValue - -459.67) / 1.8;
    } else if (tempatureType == "FtoC") {
        tempature = (tempatureValue - 32) / 1.8;
    }


    if (selectedValue == 1) {
        document.getElementById("result").innerHTML = "Lämpötila: " + tempature.toFixed(1);
    } else if (selectedValue == 2) {
        document.getElementById("result").innerHTML = "Lämpötila: " + tempature.toFixed(2);
    } else if (selectedValue == 3) {
        document.getElementById("result").innerHTML = "Lämpötila: " + tempature.toFixed(3);
    }
}
