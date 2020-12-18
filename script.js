// https://gh-pinned-repos-5l2i19um3.vercel.app/?username=savisch
// .repo is the repository name
// .link is the link to the repository
// .language is the language of the repository

let newRequest = new XMLHttpRequest();
newRequest.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200){
        let repoObj = JSON.parse(this.responseText);
        document.getElementById("n1").textContent = repoObj[0].repo;
        document.getElementById("n1").href = repoObj[0].link;
        document.getElementById("d1").textContent = repoObj[0].description;
        document.getElementById("l1").textContent = repoObj[0].language;
        dot_color(repoObj[0], "l1-dot");

        document.getElementById("n2").textContent = repoObj[1].repo;
        document.getElementById("n2").href = repoObj[1].link;
        document.getElementById("d2").textContent = repoObj[1].description;
        document.getElementById("l2").textContent = repoObj[1].language;
        dot_color(repoObj[1], "l2-dot");

        document.getElementById("n3").textContent = repoObj[2].repo;
        document.getElementById("n3").href = repoObj[2].link;
        document.getElementById("d3").textContent = repoObj[2].description;
        document.getElementById("l3").textContent = repoObj[2].language;
        dot_color(repoObj[2], "l3-dot");

        document.getElementById("n4").textContent = repoObj[3].repo;
        document.getElementById("n4").href = repoObj[3].link;
        document.getElementById("d4").textContent = repoObj[3].description;
        document.getElementById("l4").textContent = repoObj[3].language;
        dot_color(repoObj[3], "l4-dot");

        document.getElementById("n5").textContent = repoObj[4].repo;
        document.getElementById("n5").href = repoObj[4].link;
        document.getElementById("d5").textContent = repoObj[4].description;
        document.getElementById("l5").textContent = repoObj[4].language;
        dot_color(repoObj[4], "l5-dot");

        document.getElementById("n6").textContent = repoObj[5].repo;
        document.getElementById("n6").href = repoObj[5].link;
        document.getElementById("d6").textContent = repoObj[5].description;
        document.getElementById("l6").textContent = repoObj[5].language;
        dot_color(repoObj[5], "l6-dot");
    };
};
newRequest.open("GET", "https://gh-pinned-repos-5l2i19um3.vercel.app/?username=savisch", true );
newRequest.send();


function dot_color(obj, id){
    switch(obj.language){
        case "Python":
            document.getElementById(id).style.backgroundColor = "#3572A5";
            break;
        case "JavaScript":
            document.getElementById(id).style.backgroundColor = "#f1e05a";
            break;
        case "HTML":
            document.getElementById(id).style.backgroundColor =  "#e44b23";
            break;
        case "CSS":
            document.getElementById(id).style.backgroundColor = "#563d7c";
            break;
    }
}