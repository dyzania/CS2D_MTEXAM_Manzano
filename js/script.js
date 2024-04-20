function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        // Scroll to the section smoothly
        section.scrollIntoView({
            behavior: 'smooth'
        });
    }
}