import React, { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import {selectAllPosts, selectPostById} from '../store/feed/selectors';
import { fetchPosts } from "../store/feed/thunks";
import { Link } from "react-router-dom";

export default function Homepage() {
    // Now our component can just worry about the UI
    // We don't have a local useState anymore, and our async function is moved into a thunks.js file
    // HomePage can get data from the store state with selectors
    // And it can dispatch actions and thunks for reducers to update the state too
    const dispatch = useDispatch();

    // Regular selector:
    const data = useSelector(selectAllPosts);

    // Parameterized selector:
    const postById = useSelector(selectPostById(13));

    // We're still using useEffect because we want React to only dispatch this action once, right after the first render
    useEffect(() => {
        dispatch(fetchPosts);
    }, [dispatch]);

    return (
        <div>
            <Link to={'/login'}>Login</Link>
            <h2>Content of post with id 13</h2>
            <p>{data.length === 0 ? "Loading..." : postById.content}</p>
            <hr />

            <h2>Posts</h2>
            {data.length === 0 ? "Loading" : data.map((post) => <p key={post.id}>{post.title}</p>)}
        </div>
    );
}