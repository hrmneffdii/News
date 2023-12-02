import './App.css'
import Navbar from '../component/Navbar'
import Container from '../component/Container'
import Loading from '../component/Loading'
import Error from '../component/Error'
import NewsList from '../component/NewsList'

import { getNews } from '../services/getNews'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function App() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const {id} = useParams()
  const DEFAULT_ID = 'microsoft'

  useEffect(()=>{
    const fetchTechNews = async () => {
      setLoading(true)

      const res = await getNews({
        searchQuery : id || DEFAULT_ID
      })

      if(!res){
        setLoading(false)
        setError(true)

      return null
      }

      setLoading(false)
      setArticles(res.articles)
    }
    
    fetchTechNews()

  },[id])
  
  return (
    <>
      <Navbar />
      <Container >
        {loading && (<Loading />)}
        {error && (<Error />) }
        {(!loading && articles.length > 0) && 
          (
            <NewsList articles={articles}/>
          )
        }

     </Container>
    </>
  )
}

export default App
