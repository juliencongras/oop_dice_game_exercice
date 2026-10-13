class Des{
    constructor(nbrface: int, score: int) {
        this.nbrface = nbrface;
        this.score = score;
    }
}

class Joueur {
    constructor(nom: string, valeurLance: int, des: Des) {
        this.nom = nom;
        this.valeurLance = valeurLance;
        this.des = des;
    }
}

class Partie {
    constructor(joueur1: Joueur, joueur2: Joueur, nbrTour: int, scoreJ1: int, scoreJ2: int) {
        this.joueur1 = joueur1;
        this.joueur2 = joueur2;
        this.nbrTour = nbrTour;
        this.scoreJ1 = scoreJ1;
        this.scoreJ2 = scoreJ2;
    }
}

const d6 = new Des(6, 1);
const fakeDie = new Des("Test", "this shouldn't work");

console.log(d6.nbrface);
console.log(fakeDie.nbrface);

