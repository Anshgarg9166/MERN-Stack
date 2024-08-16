
import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import Alert from './Components/Alert';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Textform />,
  },
]);
// function App() {
//   const [mode,setMode] = useState('light');

//   const toggleMode =() => {
//     if(mode === 'light'){
//       setMode('dark');
//       console.log(mode);
//     }
//     else{
//       setMode("light");
//     }
//   }

//   return (
//     <>
//       <BrowserRouter>
//         <Navbar
//           title="TextUtils2"
//           aboutText="TextAbouts"
//           mode={mode}
//           toggleMode={toggleMode}
//         />
//         <Alert alert={alert} />
//         <div className="container my-4" mode={mode}>
//           <Routes>
//             <Route exact path="/about" element={<About />}></Route>
//             <Route
//               exact path="/"
//               element={
//                 <Textbox
//                   showAlert={showAlert}
//                   heading="Enter Text to analyze "
//                   mode={mode}
//                 />
//               }
//             ></Route>
//           </Routes>
//         </div>
//       </BrowserRouter>
//     </>
//   );
    
// }

// export default App;
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);