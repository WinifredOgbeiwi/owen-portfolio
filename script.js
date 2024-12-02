/*=============== SERVICES MODAL ===============*/
/**
 * Sélectionne tous les éléments de modal, les boutons de modal et les boutons de fermeture de modal
 * @type {NodeListOf<Element>}
 */
const modal = document.querySelectorAll(".services__modal"),
  modalButton = document.querySelectorAll(".services__button"),
  modalClose = document.querySelectorAll(".services__modal-close");

/**
 * Ajoute la classe 'active-modal' à la modal cliquée
 * @param {number} modalClick - L'index de la modal à activer
 */
let activeModal = (modalClick) => {
  modal[modalClick].classList.add("active-modal");
};

/**
 * Ajoute un écouteur d'événements à chaque bouton de modal qui active la modal correspondante lorsqu'il est cliqué
 */
modalButton.forEach((modalButton, i) => {
  modalButton.addEventListener("click", () => {
    activeModal(i);
  });
});

/**
 * Ajoute un écouteur d'événements à chaque bouton de fermeture de modal qui désactive toutes les modals lorsqu'il est cliqué
 */
modalClose.forEach((modalClose, i) => {
  modalClose.addEventListener("click", () => {
    modal.forEach((modalRemove) => {
      modalRemove.classList.remove("active-modal");
    });
  });
});

/**
 * Ajoute un écouteur d'événements au document qui désactive toutes les modals lorsqu'une touche 'Escape' est pressée
 */
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modal.forEach((modalRemove) => {
      modalRemove.classList.remove("active-modal");
    });
  }
});
