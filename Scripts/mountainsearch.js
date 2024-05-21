"use strict";



window.onload = () => {

    const mountainListRow = document.getElementById("mountainsListrow");

    console.log("onload");


    for(let mountain of montain){
        let mountainColumnElement = createStudentColumnElement(mountain);
        mountainListRow.appendChild(mountainColumnElement);
    }


};

/* <div id="studentListRow" class="row">
<div class="col">
    <div class="card studentcard">
        <img src="https://picsum.photos/200/200?random=1" class="card-img-top" alt="Mireya Avila">
        <div class="card-body">
          <h5 class="card-title">Mireya Avila</h5>
          <p class="card-text">
            <a href="mailto://mavila@appdev.yearup.org">mavila@appdev.yearup.org</a>
          </p>
          <p>
            <a href="https://github.com/mireyaavila01" target="_blank">https://github.com/mireyaavila01</a>
          </p>

          <a href="#" class="btn btn-primary">Learn More about Mireya Avila</a>
        </div>
      </div>
</div> */

function createmontainColumnElement(mountain){
    let mountainColumnDiv = document.createElement("div");

    mountainColumnDiv.className = "col";

    let mountainCardDiv = document.createElement("div");
    mountainCardDiv.className = "card mountaincard";

    mountainColumnDiv.appendChild(mountainCardDiv);

    let mountainImage = document.createElement("img");
    mountainImage.src = mountain.imageurl;
    mountainImage.className = "card-img-top";
    mountainImage.alt = mountain.name;

    mountainCardDiv.appendChild(studentImage);

    let cardBodyDiv = document.createElement("div");
    cardBodyDiv.className = "card-body";

    mountainCardDiv.appendChild(cardBodyDiv);

    let mountainHeadedTag = document.createElement("h5");
    mountainHeadedTag.innerHTML = student.name;

    cardBodyDiv.appendChild(mountainHeadedTag);


    let paraEmail = document.createElement("p");
    paraEmail.className = "card-text";

    cardBodyDiv.appendChild(paraEmail);


    let aEmail = document.createElement("a");
    aEmail.href = "mailto://" + student.email;
    aEmail.innerHTML = student.email;

    paraEmail.appendChild(aEmail);


    let paraGithub = document.createElement("p");
    cardBodyDiv.appendChild(paraGithub);

    let aGithub = document.createElement("a");
    aGithub.href = student.githuburl;
    aGithub.innerHTML = student.githuburl;
    paraGithub.appendChild(aGithub);


    let aButton = document.createElement("a");
    aButton.className = "btn btn-primary";
    aButton.innerHTML = "Learn more about " + student.name;
    aButton.href = "#";

    cardBodyDiv.appendChild(aButton);




    return mountainColumnDiv;
}