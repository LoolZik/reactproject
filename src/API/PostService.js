import axios from "axios"

export default class PostService {

    static async getByPosts(limit = 10, page = 1) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _limit: limit,
                _page: page
            }
        })

        return response
    }

    static async getByPost(id) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id)

        return response
    }

    static async getByComm(id) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)

        return response
    }
}