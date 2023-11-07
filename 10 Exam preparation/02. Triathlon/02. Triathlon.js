class Triathlon {
    constructor(competition){
        this.competitionName = competition;
        this.participantsAll = {};
        this.listOfFinalists = [];
    }

    addParticipant (participantName, participantGender){
        if(this.participantsAll.hasOwnProperty(participantName)){
            return `${participantName} has already been added to the list`;
        }else{
            this.participantsAll[participantName] = participantGender;
            return `A new participant has been added - ${participantName}`;
        }

    }

    completeness (participantName, condition){
        if(!this.participantsAll.hasOwnProperty(participantName)){
            return `${participantName} is not in the current participants list`;
        }else{
            let completedCount = Math.floor(condition / 30);
            if(condition < 30){
                throw new Error(`${participantName} is not well prepared and cannot finish any discipline`);
                //return ;
            }else if(completedCount < 3){
                return `${participantName} could only complete ${completedCount} of the disciplines`;
            }else if(completedCount > 2){
                this.listOfFinalists.push(`${participantName}, ${this.participantsAll[participantName]}`);
                delete this.participantsAll[participantName];
                return `Congratulations, ${participantName} finished the whole competition`;
            }
        }
    }

    rewarding (participantName){
        for (const currentRow of this.listOfFinalists) {
            if(currentRow.indexOf(participantName) > -1){
                return `${participantName} was rewarded with a trophy for his performance`;
            }
        }
        return `${participantName} is not in the current finalists list`;
    }

    showRecord (criteria){
        if(this.listOfFinalists.length == 0){
            return `There are no finalists in this competition`;
        }
        
        if(criteria != "all"){
            let hasOne = false;
            for (const current of this.listOfFinalists) {
                let [name, gender] = current.split(", ");
                if(gender == criteria){
                    hasOne = true;
                    return `${name} is the first ${criteria} that finished the ${this.competitionName} triathlon`;
                }
            }

            if(!hasOne){
                return `There are no ${criteria}'s that finished the competition`;
            }

        }else{
            let text = `List of all ${this.competitionName} finalists:`;
            this.listOfFinalists.sort();
            
            for (const current of this.listOfFinalists) {
                let [name, gender] = current.split(", ");
                text += "\n" + name;
            }

            return text;
        }
    }

}

const contest = new Triathlon("Dynamos");
console.log(contest.addParticipant("Peter", "male"));
console.log(contest.addParticipant("Sasha", "female"));
console.log(contest.addParticipant("George", "male"));
console.log(contest.completeness("Peter", 100));
console.log(contest.completeness("Sasha", 70));
console.log(contest.completeness("George", 20));
