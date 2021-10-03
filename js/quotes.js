const quotesArray = [
    {
        quote: "MuYaho~!",
        author: "Ralo"
    },
    {
        quote: "Bouya~!",
        author: "Nico"
    },
    {
        quote: "Assa~!",
        author: "Duck"
    }
]

const quotediv = document.querySelector("#quote div:first-child");
const authordiv = document.querySelector("#quote div:last-child");

const selectedQuote = quotesArray[Math.floor(Math.random() * quotesArray.length)];

quotediv.innerText = selectedQuote.quote;
authordiv.innerText = selectedQuote.author;