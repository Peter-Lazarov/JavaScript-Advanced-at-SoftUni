function attachEventsListeners() {

    let buttonArray = Array.from(document.querySelectorAll("input[type=button]"));
    let inputArray = Array.from(document.querySelectorAll("input[type=text]"));

    buttonArray.forEach(element => {
        element.addEventListener("click", onClickAction);
    });

    function getBaseValue(value, position) {
        let dataCalculateArray = [1, 24, 60, 60];
        let base = value;
        for (0 < position; position--;) {
            base = base / dataCalculateArray[position];
        }

        return base;
        //console.log(base);
    }

    function calculateAllTimes(base) {
        let allData = [];
        allData[0] = base;
        allData[1] = base * 24;
        allData[2] = allData[1] * 60;
        allData[3] = allData[2] * 60;

        return allData;
        //console.log(allData);
    }

    function onClickAction(event) {
        let value = Number(event.target.parentElement.children[1].value);
        let unit = event.target.parentElement.children[1].id;
        let base = 0;
        switch (unit) {
            case "days":
                base = getBaseValue(value, 1);
                break;
            case "hours":
                base = getBaseValue(value, 2);
                break;
            case "minutes":
                base = getBaseValue(value, 3);
                break;
            case "seconds":
                base = getBaseValue(value, 4);
                break;
        }

        let timesResult = calculateAllTimes(base);
        for (let i = 0; i < inputArray.length; i++) {
            inputArray[i].value = timesResult[i];
        }
    }
}
