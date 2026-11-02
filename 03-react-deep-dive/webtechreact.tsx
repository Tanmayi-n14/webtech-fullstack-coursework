// 12/9/25
// basics

import React from 'react'
import ReactDOM from 'react-dom/client'

const element = (
	<div>
	<h1> Hello, JSX! </h1>
	<p>2+2 = {2+2} </p>
	</div>
);

ReactDOM.createRoot(document.getElementById("root")).render(element);

// basic function usage

import React from 'react'
import ReactDOM from 'react-dom/client'

function Student()
{
	const name: string = "ABC";
	const course: string = "WT";
	const semester : number = 3;
	
	return(
		<div>
			<h2>STUDENT INFORMATION</h2>
			<p>Name: {name}</p>
			<p>Course: {course}</p>
			<p>Semester: {semester}</p>
		</div>
	);
}


ReactDOM.createRoot(document.getElementById("root")).render(<Student/>); 


//when trying to use 2 createroots
//import React from "react";
import ReactDOM from "react-dom/client";

const element = (
  <div>
    <h1>Hello, JSX!</h1>
    <p>2+2={2+2}</p>
  </div>
);

function Student()
{
	const name: string = "ABC";
	const course: string = "WT";
	const semester : number = 3;
	
	return(
		<div>
			<h2>STUDENT INFORMATION</h2>
			<p>Name: {name}</p>
			<p>Course: {course}</p>
			<p>Semester: {semester}</p>
		</div>
	);
}

ReactDOM.createRoot(document.getElementById("root1")).render(<Student/>); //only works when root1, root2 is updated in index.html file
ReactDOM.createRoot(document.getElementById("root2")).render(element);




//15-9-25

//FUNCTION

import React from 'react'
import ReactDOM from 'react-dom/client'


function Welcome(props)
{
	return <h2>Hello, {props.name}! </h2>
}

ReactDOM.createRoot(document.getElementById("root")).render(<Welcome name="Pavan"/>);



//FUNCTION WITH MULTIPLE TAGS


import React from 'react'
import ReactDOM from 'react-dom/client'


function StudentCard(props)
{
	return(
		<div>
			<h2>STUDENT INFORMATION</h2>
			<p>Name: {props.name}</p>
			<p>Course: {props.course}</p>
			<p>Semester: {props.semester}</p>
		</div>
	);
}


ReactDOM.createRoot(document.getElementById("root")).render(<StudentCard name="Pavan" course="web tech" semester={3} />);


//STYLING


import React from 'react'
import ReactDOM from 'react-dom/client'


function StudentCard(props)
{
	return(
		<div>
			<h2 style={{color: "red", backgroundColor:"yellow"}}>STUDENT INFORMATION</h2>
			<p style={{color: "blue", padding:"25px"}}>Name: {props.name}</p>
			<p style={{color: "pink", padding:"10px"}}>Course: {props.course}</p>
			<p style={{color: "red", padding:"15px"}}>Semester: {props.semester}</p>
		</div>
	);
}


ReactDOM.createRoot(document.getElementById("root")).render(<StudentCard name="Pavan" course="web tech" semester={3} />);




//17-9-25

//internal css  works along with index1.css

import React from "react";
import ReactDOM from "react-dom/client";
import "./index1.css";

function StudentCard(props)
{
	return(
		<div>
			<h2>STUDENT INFORMATION</h2>
			<p className="cls01">Name: {props.name}</p>
			<p id="id01">Course: {props.course}</p>
			<p id="id02">Semester: {props.semester}</p>
		</div>
	);
}

ReactDOM.createRoot(document.getElementById("root1")).render(<StudentCard name="ABC" course="WT" semester={3}/>);


//29-9-25

import React from "react";
import ReactDOM from "react-dom/client";

function ResImage()
{
	return(
		<div>
			<img src="/wall paper.jpg" alt="Wallpaper" />
		</div>
	);
}

function ResLink()
{
	return(
		<div>
			<a href="https://www.google.com" target="_blank" rel="noreferrer"> google.com
			</a>
		</div>
	);
}

function ResCaption()
{
	return(
		<div>
			<p> WALLPAPER</p>
		</div>
	);
}

function SrchResult()
{
	return(
		<div>
			<ResImage/>
			<ResCaption/>
			<ResLink/>
		</div>
	);
}

function App()
{
	return(
		<div>
			<SrchResult/>
		</div>
	);
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);




//another modification

 
import React from "react";
import ReactDOM from "react-dom/client";

function ResImage({src})
{
	return(
		<div>
			<img src={src} alt="Wallpaper" />
		</div>
	);
}

function ResLink({href,linktext})
{
	return(
		<div>
			<a href={href} target="_blank" rel="noreferrer"> {linktext}
			</a>
		</div>
	);
}

function ResCaption({caption})
{
	return(
		<div>
			<p> {caption} </p>
		</div>
	);
}

function SrchResult({src,caption,href,linktext})
{
	return(
		<div>
			<ResImage src={src}/>
			<ResCaption caption={caption}/>
			<ResLink href={href} linktext={linktext}/>
		</div>
	);
}


function App() 
{
	return(
		<div>
			<SrchResult 
                src="/wall paper.jpg"
                caption="WALLPAPER Caption"
                href="https://www.google.com"
                linktext= "google.com"
            />
		</div>
	);
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);




//30-9-25

//above code modification using spread operator

import React from "react";
import ReactDOM from "react-dom/client";

function ResImage({src})
{
	return(
		<div>
			<img src={src} alt="Wallpaper" />
		</div>
	);
}

function ResLink({href,linktext})
{
	return(
		<div>
			<a href={href} target="_blank" rel="noreferrer"> {linktext}
			</a>
		</div>
	);
}

function ResCaption({caption})
{
	return(
		<div>
			<p> {caption} </p>
		</div>
	);
}

function SrchResult(props)
{
	return(
		<div>
			<ResImage {...props}/>
			<ResCaption {...props}/>
			<ResLink {...props}/>
		</div>
	);
}


function App() 
{
	return(
		<div>
			<SrchResult 
                src="/wall paper.jpg"
                caption="WALL PAPER Caption"
                href="https://www.google.com"
                linktext= "google.com"
            />
		</div>
	);
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);



//6-10-25
//first one. this gives warning
import React from "react";
import ReactDOM from "react-dom/client";

function Stuff() 
{
	return[
		<p>Batman</p>,
		<p>Ironman</p>,
		<p>Spiderman</p>,
		];
}	
		
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Stuff />);

//correcting the warning by using key

import React from "react";
import ReactDOM from "react-dom/client";

function Stuff() 
{
	return[
		<p key="01">Batman</p>,
		<p key="02">Ironman</p>,
		<p key="03">Spiderman</p>,
		];
}	
		
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Stuff />);

//using map() for better functionality
//without using key, this gives error 
 
import React from "react";
import ReactDOM from "react-dom/client";

function App() 
{
	const fruits = ["Apple","Banana","Mango"]
	return(
		<ul>
			{fruits.map((a) => (
				<li> {a} </li>
			))}	
		</ul>
	);	
}	
		
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);

//using key
 
import React from "react";
import ReactDOM from "react-dom/client";

function App() 
{
	const fruits = ["Apple","Banana","Mango"]
	return(
		<ul>
			{fruits.map((a,index) => (
				<li key={index}> {a} </li>
			))}	
		</ul>
	);	
}	
		
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);





//8 10 25

//HOOK
//1 ----> useState("") => give initial value in ""

import React,{useState} from "react";
import ReactDOM from "react-dom/client";

function FavoriteColor()
{
	const [color,setColor]=useState("____");

	return(
		<div>
			<h1> My favorite color is {color} </h1>
			<button onClick={ () => setColor("Blue")}> Blue </button>
			<button onClick={ () => setColor("Red")}> Red </button>
		</div>
	);
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<FavoriteColor/>);


//	EVENT HANDLING ----> onClick, onDoubleClick, onMouseOver, onMouseOut, onKeyPress

//1 ----> renders Counter, displays count as 0 first, when clicked, it increments count and displays

import React from "react";
import ReactDOM from "react-dom/client";

function Counter()
{
	let count=0;
	
	function handleClick()
	{
		count++;
		document.getElementById("countValue").innerHTML=count;
	}

	return(
		<div>
			<h2>
				Counter : <h1 id="countValue"> {count} </h1>
			</h2>
			<button onClick={handleClick}> + </button>
		</div>
	);
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Counter/>);

//2 ----> renders Counter, displays count as 0 first, when clicked, it displays 0 and then decrements count

import React from "react";
import ReactDOM from "react-dom/client";

function Counter()
{
	let count=0;
	
	function handleClick()
	{
		document.getElementById("countValue").innerHTML=count;
		count--;
	}

	return(
		<div>
			<h2>
				Counter : <h1 id="countValue"> {count} </h1>
			</h2>
			<button onClick={handleClick}> - </button>
		</div>
	);
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Counter/>);

//3 ----> with styling

import React from "react";
import ReactDOM from "react-dom/client";

function Counter()
{
	let count=0;
	
	function handleClick()
	{
		count++;
		document.getElementById("countValue").innerHTML=count;
		document.getElementsByTagName("h1")[0].style.backgroundColor="lightblue";
	}

	return(
		<div style={{backgroundColor:"lightyellow"}}>
			<h2>
				Counter : <h1 id="countValue"> {count} </h1>
			</h2>
			<button style={{backgroundColor:"pink"}} onClick={handleClick}> + </button>
		</div>
	);
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Counter/>);


//10 10 25

import { useState, createContext, useContext } from "react";
import { createRoot }  from "react-dom/client";

const UserContext = createContext();

function Component1()
{
	const [user, setUser] = useState("Linus");

	return(
		<UserContext.Provider value={user}>
			<h1> {`Hello ${user}`} </h1>
			<Component2/>
		</UserContext.Provider>
	);
}

function Component2()
{
	return(
		<>
			<h1> Component 2 </h1>
			<Component3/>
		</>
	);
}


function Component3()
{
	const user = useContext(UserContext);
	
	return(
		<>
			<h1> Component 3 </h1>
			<h2> {`Hello ${user} again! `}  </h2>
		</>
	);
}

createRoot(document.getElementById("root")).render(<Component1/>);

//13/10/25
//3 types of programd on useEffect


import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function Timer()
{
	const [count, setCount] = useState(0);
	
	useEffect(() => {
		setTimeout(() => {
			setCount((count) => count + 1);
		}, 1000);
	});

	return <h1> I've rendered {count} times! </h1>
}


ReactDOM.createRoot(document.getElementById('root')).render(<Timer/>);



import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function Timer()
{
	const [count, setCount] = useState(0);
	
	useEffect(() => {
		setTimeout(() => {
			setCount((count) => count + 1);
		}, 1000);
	},[]);

	return <h1> I've rendered {count} times! </h1>
}


ReactDOM.createRoot(document.getElementById('root')).render(<Timer/>);


//useReference


import { useState, useEffect, useRef} from "react";
import ReactDOM from "react-dom/client";


function App()
{
	const [inputValue,setInputValue] = useState("");
	const count = useRef(0);
	
	useEffect(() => {
		count.current = count.current + 1;
});
	

return(
		<>
			<p>Type in the input field: </p>
			<input 
				type="text"
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
			/>
				
			<h1> Render Count: {count.current}</h1>
		</>
	);
}


ReactDOM.createRoot(document.getElementById('root')).render(<App/>);




//15/10/25
//useReducer

import React, {useReducer} from "react";
import ReactDOM from "react-dom/client";


function reducer(state,action)
{
	switch (action.type)
	{
		case "i_age":
			return {age: state.age + 1};
		case "d_age":
			return {age: state.age - 1};	
		case "r_age":
			return {age: 42};	
		default: 
			return state;
	}
}
	
function AgeCounter()
{
	const [state, dispatch] = useReducer (reducer, {age:42});
		return(
			<div>
				<p> Age: {state.age} </p>
				<button onClick={() => dispatch ({type:"i_age" })}> Increment age </button>
				<button onClick={() => dispatch ({type:"d_age" })}> Decrement age </button>
				<button onClick={() => dispatch ({type:"r_age" })}> Reset </button>
		</div>
	);
}


ReactDOM.createRoot(document.getElementById('root')).render(<AgeCounter/>);

//react forms


import {useState} from "react";
import ReactDOM from "react-dom/client";

function MyForm()
{
	const [name,setName] = useState("");

	return(
		<form>
			<label>Enter your name: 
			<input 
				type="text"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			</label>	
			<p> Current value: {name}</p>
		</form>
	)
}

ReactDOM.createRoot(document.getElementById('root')).render(<MyForm/>);


//17/10/25

//web tech

//react-router-dom.. you need to install this using npm install react-router-dom


import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter,Routes,Route,NavLink} from "react-router-dom";

function Home()
{
	return (
			<h1> This is a Home page </h1>
	)
}

function About()
{
	return (
			<h1> This is  an About page </h1>
	)
}

function Contact()
{
	return (
			<h1> This is a Contact page </h1>
	)
}

function App()
{
	return(
		<BrowserRouter>
			<nav>
				<NavLink to="/">Home</NavLink> | <NavLink to="/about">About</NavLink> | <NavLink to="/contact">Contact</NavLink>
			</nav>
			<Routes>
				<Route path="/" element={<Home/>}/>
				<Route path="/about" element={<About/>}/>
				<Route path="/contact" element={<Contact/>}/>
			</Routes>
		</BrowserRouter>
	)
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);