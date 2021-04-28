import React from 'react';
import Filter from "./Filter";
import ButtonWrapper from "./wrapper/ButtonWrapper"
function Footer(props) {
    const { count, filter, changeFilter } = props
    return (
        <div className="footer">
            <div className="pull-left buttons">
                <ButtonWrapper {...props} />
            </div>
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