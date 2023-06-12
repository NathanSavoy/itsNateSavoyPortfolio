import React, { useState } from 'react';
import BlogCard from "./BlogCard";
import { Link, useLocation } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import { posts } from "./posts/Posts"

export default function Blog() {
    const location = useLocation()
    const [active, setActive] = useState(location.pathname === '/' ? 'home' : location.pathname.slice(1, location.pathname.length));

    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'stretch'} justifyContent={'top'} mt={'1.0rem'}>
            <div justifyContent={'top'}>
                <Grid container display={'flex'} justifyContent={'center'} alignItems={'start'} gap={'2rem'} position={'relative'}>
                    {posts.map((post, index) => (
                        <Grid item key={index} columns={1} justifyContent={'center'} display={'flex'}>
                            <Link to={{ pathname: `/blog/${post.to}` }}>
                                <BlogCard title={post.title} subtitle={post.subtitle} date={post.date} media={post.cover} alt={post.alt} />
                            </Link>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </Box >
    );
};
