document.getElementById('valentineBtn').addEventListener('click', function() {
    // Hide the "What's the question?" button
    this.style.display = 'none';

    // Show the start page GIF
    document.getElementById('startGif').style.display = 'block';

    document.getElementById('response').innerHTML = "Will you be my Valentine? ❤️";
    document.getElementById('answerButtons').style.display = 'block'; // Show the answer buttons
});

document.getElementById('yesBtn').addEventListener('click', function() {
    document.getElementById('response').innerHTML = "Yay! You made my day! ❤️";
    document.getElementById('answerButtons').style.display = 'none'; // Hide the answer buttons
    document.getElementById('startGif').style.display = 'none'; // Optionally hide the start page GIF
    document.getElementById('answerGif').style.display = 'block'; // Show the answer submitted GIF
    document.getElementById('introText').style.display = 'none'; // Hide the intro text

});
