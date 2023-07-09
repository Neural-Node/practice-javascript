let journal =[];

function addEntry(events, squirrel){
    journal.push({events,squirrel});
}

//records to add
addEntry(["work", "touched tree", "pizza", "running",
"television", false]);

addEntry(["work","ice cream", "cauliflower", "lasagna","touched tree", "brushed teeth"], false);

addEntry(["weekend", "cycling", "break","peanuts","beer"],true);


function phi(table){
    return (table[3] * table[0]- table[2] * table[1]) /
        Math.sqrt(((table[2] + table[3]) *
                    (table[0]+ table[2])) *
                    (table[1] + table[3]) *
                    (table[0] + table[2]));
}

for (let i =0 ; i < journal.length; i++){
    let entry = journal[i];
    // do something with entry
}


// We need to compute a correlation for every type  of event that occurs in the data set
function journalEvent(journal){
    let events = [];
    for( let entry of journal){
        for( let event of entry.events){
            if (!events.includes(event)){
                events.push(event);
            }
        }
    }
    return events;
}


// Checking correlation
for(let event of journalEvent(journal)){
    let correlation = phi(tableFor(event,journal));
    if(correlation >  0.1 || correlation < -0.1) {
        console.log(event + ":", correlation)
    }
}