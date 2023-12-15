// Function to fetch a random quote
async function fetchRandomQuote() {
    try {
        const response = await fetch('https://api.quotable.io/random');
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error('Failed to fetch a random quote.');
    }
}

// Function to display the quote on the HTML page with a fade-in animation
async function displayQuote() {
    const quoteContainer = document.getElementById('quote-container');
    const quoteContent = document.getElementById('quote-content');
    const quoteAuthor = document.getElementById('quote-author');

    try {
        const quote = await fetchRandomQuote();

        if (quoteContainer && quoteContent && quoteAuthor) {
            // Add fade-in class
            quoteContainer.classList.add('fade-in');

            quoteContent.textContent = `"${quote.content}"`;
            quoteAuthor.textContent = ` - ${quote.author}`;
            quoteContainer.style.display = 'block';

            // Remove fade-in class after animation completes
            setTimeout(() => {
                quoteContainer.classList.remove('fade-in');
            }, 500);
        }
    } catch (error) {
        console.error(error.message);
    }
}

// Function to fetch and display a new quote
function fetchAndDisplayQuote() {
    displayQuote();
}
