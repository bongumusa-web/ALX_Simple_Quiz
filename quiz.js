function checkAnswer() {

    // correct answer
    const correctAnswer = "4";

    // get user answer from checked radio button using querySelector
    const userAnswer = document.querySelector('input[name="quiz"]:checked').value;

    const feedback = document.getElementById("feedback");

    // provide feedback
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
        feedback.style.color = "green";

        // highlight correct answer's label
        const label1 = document.querySelector('label[for="choice1"]');
        label1.style.color = "green";
        label1.style.fontWeight = "bold";
    } 
    else {
        feedback.textContent = "That's incorrect. Try again!";
        feedback.style.color = "red";

        // highlight incorrect selection
        const selectedId = document.querySelector('input[name="quiz"]:checked').id;
        const wrongLabel = document.querySelector(`label[for="${selectedId}"]`);

        wrongLabel.style.color = "red";
        wrongLabel.style.fontWeight = "bold";
    }
}

// event listener for the button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
