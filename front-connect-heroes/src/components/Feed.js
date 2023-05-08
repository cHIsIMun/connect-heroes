import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Post from './Post';

const Feed = () => {
  const [feedData, setFeedData] = useState([]);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const fetchFeedData = async () => {
      try {
        const authToken = localStorage.getItem('authToken');
        const response = await axios.get('http://127.0.0.1:8000/FeedUser/', {
          headers: {
            'Authorization': `Token ${authToken}`,
          },
        });
        const data = response.data;
        setFeedData(data);
        setUserId(data.user_id); // Definir o ID do usuário atual
      } catch (error) {
        console.log(error);
      }
    };

    fetchFeedData();
  }, []);

  return (
    <div className="feed">
      {feedData.map(post => {
        const liked = post.likes.some(like => like.id === userId); // Verificar se o post foi curtido pelo usuário atual

        return (
          <Post
            key={post.id}
            user={post.profile.user}
            content={post.content}
            image={post.image}
            timestamp={post.timestamp}
            likes={post.likes}
            comments={post.comments}
            liked={liked} // Passar a informação de curtida
            postId={post.id}
          />
        );
      })}
    </div>
  );
};

export default Feed;
