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
	let imageActive = document.querySelector(".banner-img")
	imageActive.src = slides[image].image
}

// Changement de tagline active
function changeTagline(tagline) {
	let taglineActive = document.querySelector("#banner p")
	taglineActive.innerHTML = slides[tagline].tagLine
}

// Mise à jour de la slide
function newSlide (slide) {
	changeImage(slide)
	changeTagline(slide)
	changeBulletPoint(slide)
}

// Evénement sur les flèches 
function ChangeSlide() {
	let j = 0
	changeBulletPoint(j)
	let arrowLeft = document.querySelector(".arrow_left")
	arrowLeft.addEventListener("click", () => {
		j--
		if (j < 0) {
			j = slides.length - 1
		}
		newSlide(j)
	})

	let arrowRight = document.querySelector(".arrow_right")
	arrowRight.addEventListener("click", () => {
		j++
		if (j >= slides.length) {
			j = 0
		}
		newSlide(j)
	})
}

ChangeSlide()