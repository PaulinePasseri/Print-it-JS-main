let imageActive = document.querySelector(".banner-img")
let taglineActive = document.querySelector("#banner p")
let arrowLeft = document.querySelector(".arrow_left")
let arrowRight = document.querySelector(".arrow_right")
let currentSlide = 0

const slides = [
	{
		"image":"assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Event Listener
arrowLeft.addEventListener("click", () => {
	currentSlide--
	if (currentSlide < 0) {
		currentSlide = slides.length - 1
	}
	newSlide(currentSlide)
})


arrowRight.addEventListener("click", () => {
	currentSlide++
	if (currentSlide >= slides.length) {
		currentSlide = 0
	}
	newSlide(currentSlide)
})

// Ajout des Bullet Points
function changeBulletPoint(activeBullet) {
	let dotList = document.querySelector(".dots")
	dotList.innerHTML = ""
	for (let i=0; i < slides.length; i++) {
		let dot = document.createElement("span")
		dot.classList.add("dot")
		if (i === activeBullet) {
			dot.classList.add("dot_selected")
		} 
		dotList.append(dot)
	}
}


// Changement d'image active
function changeImage(image) {
	imageActive.src = slides[image].image
}

// Changement de tagline active
function changeTagline(tagline) {
	taglineActive.innerHTML = slides[tagline].tagLine
}

// Mise à jour de la slide
function newSlide (slide) {
	changeImage(slide)
	changeTagline(slide)
	changeBulletPoint(slide)
}

// Evénement sur les flèches
changeBulletPoint(currentSlide) 
ChangeSlide(currentSlide)