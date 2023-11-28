
import { closeModal } from "../config/close_modal.js";

import { openModal } from "../config/open_modal.js";

function openModalH(inORup) {

    openModal(inORup)

}
function closeModalH(inORup) {

    closeModal(inORup)

}




window.document.querySelector('.open-sign-in').addEventListener('click', function () {
    openModal('in')

})
window.document.querySelector('.open-sign-up').addEventListener('click', function () {
    openModal('up')

})

window.document.querySelector('.close_in').addEventListener('click', function () {
    closeModal('in')

})
window.document.querySelector('.close_up').addEventListener('click', function () {
    closeModal('up')

})


