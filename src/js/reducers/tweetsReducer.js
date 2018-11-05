export default function reducer(state={
    tweets: [],
    fetching: false,
    fetched: false
  }, action) {

    switch (action.type) {
      // case "FETCH_TWEETS": {
      //   return {...state, fetching: true}
      // }
      // case "FETCH_TWEETS_REJECTED": {
      //   return {...state, fetching: false, error: action.payload}
      // }
      case "FETCH_TWEETS": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          tweets: action.payload,
        }
      }
     
    }

    return state
}
