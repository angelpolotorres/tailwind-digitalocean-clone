const menuDesplegableDesktop = document.getElementById(
	"menu-desplegable-desktop"
);

const botonesMenuDesktop = [...document.querySelectorAll("#boton-desplegar")];

console.log(menuDesplegableDesktop.classList);
console.log(botonesMenuDesktop);

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
