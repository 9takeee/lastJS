const images = ["delispiceback.jpg", "oasisback.jpg", "byebyebadmanback.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];

document.body.style.backgroundImage = `url('img/${chosenImage}')`;