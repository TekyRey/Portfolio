const openMobileMenu = document.querySelector(".menu-icon img");
const closeMobileMenu = document.querySelector(".mobile-menu button");
const mobileMenuItems = document.querySelectorAll(".mobile-items a");

openMobileMenu.addEventListener("click", () => {
  document.querySelector(".mobile-menu").classList.add("show-menu");
});

closeMobileMenu.addEventListener("click", () => {
  document.querySelector(".mobile-menu").classList.remove("show-menu");
});

mobileMenuItems.forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector(".mobile-menu").classList.remove("show-menu");
  });
});

// Form Valid

const formInput = document.getElementById("contact-form");
const email = document.querySelector("#email");
const errorElement = document.getElementById("error");
errorElement.style.color = "red";

formInput.addEventListener("submit", (e) => {
  e.preventDefault();
  if (email.value === email.value.toLowerCase()) {
    formInput.submit();
  } else {
    errorElement.innerText = "Please type your e-mail in lowercase";
  }
});

// Popup window

const portfolio = document.querySelector("#portfolio");

const projectArray = [
  {
    mobileImg: "images/conference-mobile.jpeg",
    desktopImg: "images/conference-desktop.jpeg",
    cardTitle: "Conference Page",
    cardDesc: "A women in tech conference page",
    languages: ["html", "css", "Javascript"],
    liveLink: "https://tekyrey.github.io/Conference-Page/index.html",
    github: "https://github.com/TekyRey/Conference-Page",
    class: "card",
  },

  {
    mobileImg: "images/availability-section.svg",
    desktopImg: "images/desktop-snap2.png",
    cardTitle: "Multi-Post Stories",
    cardDesc:
      "A daily selection of privately personalized reads; no accounts or sign-ups required",
    languages: ["html", "css", "Javascript"],
    liveLink: "https://TekyRey.github.io/Portfolio/",
    github: "https://github.com/TekyRey/Portfolio",
    class: "card-2",
  },

  {
    mobileImg: "images/tonic-section.svg",
    desktopImg: "images/desktop-snap4.png",
    cardTitle: "Tonic",
    cardDesc:
      "A daily selection of privately personalized reads; no accounts or sign-ups required",
    languages: ["html", "css", "Javascript"],
    liveLink: "https://TekyRey.github.io/Portfolio/",
    github: "https://github.com/TekyRey/Portfolio",
    class: "card",
  },

  {
    mobileImg: "images/tonic-section.svg",
    desktopImg: "images/desktop-snap3.png",
    cardTitle: "Tonic",
    cardDesc:
      "A daily selection of privately personalized reads; no accounts or sign-ups required",
    languages: ["html", "css", "Javascript"],
    liveLink: "https://TekyRey.github.io/Portfolio/",
    github: "https://github.com/TekyRey/Portfolio",
    class: "card-2",
  },
];

portfolio.innerHTML = projectArray.map((project) => {
  const html = `
  <section class='card ${project.class} work'>
  <img class= 'mobile-img' src='${project.mobileImg}' alt='' aria-hidden='true'>
  <img class= 'desktop-img' src='${
    project.desktopImg
  }' alt='' aria-hidden='true'>

  <div class='content'>
      <h2>${project.cardTitle}</h2>
      <div class='experience-section'>
          <p class='canopy'>Canopy</p>
          <img src='images/Counter.svg' alt='' aria-hidden='true'>
          <p class='bullet'>Back End Dev</p>
          <img src='images/Counter.svg' alt='' aria-hidden='true'>
          <p class='bullet'>2015</p>
      </div>
      <p class='card-text'>${project.cardDesc}</p>
      <ul class='skills'>
          ${project.languages.map((x) => `<li>${x}</li>`).join("")}
      </ul>
      <button class='see-project submit' type='submit'>See Project</button>
  </div>
</section>
  `;
  return html;
});

const submitButton = document.querySelectorAll(".submit");
const popup = document.querySelector(".popup");
const mainContent = document.querySelector(".page-content");

submitButton.forEach((button) => {
  button.addEventListener("click", () => {
    popup.classList.remove("hide");
    mainContent.classList.add("blur");
    popup.innerHTML = `
    <div class='popup-header'>
    <h2>Tonic</h2>
    <span class='cancel'>&times;</span>
</div>

<div class='experience-section'>
    <p class='mobile-only canopy'>Canopy</p>
    <p class='desktop-only canopy'>Uber</p>
    <img src='images/Counter.svg' alt='' aria-hidden='true'>
    <p class='mobile-only bullet'>Back End Dev</p>
    <p class='desktop-only bullet'>Lead Developer</p>
    <img src='images/Counter.svg' alt='' aria-hidden='true'>
    <p class='mobile-only bullet'>2015</p>
    <p class='desktop-only bullet'>2018</p>
</div>

<img class='popup-hero-img' src='images/popup-img.png' alt=''>

<div class='popup-content'>
    <div class='popup-text'>
        <p class='desktop-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s
             with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
             the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
            it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
             printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and
            scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry
            Lorem Ipsum has been the industry's standard dummy 
            text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea</p>

          <p class='mobile-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
          standard dummy text ever since the 1500s</p>
    </div>
    <div>
        <ul class='skills'>
            <li>html</li>
            <li class='desktop-only'>Ruby on rails</li>
            <li>css</li>
            <li>javaScript</li>
        </ul>
        
        <div class='popup-buttons'>
            <button>See Live <img src='images/see-more.png' alt=''></button>
            <button>See More <img src='images/angelist.png' alt=''></button>
        </div>
    </div>
</div>
    `;

    document.querySelector(".cancel").addEventListener("click", () => {
      popup.classList.add("hide");
      mainContent.classList.remove("blur");
      popup.innerHTML = "";
    });
  });
});

// Local Storage

const form = document.querySelector("form");

const userName = form.elements.name;
const userEmail = form.elements.email;
const userMessage = form.elements.message;
function populateLocalStorage() {
  const userInput = {
    name: form.elements.name.value,
    email: form.elements.email.value,
    message: form.elements.message.value,
  };
  localStorage.setItem('userInput', JSON.stringify(userInput));
}
function setFormData() {
  const storedInput = JSON.parse(localStorage.getItem("userInput"));
  const currentUserName = storedInput.name;
  const currentUserEmail = storedInput.email;
  const currentMessage = storedInput.message;
  form.elements.name.value = currentUserName;
  form.elements.email.value = currentUserEmail;
  form.elements.message.value = currentMessage;
}

if (!localStorage.getItem("userInput")) {
  populateLocalStorage();
} else {
  setFormData();
}
userName.onchange = populateLocalStorage;
userEmail.onchange = populateLocalStorage;
userMessage.onchange = populateLocalStorage;
