/*Gère l'affichage de la boite modal au click sur un élément menu*/
function openModal() {
  console.log("je dois ouvrir le modal");

  const formTemplate = document.getElementById("form-template");
  const templateContent = formTemplate.content.cloneNode(true);

  document.body.appendChild(templateContent);
}

function quitModal() {
  console.log("should quit modal");

  const closeModal = document.getElementsByClassName("outer-modal")[0];

  document.body.removeChild(closeModal);
}
