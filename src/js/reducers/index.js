import { ADD_ARTICLE } from "../constants/action-types";

const initialState = {
    articles: []
};

function rootReducer(state = initialState, action) {
    if (action.type === ADD_ARTICLE) {
        return Object.assign({}, state, {
            articles: state.articles.concat(action.payload)
        });
    }
    return state;
}

export default rootReducer;

/**
 * There are two key points for avoiding mutations in Redux:
 *
 * Using concat(), slice(), and …spread for arrays
 * Using Object.assign() and …spread for objects
 */