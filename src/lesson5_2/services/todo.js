// 获取所有todo items
// @return {Array}
export function getAll() {
    return [
        { text: "test1", id: "0", completed: false },
        { text: "test2", id: "1", completed: true },
        { text: "test3", id: "2", completed: false }
    ]
}

export function getItemById(itemId) {
    return getAll().find(item => item.id === itemId)
}
let addnumber = 1;
function getNextId() {
    return getAll().length + addnumber++
}
/**
 * 增加一个item
 * @param {Array} 旧的items
 * @param {Object} 新增的item
 * @return {Array} 新的items
 */

export function addToList(items, item) {
    console.log("addToList", items, item)
    let newItem = Object.assign({
        id: getNextId()
    }, item)
    const finalItem = [...items, newItem]
    console.log('finalItem', finalItem)
    return finalItem
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