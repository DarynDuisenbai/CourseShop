        const accordionItems = document.querySelectorAll('.accordion-item');
        const quizItems = document.querySelectorAll('.quiz-item');

        accordionItems.forEach((item, index) => {
            item.addEventListener('click', () => {
                // При клике на элемент аккордеона, покажем соответствующий квиз
                quizItems.forEach(quizItem => {
                    quizItem.style.display = 'none';
                });
                quizItems[index].style.display = 'block';
            });

            const submitButton = item.querySelector('.submit-button');
            if (submitButton) {
                submitButton.addEventListener('click', calculateScore);
            }
        });

        function calculateScore() {
            const quizItem = this.parentElement.querySelector('.quiz-item');
            const selectedOptions = quizItem.querySelectorAll('input[type="radio"]:checked');
            let score = 0;
            selectedOptions.forEach(selectedOption => {
                if (selectedOption.dataset.correct === 'true') {
                    score++;
                }
            })
            alert(`Your score: ${score} out of ${selectedOptions.length}`);
        }