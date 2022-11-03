import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

export const login = createAsyncThunk('login', async ({ email, password }) => {
    let payload = null;
    await axios.post(`http://localhost:4000/zoto-investment-planner/api/v1/login`, { email, password }).then((res) => {
        payload = res
    }).catch((err) => {
        payload = err.response
    })
    return payload
})


export const signup = createAsyncThunk('signup', async ({ name, email, password, rePassword }) => {
    let payload = null;
    await axios.post(`http://localhost:4000/zoto-investment-planner/api/v1/signup`, { name, email, password, rePassword }).then((res) => {
        payload = res
    }).catch((err) => {
        payload = err.response
    })
    return payload
})



const initialState = {
    pageAuth: false,
    userDetail: {},
    ResponceStatus: null
}

const slice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reSetStatus: (state, action) => {
            state.ResponceStatus = action.payload
        },
    },
    extraReducers: {
        [login.pending]: (state, action) => {
            state.pageAuth = false
        },
        [login.fulfilled]: (state, action) => {
            if (action.payload.status === 200) {
                state.pageAuth = true
                state.ResponceStatus = action.payload.data.status
            } else {
                state.pageAuth = false
                state.ResponceStatus = action.payload.data.message
            }
        },



        [signup.pending]: (state, action) => {
            state.pageAuth = false
        },
        [signup.fulfilled]: (state, action) => {
            if (action.payload.status === 200) {
                state.pageAuth = true
                state.ResponceStatus = action.payload.data.status
            } else {
                state.pageAuth = false
                state.ResponceStatus = action.payload.data.message
            }
        }

    }
})

export const { reSetStatus } = slice.actions
export default slice.reducer