const cantgoriList = document.querySelector("#categories");
const listItemEl = document.querySelectorAll('.item');

console.log(`Number of categories:  ${cantgoriList.children.length}`);

listItemEl.forEach(element => {
    const title = element.children;
    console.log(`Category: ${title[0].textContent}`);

    console.log(`Elements:  ${title[1].children.length}`);
    


});