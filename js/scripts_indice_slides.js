let slider = document.querySelector(".slider-contenedor")
let sliderIndividual = document.querySelectorAll(".contenido-slider")
let pos = 1;
let width = sliderIndividual[0].clientWidth;
let btnDer = document.querySelector("#btn-der")
window.addEventListener("resize", function(){
    width = sliderIndividual[0].clientWidth;
})

btnDer.addEventListener('click', function(){
	if (pos<4) {
		slidesDer();
	}	
})



function slidesDer(){
	console.log("POS DESDE BTNDER:",pos)
    slider.style.transform = "translate("+(-width*pos)+"px)";
    slider.style.transition = "transform .8s";
    pos++;
}

