const movieImages = [
   'https://magictoolbox.sirv.com/images/magicslideshow/03/image-slideshow-04.jpg?scale.width=1000',
   'https://magictoolbox.sirv.com/images/magicslideshow/03/image-slideshow-10.jpg?scale.width=2000',
   'https://live.staticflickr.com/4252/35058749695_a4c410999b_b.jpg',
   'https://live.staticflickr.com/4273/35018684776_b7da15b20e.jpg'

];



document.addEventListener("DOMContentLoaded",function(){
    const slideShow = document.getElementById("slideShow");

    movieImages.forEach(image=>{
        const movieCard = document.createElement("div")
        movieCard.className ='movieCard';
        movieCard.innerHTML =
        
        `
        <img src="${image}" alt="Movie Image">
        
        `;

        slideShow.appendChild(movieCard);
    }); 

    let currentIndex = 0;
    const movieCards = document.querySelectorAll('.movieCard')

    function showNextImage(){
        movieCards.forEach((card,index) => {
            card.classList.remove('active');
            if(index ===currentIndex){
                card.classList.add('active')
            }
        });

        currentIndex = (currentIndex+1) % movieImages.length;
    }

    movieCards[0].classList.add('active');

    setInterval(showNextImage,1000)
})