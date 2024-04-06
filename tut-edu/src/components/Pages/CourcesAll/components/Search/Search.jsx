import './Search.css'
import search from './search.svg'

function Search(props) {
    var place = ''
    if (props.place == 'grid'){
        place = 'search_container_in_grid';

    }else if (props.place == 'mobile'){
        place ='search_container_mobile';
    }

    return (
    <div id={place} className="search_container">
        <input name="search" placeholder="Найти" type="text" className="search_nav" />
        <img className="search_icon" src={search} alt="" />
    </div>);
}

export default Search;