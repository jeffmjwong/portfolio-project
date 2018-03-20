const homePage = document.querySelector('.home-container.home-page');
const homePageBackgroundVideo = document.querySelector('.home-page-background-video');
const nextButton = document.querySelector('.button-at-homepage');
const homeButton = document.getElementsByClassName('footer-home-button');
const headerBar = document.querySelector('.header-bar');
const menuButton = document.querySelector('.header-menu-button');
const dropdownContent = document.querySelector('.header-menu-dropdown-content');
const allPageMinusHome = document.getElementsByClassName('main-container');
const firstPage = document.querySelector('.main-container.first-page');
const firstPageRightBar = document.querySelector('.first-page .sliding-bar');
const secondPage = document.querySelector('.main-container.second-page');
const secondPageLeftBar = document.querySelectorAll('.second-page .sliding-bar')[0];
const secondPageRightBar = document.querySelectorAll('.second-page .sliding-bar')[1];
const thirdPage = document.querySelector('.main-container.third-page');
const thirdPageLeftBar = document.querySelectorAll('.third-page .sliding-bar')[0];

homePageBackgroundVideo.addEventListener('canplay', () => {
  setTimeout(() => {
    homePageBackgroundVideo.play();
  }, 2800);
});

menuButton.addEventListener('click', () => {
  dropdownContent.classList.toggle("show");
});

window.onclick = evt => {
  if (!evt.target.matches(".header-menu-button i")) {
    if (dropdownContent.classList.contains("show")) {
      dropdownContent.classList.remove("show");
    }
  }
};

nextButton.addEventListener('click', () => {
  homePage.style.display = "none";
  firstPage.style.display = "grid";
});

Array.from(homeButton).forEach(button => {
  button.addEventListener('click', () => {
    Array.from(allPageMinusHome).forEach(page => {
      page.style.display = "none";
    })
    homePage.style.display = "block";
  });
})

firstPageRightBar.addEventListener('click', () => {
  firstPage.style.display = "none";
  secondPage.style.display = "grid";
});

secondPageLeftBar.addEventListener('click', () => {
  secondPage.style.display = "none";
  firstPage.style.display = "grid";
});

secondPageRightBar.addEventListener('click', () => {
  secondPage.style.display = "none";
  thirdPage.style.display = "grid";
});

thirdPageLeftBar.addEventListener('click', () => {
  thirdPage.style.display = "none";
  secondPage.style.display = "grid";
});
