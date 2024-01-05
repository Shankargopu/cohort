const body = document.body;
const div = document.createElement("div");
const ul = document.createElement("ul");
div.appendChild(ul);
body.appendChild(div);

async function getAnimalData() {
    // fetch("https://fakerapi.it/api/v1/persons").then((response) => {
    //     return response.json()
    // }).then((data) => {
    //     console.log(data);
    // })

    //using async-await

    const response = await fetch("https://fakerapi.it/api/v1/persons");
    const data = await response.json();
    console.log(data);
    data.data.forEach((ele)=>{
      const li = document.createElement("li");
      li.innerHTML = `<p>${ele.firstname}</p>`
      ul.appendChild(li);
    })

}

function renderData(){

}



