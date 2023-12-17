import './App.css';
import Graph from './components/Graph';
import Label from './components/Label';
import Form from './components/Form';
import TransactionHistoryList from './components/TransactionHistoryList';
// import Graph from './components/Graph';
// import Form from './components/Form';
import Navbar from './components/Navbar';

function App() {
  return (
  <div className="App">
    
     
   <Navbar/>
   <div className="container   max-w-6xl  mx-auto text-center  ">
   
      {/* grid columns */}
      <div className="grid md:grid-cols-3 gap-2">
        
      <Form/>
      <Graph/>
      <Label/>
         
   
         
      </div>
      <div>
    <TransactionHistoryList/>
    <div>
    
    </div>
      </div>
    </div>
  </div>
  );
}

export default App;