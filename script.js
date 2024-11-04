// Scroll to the next section when a button is clicked
function scrollToSection() {
    const sections = document.querySelectorAll('section');
    const currentSectionIndex = Array.from(sections).findIndex(section => {
        return section.getBoundingClientRect().top > window.innerHeight * 0.2;
    });
    if (currentSectionIndex !== -1) {
        sections[currentSectionIndex].scrollIntoView({ behavior: 'smooth' });
    }
}
