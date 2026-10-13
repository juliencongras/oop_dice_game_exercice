class Des{
    constructor(nbrface, score) {
        this.nbrface = nbrface;
        this.score = score;
    }

    lancer(){
        return Math.ceil(Math.random() * this.nbrface);
    }
}

class Joueur {
    constructor(nom, valeurLance, Des) {
        this.nom = nom;
        this.valeurLance = valeurLance;
        this.des = Des;
    }

    lancerDes(){
        this.des.lancer();
    }
}

class Partie {
    constructor(joueur1, joueur2, nbrTour, scoreJ1, scoreJ2) {
        this.joueur1 = joueur1;
        this.joueur2 = joueur2;
        this.nbrTour = nbrTour;
        this.scoreJ1 = scoreJ1;
        this.scoreJ2 = scoreJ2;
    }
}

const playerOneD6 = new Des(6, 1);
const playerTwoD6 = new Des(6, 1);
const player1 = new Joueur("player1", 0, playerOneD6);

console.log(player1.lancerDes());
