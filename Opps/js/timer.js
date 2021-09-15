let fr = document.getElementById("timer")
function loc() {
location.href ="https://tekloro-pj.netlify.app"
}
setTimeout (() =>{
fr.innerText="after 4 seconds you will"
}, 1000)
setTimeout (() =>{
    fr.innerText="after 3 seconds you will"
    }, 2000)
    setTimeout (() =>{
        fr.innerText="after 2 seconds you will"
        }, 3000)
        setTimeout (() =>{
            fr.innerText="after 1 seconds you will"
            loc();
            }, 4000)