import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import newsCall from "../../APICalls/APICalls";

export default function FullArticle() {
    const [article, setArticle] = useState(null);
    const [noResults, setNoResults] = useState(false)
    const query = useParams().id;
    
    useEffect(() => {
        newsCall(`https://newsapi.org/v2/top-headlines?country=us&q=${query}&apiKey=1e2a9bccc4334729a3c2bfe2cd11604b`)
        .then(data => {
          if(data.totalResults===0){
            setNoResults(true);
          }
          setArticle(data.articles[0]??null);
        })
        .catch(error => {
          console.log(error.message);
        })
    
      }, [query])
      if(noResults){
        return <div>Results Not Found</div>
      }
      if(article===null) {
        return <div>Loading...</div>
      }
    return (
        <div>
            <h1>{article.title}</h1>
            <h2>By: {article.author}</h2>
            <h2>{article.publishedAt}</h2>
            {article.urlToImage ? <img src={article.urlToImage} alt={article.title}></img> : <div>No Image Found</div>}
            <p>{article.content}</p>
        </div>
    )
}