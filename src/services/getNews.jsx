import axios from 'axios'

const NEWS_API_BASE_URL = import.meta.env.VITE_REACT_APP_NEWS_API_BASE_URL
const NEWS_API_KEY = import.meta.env.VITE_REACT_APP_API_KEY

export const getNews = async ({searchQuery = 'Technology'}) => {
    try {
        const path = '/everything'
        const query = `?q=${searchQuery}&apiKey=${NEWS_API_KEY}`
        const endPointURL = `${NEWS_API_BASE_URL}${path}${query}`

        const res = await axios.get(endPointURL)
        
        if(res.status === 200){
            const additionalObj = {
                category : searchQuery
            }
            const resData = {
                ...additionalObj,
                ...res.data
            }
            return resData
        }
    } catch (error) {
        console.error('Ups error')
    }
}

