document.getElementById('valentineButton').addEventListener('click', function() {
    this.classList.add('hidden');
    setTimeout(() => {
        document.getElementById('question').classList.remove('hidden');
        document.getElementById('responseButtons').classList.remove('hidden');
    }, 500); // Delay for a smoother transition
});

document.getElementById('yesButton').addEventListener('click', function() {
    fadeOutExistingText();
    setTimeout(() => {
        document.getElementById('responseMessage').textContent = "Yay! I love you! so much❤️";
        document.getElementById('responseMessage').classList.remove('hidden');
    }, 500); // Delay to match the fade-out animation
});

document.getElementById('noButton').addEventListener('click', function() {
    fadeOutExistingText();
    setTimeout(() => {
        document.getElementById('responseMessage').textContent = "Aww, that's okay. I hope you have a great Valentine's Day anyway!";
        document.getElementById('responseMessage').classList.remove('hidden');
    }, 500); // Delay to match the fade-out animation
});

function fadeOutExistingText() {
    const elementsToFadeOut = document.querySelectorAll('.container > h1, .container > p, #question, #responseButtons');
    elementsToFadeOut.forEach(element => {
        element.classList.add('fade-out');
    });
}