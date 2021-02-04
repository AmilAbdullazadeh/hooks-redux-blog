import React, {useState, useEffect} from 'react';
import {selectUserInput, setBlogData} from "../features/userSlice";
import {useSelector, useDispatch} from "react-redux";
import axios from "axios";

const Blog = () => {
    const searchContext = useSelector(selectUserInput)
    const blog_URL = `https://gnews.io/api/v4/search?q=${searchContext}&token=4ca3842839ffe0d2b9233394646c10b4`
    const dispatch = useDispatch()

    const [blogs, setBlogs] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios
            .get(blog_URL)
            .then(response => {
                dispatch(setBlogData(response.data));
                setBlogs(response.data)
                setLoading(false)
            })
            .catch(error => {
                console.error(error)
            })
    }, [searchContext])

    return (
        <div className='blog'>
            <h1 className='blog-title'>Blogs</h1>
            {
                loading && <h1>Loading...</h1>
            }
            <div className="blogs">
                {
                    blogs?.articles?.map((blog) => (
                        <a className='blog-link' target='_blank' href={blog.url}>
                            <img src={blog.image} alt={blog.title}/>
                            <div>
                                <h3 className='blog-content'>
                                    <span>{blog.source.name}</span>
                                    <small>{blog.publishedAt}</small>
                                </h3>
                                <h2>{blog.title}</h2>
                                <p>{blog.description}</p>
                            </div>
                        </a>
                    ))
                }
                {
                    blogs?.totalArticles === 0 && (
                        <h1 className='no-blogs'>
                            No blogs available 🥺. Search soehting else to read blogs on the my pro blog site 😎
                        </h1>
                    )
                }
            </div>
        </div>
    )
}

export default Blog