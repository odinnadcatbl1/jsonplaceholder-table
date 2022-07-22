import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import SearchForm from "../SearchForm/SearchForm";
import Pagination from "../Pagination/Pagination";
import TableList from "../TableList/TableList";

import "./App.css";

const App = () => {
    return (
        <div className="app">
            <div className="container">
                <SearchForm />
                <HashRouter>
                    <Routes>
                        <Route path="/" element={<Navigate to="/1" />} />
                        <Route path="/:id" element={<TableList />} />
                    </Routes>
                    <Pagination />
                </HashRouter>
            </div>
        </div>
    );
};

export default App;
