document.addEventListener('DOMContentLoaded', () => {
    const profileBlock = document.getElementById('profile-block');
    const skillsBlock = document.getElementById('skills-block');
    const resultsBtn = document.getElementById('results-theme');
    const music = document.getElementById('background-music');

    // 1. Initial Typewriter Effect for Sirramenboi
    const bioText = "Fu*k Guns.lol & Fakecrime.bio got banned too often, so I created my own.";
    let i = 0;
    function typeBio() {
        if (i < bioText.length) {
            document.getElementById('profile-bio').innerHTML += bioText.charAt(i);
            i++;
            setTimeout(typeBio, 50);
        }
    }
    typeBio();

    // 2. Toggle Logic
    let showingSkills = false;
    resultsBtn.addEventListener('click', () => {
        if (!showingSkills) {
            gsap.to(profileBlock, { opacity: 0, scale: 0.9, duration: 0.5, onComplete: () => {
                profileBlock.classList.add('hidden');
                skillsBlock.classList.remove('hidden');
                gsap.fromTo(skillsBlock, { opacity: 0, scale: 1.1 }, { opacity: 1, scale: 1, duration: 0.5 });
                
                // Trigger your skill bars
                document.getElementById('python-bar').style.width = "87%";
                document.getElementById('cpp-bar').style.width = "15%";
            }});
            showingSkills = true;
        } else {
            gsap.to(skillsBlock, { opacity: 0, scale: 0.9, duration: 0.5, onComplete: () => {
                skillsBlock.classList.add('hidden');
                profileBlock.classList.remove('hidden');
                gsap.fromTo(profileBlock, { opacity: 0, scale: 1.1 }, { opacity: 1, scale: 1, duration: 0.5 });
            }});
            showingSkills = false;
        }
    });

    // 3. Audio fix
    document.addEventListener('click', () => { music.play(); }, { once: true });
});
