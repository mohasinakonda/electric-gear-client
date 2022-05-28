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
            <div className='shadow-xl'>
                <code>

                    `const products=[`

                    `{`
                            pname: 'laptop',
                            price: 34,
                            description: 'something...'
                        }`, ` {


                            pname: 'laptop',
                            price: 34,
                            description: 'something...'
                        `}`
                    ]`
                    `const name='laptop'
               ` const findByName=products.find(product=>product.name===name)`

                </code>
            </div>
        </div>
    );
};

export default Blogs;