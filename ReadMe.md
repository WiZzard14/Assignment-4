Q1: What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

A: Each things are used in javascript for select an element from DOM. But main difference between these things are, getElementById is use for finding an element by their id, getElementsByClassName is use for finding an element by their class and querySelector is use for finding an element by their id, class, tag or attribute. 


Q2: How do you create and insert a new element into the DOM?

A: First we have to select the the attribute Id using getElementById, then we have to make a new element using document.createElement() then, we have to give innerHTML then we have to do append child

Q3: What is Event Bubbling? And how does it work?

A: Event Bubbling is basically a technique when a event trigger in child element then it will go to the parent element step by step.

Q4:  What is Event Delegation in JavaScript? Why is it useful?

A: This is a technique where we attach a single event listener to a parent element to handle events for its child elements

Q5: What is the difference between preventDefault() and stopPropagation() methods?

A: preventDefault() used for turn off default behaviour of a browser and  stopPropagation() is used for turn of Event bubbling