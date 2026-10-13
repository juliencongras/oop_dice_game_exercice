const gameStartButton = document.querySelector("#gameStartButton");
const playerOneName = document.querySelector("#playerOneName");
const playerTwoName = document.querySelector("#playerTwoName");
const playerOneDieFaceNumber = document.querySelector("#playerOneDieFaceNumber");
const playerTwoDieFaceNumber = document.querySelector("#playerTwoDieFaceNumber");
const turnNumber = document.querySelector("#turnNumber");
const gameTextResult = document.querySelector("#gameResult");

class Des{
    constructor(nbrface, score) {
        this.nbrface = nbrface;
        this.score = score;
    }

    lancer(){
        this.score = Math.ceil(Math.random() * this.nbrface);
        return this.score;
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
            gameTextResult.innerText = "Les deux joueurs ont le même score !";
            console.log("Les deux joueurs ont le même score !");
        }
        else if(this.scoreJ1 > this.scoreJ2){
            gameTextResult.innerText = `Le gagnant est ${this.joueur1.nom} avec ${this.scoreJ1} points !`;
            console.log(`Le gagnant est ${this.joueur1.nom} avec ${this.scoreJ1} points !`);
        }
        else{
            gameTextResult.innerText = `Le gagnant est ${this.joueur2.nom} avec ${this.scoreJ2} points !`;
            console.log(`Le gagnant est ${this.joueur2.nom} avec ${this.scoreJ2} points !`);
        }
    }
}

gameStartButton.addEventListener("click", (e) => {
    e.preventDefault();

    const playerOneDie = new Des(playerOneDieFaceNumber.value, 0);
    const playerTwoDie = new Des(playerTwoDieFaceNumber.value, 0);
    const playerOneInstance = new Joueur(playerOneName.value, 0, playerOneDie);
    const playerTwoInstance = new Joueur(playerTwoName.value, 0, playerTwoDie);
    const newGame = new Partie(playerOneInstance, playerTwoInstance, turnNumber.value, 0, 0);

    newGame.lancerPartie();
})

const playerOneD6 = new Des(6, 1);
const playerTwoD6 = new Des(6, 1);
const bob = new Joueur("Bob", 0, playerOneD6);
const alice = new Joueur("Alice", 0, playerTwoD6);

const partieTest = new Partie(bob, alice, 5, 0, 0);

partieTest.lancerPartie();