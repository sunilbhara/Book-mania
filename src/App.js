import React from 'react'
import Resturant from './component/basics/Resturant'
import UseState from './component/hooks/useState';
import UseEffect from './component/hooks/useEffect';
import Todo from './component/to-do-react/todo';
import Temp from './component/weather/temp';

// JSX = use the html looking part in javascript in little bit different 
// Always use import react from 'react' but now in react 17 it is not required but for good practice use it
// An app.js always have a at least one function with return JSX
// finally a export is must

const App = () => {
  return <Temp />;
}
export default App
/* 
  -> What is JSX? Rules to write JSX.
    1. It always return single element
    2. use Div or React Fragment to wrap all your JSX Code
    3. ClassName in place of class
    4. Need to close all non closing Tags in JSX
    5.Use camelCase for attributes
*/