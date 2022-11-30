import React from 'react';
import './ExtraTask.css'

//extra task section
const ExtraTask = () => {
    return (
        <div className='extra_task'>
            <h2>How does React Work??</h2>
            <p>Firsrly, React is not a framework. It is just a library
             developed by Facebook to solve some problems that we were facing earlier.
             React uses a declarative paradigm that makes it easier to reason about your 
             application and aims to be both efficient and flexible. It designs simple views
             for each state in your application, and React will efficiently update and render
             just the right component when your data changes.<br/>
             At its very core, React basically maintains a tree for you. This tree is able to 
             do efficient diff computations on the nodes.hink of your HTML code as a tree. 
             In fact, that is exactly how the browser treats your DOM (your rendered HTML on the browser).
             React allows you to effectively re-construct your DOM in JavaScript and push only those 
             changes to the DOM which have actually occurred.A React application is made of multiple 
             components, each responsible for rendering a small, reusable piece of HTML. Components can 
             be nested within other components to allow complex applications to be built out of simple 
             building blocks. A component may also maintain an internal state – for example, a TabList 
             component may store a variable corresponding to the currently open tab.</p>
           
        </div>
    );
};

const ExtraTask1 = () => {
    return (
        <div className='extra_task'>
          <h2>What are the Differences between props and state??</h2>
          <p>1. <span className='text_design'>Props</span> are read only  Where as, <span  className='text_design'>state</span> changes and it changes like asynchronous.</p>
          <p>2. <span  className='text_design'>Props</span> cannot be modified and Immutable Where as, <span  className='text_design'>state</span> is Mutable and It is local to the component only.</p>
          <p>3. <span  className='text_design'>Props</span>,make components reusable by giving components the ability to receive data from their parent 
          component in the form of props Where as, <span  className='text_design'>state</span> on the other hand, is the local state of the component 
          which cannot be accessed and modified outside of the component  </p>
         <p>4. <span  className='text_design'>Props</span> are equivalent to function parameters Where as, <span  className='text_design'>states</span> are equivalent to local variables in a function.</p>
        </div>
    );
};
const ExtraTask2 = () => {
    return (
        <div className='extra_task'>
            <h2>What is the use of useEffect??</h2>
            <p> When the core React Hooks were added to the library in 2018 (useState, useEffect, and so on), 
                many developers were confused by the name of this hook: "useEffect".The word effect refers to a functional programming term called a "side effect".
                By using this useEfect Hook, you tell React that your component needs to do something after render. React will remember the function you passed 
                (we’ll refer to it as our “effect”), and call it later after performing the 
                DOM updates. In this effect, we set the document title, but we could also perform
                data fetching or call some other imperative API.useEffect runs on every render. 
                That means that when the count changes, a render happens, which then triggers 
                another effect.Also,The useEffect Hook allows you to perform side effects in
                your components.</p>
        </div>
    );
};
export {ExtraTask,ExtraTask1,ExtraTask2} ;