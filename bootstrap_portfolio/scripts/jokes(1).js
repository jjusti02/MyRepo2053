function getJoke() {
    var request = new XMLHttpRequest();
    //use this end point to get one joke
     request.open("GET", "https://official-joke-api.appspot.com/random_joke");
    
     request.onload = function(){
        var data = JSON.parse(this.response); // data is now a JS object, treat it as JS
        console.log(data);
        console.log(data.setup);

        var setupText = document.getElementById("setup");
        setupText.textContent = data.setup;

        var punchText = document.getElementById("punchline");
        punchText.textContent = data.punchline;
        
     }
     
    request.send();

}