from fastapi import APIRouter
import feedparser

router = APIRouter()

RSS_URL = "https://news.google.com/rss/search?q=NEPSE"


@router.get("/news")
def get_news():

    feed = feedparser.parse(RSS_URL)

    news = []

    for article in feed.entries[:10]:

        news.append(
            {
                "title": article.title,
                "link": article.link,
                "published": article.published,
                "source": article.source.title if hasattr(article, "source") else "Google News",
            }
        )

    return news