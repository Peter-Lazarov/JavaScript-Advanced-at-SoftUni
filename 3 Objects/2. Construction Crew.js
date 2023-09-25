function contructionCrew(workerAsObject){
    if(workerAsObject.dizziness){
        let weight = workerAsObject.weight;
        let experience = workerAsObject.experience;
        let levelOfHydrated = workerAsObject.levelOfHydrated;
        let waterNeeded = weight * 0.1 * experience;
        workerAsObject.levelOfHydrated = levelOfHydrated + waterNeeded;
        workerAsObject.dizziness = false;
    }

    //console.log(workerAsObject);
    return workerAsObject;
}

contructionCrew({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true });
