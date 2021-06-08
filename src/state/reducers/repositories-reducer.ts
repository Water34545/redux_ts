import {ActionTypes} from '../action-types'
import {Action} from '../actions'

interface RepositoriesState {
    loading: boolean,
    error: string | null,
    data: string[] 
}

const initialState = {
    error: null,
    loading: false,
    data: []
}

const repositoriesReducer = (state: RepositoriesState = initialState, action: Action ): RepositoriesState => {
    switch(action.type){
        case ActionTypes.SEARCH_REPOSITORIES : {
            return {
                error: null,
                loading: true,
                data: []
            }
        }
        case ActionTypes.SEARCH_REPOSITORIES_SUCCESS : {
            return {
                error: null,
                loading: false,
                data: action.payload
            }
        }
        case ActionTypes.SEARCH_REPOSITORIES_ERROR : {
            return {
                error: action.payload,
                loading: false,
                data: []
            }
        }
        default:
            return state
    }
}

export default repositoriesReducer