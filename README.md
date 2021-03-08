# basic-reactJs
# 1 - Hello world
  - Component 
  - Functional Component
  - Class Component
  - Hook Update
  - JSX, Props, State
  - setState
  - Destructuring props and state
  - Event Handling
  - Binding Event Handlers
  - Methods as Props
  - Conditional Rendering
  - List Rendering
  - List and Key
  - Index as Key - Anti-pattern
  - Styling and CSS basics
# 2 - Basic Form Handling
  - Set value for input tag
  - Set onChange for input tag
  - Arrow function for setState as well as onSubmit form
  - Prevent Form refresh the page
# 3 - Component Mounting Lifecycle Methods
  - When an instance of acomponent is being created and inserted into the DOM
  - constructor()
  - static getDerivedStateFromProps(props, state) -> return
  - render()
  - componentDidMount()
# 4 - Component Updating Lifecycle Methods
  - When a component is being re-rendered as a result of changes to either its props or state
  - static getDerivedStateFromProps(props, state) -> return
  - shouldComponentUpdate()
  - render()
  - getSnapshotBeforeUpdate(prevProps, prevState) -> return
  - componentDidUpdate(prevProps, prevState, snapshot)
# 5 - Fragments
  - To remove div tag or something that's up to our customize
# 6 - PureComponent and Regularomponent with ParentComponent
  - Related to control the re-rendering of Component
  - Using componentDidMount() to realize the differences
# 7 - Refs includes
  - Basic Refs with React.createRef()
  - Refs with Class Component
  - Forwarding Refs
# 8 - Portals
  - Using ReactDOM.createProtal(html, document.getElementById('id'))
  - Render HTML element to specific position through id of tag
# 9 - Error Boundary includes 2 methos
  - When there is an error during rendering in lifecycle method or in the constructor of any child component
  - static getDerivedStateFromError()
  - componentDidCatch()
# 10 - Higher Order Component - something like MiddleComponent
  - Create a const as arrow function with at least one parameter which represent a OriginalComponent
  - Create a New Class Component into it with constructor and necessary function
  - In the render(), we call the OriginalComponet and pass the state, function, etc
# 11 - Render Props
  - Pass data from child to Perent through Prop
  - Build Class Component to do a function
  - Wrap Order Component to implement function
# 12 - Context
  - Using React.createContext()
  - Using UserProvider = UserContext.Provider
  - Using UserComsumer = UserContext.Cunsumer
  - Pass value data from ParentComponet which is wrapped by UserProvider
  - Reveive props data from ChildComponent which is wrapped by UserConsumber
# 13 - HTTP and Library
  - Using HTTP Library - Axios
  - Using lifecycle hook with componentDidDount() to do the GET and POST data
  - Render data in JSX
# 14 - React Hooks - useState
  - import React, { useState } from 'react'
  - const [state, setstate] = useState(initialState)
  - Don't user for Class Component. It's just for Functional Component
  - Normal useState
  - useState with prevState
  - useState with Object
  - useState with Array
# 15 - React Hooks - useEffect
  - import React, { useEffect } from 'react'
  - useEffect(() => {do anything}, [array of varState to track its changes to execute the function])
  - Don't use for Class Component. It's just for Funtional Component
  - It is executed every render of the component - for updating UI
  - Replace componentDidUpdate() to useEffect()
  - usrEffect after render (ClassCounterOne.js, UseEffectHook.js)
  - useEffect with conditional run (ClassCounterOne.js, UseEffectWithCondition.js)
  - useEffect run only once with empty array params (UseEffectRunOnlyOnce.js)
  - useEffect with clean up when show/hide other component then we need to unmount them (ClassMouse.js, UseEffectWithCleanUp.js, UseEffectRunOnlyOnce.js)
  - useEffect with incorrect dependency (IntervalClassCounter.js, UseEffectWithIncorrectDependency.js)
# 16 - Fetching Data with useEffect
  - useEffect - fetching data from url endpoints (UseEffectBasicFetchingData.js)
  - useEffect - fetching data with route (params is id as an example) (UseEffectRouteFetchingData.js) 
  - useEffect - fetching data through a button - get input value and http GET (UseEffecWithButtonToFetchingData.js)
# 17 - React Hooks - useContext
  - useContext - Using our own file to define const of context from React and way to use them (NormalContext.js) - Can review at #12 (Context)
  - useContext - Using useContext from react to get data to child component easily and simple with code nicer (App.js, ComponentF.js)
# 18 - React Hooks - useReducer
  - useReducer is used for state management, it's alternative to useState
  - useReducer(reducerFunction, initalState)
  - newState = reducer(currentState, action)
  - useReducer return a pair of values [newState, dispath] - dispatch method to use specify the action
