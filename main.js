// Ajouter un élément au début d'un tableau

// Initialisation d'un tableau
let programmingLanguages = ['HTML', 'CSS', 'Bootstrap', 'Javascript'];

// Fonction qui affiche l'élément ajouté au début du tableau au clic du bouton "Ajout"
function displayAdd(){
    let inputValue = document.getElementById("idInput").value; 

    // Condition : Si une valeur a été saisie dans l'input -->
    // on ajoute dans un premier temps l'élément au début du tableau avec unshift puis on l'affiche 
    if(inputValue) {
        programmingLanguages.unshift(inputValue);
        alert(inputValue + " est enregistré !");
    } else {
        alert("Rentre un truc !");
    }
}
// Fonction qui affiche le tableau modifié au clic du bouton "Voir"
function displayArray(){
    alert(programmingLanguages.join(", "));
}