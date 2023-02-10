const circle = document.getElementById('rondje');
const circleStyle = circle.style;
const cursorText = document.querySelector(".cursor-text");

document.addEventListener('mousemove', e => {
    window.requestAnimationFrame(() => {
        if (e.target.classList.contains('see-more')) {
            circle.classList.add('biggercircle', 'has-line')
            cursorText.innerHTML = "GO TO NEW PAGE";
        } else {
            circle.classList.remove('biggercircle', 'has-line')
            cursorText.innerHTML = " ";
        }
        if (e.target.classList.contains('wrapper-track') || e.target.closest('.wrapper-track')) {
            circle.classList.add('hotpink')
        } else {
            circle.classList.remove('hotpink')
        }
        if (e.target.classList.contains('contact')) {
            circle.classList.add('smallercircle')
            // cursorText.innerHTML = "mail me!";

        } else {
            circle.classList.remove('smallercircle')
            // cursorText.innerHTML = " ";
        }
        circleStyle.top = `${e.clientY - circle.offsetHeight / 2}px`;
        circleStyle.left = `${e.clientX - circle.offsetWidth / 2}px`;
    });
});