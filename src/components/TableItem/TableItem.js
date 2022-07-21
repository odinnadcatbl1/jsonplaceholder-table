import "./TableItem.css";

const TableItem = (props) => {
    const { id, title, body } = props;
    return (
        <tr>
            <td>{id}</td>
            <td>{title}</td>
            <td>{body}</td>
        </tr>
    );
};

export default TableItem;
