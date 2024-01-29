import App from './App.jsx'
import{
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
  }from "react-router-dom";

  
import TodoList from "./Components/Todo-List.jsx";
import About from "./About.jsx";
import Todo_Layout from './Todo-Layout.jsx';
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" elements={<Todo_Layout/>}>
        <Route index element={<Todo_Layout/>}/>
        <Route path="TodoList" element={<TodoList/>} />
        <Route path="About" element={<About />} />
        <Route path="App" element={<App />} />
      </Route>
    )
  );

  function Master() {
    return(
      <div>
        <RouterProvider router={router}/>
      </div>
    );
  }

  export default Master;