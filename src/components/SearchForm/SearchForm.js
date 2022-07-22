import "./SearchForm.css";
import searchIcon from "../../assets/search.svg";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { searchPosts, setPagesCount } from "../../actions";

const SearchForm = () => {
    const { posts, search } = useSelector((state) => state);
    const dispatch = useDispatch();

    if (!posts) {
        return <div>Идёт загрузка...</div>;
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

    const onSearch = (e) => {
        dispatch(searchPosts(e.target.value));
        dispatch(setPagesCount(filteredPosts.length));
    };

    return (
        <div className="search__form-container">
            <form className="search__form">
                <input
                    className="search__form-input"
                    placeholder="Поиск"
                    type="text"
                    onChange={onSearch}
                />
                <button className="search__form-button" type="button">
                    <img src={searchIcon} />
                </button>
            </form>
        </div>
    );
};

export default SearchForm;
