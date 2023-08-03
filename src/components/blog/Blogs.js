import { useQuery } from '@apollo/client';
import React from 'react';
import { GET_BLOGS_INFO } from '../../graphQl/queries';
import Loader from '../Loader';
import { Grid } from '@mui/material';
import CardEL from '../shared/CardEL';

const Blogs = () => {

    const { loading, data } = useQuery(GET_BLOGS_INFO); 
    // console.log({ loading, data });

    if (loading) return <Loader />
    return (
        <Grid container spacing={2}>
            { data.posts.map(post => (
                <Grid item xs={12} sm={6} md={4} key={post.id}>
                <CardEL {...post} />
            </Grid>
            ))}

            
            
        </Grid>
    );
};

export default Blogs;