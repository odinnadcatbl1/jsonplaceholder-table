import { Link } from "react-router-dom";

import "./Pagination.css";

const Pagination = () => {
    return (
        <div className="pagination__container">
            <div className="pagination__button">Назад</div>
            <ul className="pagination__list">
                <li className="pagination__item active">
                    <Link to="/1">1</Link>
                </li>
                <li className="pagination__item">
                    <Link to="/2">2</Link>
                </li>
            </ul>
            <div className="pagination__button">Далее</div>
        </div>
    );
};

export default Pagination;
