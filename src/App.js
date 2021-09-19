import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Mainbody from './Components/Mainbody';
import Footer from './Components/Footer';
import { DragDropContext } from 'react-beautiful-dnd';

function App() {
  return (
    <div className="App">
      <Header/>
      <DragDropContext>
      <div className="Body">
      <Sidebar/>
      <Mainbody/>
      </div>
      </DragDropContext>
      <Footer/>
    </div>
  );
}

export default App;
