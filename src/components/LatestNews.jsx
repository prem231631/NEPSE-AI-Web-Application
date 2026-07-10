import { useEffect, useState } from "react";
import { FiExternalLink, FiClock } from "react-icons/fi";
import "../styles/latestNews.css";

function LatestNews() {

    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/news")
            .then((response) => response.json())
            .then((data) => {
                setNews(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <section className="news-card">
                <h2>Loading latest news...</h2>
            </section>
        );
    }

    return (
        <section className="news-card">
            <div className="news-header">
                <h2>📰 Latest Market News</h2>
            </div>

            {news.map((item, index) => (
                <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="news-item"
                    key={index}
                >
                    
                    <div>
                        <h4>{item.title}</h4>
                        <div className="news-meta">
                            <span>{item.source}</span>

                            <span>
                                <FiClock />
                                {item.published}
                            </span>
                        </div>
                    </div>

                    <FiExternalLink className="news-link" />
                </a>
            ))}
        </section>
    );
}

export default LatestNews;