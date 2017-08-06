import React from "react";
import { connect } from "react-redux";

import { fetchUser } from "../actions/userActions";
import { fetchTweets } from "../actions/tweetsActions";

@connect((store) => {
    return {
        user: store.user.user,
        userFetched: store.user.fetched,
        tweets: store.tweets.tweets
    };
})
export default class Layout extends React.Component {
    //getDefaultProps() {
    //    console.log('getDefaultProps');
    //}
    //getInitialState() {
    //    console.log('getInitialState');
    //}

    componentWillMount() {
        console.log('componentWillMount');
        this.props.dispatch(fetchUser());
    }

    render(){
        const {user, tweets} = this.props;

        if(!tweets.length){
            return <button onClick={this.fetchTweets.bind(this)}>load tweets</button>
        }

        const tws = tweets.map((tw,i) => <li key={i+1}>{tw.text}</li>);

        return (
            <div>
                <h1>{user.name}</h1>
                <ul>{tws}</ul>
            </div>
        )
    }
    componentDidMount() {
        console.log('componentDidMount');
    }
	componentWillReceiveProps() {
        console.log('componentWillReceiveProps');
    }
    shouldComponentUpdate() {
        console.log('shouldComponentUpdate');
		return true;
    }
    componentWillUpdate() {
        console.log('componentWillUpdate');
    }
    componentDidUpdate() {
        console.log('componentDidUpdate');
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    fetchTweets(){
        this.props.dispatch(fetchTweets());
    }


}