import React from "react"
import { connect } from "react-redux"
import { fetchTweets } from "../actions/tweetsActions"

@connect((store) => {
  return {
    tweets: store.tweets.tweets ? store.tweets.tweets : [],
  };
})
export default class Layout extends React.Component {

  fetchTweets() {
    this.props.dispatch(fetchTweets())
  }

  render() {
    const { tweets } = this.props;

    if (!tweets.length) {
      return (
        <div>
          <button onClick={this.fetchTweets.bind(this)}>load tweets</button>
          <div>
            {this.props.tweets.title}
          </div>
        </div>
      );
    }
  }
}
