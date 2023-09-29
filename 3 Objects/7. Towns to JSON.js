function townToJSON(dataArray){
    //dataArray.sort();
    let allTowns = [];
    let townWithCoordinates = {};
    //console.log(dataArray[0]);
    let firstRow = dataArray[0].replace(new RegExp("^\\| "), "").replace(new RegExp(" \\|$"), "");
    let [town, latitude, longtitude] = firstRow.split(" | ");

    for (let i = 1; i < dataArray.length; i++) {
        let [first, second, third] = dataArray[i].replace(new RegExp("^\\| "), "").replace(new RegExp(" \\|$"), "").split(" | ");
        townWithCoordinates[town] = first;
        let a = Number(second);
        townWithCoordinates[latitude] = Number(Number(second).toFixed(2));
        townWithCoordinates[longtitude] = Number(Number(third).toFixed(2));
        allTowns.push(Object.assign({}, townWithCoordinates));
    }

    console.log(JSON.stringify(allTowns));
}

townToJSON(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']);
