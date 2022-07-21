import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import TableItem from "../TableItem/TableItem";
import { fetchPosts } from "../../actions";

import arrowIcon from "../../assets/arrow-down.svg";
import "./TableList.css";

const TableList = () => {
    const { posts, loading, error, search } = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts());
    }, []);

    if (loading) {
        return <h1>Идёт загрузка...</h1>;
    }

    if (error) {
        return <h1>Ошибка загрузки</h1>;
    }

    if (!posts) {
        return <h1>Идёт загрузка</h1>;
    }

    const filteredPosts = posts.filter((post) => {
        const { id, title, body } = post;

        if (!+search) {
            if (body.indexOf(search) !== -1 || title.indexOf(search) !== -1) {
                return true;
            }
        } else {
            if (id === +search) {
                return true;
            }
        }
    });

    console.log(filteredPosts);
    return (
        <div className="table__container">
            <table className="table">
                <thead className="table__head">
                    <tr>
                        <th>
                            ID <img src={arrowIcon} alt="arrow" />
                        </th>
                        <th>
                            Заголовок <img src={arrowIcon} alt="arrow" />
                        </th>
                        <th>
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
