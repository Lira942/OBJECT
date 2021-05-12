// EXO1
let personne ={
    nom : "Canda",
    prenom : "Lira",
    age : 23,
    taille : "179cm",
}
console.log(personne.age);

// EXO2
let perso2 ={
    nom : "Monkey D",
    prenom: "Luffy",
    age : 19,
    taille : "175cm"

}

// EXO3
let perso3 ={
    nom : personne.nom,
    age : perso2.age,
    taille : perso2.taille,  
  }

// EXO4
let perso4 ={
    nom : "Rapha",
    prenom : "Liria",
    sePresenter(){
        console.log(`Bonjour je m'appelle ${this.nom} ${this.prenom}`);
    }
}

perso4.sePresenter();

// EXO5
let perso5 ={
    age:"",
    nom : "Jackson",
    prenom : "Michael",

    info(){
        this.age = prompt(`Quel est l'age du ${this.nom} ${this.prenom} ?`);
        alert(`${this.nom} ${this.prenom} a ${this.age} ans`);
    }
}
perso5.info();