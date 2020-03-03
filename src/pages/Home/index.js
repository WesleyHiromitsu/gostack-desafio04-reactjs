import React, { Component } from 'react';

//componentes
import Menu from '../../components/Menu'
import PostList from '../../components/PostList'

class Home extends Component {
  render() {
    return (
      <>
        <Menu />
        <PostList />
      </>
    )
  }
}

export default Home;
