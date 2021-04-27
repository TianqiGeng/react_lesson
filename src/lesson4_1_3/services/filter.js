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