import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchForm from "../SearchForm/SearchForm";
import TableButtons from "../TableButtons/TableButtons";
import TableList from "../TableList/TableList";

import "./App.css";

const App = () => {
    return (
        <div className="app">
            <div className="container">
                <SearchForm />
                <Router>
                    <Routes>
                        <Route path="/" element={<TableList />} />
                    </Routes>
                    <TableButtons />
                </Router>
            </div>
        </div>
    );
};

export default App;
