




var quotes = [
    {
        quote: "“Be yourself; everyone else is already taken.”",
        auther: "― Oscar Wilde"

    },

    {
        quote: "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
        auther: "― Marilyn Monroe"
    },

    {
        quote: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
        auther: "― Albert Einstein"

    },

    {
        quote: "“So many books, so little time.”",
        auther: "― Frank Zappa"

    },
    {
        quote: "“A room without books is like a body without a soul.”",
        auther: "― Marcus Tullius Cicero"

    },

    {
        quote: "“Be the change that you wish to see in the world.”",
        auther: "― Mahatma Gandhi”"

    },

    {
        quote: "“In three words I can sum up everything I've learned about life: it goes on.”",
        auther: "― Robert Frost"

    },
]


function addQuote() {
    var quote = Math.floor(Math.random() * quotes.length);


    document.getElementById("quote").innerHTML=quotes[quote].quote;
    document.getElementById("auther").innerHTML=quotes[quote].auther;
}




