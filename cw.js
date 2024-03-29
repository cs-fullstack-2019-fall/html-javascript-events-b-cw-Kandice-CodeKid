// Exercise 1:
// Create a page with a blank label and a text area. When someone types into the text area, change the label to show what the person has typed.
//

// !! : you define this variable but never use it 
let textInput = document.getElementById('label');
let textAreaElement = document.querySelector('#textArea');

textAreaElement.onkeydown = function(e){
    console.log(e.target.value);
    // !! : user innerText not innerHTML to set the text value 
    document.getElementById('label').InnerHTML = textAreaElement;
};

// {
//     document.getElementById("Label1").value = "new text value";
// }


// Exercise 2:
// Using the exercise above, replace the user's typing with the string below. Each time they press a key, a letter from the string below should display in the label instead. There's no need to have the text start over from the beginning.
//
//     Default string: ```codeCrewString = "Code School is a hands-on class designed to train individuals to be entry-level software developers within a six-month course. The minimum education requirement is at least a high school diploma or GED. Students work in a small classroom setting and use real-word technologies to learn the fundamentals of coding, app development, the leadership, and the life skills needed for a successful career and job market competitiveness.```
//
// Exercise 3:
// Using the exercise above, create a reset button that will erase everthing from the label so the user can start over.
//
//     ### Challenge
// Create two additional strings and randomly select one of the three each time the page is reloaded.
