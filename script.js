function isVisible(element) {
    let distanceFromTop = -500;
    if ((element.getBoundingClientRect().top - window.innerHeight) < distanceFromTop) {
        element.classList.remove('hidden');
    }
}

function backButtonVisibility() {
    let mainContent = document.querySelector('.main');
    let backButton = document.querySelector('.backButton');
    let navUl = document.querySelector('.navUl')

    if (mainContent.scrollTop === 0) {
        // backButton.style.display = "none";
        backButton.style.opacity = "0";
        backButton.style.transition = "all 0.2s ease-out";
        navUl.style.width = "45%"
    } else {
        // backButton.style.display = "block";
        backButton.style.opacity = "1";
        backButton.style.transition = "all 0.2s ease-in";
        navUl.style.width = "40%"
    };
}

function scanDocument() {
    let sectionList = document.querySelectorAll('.hidden');
    sectionList.forEach(function(section) {
        isVisible(section);
    })

    backButtonVisibility();
}

let main = document.querySelector('.main');
main.addEventListener('scroll', scanDocument);

let clickBackButton = () => {
    main.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}