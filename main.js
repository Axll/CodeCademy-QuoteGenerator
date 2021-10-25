const quotes = [
    

"Man must rise above the Earth—to the top of the atmosphere and beyond—for only thus will he fully understand the world in which he lives. - Socrates, Philosopher",
"Astronomy compels the soul to look upward, and leads us from this world to another. - Plato, Philosopher",
"The purpose of life is the investigation of the Sun, the Moon, and the heavens. - Anaxagoras, Philosopher",
"Astronomy is useful because it raises us above ourselves; it is useful because it is grand; …. It shows us how small is man's body, how great his mind, since his intelligence can embrace the whole of this dazzling immensity, where his body is only an obscure point, and enjoy its silent harmony. - Henri Poincare, Physicist",
"I'm sure the universe is full of intelligent life. It's just been too intelligent to come here. - Arthur C. Clarke, Science Fiction Writer"


];

const randomMessage = arr => {
    let randomQuote = Math.floor(Math.random() * arr.length);

    console.log('\n-------------------------------------------------------------------------------')
    console.log('Hello and welcome to the random astronomy quote generator!');
    console.log("Here's your random quote for today: ");
    
    return arr[randomQuote];
}

console.log(randomMessage(quotes));
