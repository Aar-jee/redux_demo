import axios from "axios";

export function fetchTweets() {
  return function(dispatch) {
    dispatch({type: "FETCH_TWEETS"});

    axios.get("https://jsonplaceholder.typicode.com/posts/42")
      .then((response) => {
        console.log("ye rha==>",response)
        dispatch({type: "FETCH_TWEETS", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_TWEETS_REJECTED", payload: err})
      })
  }
}

