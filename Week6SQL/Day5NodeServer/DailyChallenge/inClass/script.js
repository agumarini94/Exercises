// ESTO ES EL FRONT 
let hint = '';
async function getEmojisToPlay() {
    try {
        const res = await fetch('http://localhost:3000/play');
        const data = await res.json();
        hint = data.randomEmoji.name;
        render(data.randomEmoji, data.theShuffledArray); 
    } catch (error) {
        console.log(error);
    }
}
getEmojisToPlay();

function render(emoji, options) {
    const root = document.getElementById('root');
    console.log(emoji);
    console.log(options);
    const htmlOptions = options.map(item => {
        return `${item},`
    })
    console.log(htmlOptions);
    root.innerHTML = "Options: " + htmlOptions.json() + "Hint: " + emoji.emoji;
}

async function gueseAnEmoji(e) { //funcion del html. 
    e.preventDefault();
    const guesse = e.target.elements.guesse.value; 
    try {
        const res = await fetch("http://localhost:3000/play/", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({guesse, hint}),
        })
        const data = await res.json();
        console.log(data);
        render(data.randomEmoji, data.theShuffledArray);
    } catch (error) {
        console.log(error);
    }
}