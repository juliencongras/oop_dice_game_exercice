class Des{
    constructor(nbrface, score) {
        this.nbrface = nbrface;
        this.score = score;
    }
}

class Joueur {
    constructor(nom, valeurLance, des) {
        this.nom = nom;
        this.valeurLance = valeurLance;
        this.des = des;
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