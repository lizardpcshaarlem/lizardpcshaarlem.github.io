window.addEventListener('load', () => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = 1;
        }, index * 300); // 300ms vertraging tussen elk element
    });
});