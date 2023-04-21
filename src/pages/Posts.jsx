import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Post } from '../components/Post';

export const Posts = () => {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getPosts();
    },[]);

    const getPosts = () => {
        setLoading(true);
        fetch(` https://dummyjson.com/posts`)
        .then((res) => res.json())
        .then(res => {
            console.log(res, 'response');
            setPosts(res.posts);
        })
        .catch(err => {
            console.log(err, 'response');
        })
        .finally(() => {
            setLoading(false);
        })
    }

    if(loading) {
        return <Box display='grid' height='100vh'justifyItems='center' alignItems='center'>
            <Typography fontSize='20px'>Loading...</Typography>
        </Box>
    }

    return (
        <Box display='grid' m='3%' gridTemplateColumns={'repeat(3, 1fr)'} gap='20px'>
            {
                posts.map(post => (
                    <Post data={post} key={post.id} />
                ))
            }
        </Box>
    )
}
