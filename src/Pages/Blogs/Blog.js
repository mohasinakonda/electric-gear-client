import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Spinner from '../Shared/Spinner';
import BlogsCard from './BlogsCard';

const Blog = () => {
    const { postId } = useParams()
    const { data, isLoading } = useQuery('blog', () => fetch(`https://electric-gear.herokuapp.com/blogs/${postId}`).then(res => res.json()))
    if (isLoading) {
        return <Spinner />
    }
    return (
        <div>
            {
                data.map(blog => <div class="card  bg-base-100 shadow-xl py-5 my-5">
                    <figure><img src={blog.postImg} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">{blog.title}</h2>
                        <p>{blog.article}</p>

                    </div>
                </div>)
            }
        </div>
    );
};

export default Blog;