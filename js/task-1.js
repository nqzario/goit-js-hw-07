const findIdCategory = document.querySelector('#categories');
const items = findIdCategory.querySelectorAll('.item');
console.log(`Number of categories: ${items.length}`);

items.forEach(item => {
    const titleCategory = item.querySelector('h2').textContent;
    const itemCategory = item.querySelectorAll('ul li').length;

    console.log(`Category: ${titleCategory}`);
    console.log(`Elements: ${itemCategory}`);
});
