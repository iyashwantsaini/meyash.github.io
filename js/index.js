var checkbox = document.querySelector('input[name=mode]');
var body = document.querySelector("body");
var headings = document.getElementsByClassName("headings");

        checkbox.addEventListener('change', function() {
            if(this.checked) {
                trans()
                document.documentElement.style.backgroundColor='rgb( 12, 5, 34)';
                body.style.backgroundColor='rgb(12, 5, 34)';
                body.style.color='white';
                for(let i=0;i<headings.length;i++){
                    headings[i].classList.add("headnight");
                }
                
                
            } else {
                trans()
                document.documentElement.style.backgroundColor='white';
                body.style.backgroundColor='white';
                body.style.color='black';
                for(let i=0;i<headings.length;i++){
                    headings[i].classList.remove("headnight");
                }
            }
        })
 
        let trans = () => {
            document.documentElement.classList.add('transition');
            window.setTimeout(() => {
                document.documentElement.classList.remove('transition');
            }, 100)
        }

        $(function(){
            $(".flip").flip({
                trigger: 'hover',
                axis: 'x'
            });
        });
