import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import BookIcon from '@mui/icons-material/Book';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <AppBar position='sticky' sx={{ backgroundColor: "#9400D3", }}>
            <Container maxWidth='lg'>
                <Toolbar>
                    <Typography component='h1' variant='h5' fontWeight='700' flex={1}>
                    <Link style={{ textDecoration: 'none', color: '#fff',}} to='/'> وبلاگ A-Dan</Link>
                    </Typography>
                    <Link style={{ textDecoration: 'none', color: '#fff',}} to='/'><BookIcon  /></Link>
                </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
};

export default Header;