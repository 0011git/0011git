const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
];
document.body.classList.add("bgImage");
const todaysBackground = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");


bgImage.src = `img/${todaysBackground}`;    //bgImage의 소스는 img폴더의 todaysBackground이다.
document.body.appendChild(bgImage); //jsp에서 html로 보내는, html에서 인수를 만들어서 가져오는게 아니고 역으로 보내는 역할
 // document.body.prepend(bgImage); prepend:맨위로 appendChild:맨뒤로
