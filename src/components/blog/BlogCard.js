import React from 'react';
import { Box } from "@mui/material";
import "./BlogCard.css";

function BlogCard(props) {
   const { title, subtitle, date, media, alt } = props;
   return (
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
         <div className="post-image-container">
            <img src={media} alt={alt} className="post-image" />
            <div className="post-overlay">
               <p className="post-title">{title}</p>
               <p className="post-subtitle">{subtitle}</p>
               <time datetime={date} className="post-date">{date}</time>
            </div>
         </div>
      </Box>
   );
}

export default BlogCard;