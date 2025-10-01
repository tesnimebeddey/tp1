let taches = [];

function recup_val() {
    let donnee = document.getElementById("taskInput");
    let listecontent = donnee.value.trim();

    if (listecontent === "") {
        window.alert('Tu dois écrire une tâche');
        return;
    }

    taches.push({ texte: listecontent, terminee: false });

    afficherTaches();

    donnee.value = "";
}

function afficherTaches(filtre = "") {
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = ""; 

    taches.forEach((tache, index) => {
        if (!tache.texte.toLowerCase().includes(filtre.toLowerCase())) return;

        let element = document.createElement("li");

        let texte = document.createElement('span');
        texte.textContent = tache.texte;
        if (tache.terminee) texte.style.textDecoration = "line-through";
        element.appendChild(texte);

        let supprimer = document.createElement('button');
        supprimer.textContent = 'Delete';
        supprimer.addEventListener("click", () => supprimerTache(index));
        element.appendChild(supprimer);

        let terminer = document.createElement('button');
        terminer.textContent = 'Finish';
        terminer.addEventListener("click", () => terminerTache(index));
        element.appendChild(terminer);

        taskList.appendChild(element);
    });

    afficherCompteurs();

    sauvegarderTaches();
}

function supprimerTache(index) {
    taches.splice(index, 1);
    afficherTaches();
}

function terminerTache(index) {
    taches[index].terminee = true;
    afficherTaches();
}

function sauvegarderTaches() {
    localStorage.setItem("taches", JSON.stringify(taches));
}

function chargerTaches() {
    const tachesStockees = localStorage.getItem("taches");
    if (tachesStockees) {
        taches = JSON.parse(tachesStockees);
        afficherTaches();
    }
}

function afficherCompteurs() {
    const enCours = taches.filter(t => !t.terminee).length;
    const terminees = taches.filter(t => t.terminee).length;

    document.getElementById("compteurEnCours").textContent = `Tâches en cours: ${enCours}`;
    document.getElementById("compteurTerminees").textContent = `Tâches terminées: ${terminees}`;
}

function ajouter() {
    let donnee = document.getElementById("taskInput");
    let btn = document.getElementById("addBtn");

   
    btn.addEventListener("click", recup_val);

    
    donnee.addEventListener("keydown", e => {
        if (e.key === "Enter") recup_val();
    });

    
    document.getElementById("supprimerTout").addEventListener("click", () => {
        if (confirm("Voulez-vous vraiment tout supprimer ?")) {
            taches = [];
            afficherTaches();
        }
    });


    document.getElementById("recherche").addEventListener("input", e => {
        afficherTaches(e.target.value);
    });
}


chargerTaches();
ajouter();

