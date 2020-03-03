import React, { Component } from 'react';

import PostItem from '../PostItem';

class PostList extends Component {
  state = {
    posts: [
      
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar: "https://robohash.org/23e9e630457b26bcecea8a996f2df4c3?set=set4&bgset=&size=400x400"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 2,
            author: {
              name: "Diego Fernandes",
              avatar: "https://gravatar.com/avatar/23e9e630457b26bcecea8a996f2df4c3?s=400&d=mp&r=x"
            },
            content: "Conteúdo do comentário"
          }
        ]
      },

      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar: "https://robohash.org/23e9e630457b26bcecea8a996f2df4c3?set=set4&bgset=&size=400x400"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 2,
            author: {
              name: "Diego Fernandes",
              avatar: "https://gravatar.com/avatar/23e9e630457b26bcecea8a996f2df4c3?s=400&d=mp&r=x"
            },
            content: "Conteúdo do comentário"
          }
        ]
      },

    ]
  };

  render() {
    const { posts } = this.state;

    return (
      <div className="postlist">
        {posts.map(post => (
          <PostItem key={post.id} {...post} />
        ))}
      </div>
    );
  }
}

export default PostList;