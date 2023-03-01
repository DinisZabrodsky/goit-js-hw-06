const cantgoriList = document.querySelector("#categories");
const listItemEl = document.querySelectorAll('.item');

console.log(`Number of categories:  ${cantgoriList.children.length}`);

listItemEl.forEach(element => {
    console.log(`Category: ${element.firstElementChild.textContent}`);

    console.log(`Elements:  ${element.lastElementChild.children.length}`);

});