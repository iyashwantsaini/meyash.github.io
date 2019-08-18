var checkbox = document.querySelector('input[name=mode]');
var body = document.querySelector("body");
var headings = document.getElementsByClassName("headings");
// var libs=document.getElementsByClassName("buttonlib");
body.style.backgroundColor='rgb(12, 5, 34)';
document.documentElement.style.backgroundColor='rgb( 12, 5, 34)';
body.style.color='white';

for(let i=0;i<headings.length;i++){
    headings[i].classList.add("headnight");
    // libs[i].classList.add("libsday");
}
        // checkbox.addEventListener('change', function() {
        //     if(this.checked) {
        //         trans()
        //         document.documentElement.style.backgroundColor='rgb( 12, 5, 34)';
        //         body.style.backgroundColor='rgb(12, 5, 34)';
        //         body.style.color='white';
        //         for(let i=0;i<headings.length;i++){
        //             headings[i].classList.add("headnight");
        //             // libs[i].classList.add("libsday");
        //         }
        //     } else {
        //         trans()
        //         document.documentElement.style.backgroundColor='white';
        //         body.style.backgroundColor='white';
        //         body.style.color='black';
        //         for(let i=0;i<headings.length;i++){
        //             headings[i].classList.remove("headnight");
        //             // libs[i].classList.remove("libsday");
        //         }
        //     }
        // })
        let trans = () => {
            document.documentElement.classList.add('transition');
            window.setTimeout(() => {
                document.documentElement.classList.remove('transition');
            }, 100)
        }
        $(function(){
            $(".flip").flip({
                trigger: 'click',
                axis: 'x'
            });
        });
