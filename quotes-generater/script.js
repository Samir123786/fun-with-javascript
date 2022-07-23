const btn = document.querySelector(".btn");
const quote = document.querySelector(".quote");
const name = document.querySelector(".name");


btn.addEventListener("click",()=>{
const random = Math.floor(Math.random()
*quotes.length);
quote.innerText=quotes[random].newquote;
name.innerText=quotes[random].name;

})


const quotes = [
    {
        newquote:'"Life is what happens when you’re busy making other plans." ',
        name:"John Lennon"
    },
    {
        newquote:'"Get busy living or get busy dying."',
        name:"Stephen King"
    },
    {
        newquote:'"You only live once, but if you do it right, once is enough."',
        name:"Mae West"
    },
    {
        newquote:'"Many of life’s failures are people who did not realize how close they were to success when they gave up."',
        name:"Thomas A. Edison"
    },
    {
        newquote:'"If you want to live a happy life, tie it to a goal, not to people or things."',
        name:"Albert Einstein"
    },
    {
        newquote:'"Never let the fear of striking out keep you from playing the game."',
        name:"Babe Ruth"
    },
    {
        newquote:'"Money and success don’t change people; they merely amplify what is already there."',
        name:"Will Smith"
    },
    {
        newquote:'"Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking."' ,
        name:"Steve Jobs"
    },
    {
        newquote:'"Not how long, but how well you have lived is the main thing."'
        ,name: "Seneca"
    }
];


