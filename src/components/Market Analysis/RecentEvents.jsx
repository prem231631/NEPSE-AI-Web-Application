import { useEffect, useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import "../../styles/Market Analysis/recentEvents.css";

function MarketEvents() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/news")
            .then((res) => res.json())
            .then((data) => setNews(data.slice(0, 3)))
            .catch((err) => console.error(err));
    }, []);

    return (
        <section className="market-events">

            <div className="events-header">
                <h2>Recent News & Events</h2>
            </div>

            <div className="events-list">

                {news.map((item, index) => (

                    <a
                        key={index}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="event-card"
                    >
                        <span className="event-category">
                            MARKET
                        </span>

                        <h4>{item.title}</h4>

                        <p>{item.description}</p>

                        <div className="event-footer">
                            <span>{item.published}</span>

                            <FiExternalLink />
                        </div>

                    </a>

                ))}

            </div>

        </section>
    );
}

export default MarketEvents;