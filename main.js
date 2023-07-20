const mainContainer = document.querySelector("[data-id='810b2e7']");
const allTabsTitles = document.querySelectorAll(".eael-tab-item-trigger");
const arrayAllTabsTitles = Array.from(allTabsTitles);
const allTabsContent = document.querySelectorAll(".eael-tab-content-item");
const arrayAllTabsContent = Array.from(allTabsContent);

console.log(arrayAllTabsContent);
let idTarget;

const getTarget = (e) => {

  arrayAllTabsTitles
  .filter((title) => title !== e.target)
  .forEach((element) => {
     element.classList.remove("active");
     element.classList.add("inactive");
     if (e.target.tagName.toLowerCase() === "span") {      
      element.parentElement.classList.remove("active");
     element.parentElement.classList.add("inactive");    
     } else {      
      /*element.firstElementChild.classList.remove("active");
     element.firstElementChild.classList.add("inactive");*/    
  }
});
idTarget = e.target.getAttribute("id");
console.log(idTarget);
let contentTarget = document.querySelector(`div #${idTarget}-tab`);
console.log(contentTarget);

  console.log(arrayAllTabsContent
  .filter((content) => content !== contentTarget));

  /*.forEach((element) => {
    console.log(element);
    element.classList.remove("active");
     element.classList.add("inactive");
  });*/

};

mainContainer.addEventListener("click", getTarget);

