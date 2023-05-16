import React from 'react';
import {Box} from "@mui/material";

function EmojiBullet(props) {
    const {emoji, text} = props;

    return (
        <Box component={'li'} fontSize={'1rem'} lineHeight={1.5} mr={{xs: '1rem', md: '1.5rem'}} style={{cursor: 'default'}}>
            <Box component={'span'} aria-label="cheese"
                 role="img"
                 mr={{xs: '1rem', md: '1.5rem'}} fontSize={'1.5rem'}>{emoji}</Box> {text}
        </Box>
    );
}

export default EmojiBullet;