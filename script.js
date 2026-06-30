/* =========================
   AI PARTICLES BACKGROUND
========================= */

tsParticles.load("tsparticles", {

    background: {
        color: "#08142E"
    },

    fpsLimit: 60,

    particles: {

        number: {
            value: 80
        },

        color: {
            value: "#00D9FF"
        },

        links: {
            enable: true,
            color: "#00D9FF",
            distance: 150,
            opacity: 0.4,
            width: 1
        },

        move: {
            enable: true,
            speed: 1.2,
            outModes: {
                default: "bounce"
            }
        },

        size: {
            value: 2
        },

        opacity: {
            value: 0.6
        }
    },

    interactivity: {

        events: {

            onHover: {
                enable: true,
                mode: "grab"
            },

            resize: true
        },

        modes: {

            grab: {
                distance: 220,

                links: {
                    opacity: 1
                }
            }
        }
    },

    detectRetina: true
});


/* =========================
   3D TILT PROJECT CARDS
========================= */

const cards = document.querySelectorAll('.tilt');

cards.forEach(card => {

    card.addEventListener('mousemove', e => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = (x - rect.width / 2) / 15;
        const rotateX = -(y - rect.height / 2) / 15;

        card.style.transform = `
            perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            scale(1.03)
        `;
    });

    card.addEventListener('mouseleave', () => {

        card.style.transform = `
            perspective(1000px)
            rotateX(0deg)
            rotateY(0deg)
            scale(1)
        `;
    });

});
/* Typing Animation */

const nameText = "Sireesha Ananda";
const typingElement = document.getElementById("typing-name");

let i = 0;

function typeName() {
    if (i < nameText.length) {
        typingElement.innerHTML += nameText.charAt(i);
        i++;
        setTimeout(typeName, 100);
    }
}

