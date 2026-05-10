document.addEventListener('DOMContentLoaded', () => {
    const profileBlock = document.getElementById('profile-block');
    const skillsBlock = document.getElementById('skills-block');
    const resultsButton = document.getElementById('results-theme');
    const resultsHint = document.getElementById('results-hint');
    const profileName = document.getElementById('profile-name');
    const profileBio = document.getElementById('profile-bio');
    const bgMusic = document.getElementById('background-music');

    // 1. Initial State & Entrance
    gsap.fromTo(profileBlock, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 });
    
    // Start Typing Effects
    typeWriter(profileName, "JAQLIV", 200);
    typeWriter(profileBio, "Fu*k Guns.lol & Fakecrime.bio got banned too often, so I created my own.", 50);

    // 2. View Results Toggle
    let isShowingSkills = false;
    resultsButton.addEventListener('click', () => {
        if (!isShowingSkills) {
            gsap.to(profileBlock, { opacity: 0, x: -50, duration: 0.5, onComplete: () => {
                profileBlock.classList.add('hidden');
                skillsBlock.classList.remove('hidden');
                resultsHint.classList.remove('hidden');
                gsap.fromTo(skillsBlock, { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 0.5 });
                
                // Animate bars
                gsap.to("#python-bar", { width: "87%", duration: 2 });
                gsap.to("#cpp-bar", { width: "75%", duration: 2 });
                gsap.to("#csharp-bar", { width: "80%", duration: 2 });
            }});
            isShowingSkills = true;
        } else {
            gsap.to(skillsBlock, { opacity: 0, x: 50, duration: 0.5, onComplete: () => {
                skillsBlock.classList.add('hidden');
                resultsHint.classList.add('hidden');
                profileBlock.classList.remove('hidden');
                gsap.fromTo(profileBlock, { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 0.5 });
            }});
            isShowingSkills = false;
        }
    });

    // 3. Simple Typing Function
    function typeWriter(element, text, speed) {
        let i = 0;
        element.textContent = "";
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    // 4. Audio Play on Interaction (Browser bypass)
    document.addEventListener('click', () => {
        bgMusic.play().catch(() => {});
    }, { once: true });
});
