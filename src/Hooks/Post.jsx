import axios from 'axios'

const UsePost = () => {
    const Post = async (url, data) => {
        try {
            // alert("post- try-succeses")
            await axios.post(url, data)
            // alert("post-succeses")
        } catch (error) {
            console.error(error)
            // alert("Post-error")
        }
    }
    return Post
}

export default UsePost


