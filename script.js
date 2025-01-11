// JavaScript for skills animation
const skills = document.querySelectorAll("#skills ul li");
const skillImage = document.querySelector("#skill-animation img");

// Skill Images Map
const skillImages = {
    HTML: "images/html.png",
    CSS: "images/css.png",
    JavaScript: "images/javascript.png",
    Python: "images/python.png",
    React: "images/react.png",
    "Next.js": "images/nextjs.png",
};

// Hover Effect for Skills
skills.forEach(skill => {
    skill.addEventListener("mouseover", () => {
        const skillName = skill.getAttribute("data-skill");
        if (skillImages[skillName]) {
            skillImage.src = skillImages[skillName];
            skillImage.alt = `${skillName} Image`;
        }
    });

    skill.addEventListener("mouseout", () => {
        skillImage.src = "images/default.png";
        skillImage.alt = "Skill Animation";
    });
});
