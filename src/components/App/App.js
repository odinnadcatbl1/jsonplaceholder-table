import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import SearchForm from "../SearchForm/SearchForm";
import Pagination from "../Pagination/Pagination";
import TableList from "../TableList/TableList";

import "./App.css";

const App = () => {
    return (
        <div className="app">
            <div className="container">
                <SearchForm />
                <Router>
                    <Routes>
                        <Route path="/" element={<Navigate to="/1" />} />
                        <Route path="/:id" element={<TableList />} />
                    </Routes>
                    <Pagination />
                </Router>
            </div>
        </div>
    );
};

export default App;
