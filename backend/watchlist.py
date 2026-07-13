from fastapi import APIRouter, HTTPException, Depends
from login import get_current_user
from stocks import fake_stock_data

router = APIRouter()

fake_watchlist= {}

@router.get("/watchlist")
def get_watchlist(current_user=Depends(get_current_user)):
    email = current_user["email"]
    symbols = fake_watchlist.get(email, [])
    
    if not symbols:
        return {"watchlist": []}
    
    return {
        "watchlist": [
            {
                "symbol": symbol,
                "name": fake_stock_data[symbol]["name"],
                "sector": fake_stock_data[symbol]["sector"],
                "latest_price": fake_stock_data[symbol]["history"][-1]["close"]
            }
            for symbol in symbols
            if symbol in fake_stock_data
        ]
    }


#@router.post("/watchlist/{symbol}")


#@router.delete("/watchlist/{symbol}")

#@router.delete("/watchlist")


