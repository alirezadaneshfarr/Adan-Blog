import { useQuery } from '@apollo/client';
import React from 'react';
import { GET_POST_COMMENT } from '../../graphQl/queries';
import { Avatar, Box, Grid, Typography } from '@mui/material';

const Comments = ({ slug }) => {

    const { loading, data, error } = useQuery( GET_POST_COMMENT ,
        { variables: { slug } });

        console.log(data);
        if(loading) return null;
        if(error) return <h1>Error</h1>
    
    return (
       <Grid container sx={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px', borderRadius: 4, py: 1, mt: 5}}>
            <Grid item xs={12} m={2}>
                <Typography component='p' variant='h6' color='secondary' fontWeight={700} mr={4}>
                    کامنت ها
                </Typography>
                {
                    data.comments.map( comment => (
                        <Grid item xs={12} key={comment.id} m={2} p={2} border='1px silver solid' borderRadius={1}>
                            <Box component='div' display='flex' alignItems='center' mb={3}>
                                <Avatar>
                                    {comment.name[0]}
                                </Avatar>
                                <Typography component='span' variant='p' fontWeight={700} mr={2}>
                                    {comment.name}
                                </Typography>
                            </Box>
                                <Typography component='p' variant='p' fontWeight={700} mr={4}>
                                    {comment.text}
                                </Typography>
                        </Grid>
                    ))}
            </Grid>
       </Grid>
    );
};

export default Comments;