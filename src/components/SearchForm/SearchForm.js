import "./SearchForm.css";
import searchIcon from "../../assets/search.svg";
import { useDispatch } from "react-redux/es/exports";
import { searchPosts } from "../../actions";

const SearchForm = () => {
    const dispatch = useDispatch();

    const onSearch = (e) => {
        dispatch(searchPosts(e.target.value));
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
