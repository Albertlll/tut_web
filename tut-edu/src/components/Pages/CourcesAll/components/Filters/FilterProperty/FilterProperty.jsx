import './FilterProperty.css';

function FilterProperty(props) {
    return (
    <li className="filter_param">
        <label htmlFor={props.id}>
            <input id={props.id} className="filter_inp" type="checkbox" name="radio" value="1" />
            <span className="filter_cb_custom"></span>
            {" " + props.text}
        </label>
    </li>
    );
}

export default FilterProperty;