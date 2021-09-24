function change() {
    var tempatureType = document.getElementById("tempType").value;
    var tempatureValue = document.getElementById("temp").value;
    var tempature = 0;

    
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

    const rbs = document.querySelectorAll('input[name="desimaali"]');
    let selectedValue;
    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }
    if (selectedValue == 1) {
        alert(tempature.toFixed(1))
    } else if (selectedValue == 2) {
        alert(tempature.toFixed(2))
    } else if (selectedValue == 3) {
        alert(tempature.toFixed(3))
    }
}
