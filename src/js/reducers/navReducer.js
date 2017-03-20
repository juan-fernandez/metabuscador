export default function reducer(
state = {
    tab: 'searcher',
    provider_view: 'calendar'
},
action)
{
    switch (action.type) {
        case 'CHANGE_TAB':
            return {
                ...state,
                tab:action.payload.tab
            }
        case 'PROVIDER_CHANGE_VIEW':
            return {
                ...state,
                provider_view: action.payload.view
            }
    }
    return state
}
