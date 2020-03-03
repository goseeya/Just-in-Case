import { useState, useEffect } from 'react';

export default httpClient => {
  const [error, setError] = useState(null);

    // I removed componentWillMount, because this code is executed before jsx is executed
    // for interceptors not to rebuild after wrappg every new elem
    const requestInterceptor = httpClient.interceptors.request.use(req => {
      //clear errors
    setError(null);
      return req;
    });
    const   responseInterceptor = httpClient.interceptors.response.use(res => res, err => {
      setError(err);
    });


  useEffect(() => {
    // when component is not required anymore
    return () => {
      httpClient.interceptors.request.eject(requestInterceptor);
      httpClient.interceptors.response.eject(responseInterceptor);
    };
  }, [requestInterceptor, responseInterceptor]);

  const errorConfirmedHandler = () => {
  setError(null);
  }

  return [error, errorConfirmedHandler];
}
