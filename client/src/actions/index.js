import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');
    dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitProcess = (values, history) => async dispatch => {
    const res = await axios.post('/api/submit_process', values);
    // history.push('/surveys');
    dispatch({ type: FETCH_USER, payload: res.data });
};
