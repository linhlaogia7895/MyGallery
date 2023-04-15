const link = document.querySelector('a[href="#top"]');
const aboutLink = document.querySelector('a[href="#about"]');
link.addEventListener('click', function(event) {
event.preventDefault();
const topPos = 0;
window.scrollTo({
    top: topPos,
    behavior: 'smooth'
});
header.classList.remove('sticky');
});
aboutLink.addEventListener('click', function(event) {
    event.preventDefault();
    const aboutPos = document.querySelector('#about').offsetTop;
    window.scrollTo({
    top: aboutPos,
    behavior: 'smooth'
    });
});
function generateGallery() {
    const gallery = document.querySelector('.gallery');
    const columns = document.querySelectorAll('.column');
    const totalImages = 28;
    const margin = 15; 
    const maxWidth = gallery.clientWidth / 3 - margin;
    
 
    for (let i = 1; i <= totalImages; i++) {
        const img = document.createElement('img');
        img.src = `gallery/img${i}.png`;
        img.alt = `Image ${i}`;
    
        // Calculate optimal height for each image
        img.onload = function () {
          const height = img.height;
          const optimalHeight = (maxWidth / img.width) * height;
          img.style.height = `${optimalHeight}px`;
        }
    
        // Append image to the column with the smallest height
        let minHeight = columns[0].offsetHeight;
        let minIndex = 0;
        for (let j = 1; j < columns.length; j++) {
          const height = columns[j].offsetHeight;
          if (height < minHeight) {
            minHeight = height;
            minIndex = j;
          }
        }
        columns[minIndex].appendChild(img);
    }
}
generateGallery();