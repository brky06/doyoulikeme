document.addEventListener('DOMContentLoaded', () => {
    const data = {
        question: "Do you like me?",
        yesMessage: "Yuppy! I like you too",
        noMessage: "I hate you too.",
        yesButtonText: "Yes",
        noButtonText: "No"
    };
    
    const noButton = document.querySelector('.no');
    const yesButton = document.querySelector('.yes');
    const messageBox = document.getElementById('message');
    const questionEl = document.getElementById('question');
    
    questionEl.textContent = data.question;
    yesButton.textContent = data.yesButtonText;
    noButton.textContent = data.noButtonText;
    
    noButton.addEventListener('mouseover', () => {
        const maxX = window.innerWidth - noButton.offsetWidth;
        const maxY = window.innerHeight - noButton.offsetHeight;
        
        noButton.style.position = 'fixed';
        noButton.style.left = Math.random() * maxX + 'px';
        noButton.style.top = Math.random() * maxY + 'px';
    });
    
    yesButton.addEventListener('click', () => {
        messageBox.textContent = data.yesMessage;
        messageBox.style.display = 'flex';
    });
    
    noButton.addEventListener('click', () => {
        messageBox.textContent = data.noMessage;
        messageBox.style.display = 'flex';
    });
    
    messageBox.addEventListener('click', () => {
        messageBox.style.display = 'none';
    });
});
