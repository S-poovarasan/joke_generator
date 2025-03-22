const button=document.getElementById("button");
const content=document.getElementById("jokecontent");
const joke=document.getElementById("joke");



button.onclick=()=>{
    axios.get('https://official-joke-api.appspot.com/random_joke')
    .then(function(response){

        button.textContent="Next";
        joke.textContent="";
        content.textContent=response.data.setup;
        setTimeout(()=>{
            joke.textContent=response.data.punchline;
        },1000)
    })
    .catch(function(error){
        console.log(error);
    })
};