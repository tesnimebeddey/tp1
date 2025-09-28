 //ex2
 
 let somme = (a, b) => a + b;


 function somme2(a, b) {
  return a + b;
}

document.getElementById('somme').onclick = function() {
  const valA = Number(document.getElementById('a').value);
  const valB = Number(document.getElementById('b').value);

  window.alert("La somme est " + somme(valA, valB));
};

//ex3
const user = { name: "Noor", age: 10, city: "Tunis" };
const {name,age}=user;
console.log("name is "+name );
 console.log("age is "+age );

//ex4
const arr1=[1,2,3];
const arr2=[4,5,6];
const newarr=[...arr1,...arr2];
console.log(newarr);


const newuser={... user ,name:'alma'};
console.log(newuser)

//partie 2
//ex 5
const livre = {
  titre: "Le Petit Prince",
  auteur: "Antoine de Saint-Exupéry",
  annee: 1943,

   getinfo() {
    console.log("Le titre est " + this.titre + ", auteur est " + this.auteur + ", année est " + this.annee);
  }
};
livre.getinfo();

//ex6
class Etudiant{

    constructor(nom,note){
        this.nom=nom;
        this.note=note;
    }
   getMention() {
  if (this.note >= 16) {
    return "Très bien";
  } else if (this.note >= 14) {
    return "Bien";
  } else if (this.note >= 10) {
    return "Passable";
  } else {
    return "Échec";
  }
}
}
const e1=new Etudiant('elaa',20);
console.log(e1.getMention());
const e2=new Etudiant('bibo',3);

console.log(e2.getMention());
const e3=new Etudiant('amal',13);

console.log(e3.getMention());

//ex7
const notes = [12, 5, 17, 9, 20];

const moy=notes.reduce(somme)/notes.length;

console.log('la moyenne est '+moy);
notes.sort((a,b)=>b-a);
console.log(notes);

function sup10(note){
    return note>10};
console.log('notes sup a 10 '+notes.filter(sup10))