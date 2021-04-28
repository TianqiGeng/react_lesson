import React from 'react'
import Colors from './Color'

export default class ColorList extends React.Component {
    render() {
        const { colors, onRemove, onRate } = this.props;
        return (
            <div>
                {
                    colors.length === 0 ?
                        (<p> No Color Listed(Pls add)</p>)
                        :
                        (colors.map((c) => (
                            <Colors
                                key={c.id}
                                {...c}
                                onRemove={() => onRemove(c.id)}
                                onRateColorList={(rating) => onRate(c.id, rating)} />
                        )))

                }
            </div>
        )
    }
}
