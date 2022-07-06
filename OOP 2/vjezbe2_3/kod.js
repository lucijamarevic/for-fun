/*console.log("Pozdrav!");

let ime = "Zeljka";
let prezime, godine;

prezime = "Sanader";
godine = 38;

console.log(ime,prezime,godine);

let osoba = {   //kreiramo objekt
    ime: "Josip",
    dob: 20,
    adresa: "Makarska 12"
};

console.log(osoba);
//console.log(osoba.adresa);
//console.log(osoba["dob"]);

let niz = [1,2,3,4,5];
niz.push(6);
console.log(niz);*/


    let v3;

function pozdrav(ime){
    console.log("Pozdrav " + ime + "!");
}

pozdrav("Ana");

function umnozak(x,y){
    return x*y;
}

console.log(umnozak(3,2));

let osoba = {
    ime: "Pero",
    prezime: "Perić",

    pozdravi(name){
        console.log("Lijepo te vidjeti " + name);
    }
};

console.log(osoba.pozdravi("Ante"));   //izbacuje undefined, skuzit zasto