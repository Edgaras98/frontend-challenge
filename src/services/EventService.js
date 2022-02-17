import axios from 'axios'

const apiClient = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL,
    withCredentials: false,
    headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
    }
})

export default {
    getBlogs(){
        return apiClient.get('/posts')
    },
    getBlog(id){
        return apiClient.get('/posts/' + id)
    },
    editBlog(id, form){
        return apiClient.put('/posts/' + id, form)
    },
    postBlog(form){
        return apiClient.post('/posts', form)
    }
}
