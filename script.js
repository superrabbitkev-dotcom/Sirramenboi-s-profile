document.addEventListener('DOMContentLoaded', () => {
    const profileBlock = document.getElementById('profile-block');
    const skillsBlock = document.getElementById('skills-block');
    const resultsButton = document.getElementById('results-theme');
    const resultsHint = document.getElementById('results-hint');
    const bgMusic = document.getElementById('background-music');

    // 1. Initial Load Animation
    gsap.fromTo(profileBlock, { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1, ease: 'power2.out' });

    // 2. Typewriter Logic (Merged)
    const typeText = (el, text, speed) => {
        let i = 0; el.textContent = "";
        const interval = setInterval(() => {
            if (i < text.length) { el.textContent += text[i]; i++; }
            else clearInterval(interval);
        }, speed);
    };

    typeText(document.getElementById('profile-name'), "JAQLIV", 150);
    typeText(document.getElementById('profile-bio'), "Fu*k Guns.lol & Fakecrime.bio got banned too often...", 50);

    // 3. View Results Toggle
    let isShowingSkills = false;
    resultsButton.addEventListener('click', () => {
        if (!isShowingSkills) {
            gsap.to(profileBlock, { x: -100, opacity: 0, duration: 0.5, onComplete: () => {
                profileBlock.classList.add('hidden');
                skillsBlock.classList.remove('hidden');
                resultsHint.classList.remove('hidden');
                gsap.fromTo(skillsBlock, { x: 100, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5 });
                document.getElementById('python-bar').style.width = "87%";
                document.getElementById('cpp-bar').style.width = "75%";
                document.getElementById('csharp-bar').style.width = "80%";
            }});
            isShowingSkills = true;
        } else {
            gsap.to(skillsBlock, { x: 100, opacity: 0, duration: 0.5, onComplete: () => {
                skillsBlock.classList.add('hidden');
                resultsHint.classList.add('hidden');
                profileBlock.classList.remove('hidden');
                gsap.fromTo(profileBlock, { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5 });
            }});
            isShowingSkills = false;
        }
    });

    // 4. Audio Play on First Click
    document.addEventListener('click', () => {
        bgMusic.play().catch(() => {});
    }, { once: true });
});
