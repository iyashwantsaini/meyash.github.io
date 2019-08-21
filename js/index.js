var checkbox = document.querySelector('input[name=mode]');
var body = document.querySelector("body");
var headings = document.getElementsByClassName("headings");


body.style.backgroundColor='rgb(12, 5, 34)';
document.documentElement.style.backgroundColor='rgb( 12, 5, 34)';
body.style.color='white';


for(let i=0;i<headings.length;i++){
    headings[i].classList.add("headnight");
}

let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition');
    }, 100)
}
