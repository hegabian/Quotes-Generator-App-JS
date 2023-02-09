var genQuote = function(){

var quotes = [
    {
        quote: "“Every one of us is, in the cosmic perspective, precious. If a human disagrees with you, let him live. In a hundred billion galaxies, you will not find another.”",
        author: "Carl Sagan", 
    },
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandella",
    },
    {
        quote:"The way to get started is to quit talking and begin doing.",
        author:"Walt Desiney",
    },
    {
        quote:"If life were predictable it would cease to be life, and be without flavor.",
        author:"Eleanor Roosevelt",
    },
    {
        quote:"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
        author:"James Cameron",
    },
    {
        quote:"Life is what happens when you're busy making other plans.",
        author:"John Lennon",
    },
    {
        quote:"When you reach the end of your rope, tie a knot in it and hang on.",
        author:"Franklin D. Roosevelt",
    },
    {
        quote:"The best and most beautiful things in the world cannot be seen or even touched, they must be felt with the heart.",
        author:"Helen Keller",
    },
    {
        quote:"Whoever is happy will make others happy too.",
        author:"Anne Frank",
    },
    {
        quote:"Do not go where the path may lead, go instead where there is no path and leave a trail.",
        author:"Ralph Waldo Emerson",
    },
    {
        quote:"Always remember that you are absolutely unique. Just like everyone else.",
        author:"Margaret Mead",
    },
    {
        quote:"Don't judge each day by the harvest you reap but by the seeds that you plant.",
        author:"Robert Louis Stevenson",
    }
];
//Math.random() --> it has a value from 0 to 1, so when multiplied with Array lenght it won't exceed the array length.
var arrayIndex = Math.floor(Math.random()*quotes.length)
// i think using Math.ceil work here cause it won't red the last quote if by chance got picked, as i tried many times.
document.getElementById("quote").innerHTML = quotes[arrayIndex].quote;
document.getElementById("author").innerHTML = quotes[arrayIndex].author;
}
window.onload = function() {
    genQuote();
    document.getElementById("genQ").addEventListener('click',genQuote);
}
