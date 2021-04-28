import React from 'react'
import ColorList from './ColorList'
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            colors: [
                {
                    id: "111",
                    color: "yellow",
                    title: "test1",
                    rating: 3,
                },
                {
                    id: "222",
                    color: "pink",
                    title: "test2",
                    rating: 1,
                },
                {
                    id: "333",
                    color: "red",
                    title: "test3",
                    rating: 5,
                },
            ],
        };
    }
    remove(id) {
        this.setState((prevState) => ({
            colors: prevState.colors.filter((c) => c.id !== id),
        }));
    }
    rate(id, rating) {
        console.log("rate" + id, rating)
        this.setState((prevState) => ({
            colors: prevState.colors.map(c => c.id !== id ?
                c : { ...c, rating })
        }));
        console.log(this.state.colors)
    }
    render() {
        const { colors } = this.state
        return <ColorList colors={colors}
            onRemove={this.remove.bind(this)}
            onRate={this.rate.bind(this)} />

    }
}

export default App