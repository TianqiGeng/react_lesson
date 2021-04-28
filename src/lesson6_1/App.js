import React from 'react'
import Colors from './Color'
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
    render() {
        return < Colors color="pink" />

    }
}

export default App