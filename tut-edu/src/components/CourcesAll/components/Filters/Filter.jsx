import './Filter.css'

import FilterProperty from './FilterProperty/FilterProperty';

export default function Filter() {
    return (
        <div className="filter-container">

            <div className="main_label">
                Курсы
            </div>

            <ul className="filter">
                <li className="is_paid">
                    <ul>
                        <FilterProperty text="платно" id="paid"></FilterProperty>
                        <FilterProperty text="бесплатно" id="not_paid"></FilterProperty>
                    </ul>

                </li>

                <li className="difficulty">
                    <ul>
                        <FilterProperty text="легко" id="easy"></FilterProperty>
                        <FilterProperty text="нормально" id="normal"></FilterProperty>
                        <FilterProperty text="сложно" id="hard"></FilterProperty>
                    </ul>
                </li>
            </ul>

        </div>
    );
}