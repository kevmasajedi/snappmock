 
import LoginPage from "./Components/LoginPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
import CentralLoader from "./CentralLoader";
import HomePage from "./Components/HomePage"; 

const title = "اسنپ‌ماک!"
const router = createBrowserRouter([ 
  {
    path:"/", 
    loader: CentralLoader
  },
  {
    path:"/home",
    element: <HomePage />
  },
  {
    path: "/login",
    element: <LoginPage title={title} /> 
  }
])
function App({title}) {
  return ( 
    <RouterProvider router={router} />
  );
}
export default App;


// TERMINOLOGY:

// PAGE > CONTAINER > ELEMENT

// - PAGE: 
// ! Is the largest unit of UI. Equals to a traditional web page which is navigatable by URL. 
// !! Pages may NOT include any styling rules.

// - CONTAINER:
// ! Container comprises a part of page.
// ! Container is a component which knows how to style its children. 
// !! Containers are NOT by definition page agnostic (may or may not be!).
// !! Page agnostic containers are placed in the root components folders whereas the page dependent ones are placed inside the page folders

// - Elements:
// ! Is the smallest unit of UI. Equals to a smarter variant of traditional HTML elements.
// ! Elements may include simple styling rules.
// ! Elements should be Page/Container agnostic.  