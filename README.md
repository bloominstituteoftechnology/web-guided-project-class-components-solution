# Lesson Plan - Class Components

## Instructor Resources
* 🐙 [Training Kit](https://learn.lambdaschool.com/web3/module/recnDKrWb24lgaziC)
* 🐙 [Guided Project Starter](https://github.com/LambdaSchool/web-guided-project-class-components)
* 🐙 [Guided Project Solution](https://github.com/LambdaSchool/web-guided-project-class-components-solution)
* 🐙 [Module Project](https://github.com/LambdaSchool/React-Todo)
* 🐙 [Module Project Solution](https://github.com/lambdaround2/React-Todo)

----

## Class Objectives

By the end of this module, learners should be able to:
* Explain class components, and use a class component to render some state data to the DOM
* Share data between components using state and props
* Respond to events triggered by user interaction and handle user input using forms

----

## Guided Project Slack Message
> 1. Clone without forking the following repo: https://github.com/LambdaSchool/web-guided-project-class-components
> 2. Navigate into both the review and followAlong folders and run npm i to load dependences.
> :point_right: Technical issues spinning up the project? Please head over to the help channel!
> :point_right: If you fall behind during lecture and wish to catch up:
> git fetch && git reset --hard origin/lecture
> :point_right: Slido event: *insert slido link*

----

## Guided Project Zoom Invitation:
> Unit 3 Week 3: Deploying Web Apps
> _______________________________________________________
> Zoom Link : *insert zoom link*
> Slido: *insert slido link*
> Guided Project: https://github.com/LambdaSchool/> web-guided-project-class-components
> Module Project: https://github.com/LambdaSchool/React-Todo

----

## Check for Understanding Questions

These are the questions used internally to check student understanding. Students will be instructed to answer these questions after the guided project. Please make sure to emphasize the concepts behind these answers.

* How would you update a state property called "doggos" in a class component with the value doggoData?

setDoggos(doggoData) | setDoggos.doggoData() | **this.setState({ doggos: doggoData })** | this.setState({ doggoData: doggos })

* How would you refer to a state property called "pokemon" in the class component?

pokemon | this.pokemon | **this.state.pokemon** | state.pokemon

* How do you reference props in a class component?

state.props | props | **this.state.props** | this.props

* How would you update a state property called "username" that is controlling a text input?

None of the Above | this.setState({value: e.target.username}) | setUsername(e.target.value) | **this.setState({username: e.target.value})**

## Guided Project Outline
1. Open the app and look around. Hardcoded data is being passed to `GroceryList`. We want it on state so we can update it and let our app react to those updates.
2. Build state into `App.js`. Talk about what each piece does while you add it:
  - Constructor
  - Super
  - State (with a groceries property set to groceries - feel free to demo obj prop shorthand here)

```javascript
constructor() {
  super();
  this.state = {
    groceries // same as === groceries: groceries
  };
}
```
3. Referencing class properties with classes - `this`
  - pass `this.state.groceries` to `GroceryList` instead of `grocieries`
  - add a class property called `toggleItem` that will update the state when an item is clicked
  - start with the function being empty and pass it down to `GroceryList` then through to `Item`
  - add an `onClick` to the div in `Item` that calls the function from props
  - add a console.log in `toggleItem` to make sure it's working when we click an item
  
_If you want, you can demo binding here. Set up the function with regular function syntax. Pass it through to `Item`. Click an item. Show the error that comes up. Add the binding syntax in the constructor. Click an item. Change to an arrow function and remove binding from constructor._

4. Updating state in `toggleItem`
  - Now that we have the function wired up talk about how state is updated in classes
  - add `this.setState` and _slowly_ go through the logic to toggle an item to "purchased"
  - 

```javascript
toggleItem = itemId => {
    console.log(itemId);
    // map over array
    // when we find the item we clicked, toggle the purchased field
    // otherwise return the item untouched
    this.setState({
      groceries: this.state.groceries.map(item => {
        if (itemId === item.id) {
          return {
            ...item,
            purchased: !item.purchased
          };
        }
        return item;
      })
    });
  };
```

### Forms - add a new item
**Breakout Session or Individual Work**
1. Review `ListForm` and talk about how the form is uncontrolled right now, but we want it to be controlled by state
2. Inform students that they will be working as a group or individually to wire up the form to work with state
3. Here are the tasks you can give them. Set a time limit (probably about 10 - 12 minutes, but it's up to you)

Tasks:
- In `ListForm` add a constructor and state with a state property called `item`
- On the input, add a `value` attribute and pass in your new state property
- Build a `handleChanges` function to update state with each keystroke
- Don't forget `onChange` on the input 😁

Stretch Tasks:
- In `App.js` add a class property called `addItem`
- Build the logic to update state with the item you've typed into the input
- Pass the function to `ListForm`
- In `ListForm` add a class property that gets called when the form is submitted, and calls the `addItem` you passed down as a prop

4. Go over the solution (code is in the solution sandbox). 
5. Work on the stretch tasks above with the whole class.
5. If you have time, go through the filter functionality

## Breakout Message
None Included

----

## After Class Message
> Hope you all enjoyed today's guided Lesson!
> A reminder if that office hours are from 3:30 - 4:30 > Lambda Time. Don't forget to complete the days Check for Understanding and Pulse Checks! Here is a review of today's material.
> 
> ### Key Terminology
> * 📝 *word* - description
> * 📝 *word* - description
> 
> ### Additional Resources
> * 📝 [Helpful Article](www.medium.com)
> * 🎥 [Helpful Video](www.youtube.com)
> 
> ### Module Project
> [Class Component Todo Application](https://github.com/> lambdaround2/React-Todo)
>
> ### [Lecture Recording](http://www.youtube.com)
>
> ### [Lecture Slides](http://www.youtube.com)