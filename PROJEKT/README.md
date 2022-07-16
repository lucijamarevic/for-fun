# Izmjene u okviru

## lib-05-game_v2.js

Dodano polje collidedPlatform
* informacija o tome s koje strane dira platformu
* "top", "left", "right", "bottom" ili prazno ako ne dira platformu

/** @type {Boolean} koristi se za zaustavljanje gravitacije kad dotakne platformu tipa Box */
    this.stopFall = false;

Dodana nova klasa Box koja nasljeđuje od Item. 
* Radi se o platormi koja je običan Item samo se ne može kretati jer je updatePosition prazna.

U Sprite dodana metoda collideBox()
* provjerava dira li platformu tipa Box
* ako dira, vraća informaciju s koje strane ili null ako ne dira

## lib-05-game_v3.js

* riješen problem prolaska kroz platforme kod skakanja u nekim situacijama

# IZMJENE NAKON PREDANOG PROJEKTA
## kod_00-staticka.js
* dodano polje hearth, za srce koje će heroj moći skupiti da mu se doda 1 život
## kod_01-likovi.js
* u klasi Character dodano "hang-left" i "hang-right" u frame_sets
* u klasi Hero u metodi collect dodano da se poveća broj života (izvrsavat će se kada heroj skupi srce)
* u klasi Guard dodani "hang-left" i "hang-right" u frame_sets
* u klasu Other dodan dio koji ju čini apstraktnom
* u klasu Collectable dodana polja value i life
* dodana klasa Hearth
## kod_03-logikaIgre.js
Zaštitar
* zamijenjeno da se prvo gleda je li iznad ili ispod lika da se provjeri gibanje po skalama i šipkama
* postavljeno da se kod provjere za skale i šipke zaštitaru hanging/climbing postavljaju na true *facepalm*
Heroj
* kod provjere dira li zaštitara dodan dio koji provjerava je li još uvijek živ
* dodan dio za kraj igre ako je mrtav