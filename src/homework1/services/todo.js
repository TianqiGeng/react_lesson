// 获取所有todo items
// @return {Array}
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
/**
 * 增加一个item
 * @param {Array} 旧的items
 * @param {Object} 新增的item
 * @return {Array} 新的items
 */

export function addToList(items, data) {
    let newItem = Object.assign({
        id: getNextId()
    }, data)
    return [...items, newItem]
}


export function updateStatus(items, itemId, completed) {
    let newItems = [...items]
    let index = items.findIndex(item => item.id === itemId)
    newItems[index].completed = completed
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