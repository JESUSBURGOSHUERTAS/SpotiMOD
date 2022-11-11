const buildForYou = document.getElementById("build-for-you");
const imageCover = document.getElementById("image-cover");
const layoutMain = document.getElementById("layout-main");
const buildForYouSection = document.getElementById("buildForYouSection");
const recentlyListened = document.getElementById("recently-listened");
const recentlyListenedSection = document.getElementById("recentlyListened");
const liked = document.getElementById("liked");
const likedSection = document.getElementById("likedSection");

const home = document.getElementById("home");

const landing = document.getElementById("landing");

liked.addEventListener("click", () => {
  resetLayout();
  likedSection.style.display = "block";
});

recentlyListened.addEventListener("click", () => {
  resetLayout();
  recentlyListenedSection.style.display = "block";
});

buildForYou.addEventListener("click", () => {
  resetLayout();
  buildForYouSection.style.display = "block";
  imageCover.style.display = "block";
  layoutMain.classList.add("is-showBackImage");
});

home.addEventListener("click", () => {
  resetLayout();
  landing.style.display = "block";
});

function resetLayout() {
  landing.style.display = "none";
  buildForYouSection.style.display = "none";
  imageCover.style.display = "none";
  recentlyListenedSection.style.display = "none";
  likedSection.style.display = "none";
  layoutMain.classList.remove("is-showBackImage");
}
resetLayout();
landing.style.display = "block";
