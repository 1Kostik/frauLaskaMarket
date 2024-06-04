import Header from "./componets/Header/Header";
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Header/>}/>
      {/* <Route path="/" element={<Header/>}/>
      <Route path="/" element={<Header/>}/>
      
      <Route path="/" element={<Header/>}/>
       <Route path="/" element={<Header/>}/>
       <Route path="/" element={<Header/>}/> */}
    </Routes>
    
    </>
  );
}

export default App;
