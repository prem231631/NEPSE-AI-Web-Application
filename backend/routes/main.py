from fastapi import APIRouter
import feedparser

router = APIRouter()

RSS_URL = "https://news.google.com/rss/search?q=NEPSE"

@router.get("/news")
def get_news():

    feed = feedparser.parse(RSS_URL)

    articles = []

    for item in feed.entries[:10]:

        articles.append({
            "title": item.title,
            "link": item.link,
            "published": item.published,
            "source": item.source.title if hasattr(item, "source") else "Google News"
        })

    return articles