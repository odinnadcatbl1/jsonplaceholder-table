import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TableItem from "../TableItem/TableItem";
import { fetchPosts, setPagesCount, sortPosts } from "../../actions";

import arrowIcon from "../../assets/arrow-down.svg";
import "./TableList.css";

const TableList = () => {
    const { posts, loading, error, search, sort, pagination } = useSelector(
        (state) => state
    );
    const dispatch = useDispatch();

    const [flag, setFlag] = useState(false);

    useEffect(() => {
        dispatch(fetchPosts());
    }, []);

    if (loading) {
        return <h1>Идёт загрузка...</h1>;
    }

    if (error) {
        return <h1>Ошибка загрузки</h1>;
    }

    if (!posts | !pagination) {
        return <h1>Идёт загрузка...</h1>;
    }

    const byField = (field, flag) => {
        if (flag) {
            return (a, b) => (a[field] < b[field] ? 1 : -1);
        }
        return (a, b) => (a[field] > b[field] ? 1 : -1);
    };

    const indexOfLastPost = pagination.currentPage * 10;
    const indexOfFirstPost = indexOfLastPost - 10;

    const filteredPosts = posts
        .filter((post) => {
            const { id, title, body } = post;

            if (!+search) {
                if (
                    body.indexOf(search) !== -1 ||
                    title.indexOf(search) !== -1
                ) {
                    return true;
                }
            } else {
                if (id === +search) {
                    return true;
                }
            }
        })
        .sort(byField(sort, flag))
        .slice(indexOfFirstPost, indexOfLastPost);

    if (filteredPosts.length === 0) {
        return (
            <div className="table__container">
                <div className="table__empty">Ничего не найдено</div>
            </div>
        );
    }

    const sortTable = (e) => {
        dispatch(sortPosts(e.target.id));
        setFlag(!flag);
        const th = document.querySelectorAll("th");
        th.forEach((th) => {
            th.style.color = "white";
        });
        e.target.style.color = "grey";
    };

    return (
        <div className="table__container">
            <table className="table">
                <thead className="table__head">
                    <tr>
                        <th id="id" onClick={sortTable}>
                            ID <img src={arrowIcon} alt="arrow" />
                        </th>
                        <th id="title" onClick={sortTable}>
                            Заголовок <img src={arrowIcon} alt="arrow" />
                        </th>
                        <th id="body" onClick={sortTable}>
                            Описание <img src={arrowIcon} alt="arrow" />
                        </th>
                    </tr>
                </thead>

                <tbody className="table__body">
                    {filteredPosts.map((post) => {
                        return <TableItem {...post} key={post.id} />;
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default TableList;
