document.addEventListener("DOMContentLoaded", () => {
    // 1. BOOT SEQUENCE
    const bootScreen = document.getElementById('boot-screen');
    const bootText = document.getElementById('boot-text');
    const messages = ["> SYSTEM ONLINE", "> LOADING PROFILE...", "> WELCOME SIREESHA"];
    
    let i = 0;
    function runBoot() {
        if(i < messages.length) {
            const div = document.createElement('div');
            div.textContent = messages[i++];
            bootText.appendChild(div);
            setTimeout(runBoot, 300);
        } else {
            setTimeout(() => bootScreen.classList.add('fade-out'), 500);
        }
    }
    runBoot();

    // 2. DECIPHER EFFECT
    const letters = "ABCDEFGHIKLMNOPQRSTUV0123456789";
    document.querySelectorAll('.card h3').forEach(header => {
        header.onmouseenter = event => {
            let iteration = 0;
            const original = event.target.innerText;
            const interval = setInterval(() => {
                event.target.innerText = original.split("").map((l, idx) => {
                    if(idx < iteration) return original[idx];
                    return letters[Math.floor(Math.random() * 26)];
                }).join("");
                if(iteration >= original.length) clearInterval(interval);
                iteration += 1 / 3;
            }, 30);
        };
    });

    // 3. COUNTER ANIMATION
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = +entry.target.getAttribute('data-target');
                let count = 0;
                const update = () => {
                    const speed = target / 50;
                    if (count < target) {
                        count += speed;
                        entry.target.innerText = Math.floor(count);
                        setTimeout(update, 20);
                    } else { entry.target.innerText = target; }
                };
                update();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.counter').forEach(c => observer.observe(c));

    // 4. GEAR ROTATION
    window.addEventListener('scroll', () => {
        const rotation = window.scrollY / 5;
        document.querySelector('.gear-1').style.transform = `rotate(${rotation}deg)`;
        document.querySelector('.gear-2').style.transform = `rotate(-${rotation}deg)`;
    });
});
