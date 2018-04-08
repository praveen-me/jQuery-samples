/*
For this quiz, you'll need to add to the DOM tree that already exists.

'#family2' should be a sibling of and come after '#family1'. '#bruce' should be the only immediate child
of '#family2'. '#bruce' should have two <div>s as children, '#madison' and '#hunter'.
*/

// Your code goes here!


$(function($){
  var family2 = $('#family1').after('<div id="family2"><h1>Family2</h1></div>');

  var addFamily2Parent =$('#family2:first').append('<div id="bruce"><h2>Bruce</h2></div>');

  var addFamily2Child = $('#bruce').append('<div id="madison"><h3>Madison</h3></div>')

  var addFamily2Child2 = $('#madison').after('<div id="hunter"><h3>Hunter</h3></div>')

});
