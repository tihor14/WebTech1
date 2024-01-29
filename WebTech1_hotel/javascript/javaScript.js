function validateForm() {
    var checkInDate = document.getElementById('checkInDate').value;
    var checkOutDate = document.getElementById('checkOutDate').value;
    var adults = document.getElementById('adults').value;
    var breakfast = document.querySelector('input[name="mealPlan"]:checked');
    var roomColor = document.getElementById('roomColor').value;
    var elementsWithClass = document.getElementsByClassName('bevitel1');
    var allInputs = document.getElementsByTagName('input');


    if (!isValidDate(checkInDate) || !isValidDate(checkOutDate)) {
        showError("Wrong date format");
        return false;
    }

    if (adults < 1) {
        showError("Minimum 1 person");
        return false;
    }

    if (!breakfast) {
        showError("Choose meal plan!");
        return false;
    }

    // Mentés a fájlba
    saveDataToFile(checkInDate, checkOutDate, adults, breakfast.value, roomColor);

    return true;
}

function showError(message) {
    alert(message);
}

function isValidDate(dateString) {
    var regex = /^\d{4}-\d{2}-\d{2}$/;
    return dateString.match(regex) !== null;
}

function saveDataToFile(checkInDate, checkOutDate, adults, mealPlan, roomColor) {
    var dataToSave = `Check In Date: ${checkInDate}\nCheck Out Date: ${checkOutDate}\nAdults: ${adults}\nMeal Plan: ${mealPlan}\nRoom Color: ${roomColor}`;

    var blob = new Blob([dataToSave], { type: 'text/plain' });

    var a = document.createElement('a');
    a.href = window.URL.createObjectURL(blob);
    a.download = 'booking_data.txt';

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
