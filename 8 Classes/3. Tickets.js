function sortTickets(dataArray, sortBy){
    class Ticket{
        constructor(destinationGiven, priceGiven, statusGiven){
            this.destination = destinationGiven;
            this.price = priceGiven;
            this.status = statusGiven;
        }
    }

    let ticketsAll = [];

    for (const row of dataArray) {
        let [destination, price, status] = row.split("|");
        price = Number(price);
        let newTiket = new Ticket(destination, price, status);
        ticketsAll.push(newTiket);
    }

    if(sortBy.toLowerCase() == "price"){
        ticketsAll.sort((a, b) => a.price - b.price);
    }else{
        ticketsAll.sort((a, b) => {
            return a[sortBy].localeCompare(b[sortBy])
        });
    }
    //console.log(JSON.stringify(ticketsAll));
    return ticketsAll;
}

sortTickets(['Philadelphia|1194.20|available',
 'New York City|2095.99|available',
 'New York City|95.99|sold',
 'Boston|126.20|departed'],
'destination');

// [ Ticket { destination: 'Boston',
//     price: 126.20,
//     status: 'departed' }, 
//   Ticket { destination: 'New York City',
//     price: 95.99,
//     status: 'available' }, 
//   Ticket { destination: 'New York City',
//     price: 95.99,
//     status: 'sold' }, 
//   Ticket { destination: 'Philadelphia',
//     price: 94.20,
//     status: 'available' } ]
