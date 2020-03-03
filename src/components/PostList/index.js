import React, { Component } from 'react';

import PostItem from '../PostItem';

class PostList extends Component {
  state = {
    posts: [
      
      {
        id: 1,
        author: {
          name: "Jake",
          avatar: "https://www.urbanarts.com.br/imagens/produtos/119591/0/Ampliada/jake-minimalista.jpg"
        },
        date: "20 Feb 2020",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        comments: [
          {
            id: 2,
            author: {
              name: "Finn",
              avatar: "https://comicvine1.cbsistatic.com/uploads/original/6/67956/2326456-Adventure-Time-adventure-time-with-finn-and-jake-25206525-540-720.jpg"
            },
            content: 
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac placerat vestibulum lectus mauris ultrices."
          }
        ]
      },

      {
        id: 3,
        author: {
          name: "Princess Bubblegum",
          avatar: "https://i.pinimg.com/originals/a1/1b/89/a11b89c2394023c89e877654beb20d32.jpg"
        },
        date: "22 Feb 2020",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        comments: [
          {
            id: 1,
            author: {
              name: "Jake",
              avatar: "https://www.urbanarts.com.br/imagens/produtos/119591/0/Ampliada/jake-minimalista.jpg"
            },
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac placerat vestibulum lectus mauris ultrices."
          },
          {
            id: 2,
            author: {
              name: "Finn",
              avatar: "https://comicvine1.cbsistatic.com/uploads/original/6/67956/2326456-Adventure-Time-adventure-time-with-finn-and-jake-25206525-540-720.jpg"
            },
            content: 
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium nibh ipsum consequat nisl vel pretium lectus quam id. Odio tempor orci dapibus ultrices."
          },
          
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