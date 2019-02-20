# React Counter Application

## Part 1
- Create a `Counter` component with a state of:
- `state ={ id: 1, value: 0}`
- Render the state static value onto the counter

## Part 2
- Update `Counter` component to have 2 `buttons` that will increment and decrement the value
- add an event handler in the counter component
- increment the counter value in the state
Concept:
- How to create an event handler
- How to attach it to the lowest level element (the button or checkbox or input)

## Part 3
- Change the style to show yellow if counter is zero and blue if counter is > zero  
- Concept: How to modify the class of an element depending on its value 

## Part 4
- Create a `Counters` component
- Import counter list from sampleData.js in `Counters`
- Map through the list and create a list of `Counter` elements 
* Display a list of `Counter` all maintaing their individual state
- Concept: How to render a list of components with map
- Concept: passing the key attribute to uniquely identify each react element in a list

## Part 6
- Create a delete button in `Counter`
- Create handler in the `Counters` and pass it to `Counter`
- Pass the handler as a prop and attach it to the delete button
Concept: Always define the handler in the component with the state you would like to modify
Concept: How to pass a handler from parent to child
Concept: How to pass a param to the handler so that it knows which counter to delete

## Part 7
- Show a message "No more counters" if all counters have been deleted 
- Concept: How to conditionally render a message using the && operator 

## Part 8
- Add a reset button in `Counters` to reset all counters
- create handler in the `Counters` component reset all to zero
- remove state from child component and get all its values from props instead 
Concept: For a parent to control a child component the child should not have a local state

## Part 9
- Create a new component `Total` and add the total count to it
- but it cannot access the state in the Counters as its a sibling
- shift state and handlers
Concept: For sibling components to share data, the state and handlers should in a common parent aka state hoisting
