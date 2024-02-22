const jedi = []
jedi[0] = (`Luke`)
console.log(jedi);
jedi.push(`Obi-Wan Kenobi`)
console.log(jedi);
 jedi.unshift(`Yoda`)
 console.log(jedi);
 console.log(jedi[1]);
 jedi.pop(jedi[2])
 console.log(jedi);
 jedi.shift(jedi.shift[0])
 console.log(jedi);

 const sithLords = ["Darth Vader", "Darth Sidious", "Darth Maul"]

 const imperialOfficers = ["Grand Moff Tarkin", "Orson Krennic"]

 var starWarsVillains = sithLords.concat(imperialOfficers)
 console.log(starWarsVillains);

var starWarsVillains = starWarsVillains.slice(2, 4)
console.log(starWarsVillains);

const droids = {
    astromech: "R2-D2", 
    protocol: "C-3PO", 
    assassin: "IG-88"
}
console.log(droids[`astromech`]);
console.log(droids.protocol);
droids.assassin = `IG-11`
console.log(droids);

