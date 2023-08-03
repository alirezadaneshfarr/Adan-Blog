import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Divider, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const CardEL = ({title, slug, coverPhoto, author}) => {


    return (
       <Card sx={{ boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px", borderRadius: "4px"}}>
       {
        author &&  <CardHeader
         avatar={<Avatar src={author.avatar.url} sx={{ marginLeft: 2}} />} 
            title={<Typography component="p" variant='p' fontWeight={400}>{author.name}</Typography>}
         />
       }
       
        <CardMedia component="img" height="194" image={coverPhoto.url} alt={slug}/>
        <CardContent>
            <Typography component="h2" variant='h6' fontWeight={600}>
                {title}
            </Typography>
        </CardContent>
        <Divider variant='middle' sx={{ margin: "10px" }}/>
        <CardActions>
           <Link to={`/blogs/${slug}`} style={{ textDecoration: "none", width: "100%"}}>
           <Button variant='outlined' size='small' sx={{ width: "100%", borderRadius: "13px", fontWeight: '700'}}>بیشتر ...</Button>
            </Link>
        </CardActions>
       </Card>
    );
};

export default CardEL;