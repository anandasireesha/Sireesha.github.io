const cards = document.querySelectorAll('.tilt');

cards.forEach(card => {

card.addEventListener('mousemove', e => {

const rect = card.getBoundingClientRect();

const x = e.clientX - rect.left;
const y = e.clientY - rect.top;

const rotateY = (x - rect.width/2) / 15;
const rotateX = -(y - rect.height/2) / 15;

card.style.transform =
`
perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
scale(1.05)
`;

});

card.addEventListener('mouseleave', () => {

card.style.transform =
`
perspective(1000px)
rotateX(0)
rotateY(0)
scale(1)
`;

});

});
