const mainContainer = document.querySelector("[data-id='810b2e7']");
const allTabsTitles = document.querySelectorAll(".eael-tab-item-trigger");
const arrayAllTabsTitles = Array.from(allTabsTitles);
const allTabsContent = document.querySelectorAll(".eael-tab-content-item");
const arrayAllTabsContent = Array.from(allTabsContent);

let idTarget;

const getTarget = (e) => {
   //todo: divide this fcn into 2 or more

   // fcn regards to the titles od the tabs; it make all title tabs inactive apart from the target:
   arrayAllTabsTitles
      .filter((title) => title !== e.target)
      .forEach((element) => {
         element.classList.remove("active");
         element.classList.add("inactive");
         /* if (e.target.tagName.toLowerCase() === "span") {
            element.parentElement.classList.remove("active");
            element.parentElement.classList.add("inactive");
         } else {*/
         /*element.firstElementChild.classList.remove("active");
     element.firstElementChild.classList.add("inactive");*/
         // }
      });

   //
   //fcn seeking the displayed Text-Content-Beschriftung; and then all the T-C-B are getting inactive obviously except the target:
   if (e.target.tagName.toLowerCase() === "span") {
      idTarget = e.target.parentElement.getAttribute("id");
   } else {
      idTarget = e.target.getAttribute("id");
   }

   const contentAllTargets = document.querySelectorAll(`#${idTarget}-tab`);
   contentAllTargets.forEach((el) => {
      console.log(el);
   });
   const arrayContentAllTargets = Array.from(contentAllTargets);
   const contentTarget = arrayContentAllTargets.filter((contTar) => contTar.classList.contains("active"))[0];

   /*console.log(contentTarget);
   console.log(arrayAllTabsContent.filter((content) => content !== contentTarget));*/

   const filteredArrayAllTabsContent = arrayAllTabsContent.filter((content) => content !== contentTarget);

   filteredArrayAllTabsContent.forEach((element) => {
      element.classList.remove("active");
      element.classList.add("inactive");
   });
};

mainContainer.addEventListener("click", getTarget);
