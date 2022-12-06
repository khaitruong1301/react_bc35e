import React from 'react'
import {useNavigate, useParams} from 'react-router-dom'
const useRoute = () => {

    const params = useParams()
    const navigate = useNavigate();


  return {
    params,navigate
  };
}

export default useRoute