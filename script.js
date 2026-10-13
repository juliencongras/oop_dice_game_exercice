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
        this.valeurLance = this.des.lancer();
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

    lancerPartie(){
        for(let i = 0; i < this.nbrTour; i++){
            this.joueur1.lancerDes();
            this.joueur2.lancerDes();
            if(this.joueur1.valeurLance > this.joueur2.valeurLance){
                this.scoreJ1 += 2;
            }
            else if(this.joueur2.valeurLance > this.joueur1.valeurLance){
                this.scoreJ2 += 2;
            }
            else{
                this.scoreJ1 += 1;
                this.scoreJ2 += 1;
            }
        }
        if(this.scoreJ1 == this.scoreJ2){
            console.log("Les deux jours ont le même score !")
        }
        else if(this.scoreJ1 > this.scoreJ2){
            console.log(`Le gagnant est ${this.joueur1.nom} avec ${this.scoreJ1} points !`);
        }
        else{
            console.log(`Le gagnant est ${this.joueur2.nom} avec ${this.scoreJ2} points !`);
        }
    }
}

const playerOneD6 = new Des(6, 1);
const playerTwoD6 = new Des(6, 1);
const bob = new Joueur("Bob", 0, playerOneD6);
const alice = new Joueur("Alice", 0, playerOneD6);

console.log(player1.lancerDes(), player1.valeurLance);
