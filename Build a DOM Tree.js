/*
For this quiz, you'll need to add to the DOM tree that already exists.

'#family2' should be a sibling of and come after '#family1'. '#bruce' should be the only immediate child
of '#family2'. '#bruce' should have two <div>s as children, '#madison' and '#hunter'.
*/
$("#family1").parent().append("<div id='family2'></div>");
$("#family2").append("<div id='bruce'></div>");
$("#bruce").append("<div id='madison'></div>");
$("#bruce").append("<div id='hunter'></div>");


// Your code goes here!
