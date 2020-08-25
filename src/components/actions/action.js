import axios from "axios";

export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

export const POST_DATA_START = "POST_SMURF_START";
export const POST_DATA_SUCCESS = "POST_STRAIN_SUCCESS";
export const POST_DATA_FAILURE = "POST_STRAIN_FAILURE";

export const DELETE_STRAIN= "DELETE_STRAIN";

export const getStrains= () => dispatch => {
    dispatch({ type: FETCH_DATA_START });

    axios
    .get('')
    .then(res => {
        dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data });
    })
    .catch(err => {
        console.log(err.response);
        dispatch({
            type: FETCH_DATA_FAILURE,
            payload: `${err.response.status} ${err.response.data}`
        });
    });
};

export const addStrain= newStrain => dispatch => {

    dispatch({ type: POST_DATA_START });
    axios
    .post('', newStrain)
    .then(res => {
        console.log("Post", res);
        dispatch({ type: POST_DATA_SUCCESS, payload: res.data });
    })
        .catch(err => {
        console.log(err);
        dispatch({ type: POST_DATA_FAILURE, payload: err });
    });
};

export const deleteSmurf = id => dispatch =>{
    dispatch( { type: DELETE_STRAIN, id: id })

    axios.delete(`http://localhost:3333/strains/${id}`)
    .then(res=>{
        dispatch({ type:DELETE_STRAIN, id:id })
    })
        .catch(err=>{
        console.log(err)
    })
}