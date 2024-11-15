const authors = [
{
  name : "Tanya Sinclair" ,
  job: "UX Engineer",
  description:"\“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. \”",
  image_path: "../images/image-tanya.jpg",
 } ,
 {
    name: "John Tarkpor" ,
    job: "Junior Front-end Developer",
    description:"\“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. \”",    
    image_path: "../images/image-john.jpg",
 }
]

var current_index = 1 ; /* start with john */
let author_image = document.getElementById('author_image');
let author_name = document.getElementById('author_name');
let author_description = document.getElementById('author_description') ;
let author_job = document.getElementById('author_job') ;

function LoadUser() {
 author_name.innerHTML = authors[current_index].name ;
 author_description.innerHTML = authors[current_index].description ;
 author_image.src = authors[current_index].image_path ;
 author_function.innerHTML = authors[current_index].job ;
}
   
// Add event listener to buttons with the same class
document.querySelectorAll('.nav-button').forEach(button => { /* select two buttons : prev and next */
    button.addEventListener('click', handleButtonClick); /* add onclick event for each button */
});

function handleButtonClick(event) {
    const direction = parseInt(event.target.getAttribute('data-direction')); /* -1 prev ; +1 next */
    current_index = (current_index + direction + 2) % 2; // switch between 0 1 or 1 0 // 2 is the lenght of authors array
    LoadUser(current_index);
}
