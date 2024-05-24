let images = [];

document.getElementById('imageUpload').addEventListener('change', (event) => {
    const files = event.target.files;
    images = [];
    const thumbnailContainer = document.getElementById('thumbnailContainer');
    thumbnailContainer.innerHTML = ''; // Clear previous thumbnails
    for (let i = 0; i < files.length; i++) {
        const file = URL.createObjectURL(files[i]);
        images.push(file);
        const imgElement = document.createElement('img');
        imgElement.src = file;
        imgElement.alt = `صورة ${i + 1}`;
        imgElement.onclick = () => setImage(file);
        thumbnailContainer.appendChild(imgElement);
    }
    document.getElementById('randomImage').classList.add('hidden');
    document.getElementById('imageName').textContent = '';
});

function getRandomImage() {
    if (images.length === 0) {
        alert('الرجاء رفع الصور أولاً.');
        return;
    }
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];
    setImage(randomImage);
    playSound();
    animateButton();
}

function setImage(imageSrc) {
    const imageElement = document.getElementById('randomImage');
    imageElement.classList.add('hidden');
    setTimeout(() => {
        imageElement.src = imageSrc;
        imageElement.classList.remove('hidden');
        imageElement.classList.add('animate__animated', 'animate__fadeIn');
        document.getElementById('imageName').textContent = `الصورة: ${imageSrc.split('/').pop()}`;
    }, 300);
}

function playSound() {
    const soundEffect = document.getElementById('soundEffect');
    soundEffect.play();
}

function animateButton() {
    const button = document.querySelector('button');
    button.classList.add('animate__animated', 'animate__bounce');
    setTimeout(() => {
        button.classList.remove('animate__animated', 'animate__bounce');
    }, 1000);
}