//1-Select the section with an id of container without using querySelector.
const answer1 = document.getElementById('container');

//2-Select the section with an id of container using querySelector.
const answer2 = document.querySelector('#container');

//3-Select all of the list items with a class of "second".
const answer3 = document.getElementsByClassName('second');

//4-Select a list item with a class of third, but only the list item inside of the ol tag.
const answer4 = document.querySelector('ol .third');

//5 - Give the section with an id of container the text "Hello!".
answer1.textContent = 'Hello';

//6- Add the class main to the div with a class of footer.
const footerclass = document.querySelector('footer');
footerclass.classList.add('main');

//7-Remove the class main on the div with a class of footer.
footerclass.classList.remove('main');

//8-Create a new li element
const createli = document.createElement('li');

//9-Give the li the text "four".
const textnode = document.createTextNode("four");
createli.appendChild(textnode);

//10-Append the li to the ul element.
const ulelement = document.getElementsByTagName('ul');
ulelement.appendChild(createli);




//11- Loop over all of the lis inside the ol tag and give them a background color of "green"
const olelement = document.querySelectorAll('ol li');
olelement.forEach(li => {
    li.style.backgroundColor = 'green';
});

//12 - Remove the div with a class of footer
const answer12 = document.getElementsByClassName("footer");
answer12.remove();


