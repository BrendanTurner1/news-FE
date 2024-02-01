import { useEffect, useMemo, useState } from "react";
import Article from "../Article/Article";
import newsCall from "../../APICalls/APICalls";

export default function Home() {
    const [articles, setArticles] = useState([]);
    const [filter, setFilter] = useState("");



    const handleDropdownChange = (event) => {
        setFilter(event.target.value);
    };

    useEffect(() => {
      newsCall("https://newsapi.org/v2/top-headlines?country=us&apiKey=1e2a9bccc4334729a3c2bfe2cd11604b")
      .then(data => {
        setArticles(data.articles);
      })
      .catch(error => {
        console.log(error.message)
      })
  
    }, [])

    const source = useMemo(() => {
        const Sources = new Set()
        articles.map((article) => Sources.add(article.source.name))
        const uniqueArray = [...Sources]
        console.log(uniqueArray)
        return uniqueArray
    }, [articles]);

    return (
        <div>
            <h1>Top Articles</h1>
            <div className='source-dropdown'>
                <label htmlFor="source-select">Select a Source: </label>
                <select className='source-select' onChange={handleDropdownChange} defaultValue="">
                    <option value="" >All Sources</option>
                    {source.map((source, index) => {
                        if(source==="[Removed]"){
                            return
                        }
                        return(<option id={source} key={index} value={source}>{source}</option>)    
                    })}
                </select>
            </div>
            <ul className="article-display">
                {articles.filter((article) =>{
                    if(filter===""){
                        return true;
                    }
                    return article.source.name===filter;
                })
                .filter((article) => {
                    return article.title!=="[Removed]"
                })
                .map((article) => {
                    return (
                        <Article article={article} key={article.url} />
                    )
                }
                )}
            </ul>
        </div>
    )
}