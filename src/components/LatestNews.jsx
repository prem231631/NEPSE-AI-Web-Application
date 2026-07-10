import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/latestNews.css";

function LatestNews({ full = false }) {

    const [news, setNews] = useState([]);

    useEffect(() => {

        fetch("http://127.0.0.1:8000/news")
            .then(res => res.json())
            .then(data => setNews(data));

    }, []);

    const displayedNews = full ? news : news.slice(0,2);

    return (
        <div className="latest-news">
            <div className="news-header">
                <h2>Latest NEPSE News</h2>

                {!full && (
                    <Link to="/news" className="show-more">
                        Show More →
                    </Link>
                )}
            </div>

            {displayedNews.map((item,index)=>(
                <div className="news-card" key={index}>
                    <p className="news-time">
                        {item.time}
                    </p>

                    <h3>{item.title}</h3>

                    <p>{item.summary}</p>
                </div>
            ))}
        </div>
    );
}

export default LatestNews;