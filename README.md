# Sprint 1 - Class Components Lesson Plan

## [Training Kit](https://github.com/LambdaSchool/Full-Stack-Web-Curriculum/tree/main/03-WebApplications-II/Sprint%2001%20-%20Advanced%20React/Module%201%20-%20Class%20Components)

----

## Objectives

By the end of this module, learners should be able to:
* Explain class components, and use a class component to render some state data to the DOM
* Share data between components using state and props
* Respond to events triggered by user interaction and handle user input using forms

----

## Instructor Resources
* 🐙 [Guided Project Starter](https://github.com/LambdaSchool/web-guided-project-class-components)
* 🐙 [Guided Project Solution](https://github.com/LambdaSchool/web-guided-project-class-components-solution)
* 🐙 [Module Project](https://github.com/LambdaSchool/React-Todo)
* 🐙 [Module Project Solution](https://github.com/lambdaround2/React-Todo)

----

## Guided Project Slack Message
> 1. Clone without forking the following repo: https://github.com/LambdaSchool/web-guided-project-class-components
> 2. Navigate into both the review and followAlong folders and run npm i to load dependences.
>
> :point_right: Technical issues spinning up the project? Please head over to the help channel!
> :point_right: If you fall behind during lecture and wish to catch up:
>
> git fetch && git reset --hard origin/lecture
>
> :point_right: Slido event: *insert slido link*

----

## Guided Project Zoom Invitation:
> Unit 3 | Sprint 1 | **Module 1: Class Components**
> _______________________________________________________
> Zoom Link : *insert zoom link*
> Slido: *insert slido link*
> Guided Project: https://github.com/LambdaSchool/web-guided-project-class-components
> Class Project: https://github.com/LambdaSchool/React-Todo

----

## Check for Understanding Questions

These are the questions used internally to check student understanding. Students will be instructed to answer these questions after the guided project. Please make sure to emphasize the concepts behind these answers.

#### How would you update a state property called "doggos" in a class component with the value doggoData?
* setDoggos(doggoData)
* setDoggos.doggoData()
* **this.setState({ doggos: doggoData })**
* this.setState({ doggoData: doggos })

#### How would you refer to a state property called "pokemon" in the class component?
* pokemon
* this.pokemon
* **this.state.pokemon**
* state.pokemon

#### How do you reference props in a class component?
* state.props
* props
* **this.state.props**
* this.props

#### How would you update a state property called "username" that is controlling a text input?
* None of the Above
* this.setState({value: e.target.username})
* setUsername(e.target.value)
* **this.setState({username: e.target.value})**

## Guided Project Outline

### Introduce Yourself
### Introduce the Module
### Introduce Sprint
* Our focus over the week is professional usage of React components.
* Explore advanced concepts on the different ways React Components work, scale and are tested for industry level projects.

### Review Following Along
#### 1. Review the mechanics of functional components.
* Open client code within the review folder of the followAlong project.
* Highlight the five features of ALL react component functionality.
  - Creation and rendering of Component
  - Creation and use of State
  - User Event Handling
  - Component Nesting
  - Passing Props
* Build with student participation a simple functional app in the model of AppFunc.js. Highlight each component feature as it is built.
* Compare completed functional app to class component version within AppClass.js.

#### 2. Explain why class components are nessisary dispite the ease of functional components.
* Start discussion of why class components are nessisary to learn, highlighting:
 - React is an evolving platform in an evolved landscape of frontend developmendt
 - Functional components and useState are new React techologies.
 - It takes time and resources for companies to migrate to new technologies, so an establishment knowledge of older methods is essentually in software development.
 - Understanding class components leads to a better understanding the mechanics of React.
 - Programmers need to be backwards compatable.

#### 3. Build a simple class component from scratch.
* Build a class component with the same functionality as the functional component.
* Comment briefly on the use of prop drilling and the reactive nature of React using prop drilling.

#### 4. Show how these class components map to functional components.
* Compare class component to functional component
* Highlight differences between class and functional components
 - Components are classes that extend React Component.
 - `render` method renders html
 - constructor builds state
 - State is accessed through `this.state.`
 - Props is accessed through `this.props.`
 - Event Handler methods is accessed through `this.handlerName.`

### BREAK

### Project Following Along
#### 1. Tour a project that mixes functional and class components and that uses prop drilling.
* Deminstrate completed followAlong project.
  - Completed toggle of Items
  - Add Item
  - Clear Purchased
* Tour the base code of followAlong project
  - index.js
  - ListForm
  - GroceryList

#### 2. Review adding state to class components and highlight data prop drilling.
* Add state to index.js
  - Lead discussion on why state would be ideal for holding groceries in this situation.
  - Build out state.
  - Note the way the state is passed to the Item components: `data prop drilling.`

#### 3. Review event handling and highlight function prop drilling.
* Start toggle completed functionality.
* Note that some functionality is already in the app. Toggle completed on source grocecies data to see response.
* Note that the start of the behavior is within the Item component.
* Lead discussion on how to connect an eventlistener to a DOM object.
* Lead a discussion on how to access state within our App component to the Item: `function prop drilling.`
* Build toggle item flow using function prop drilling of event handler and setState within App.js.

### BREAK

#### 4. Review form handling and highlight the mixing of application state and component state.
* Start Add Item functionality
* Review how forms work
  - need for an internal state for input
  - need for onChange handler
  - need for onSubmit handler
* Lead discussion on where the state for the input should be held.
* **Breakout: Session: Build form for adding an item. OnSubmit should only display state within console: 10 mins**
* Lead discussion on how to access state within our App component to Item: `functional prop drilling.`
* Lead discussion on how to set state when adding to an array.

#### 5. Review event handling and highlight prop drilling
* Note the process is the same as with toggle state
 - Start at the point of interaction with the DOM.
 - Add in eventListener and event handler
 - Execute function drilled through props passed from state holding component.
 - Add in function in state holding component to correctly modify state.
 - Introduce filter and use to complete functionality.


### Module Project Review
* [https://github.com/LambdaSchool/React-Todo](https://github.com/LambdaSchool/React-Todo)

## Breakout Slack Messages

### Building a form component.
Form Construction Breakout Instructions:
*********************************************************
1. Open up ListForm.js file.
2. Add in state to hold form input into the ListForm class component.
3. Add onChange event flow to update the value of state when the user types into the form.
4. Add onSubmit event flow to trigger the display of the inputText state to the console.

Feel free to make use of our review materials or any other reference to help you.

You have 10mins to complete this task. Good luck!

----

## After Class Message
Hope you all enjoyed today's guided Lesson!
A reminder if that office hours are from 3:30 - 4:30 Lambda Time. Don't forget to complete the days Check for Understanding and Pulse Checks! 

Module Project
[Class Component Todo Application](https://github.com/lambdaround2/React-Todo)
[Class Component Todo Application Solution](https://github.com/lambdaround2/React-Todo)

Here is a review of today's material.

Key Terminology
* 📝 *class component* - [A type of component that takes the form of a class extended from React.Component class.](https://www.w3schools.com/react/react_components.asp)
* 📝 *React.Component class* - [A react class that gives allows for the creation of class components and all their special features.](https://reactjs.org/docs/react-component.html)
* 📝 *class constructor* - [A class method that is called when an instance is first created of from a class.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor)
* 📝 *the render function* - [A pre-defined function that allows for a class component to render DOM objects.](https://reactjs.org/docs/components-and-props.html)
* 📝 *the this property* - [A reference to the current instance of a class. In class components, the place where props, state and internally defined event methods are accessed.](https://www.w3schools.com/js/js_this.asp)
* 📝 *filter* - [An array method that take a predicate function as an argument returns every item that where that function return true.](https://www.w3schools.com/jsref/jsref_filter.asp)

Key Concepts
* 📝 *The History of React Components* : [React components have changed alot through the years.](https://www.youtube.com/watch?v=Kzeog8yTFaE)
* 📝 *Prop Drilling* - [The process of taking a value and passing it into a nested component for use downstream.](https://kentcdodds.com/blog/prop-drilling)
* 📝 *Passing State through Data Prop Drilling* - [The process of sharing `application` state to subcomponents using prop drilling.](https://www.robinwieruch.de/react-pass-props-to-component#react-props-vs-state)
* 📝 *Updating State through Functional Prop Drilling* - [The process of sharing `application` state to subcomponents using prop drilling.](https://www.robinwieruch.de/react-pass-props-to-component#react-props-vs-state)
* 📝 *Application State Vs Component State* - [Application state indicates the state shared by a number of components. Component State indicates state local only to a components internal parts.](https://teamtreehouse.com/community/what-is-the-difference-between-application-state-and-component-state-in-react)
* 📝 *Form Component Setup* - [The process of setting up (component) state, controlled inputs, onChange and onSubmit events to allow component form submission.](https://reactjs.org/docs/forms.html)
