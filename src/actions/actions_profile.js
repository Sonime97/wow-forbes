export const FORBES_FETCHED = 'FORBES_FETCHED';
export function fetchForbes() {
    return (dispatch) => { 
    return fetch("https://forbes400.herokuapp.com/api/forbes400?limit=10",{method: 'GET'})
    .then(response => response.json())
    .then(json => { 
        console.log(json)
        dispatch(loadForbes(json))
    })
    .catch(error => console.log(error));
}
 }

 
 

export function loadForbes(results) {
    return {
        type: FORBES_FETCHED,
        payload: results
    }
} 