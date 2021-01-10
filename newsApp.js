let key = 'bb90ad1d782743b2addc12f7fcb3471c';
let source = 'bbc-news';
element = document.getElementById("accordionExample");

// xhr request

let xhr = new XMLHttpRequest();
xhr.open("GET", `http://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${key}`, true);
let json;
xhr.onload = function () {

    if (this.status === 200) {
        json = JSON.parse(this.responseText);
        console.log(json);
        let articles = json['articles'];
        // console.log(innerjson);
        let html="";
        articles.forEach((elem,index )=> {
            // if(elem['content'].startsWith("Image copyrightGetty ImagesImage caption"))
            // elem['content']=elem['content'].slice(40,);
            if(index==0){
                html+=`<div class="card">
            <div class="card-header" id="heading${index}">
                <h2 class="mb-0">
                    <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse"
                        data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                       <p><i>Breaking News</i> ${index+1}:<b> ${elem['title']}</p>
                    </button>
                </h2>
            </div>

            <div id="collapse${index}" class="collapse show" aria-labelledby="heading${index}"
                data-parent="#accordionExample">
                <div class="card-body">
                  <p>  ${elem['content']}<a href="${elem["url"]}"> Read more
                  </a></p>
                </div>


            <div class="card bg-dark text-white" id=${index}>
                <img src=" ${elem['urlToImage']}"
                    class="card-img" alt="...">
                <div class="card-img-overlay">
                    <h5 class="card-title"> ${elem['author']}</h5>
                    <p class="card-text">${elem['description']}</p>
                    <p class="card-text">Last updated ${elem.publishedAt}</p>
                </div>
            </div>
        </div>
    </div><br>`
            }
            else
            html+=`<div class="card">
            <div class="card-header" id="heading${index}">
                <h2 class="mb-0">
                    <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse"
                        data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                       <p><i>Breaking News</i> ${index+1}:<b> ${elem['title']}</p>
                    </button>
                </h2>
            </div>

            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}"
                data-parent="#accordionExample">
                <div class="card-body">
                  <p>  ${elem['content']}<a href="${elem["url"]}"> Read more
                  </a></p>
                </div>


            <div class="card bg-dark text-white" id=${index}>
                <img src=" ${elem['urlToImage']}"
                    class="card-img" alt="...">
                <div class="card-img-overlay">
                    <h5 class="card-title"> ${elem['author']}</h5>
                    <p class="card-text">${elem['description']}</p>
                    <p class="card-text">Last updated ${elem.publishedAt}</p>
                </div>
            </div>
        </div>
    </div><br>`
});
        element.innerHTML=html;
    }
    else {
        console.log('error occured');
        element.innerHTML=`<div class="jumbotron">
        <h1 class="display-4">Ooops!</h1>
        <p class="lead">Error Occured</p>
        <hr class="my-4">
        <p>Try checking your internet or API website </p>
        <a class="btn btn-primary btn-lg" href="https://en.wikipedia.org/wiki/Internet_access" role="button">Learn more</a>
      </div>`

    }
}

xhr.send();

search=document.getElementById("searchbox");

search.addEventListener('input',func);
function func(params) {
    let notes=document.getElementsByClassName("btn btn-link btn-block text-left");
    // console.log(titleValue);
    let txt=search.value.toLowerCase();
    Array.from(notes).forEach(function(element) {
        let elem=element.getElementsByTagName('p')[0].innerText;
        console.log(elem);
        
        // let elem2=element.getElementsByTagName('h5')[0].innerText;
    //     Array.from(elemt).forEach(p => {
        if((elem.toLowerCase()).includes(txt) )
        {
            (element.parentElement.parentElement.parentElement).style.display='block';
            console.log(elem);
        }
        else{
            (element.parentElement.parentElement.parentElement).style.display='none';
            console.log(elem);
        }
    // });
});
}
