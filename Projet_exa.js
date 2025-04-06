console.log("this is my first projet" )

function AddSite() {
    const name = document.getElementById("siteName").value.trim();
    const url = document.getElementById("siteUrl").value.trim();
    const logo = document.getElementById("siteLogo").value.trim();
    const type = document.getElementById("site_type").value.trim();
    
    if ( !name || !url){
      alert( "Veuilez remplir tous les champs.")
      return;
    }


  // Créer un nouvel élément div pour le site
   const newSite = document.createElement("div");
   // Ajout de la classe "carre" pour le style CSS  ==><div class="carre"></div>
    newSite.classList.add("carre");  


    newSite.innerHTML = `
        <a href="${url}" target="_blank">
            <img src="${logo}" alt="${name}" />
            <p class="sous-titre">${name}</p>
        </a>
        <button class="supprimer" style="margin-top:5px;">Supprimer</button>
    `;
// Ajouter le nouvel élément au conteneur approprié
  const targetContainer = document.getElementById(type);
  if (targetContainer) {
    targetContainer.appendChild(newSite);
  } else {
    alert("Type de site non valide.");
  }
  
  // Ajouter un élément de suppression
  newSite.querySelector(".supprimer").addEventListener("click", function() {
     if (confirm("Êtes-vous sûr de vouloir supprimer ce site ?")) {
        newSite.remove();
      }
  });
  // Réinitialiser les champs du formulaire
    
      document.getElementById("siteName").value = "";
      document.getElementById("siteUrl").value = "";
      document.getElementById("siteLogo").value = "";
      document.getElementById("site_type").value = "Type de site";
};
