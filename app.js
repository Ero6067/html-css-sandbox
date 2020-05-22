//* Modal (Traversy Media)

const modal = document.getElementById("simpleModal");
const modalBtn = document.getElementById("modal-btn");
const closeBtn = document.getElementsByClassName("close-btn")[0];

const openModal = () => {
	modal.style.display = "block";
};

const closeModal = () => {
	modal.style.display = "none";
};
const clickOutside = (e) => {
	if (e.target == modal) {
		modal.style.display = "none";
	}
};

modalBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
window.addEventListener("click", clickOutside);

//* Windos95 Modal

const w_modal = document.getElementById("windowsModal");
const w_modalBtn = document.getElementById("w-modal-btn");
const w_closeBtn = document.getElementsByClassName("w-close")[0];

const openWinModal = () => {
	w_modal.style.display = "block";
};

const closeWinModal = () => {
	w_modal.style.display = "none";
};

w_modalBtn.addEventListener("click", openWinModal);
w_closeBtn.addEventListener("click", closeWinModal);
