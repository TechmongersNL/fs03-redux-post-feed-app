// You might also see this file called actions.js
// Now in our thunks.js file, we can do special things like make async axios requests
// Thunks are special kinds of actions, so we will still dispatch these from our components

import axios from 'axios';
import {setPosts} from './slice';

const API_URL = `https://coders-network-api.herokuapp.com`;

export const fetchPosts = async (dispatch, getState) => {
    // You don't have to use getState if you don't need to, but it is available

    const response = await axios.get(`${API_URL}/posts`);
    const posts = response.data.rows;
    dispatch(setPosts(posts))
}

// Similar to how we can parameterize selectors, we can also parameterize thunks
export const fetchPostsById = (id) => async (dispatch, getState) => {
    // TO-DO
}