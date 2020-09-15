import { ADD_REQUEST } from "./types"

export function addRequest({method, URL, body, path}) {
  return function (dispatch) {
    const XHR = new XMLHttpRequest();
    const foolURL = `${URL}/${path}`;
    XHR.open(method,foolURL, [false ]);
    XHR.send(body);
    XHR.onload = () => {
      dispatch({
        type: ADD_REQUEST,
        payload: {
          id: Date.now().toString(),
          status: XHR.status,
          URL: XHR.responseURL,
          method,
        }
      })
    };   
  }
}