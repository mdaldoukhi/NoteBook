import './App.css';
import NoteList from './components/NoteList';
import {Switch, Route} from "react-router"

function App() {
  return (
    <Switch>
      <Route path="/">
        <NoteList />
      </Route>
    </Switch>
  );
}

export default App;
