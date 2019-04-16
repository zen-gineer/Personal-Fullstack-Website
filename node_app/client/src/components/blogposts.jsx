import React, { Component } from 'react';
import Request from 'superagent';

class BlogPosts extends Component {
    constructor() {
        super();
        this.state = {
          posts: []
        };
      }

    componentDidMount(){
        fetch('/api/blogposts')
        .then(res => res.json())
        .then(posts => this.setState({posts}, () => console.log('Posts fetched', posts)))
    }
	render() {
        return (
        <React.Fragment>
            <h1>Blog Posts</h1>     
        </React.Fragment>
        )}
}

export default BlogPosts;
