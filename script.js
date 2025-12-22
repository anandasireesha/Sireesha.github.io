document.addEventListener("DOMContentLoaded", () => {

    /* --- BOOT SEQUENCE --- */
    const bootScreen = document.getElementById('boot-screen');
    const bootText = document.getElementById('boot-text');
    const messages = ["> INITIALIZING...", "> DATA LOADED", "> WELCOME SIREESHA"];
    
    let mIdx = 0;
    function typeMessages() {
        if(mIdx < messages.length) {
            const line = document.createElement('div');
            line.textContent = messages[mIdx++];
            bootText.appendChild(line);
            setTimeout(typeMessages, 250);
        } else {
            setTimeout(() => bootScreen.classList.add('fade-out'), 400);
        }
    }
    typeMessages();

    /* --- DECIPHER TEXT --- */
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    document.querySelectorAll('.card h3').forEach(h => {
        h.addEventListener('mouseenter', e => {
            let iter = 0;
            const original = e.target.innerText;
            const interval = setInterval(() => {
                e.target.innerText = original.split("").map((l, i) => {
                    if(i < iter) return original[i];
                    return letters[Math.floor(Math.random() * 36)];
                }).join("");
                if(iter >= original.length) clearInterval(interval);
                iter += 1/3;
            }, 30);
        });
    });

    /* --- COUNTERS --- */
    const obs = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                const target = +entry.target.getAttribute('data-target');
                let count = 0;
                const inc = target / 100;
                const update = () => {
                    if(count < target) {
                        count += inc;
                        entry.target.innerText = Math.ceil(count);
                        setTimeout(update, 20);
                    } else { entry.target.innerText = target; }
                };
                update();
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.counter').forEach(c => obs.observe(c));

    /* --- GEAR ROTATION --- */
    window.addEventListener('scroll', () => {
        const rot = window.scrollY / 10;
        document.querySelector('.gear-1').style.transform = `rotate(${rot}deg)`;
        document.querySelector('.gear-2').style.transform = `rotate(${-rot}deg)`;
    });
});
