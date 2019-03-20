If you scan through the script file from your solution to last week’s assignment you may notice that there is a lot of repeated code. Let’s consolidate these code blocks in to functions and make your code more reusable with functions.

Most of the repeated code executes when the nav buttons are clicked. Let’s write a few functions that we will use in the nav button handlers.

Even though it only takes one line already, we can make our first line (that displays who wrote the speech and when) a bit more efficient by using a function to do the same thing. Create a function that accepts one parameter. Let’s call it “getAuthorAndYearString”. In this function you should accept one data item from the array and return a string that looks like this:

This speech was written by [author name] in [speech year]
// TODO: create getAuthorAndYearString function
// parameter one data item --- use a speech object
// return a string "This speech was written by [author name] in [speech year]"
 

When you’ve made your function, set innerHTML equal to the value it returns in the first line of each nav button handler by passing in the data item from the speechesArray that corresponds to that button.
- set innerHTML equal result of function, inputting a single speech getting back a string
 

Next let’s use a similar approach to display the BCE value. Create a function called “displayBCEString” that accepts one parameter. We will pass in to the function the boolean value for whether each data object in the speechesArray is BCE or not. Inside the function, check if the value of the parameter that was passed in is true or not. Then write a string detailing the result to the #ConsoleDisplay element’s innerHTML property, just as you did in the conditional inside of each nav button handler.

// TODO: create function displayBCEString
// parameter boolean -- is BCE
// return string that says if speech is BCE or not

 

Now, replace the conditional code block in your nav button handler with a call to our new function, passing in the BCE value for the appropriate data object from speechesArray. 
// use the function 
 

Finally, let’s consolidate the code required to display whether a speech is the oldest or most recent of the set.

 

Start by creating a function called “getOldestOrYoungestString” that accepts a data object. Use the code from your nav button handlers that sets up oldest and newest variables, runs through the speechesArray with a FOR loop, and then checks oldest or newest against the year property of a data object. Make sure you are checking the year property of the data object that was passed in as a parameter of the function.
 

Your function should return a string that either says the data object is the oldest or the most recent. Be careful to return a string value for every potential case - the data object passed in to the function may not be either the oldest or the youngest.

// TODO: create getOldestOrYoungestString
// parameter data object speech
// return oldest or most recent string
 

When your function is ready, use the same approach you did for the author and year to display the resulting string to the user in the innerHTML attribute of the #ConsoleDisplay element.

 

When you’ve finished this, take a look back at the original starting script file. You should see a lot fewer lines and a lot more efficient code. Then, post the HTML, CSS & JS on your server space and submit the link in a new thread in the discussion board titled "Week 8 - Assignment 8".

Also, post a link to your code in github.


You will be graded on:

Using appropriate JavaScript syntax
Creating a function using proper syntax
Using parameters inside of functions
Returning values from functions
Creating locally scoped variables inside of a function
Successfully converting existing code blocks into functions