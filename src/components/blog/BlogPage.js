import React from 'react';
import CommentForm from '../comment/CommentForm';
import Loader from '../Loader';

import { useNavigate, useParams } from 'react-router-dom';

import { GET_POST_INFO } from '../../graphQl/queries';
import { useQuery } from '@apollo/client';

import { Avatar, Box, Container, Grid, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import sanitizeHtml from 'sanitize-html';
import Comments from '../comment/Comments';


const BlogPage = () => {


    const navigate = useNavigate();
    const { slug } = useParams();
    const { loading, data, error } = useQuery(GET_POST_INFO, { variables: { slug } });
    console.log({ loading, data, error });

    if (loading) return <Loader />;

    if(data) return (
        <Container maxWidth='lg'>
            <Grid container>
                <Grid item xs={12} mt={9} display='flex' justifyContent='space-between'>
                    <Typography component='h2' variant='h4' color='secondary' fontWeight={700}>
                        {data.post.title}
                    </Typography>
                    <ArrowBackIcon onClick={() => navigate(-1)} />
                </Grid>
                <Grid item xs={12} mt={6}>
                    <img src={data.post.coverPhoto.url} alt={data.post.slug} width='100%' style={{ borderRadius: '12px'}} />
                </Grid>
                <Grid item xs={12} mt={7} display='flex' alignItems='center'>
                    <Avatar src={data.post.author.avatar.url} sx={{ width: '80px', height: '80px' , marginLeft: 2}} />
                   <Box component='div'>
                    <Typography component='p' variant='h5' fontWeight={700}>
                        {data.post.author.name}
                    </Typography>
                    <Typography component='p' variant='p' color='text.secondary'>
                        {data.post.author.field}
                    </Typography>
                   </Box>
                </Grid>
                <Grid item xs={12} mt={7}>
                    <div dangerouslySetInnerHTML={{ __html: sanitizeHtml(data.post.content.html)}}></div>
                </Grid>
                <Grid item xs={12}>
                    <CommentForm slug={slug} />
                </Grid>
                <Grid item xs={12}>
                    <Comments slug={slug} />
                </Grid>
            </Grid>
        </Container>
    );
};

export default BlogPage;