// https://gh-pinned-repos-5l2i19um3.vercel.app/?username=savisch
// .repo is the repository name
// .link is the link to the repository
// .language is the language of the repository

let newRequest = new XMLHttpRequest();
newRequest.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200){
        let repoObj = JSON.parse(this.responseText);
        document.getElementById("n1").textContent = repoObj[0].repo;
        document.getElementById("d1").textContent = repoObj[0].description;
        document.getElementById("l1").textContent = repoObj[0].language;

        document.getElementById("n2").textContent = repoObj[1].repo;
        document.getElementById("d2").textContent = repoObj[1].description;
        document.getElementById("l2").textContent = repoObj[1].language;

        document.getElementById("n3").textContent = repoObj[2].repo;
        document.getElementById("d3").textContent = repoObj[2].description;
        document.getElementById("l3").textContent = repoObj[2].language;

        document.getElementById("n4").textContent = repoObj[3].repo;
        document.getElementById("d4").textContent = repoObj[3].description;
        document.getElementById("l4").textContent = repoObj[3].language;

        document.getElementById("n5").textContent = repoObj[4].repo;
        document.getElementById("d5").textContent = repoObj[4].description;
        document.getElementById("l5").textContent = repoObj[4].language;

        document.getElementById("n6").textContent = repoObj[5].repo;
        document.getElementById("d6").textContent = repoObj[5].description;
        document.getElementById("l6").textContent = repoObj[5].language;
    };
};
newRequest.open("GET", "https://gh-pinned-repos-5l2i19um3.vercel.app/?username=savisch", true );
newRequest.send();
