let comp = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
console.log(comp);
// removing the 1;st company
comp.shift();
console.log(comp);
// removing uber and adding ola
comp.splice(1,1,"Ola");
console.log(comp);
comp.push("Amazon");
console.log(comp);