function getDOB() {
    const dobInput = document.getElementById('inputDob').value;
    const dob = new Date(dobInput);
    const currentDate = new Date();

    const yearDiff = currentDate.getFullYear() - dob.getFullYear();
    const monthDiff = currentDate.getMonth() - dob.getMonth();
    const dateDiff = currentDate.getDate() - dob.getDate();

    if (yearDiff < 0) {
        document.getElementById("currentAge").innerHTML = "Invalid Date";
    } else {
        document.getElementById("currentAge").innerHTML =
            `Your current Age is ${yearDiff} years, ${monthDiff} months, and ${dateDiff} days`;
    }
}
