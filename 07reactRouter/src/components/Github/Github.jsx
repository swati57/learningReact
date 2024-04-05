import React, {useState, useEffect} from 'react'
import { useLoaderData } from 'react-router-dom';
function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/swati57')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data);
    //     })
    // }, [])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
    Github followers: {data.followers}
    <img src={data.avatar_url} alt="Github pic"/>
    </div>
  )
}

export default Github

export const githubInfoLoader = async() => {
    const response = fetch('https://api.github.com/users/swati57')
    return (await response).json()
};