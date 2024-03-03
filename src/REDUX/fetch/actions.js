import axios from "axios"
import { GET_FAILED, GET_REQUEST, GET_SUCCESS } from "./constanse"


export const fetchData = (url) => async (dispatch) => {
    try {
        dispatch({ type: GET_REQUEST })

        const res = await axios.get(url)

        dispatch({
            type: GET_SUCCESS, payload: res.data
        });

    } catch (error) {
        dispatch({
            type: GET_FAILED,
            payload: error.message
        })
    }
}