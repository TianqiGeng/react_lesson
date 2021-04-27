import React from 'react';
import Filter from "./Filter";
function Footer(props) {
    const { count, filter, changeFilter } = props
    return (
        <div className="footer">
            <strong >
                <span className="count-todos">
                    total: {count} items left
                </span>
            </strong>
            <Filter {...{ filter, changeFilter }} />
        </div>
    )
}
export default Footer