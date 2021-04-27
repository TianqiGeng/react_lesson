export function getAll() {
    return [
        { text: "test1", id: "1", completed: false },
        { text: "test2", id: "2", completed: true },
        { text: "test3", id: "3", completed: false }
    ]
}
export function getItemById(itemId) {
    return getAll().find(item => item.id === itemId)
}
function getNextId() {
    return getAll().length + 1
}



export function addToList(items, data) {
    let newItem = Object.assign({
        id: getNextId()
    }, data)
    return [...items, newItem]
}


export function updateStatus(items, itemId, checked) {
    let newItems = [...items]
    let index = items.findIndex(item => item.id === itemId)
    newItems[index].completed = checked
    return newItems
}

export function deleteItem(items, itemId) {
    let newItems = [...items]
    // console.log("newItems", newItems, typeof (newItems))
    let index = items.findIndex(item => item.id === itemId)
    newItems.splice(index, 1)
    // console.log("index", index, newItems)
    return newItems
}