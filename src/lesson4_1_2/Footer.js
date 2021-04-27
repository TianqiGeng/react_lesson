import React from 'react'
import Filter from "./Filter";
function Footer(props) {
    const { count, filter, changeFilter } = props
    return (
        <div className="footer">
            <strong>
                <span className="count-todos">
                    {count}
                </span>
                {' items left'}
            </strong>
            <Filter filter={filter} change={changeFilter} />
        </div>
    )
}
export default Footer