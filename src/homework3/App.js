import React, { useState, useReducer } from 'react'
import axios from "axios"


import List from "./components/List"

const API_URL = "https://hn.algolia.com/api/v1/search?query="

const storiesReducer = (state, action) => {
    switch (action.type) {
        case 'STORIES_FETCH_INIT':
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        case 'STORIES_FETCH_SUCCESS':
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload

            }
        case 'STORIES_FETCH_FAIL':
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case 'REMOVE_STORY':
            return {
                ...state,
                data: state.data.filter(
                    story => action.payload.objectID !== story.objectID
                ),
            };
        default:


    }
}

const App = () => {
    const [searchItem, setSearchItem] = useState('React')

    const [stories, dispatch] = useReducer(
        storiesReducer,
        { data: [], isLoading: false, isError: false }
    )

    const handleRemoveStory = item => {
        dispatch({
            type: 'REMOVE_STORY',
            payload: item,
        });
    };

    const handleSearchSubmit = e => {
        
        dispatch({ type: "STORIES_FETCH_INIT" })
            
        axios.get(`${API_URL}${searchItem}`)
            .then(res => {
                console.log(res)
                dispatch(
                    {
                        type: "STORIES_FETCH_SUCCESS",
                        payload: res.data.hits
                    }
                )
            })
            .catch(() => {
                dispatch({ type: "STORIES_FETCH_FAIL" })
            })
    };

    return (
        <div>
            <h1>My Hacker News</h1>
            <div>
                <label >{"My hacker Stories:"}</label>
                <input value={searchItem} onChange={e => setSearchItem(e.target.value)}/>
                <button
                    type="button"
                    onClick={handleSearchSubmit}
                >
                    Search
                </button>
            </div>
            {stories.isLoading ? <p>loading...</p> : <List list={stories.data} onRemoveItem={handleRemoveStory}></List>}

        </div>
    )
}

export default App