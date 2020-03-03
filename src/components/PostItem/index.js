import React from 'react';

function PostMenu({ author, date }) {
  return (
    <div>
      <img src={author.avatar} />
      <div >
        <span>{author.name}</span>
        <span>{date}</span>
      </div>
    </div>
  );
}

function PostComments({ comments }) {
  return (
    <div>
      <div />
      {comments.map(comment => (
        <div key={comment.id} >
          <img src={comment.author.avatar} />
          <p>
            <span>{comment.author.name}</span>
            {comment.content}
          </p>
        </div>
      ))}
    </div>
  );
}

function PostItem({ author, date, content, comments }) {
  return (
    <div>
      <PostMenu author={author} date={date} />
      <p>{content}</p>
      <PostComments comments={comments} />
    </div>
  );
}


export default PostItem;
