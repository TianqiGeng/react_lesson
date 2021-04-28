import { stringIncludes } from '../utils/common'
export const FILTER_ALL = 'all'
export const FILTER_ACTIVE = 'active'
export const FILTER_COMPLETED = 'completed'

export function getOptions() {
    return {
        [FILTER_ALL]: 'All',
        [FILTER_ACTIVE]: 'Active',
        [FILTER_COMPLETED]: 'Completed',
    }
}

// @param { Array } 当前的items
// @param { String } 当前的filter
// @param { Array } 新的items

export function applyFilter(items, filter) {
    switch (filter) {
        case FILTER_COMPLETED:
            return items.filter(item => item.completed === true)
        case FILTER_ACTIVE:
            return items.filter(item => item.completed === false)
        default:
            return items
    }
}
export function search(items, query) {
    //不区分大小写，都小写
    let q = query.trim().toLowerCase()
    return items.filter(({ text }) => stringIncludes(text.toLowerCase(), q))
}