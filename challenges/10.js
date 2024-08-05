
console.log(document.querySelector('.js-button').classList.contains('js-button'));

/*
function gamer() {
    if (document.querySelector('.gaming-btn').classList.contains('is-gamer')) {
        document.querySelector('.gaming-btn').classList.remove('is-gamer');
    } else {
        document.querySelector('.gaming-btn').classList.add('is-gamer');
    }
};

function music() {
    if (document.querySelector('.music-btn').classList.contains('is-muscian')) {
        document.querySelector('.music-btn').classList.remove('is-muscian');
    } else {
        document.querySelector('.music-btn').classList.add('is-muscian');
    }
};

function tech() {
    if (document.querySelector('.tech-btn').classList.contains('is-developer')) {
        document.querySelector('.tech-btn').classList.remove('is-developer');
    } else {
        document.querySelector('.tech-btn').classList.add('is-developer');
    }
};
*/
// The word "toggle" means turn on/off.
function toggleButton(selector) {
    const button = document.querySelector(selector);
    if (!button.classList.contains('is-toggled')) {

        // Before turning this button ON, check if there's
        // already a button that's turned ON and turn it OFF.
        turnOffPreviousButton();

        button.classList.add('is-toggled');
    } else {
        button.classList.remove('is-toggled');
    }
}

function turnOffPreviousButton() {
    const previousButton = document.querySelector('.is-toggled');
    if (previousButton) {
        previousButton.classList.remove('is-toggled');
    }
}