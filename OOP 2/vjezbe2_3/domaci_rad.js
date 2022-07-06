let gradovi;
gradovi = ["Dubrovnik","Split","Rijeka","Zagreb","Osijek"];


    // 1. zadatak
for(let i = 0; i < gradovi.length; i++){
    console.log(gradovi[i]);
}

    //2. zadatak
let n = gradovi.length;     // daje stvarnu duljinu, broji od 1
for(let j = 1; j < n; j++){      // brojimo indeks do duljine ukljuceno, krecemo od 1 
                                 // jer je indeks n van liste
    console.log(gradovi[n-j]);     // indeksi u stvarnosti idu od 0, pa je zadnji n-1
}

console.log(n);