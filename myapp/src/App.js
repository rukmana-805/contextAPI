import './App.css';
import User from './Components/User';
//import UserAfter1sec from './Components/UserAfter1sec';
import NoteState from './Context/notes/NoteState';

function App() {

  return (
    <div className="App">
      <h2>Welcome to Context API Tutorial</h2>

      <NoteState> {/*We have to wrap it with NoteState because NoteState is the component that provides NoteContext
        and that contet is used by User so we have to wrap <User/> with NoteState */}
        <User/>
        {/* <UserAfter1sec/> */}
      </NoteState>
    </div>
  );
}

export default App;
