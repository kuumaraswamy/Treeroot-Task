import { Routes ,Route} from "react-router-dom";
import React,{useState} from "react"
import Form from "./Pages/Form";
import Table from "./Pages/Table";
import Sidebar from "./Pages/Sidebar";


function App() {

  const [table, setTable] = useState([])

  const onFormSubmit = (item) => {
    const updatedTable = [...table];
    updatedTable.push(item);
    console.log(updatedTable);
    setTable(updatedTable);
  };
  return (
    <>
    
     <Sidebar/>
     <Routes>
      <Route path="/" element={<Form  onFormSubmit={onFormSubmit}/>} />
      <Route path="/table" element={<Table data={table} />} />
     </Routes>

      
    </>
  );
}

export default App;
