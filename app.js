const homePage = document.querySelector('.home-container.home-page')
const homeButton = document.querySelector('.home-button');
const firstPage = document.querySelector('.main-container.first-page')
const firstPageRightBar = document.querySelector('.first-page .sliding-bar');
const secondPage = document.querySelector('.main-container.second-page')
const secondPageLeftBar = document.querySelectorAll('.second-page .sliding-bar')[0];
const secondPageRightBar = document.querySelectorAll('.second-page .sliding-bar')[1];
const thirdPage = document.querySelector('.main-container.third-page')
const thirdPageLeftBar = document.querySelectorAll('.third-page .sliding-bar')[0];
const thirdPageRightBar = document.querySelectorAll('.third-page .sliding-bar')[1];
const forthPage = document.querySelector('.main-container.forth-page')
const forthPageLeftBar = document.querySelector('.forth-page .sliding-bar');

homeButton.addEventListener('click', () => {
  homePage.style.display = "none";
  firstPage.style.display = "grid";
});

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

thirdPageRightBar.addEventListener('click', () => {
  thirdPage.style.display = "none";
  forthPage.style.display = "grid";
});

forthPageLeftBar.addEventListener('click', () => {
  forthPage.style.display = "none";
  thirdPage.style.display = "grid";
});
