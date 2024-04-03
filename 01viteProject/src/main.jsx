import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp() {

  return (
    <h1>Chai aur React | Swati</h1>
  )
}

// const ReactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit google'
// }
//only evaluated expression should be used as variables inside jsx {}
const anotherUser = "swati"
//this reactElement can be inserted using babel transpiler to the react
const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'click to visit google',
  anotherUser
)

const AnotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)
ReactDOM.createRoot(document.getElementById('root')).render(
    // <App/>
    // <MyApp />
    // MyApp() //it can also be used like this
    //render object
    // ReactElement //doesnot work as react accept element in a specific format to render
    // AnotherElement
    reactElement  //correct format rendered
)
