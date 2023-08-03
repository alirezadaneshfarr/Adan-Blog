import React from 'react';
import Loader from '../Loader';

import { useQuery } from '@apollo/client';
import { GET_AUTHORS_INFO } from '../../graphQl/queries';

import { Avatar, Divider, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Authors = () => {

    const {loading, data, error } = useQuery(GET_AUTHORS_INFO);
    console.log({ loading, data, error });

    if(loading) return <Loader />;

   if (data) return (
        <Grid container padding={2} sx={{ boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px", borderRadius: 4}}>
            {
                
               data.authors.map( (author, index) => 
                <React.Fragment key={author.id}>
                <Grid item sx={{ margin: 3}}>
                    <Link to={`/authors/${author.slug}`} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none',}}>
                        <Avatar src={author.avatar.url} sx={{ marginLeft: 2}}/>
                        <Typography component='p' variant='p' fontWeight={500} color='text.secondary'>
                            {author.name}
                        </Typography>
                    </Link>
             </Grid>
                {
                    index !== data.authors.length - 1 &&(
                        <Grid item xs={12}>
                    <Divider variant='middle' />
                </Grid>
                    )
                }
               
                </React.Fragment>
               )
                
            }
        </Grid>
    );
};

export default Authors;