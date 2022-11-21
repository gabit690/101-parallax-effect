window.addEventListener('DOMContentLoaded', () => {
    
    const showScrollVerticalPosition = () => {
        const counter = document.getElementById('verticalScrollCounter');
        counter.innerText = Math.round(window.pageYOffset) + 'px';
    };

    const displaceParallax = (tag) => {
        let elements = document.getElementsByTagName(tag);
        for (let element of elements) {
            element.style.transform = `translate(0px, ${window.pageYOffset * element.getAttribute('rate')}px)`
        }
    }

    window.addEventListener('scroll', (e) => {
        showScrollVerticalPosition();
        displaceParallax('li');
        displaceParallax('img');
    });
});
