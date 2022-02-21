/* L’évènement DOMContentLoaded est émis lorsque le document HTML initial a été complètement chargé et analysé, sans attendre que les feuilles de style, images et sous-documents aient terminé de charger. */
window.addEventListener("DOMContentLoaded", () => {
    
    // on cible tous les éléments qui ont comme classe "carre" (attention au point)
    const carres = document.querySelectorAll(".carre")
    // on cible le body (pas de . puisque c'est la balise qui nous intéresse)
    const body = document.querySelector("body")
    
    // on boucle sur tous les éléments de classe "carre"
    carres.forEach(carre => {
        // quand on clique sur un de ces élément
        carre.addEventListener("click", function() {
            // on ajoute (ou on enlève la classe "active")
            carre.classList.toggle("active")

            // si l'élément ne contient PAS (!) la classe "active"
            if(!carre.classList.contains("active")){
                // la couleur du body est grise
                body.style.backgroundColor = "rgb(192, 192, 192)"
            } else {
                // sinon on récupère la couleur définie dans le data-color du HTML (data-color="#....")
                body.style.backgroundColor = carre.dataset.color
            }
        })
    })
})