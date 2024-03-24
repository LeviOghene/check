var menuButton = document.querySelector('.btn-menu');
var closeButton = document.querySelector('.btn-close');
var mobileMenu = document.querySelector('.mobile-menu');

menuButton.addEventListener('click', function () {
    mobileMenu.style.display = 'block';
    mobileMenu.style.display = 'flex';
    menuButton.style.display = 'none';
    closeButton.style.display = 'block';
});

closeButton.addEventListener('click', function () {
    mobileMenu.style.display = 'none';
    menuButton.style.display = 'block';
    closeButton.style.display = 'none';
});

let currentImageIndex = 1;
const totalImages = 9;

function showImage(index) {
    if (index >= 1 && index <= totalImages) {
        document.querySelectorAll('.image-container').forEach((image) => {
            image.classList.remove('active');
        });
        document.getElementById(`image${index}`).classList.add('active');
    }
}

document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);

let xDown = null;                                                        

function handleTouchStart(evt) {                                         
    xDown = evt.touches[0].clientX;                                      
};                                                

function handleTouchMove(evt) {
    if (!xDown) {
        return;
    }

    let xUp = evt.touches[0].clientX;
    let xDiff = xDown - xUp;

    if (xDiff > 0) {
        // Swipe left
        currentImageIndex = Math.min(currentImageIndex + 1, totalImages);
    } else {
        // Swipe right
        currentImageIndex = Math.max(currentImageIndex - 1, 1);
    }

    showImage(currentImageIndex);

    xDown = null;
};
  
  