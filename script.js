let alarmTime = null;

function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; 
    hours = hours.toString().padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds} ${ampm}`;

    if (alarmTime && `${hours}:${minutes} ${ampm}` === alarmTime) {
        window.location.href = 'birthday.html';
    }
}

function setAlarm() {
    const alarmInput = document.getElementById("alarmTime").value;
    if (alarmInput) {
        let [hour, minute] = alarmInput.split(":");
        let ampm = hour >= 12 ? "PM" : "AM";
        hour = (hour % 12 || 12).toString().padStart(2, '0');
        alarmTime = `${hour}:${minute} ${ampm}`;
        alert("Alarm Saved.");
    } else {
        alert("Please select a valid time.");
    }
}

setInterval(updateClock, 1000);
updateClock(); 
