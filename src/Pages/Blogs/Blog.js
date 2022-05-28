import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Spinner from '../Shared/Spinner';


const Blog = () => {

    const { postId } = useParams()
    const { data, isLoading } = useQuery('blog', () => fetch(`https://electric-gear.herokuapp.com/blogs/${postId}`).then(res => res.json()))
    if (isLoading) {
        return <Spinner />
    }
    return (
        <div>
            {
                data.map(blog => <div class="card  bg-base-100 shadow-xl p-5 my-5">
                    <div>
                        <p className='font-bold  text-accent'> author : {blog.author}</p>
                        <p> publish date : {blog.date}</p>
                    </div>
                    <h2 class="card-title py-5">{blog.title}</h2>
                    <figure><img src={blog.postImg} alt={blog.title} /></figure>
                    <div class="card-body">

                        <p>
                            {blog.article}
                        </p>

                    </div>
                </div>)

            }
        </div>
    );
};

export default Blog;