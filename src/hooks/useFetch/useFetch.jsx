import { useEffect, useState } from "react";

const useFetch = (url, options) => {
  const [status, setStatus] = useState({
    loading: false,
    data: null,
    error: null
  })

  const fetchNow = (url, options) => {
    setStatus({
        loading: true,
        data: null,
        error: null
    })
    
    fetch(`https://api.github.com/users/${url}`)
    .then(resp => resp.json())
    .then(result => setStatus({
      loading: false,
      error: null,
      data: result
    }))
    .catch(error => setStatus({
      loading: false,
      error,
      data: null
    }))
    
  }

  useEffect(() => {
   if(url) {
      fetchNow(url, options)
   }    
  }, [url])

  return {...status, fetchNow}

}
export default useFetch;
