const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBox);

//to show the first boxes before scroll.
checkBox();

function checkBox() {
    const trigger = window.innerHeight * 0.8;

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < trigger) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    })
}