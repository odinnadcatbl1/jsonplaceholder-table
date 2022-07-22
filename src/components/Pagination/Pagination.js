import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentPage } from "../../actions";

import "./Pagination.css";

const Pagination = () => {
    const { pagination } = useSelector((state) => state);
    const dispatch = useDispatch();

    if (!pagination) {
        return false;
    }

    const onPageClick = (e) => {
        dispatch(setCurrentPage(e.target.id));
    };

    const onNextPage = () => {
        dispatch(setCurrentPage(pagination.currentPage + 1));
    };

    const onPrevPage = () => {
        dispatch(setCurrentPage(pagination.currentPage - 1));
    };

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(pagination.pages / 10); i++) {
        pageNumbers.push(i);
    }

    if (pagination.pages <= 10) {
        return false;
    }

    return (
        <div className="pagination__container">
            <div className="pagination__button" onClick={onPrevPage}>
                Назад
            </div>
            <ul className="pagination__list">
                {pageNumbers.map((page) => {
                    let currentPage = "active";
                    if (page !== pagination.currentPage) {
                        currentPage = "";
                    }
                    return (
                        <li
                            key={page}
                            className={`pagination__item ${currentPage}`}
                        >
                            <Link
                                id={page}
                                onClick={onPageClick}
                                to={`/${page}`}
                            >
                                {page}
                            </Link>
                        </li>
                    );
                })}
            </ul>
            <div className="pagination__button" onClick={onNextPage}>
                Далее
            </div>
        </div>
    );
};

export default Pagination;
