const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const image1 = "./assets/images/slideshow/slide1.jpg"
const image2 = "./assets/images/slideshow/slide2.jpg"
const image3 = "./assets/images/slideshow/slide3.jpg"
const image4 = "./assets/images/slideshow/slide4.png"

const images = [image1, image2, image3, image4]

const tagline1 = "Impressions tous formats <span>en boutique et en ligne</span>"
const tagline2 = "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
const tagline3 = "Grand choix de couleurs <span>de CMJN aux pantones</span>"
const tagline4 = "Autocollants <span>avec découpe laser sur mesure</span>"

const taglines = [tagline1, tagline2, tagline3, tagline4]


// Ajout des Bullet Points
function changeBulletPoint(activeBullet) {
	let dotList = document.querySelector(".dots")
	dotList.innerHTML = ""
	for (let i=0; i < images.length; i++) {
		let dot = document.createElement("span")
		dot.classList.add("dot")
		if (i === activeBullet) {
			dot.classList.add("dot_selected")
		} 
		dotList.append(dot)
	}
}


// Changement d'image active
let imageActive = document.querySelector(".banner-img")
function changeImage(image) {
	imageActive.src = images[image]
}

// Changement de tagline active
let taglineActive = document.querySelector("#banner p")
function changeTagline(tagline) {
	taglineActive.innerHTML = taglines[tagline]
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
		newSlide(j)
	})

	let arrowRight = document.querySelector(".arrow_right")
	arrowRight.addEventListener("click", () => {
		j++
		newSlide(j)
	})
}

ChangeSlide()