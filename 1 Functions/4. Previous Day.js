function previousDay(year, month, day){
    // if(year < 100){
    //     year = 1900 + year;
    // }

    let event = new Date(`${year} ${month} ${day}`);
    event.setDate(event.getDate() - 1); //Minus one day

    console.log(`${event.getFullYear()}-${event.getMonth() + 1}-${event.getDate()}`);
}
previousDay(2023, 9, 1);
