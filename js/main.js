// Menu desplegable desktop
const menuDesplegableDesktop = document.getElementById(
	"menu-desplegable-desktop"
);
const botonesMenuDesktop = [...document.querySelectorAll("#boton-desplegar")];

botonesMenuDesktop.forEach((e) => {
	e.addEventListener("click", () => {
		const menuClases = [...menuDesplegableDesktop.classList];
		if (menuClases.includes("hidden")) {
			menuDesplegableDesktop.classList.remove("hidden");
			menuDesplegableDesktop.classList.add("block");
		} else {
			menuDesplegableDesktop.classList.remove("block");
			menuDesplegableDesktop.classList.add("hidden");
		}
	});
});

// Menu desplegable mobile
const menuDesplegableMovil = document.getElementById("menu-mobile");
const toggleMenuMobile = document.getElementById("toggle-mobile");

toggleMenuMobile.addEventListener("click", () => {
	const menuMobileClases = [...menuDesplegableMovil.classList];
	if (menuMobileClases.includes("hidden")) {
		menuDesplegableMovil.classList.remove("hidden");
		menuDesplegableMovil.classList.add("flex");
	} else {
		menuDesplegableMovil.classList.remove("flex");
		menuDesplegableMovil.classList.add("hidden");
	}
});
