import axios from 'axios';
import { setProfileInfo, setToken } from './slice';

const API_URL = `https://coders-network-api.herokuapp.com`;

// This parameterized Redux thunk is dispatched from the submit button on the login page with email and password
// It makes a request to the /login endpoint and saves the response (the token) to the Redux store
// Then it continues on to make a request to the /me endpoint, with this token and saves the profile info response to the Redux store
// This profile info is later selected from the store by components to show "Hello <user's name>!"
export const loginThunk = (email, password) => async (dispatch) => {
    try {
        const loginResponse = await axios.post(`${API_URL}/login`, {
            email: email,
            password: password,
        })
        console.log(loginResponse.data)
        const token = loginResponse.data.jwt;
        dispatch(setToken(token));
        localStorage.setItem('token', token);
        
        const meResponse = await axios.get(`${API_URL}/me`, { 
            headers: { Authorization: `Bearer ${token}` } }
        )
        console.log(meResponse.data)
        dispatch(setProfileInfo(meResponse.data))
    } catch (error) {
        console.log('error from loginThunk: ', error)
    }
}

// Very similar to the thunk above, but this one is:
// A Redux thunk that checks if the token exists in local browser storage
// If it does exist, it will automatically make the /me API request with the token
// If it doesn't exist, nothing else happens
// Once it has the profile info, it saves it to the Redux store, so it can be selected and used in components
// This thunk is dispatched from App.js the first time it renders
export const loginFromExistingTokenThunk = async (dispatch) => {
    try {
        const token = localStorage.getItem("token");

        // Once a function returns, nothing else in the function gets run. It stops after the return
        if (!token) return; 

        // Set the token to Redux global state so it can be reused by other components in the future
        dispatch(setToken(token));

        const meResponse = await axios.get(`${API_URL}/me`, { 
            headers: { Authorization: `Bearer ${token}` } }
        )
        console.log(meResponse.data)
        dispatch(setProfileInfo(meResponse.data))
    } catch (error) {
        console.log('error from loginThunk: ', error)
    }
}