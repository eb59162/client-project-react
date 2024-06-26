import axios from 'axios'

const UsePost = () => {
    const Post = async (url, data) => {
        try {
            await axios.post(url, data)
        } catch (error) {
            console.error(error)
        }
    }
    return Post
}

export default UsePost


