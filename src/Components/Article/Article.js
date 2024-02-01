import { Link } from "react-router-dom";
import "./Article.css"

function getID(articleTitle) {
    return encodeURIComponent(articleTitle)
}

export default function Article({ article }) {
    const id = getID(article.title);

    return (
        <div className="article">
            <Link to={`/article/${id}`} style={{ textDecoration: 'none', color: 'red'}}><h2>{article.title}</h2></Link>
            {article.urlToImage ? <img className="article-img"src={article.urlToImage} alt={article.title}></img> : 
            <img className="img-not-found"src={"https://media1.tenor.com/m/lx2WSGRk8bcAAAAC/pulp-fiction-john-travolta.gif"} alt={article.title}></img>}
            {article.description ? <p>{article.description}</p> : <p>Where You At?</p>}
            <h3>{article.publishedAt}</h3>
        </div>
    )
}
