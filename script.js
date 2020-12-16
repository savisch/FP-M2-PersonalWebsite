// https://gh-pinned-repos-5l2i19um3.vercel.app/?username=savisch
// .repo is the repository name
// .link is the link to the repository
// .language is the language of the repository

let newRequest = new XMLHttpRequest();
newRequest.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200){
        repoObj = JSON.parse(this.responseText);
        document.getElementById("repos").textContent = repoObj[0].repo;
    }
}
newRequest.open("GET", "https://gh-pinned-repos-5l2i19um3.vercel.app/?username=savisch", true );
newRequest.send();
