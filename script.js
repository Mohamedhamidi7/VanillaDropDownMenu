const header = document.getElementById("header");
const headerArrow = header.querySelector("i");
const headerTitle = header.querySelector("span");
const content = document.getElementById("content");
const allItems = document.getElementById("contentList").querySelectorAll("li");
header.addEventListener("click", () => {
  headerToggler();
});
allItems.forEach((e) => {
  const itemTitle = e.querySelector("span");
  const itemCheck = e.querySelector("i");
  e.addEventListener("click", () => {
    headerTitle.innerText = itemTitle.innerText;
    allItems.forEach((e) => {
      const currentItemCheck = e.querySelector("i");
      currentItemCheck.classList.remove("activ");
    });
    itemCheck.classList.add("activ");
    headerToggler();
  });
});
function headerToggler() {
  content.classList.toggle("activ");
  headerArrow.classList.toggle("activ");
}
