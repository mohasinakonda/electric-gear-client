import React from 'react';
import { useQuery } from 'react-query';
import Spinner from '../Shared/Spinner'
import BlogsCard from './BlogsCard';

const Blogs = () => {
    const { data, isLoading } = useQuery('blogs', () => fetch('https://electric-gear.herokuapp.com/blogs').then(res => res.json()))

    if (isLoading) {
        return <Spinner></Spinner>
    }

    return (
        <div>
            {
                data?.map(blogs => <BlogsCard key={blogs._id} blogs={blogs} />)
            }
        </div>
    );
};

export default Blogs;