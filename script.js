document.addEventListener('DOMContentLoaded', () => {
    const profileBlock = document.getElementById('profile-block');
    const skillsBlock = document.getElementById('skills-block');
    const resultsBtn = document.getElementById('results-theme');
    const startScreen = document.getElementById('start-screen');
    const music = document.getElementById('background-music');

    // Typewriter effect
    const bioText = "Fu*k Guns.lol & Fakecrime.bio got banned too often, so I created my own.";
    let i = 0;
    function typeWriter() {
        if (i < bioText.length) {
            document.getElementById('profile-bio').innerHTML += bioText.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }

    // Enter site logic
    startScreen.addEventListener('click', () => {
        gsap.to(startScreen, { opacity: 0, duration: 1, onComplete: () => {
            startScreen.classList.add('hidden');
            gsap.to(profileBlock, { opacity: 1, duration: 1 });
            typeWriter();
            music.play();
        }});
    });

    // Toggle Profile vs Skills
    let isShowingSkills = false;
    resultsBtn.addEventListener('click', () => {
        if (!isShowingSkills) {
            gsap.to(profileBlock, { opacity: 0, scale: 0.9, duration: 0.5, onComplete: () => {
                profileBlock.classList.add('hidden');
                skillsBlock.classList.remove('hidden');
                gsap.fromTo(skillsBlock, { opacity: 0, scale: 1.1 }, { opacity: 1, scale: 1, duration: 0.5 });
                document.getElementById('python-bar').style.width = "87%";
                document.getElementById('cpp-bar').style.width = "15%";
            }});
            isShowingSkills = true;
            resultsBtn.innerText = "Back to Profile";
        } else {
            gsap.to(skillsBlock, { opacity: 0, scale: 0.9, duration: 0.5, onComplete: () => {
                skillsBlock.classList.add('hidden');
                profileBlock.classList.remove('hidden');
                gsap.fromTo(profileBlock, { opacity: 0, scale: 1.1 }, { opacity: 1, scale: 1, duration: 0.5 });
            }});
            isShowingSkills = false;
            resultsBtn.innerText = "View Results";
        }
    });
});
