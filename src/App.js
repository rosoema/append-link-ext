import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewBaseButton from './components/NewBaseButton';
import AddNewBase from './components/AddNewBase';
import EditBase from "./components/EditBase";
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <Header />
      <div className="wrap">
        <Router>
          <Routes>
            <Route path="/" element={<NewBaseButton/>} />
            <Route path="/new-base-link" element={<AddNewBase/>}></Route>
            <Route path="/edit-base" element={<EditBase/>}></Route>
          </Routes>
        </Router>
      </div>
    </Fragment>
  );
}

export default App;
