import React from 'react';
import './OverlayedImage.css'; // Import the CSS file for styling
import { Box } from "@mui/material";

function OverlayedImage(props) {
    return (
        <Box component={'main'} display={'flex'} flexDirection={{ xs: 'column', md: 'column' }}  width={'fit-content'} alignItems={'center'}
            justifyContent={'center'} minHeight={'calc(100vh - 175px)'}>
            <div className="image-container">
                <img src={props.img} alt={props.alt} className="image" />
                <div className="overlay">
                    <h2 className="title">{props.title}</h2>
                    <p className="description">{props.body}</p>
                </div>
            </div>
        </Box>
    );
}

export default OverlayedImage;