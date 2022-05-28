import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const BlogsCard = ({ blogs }) => {
    const navigate = useNavigate()
    const postHandler = (id) => {
        navigate(`/blogs/${id}`)
    }
    return (
        <div class="card  bg-base-100 shadow-xl py-5 my-5">
            <figure><img src={blogs.postImg} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">{blogs.title}</h2>
                <p>{blogs.article.slice(0, 300)}<button onClick={() => postHandler(blogs._id)} class="text-accent text-xl">Read more</button></p>

            </div>
        </div>
    );
};

export default BlogsCard;