const button = document.querySelector(".btn");

let mainWrapper = document.querySelector(".wrapper");
let paragraphs = document.querySelectorAll("p");
for (let i = 0; i < paragraphs.length; i++) {
  if (i % 2 == 0 && i != 0) {
    document
      .getElementsByTagName("p")
      [i].insertAdjacentHTML("beforebegin", "<hr>");
  }
}

let arr = Object.values(paragraphs);

const dynamicallyCreateHr = () => {
  let randomParagraphs = arr.sort(() => Math.random() - 0.5);
  for (let i = 0; i < randomParagraphs.length; i++) {
    let paragraphTags = document.createElement("p");
    paragraphTags.innerHTML = randomParagraphs[i].innerHTML;
    mainWrapper.append(paragraphTags);
  }

  let hr = document.getElementsByTagName("hr");
  let index;
  for (index = hr.length - 1; index >= 0; index--) {
    hr[index].parentNode.removeChild(hr[index]);
  }
  let paragraphs = document.querySelectorAll("p");
  for (let j = 0; j < paragraphs.length; j++) {
    if (j % 2 == 0 && j != 0) {
      document
        .getElementsByTagName("p")
        [j].insertAdjacentHTML("beforebegin", "<hr>");
    }
  }
};

let toggleBtn = document.createElement("button");
toggleBtn.innerHTML = "Show/Hide";
toggleBtn.id = "toggleHide";
toggleBtn.name = "formBtn";
document.body.appendChild(toggleBtn);

const toggleHide = document.getElementById("toggleHide");
toggleHide.addEventListener("click", function () {
  let hr = document.getElementsByTagName("img");
  let index;

  for (index = hr.length - 1; index >= 0; index--) {
    if (hr[index].parentNode.style.display === "none") {
      hr[index].parentNode.style.display = "block";
    } else {
      hr[index].parentNode.style.display = "none";
    }
  }
});

button.addEventListener("click", dynamicallyCreateHr);
