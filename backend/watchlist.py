from fastapi import APIRouter, HTTPException, Depends
from login import get_current_user
from stocks import fake_stock_data

router = APIRouter()

fake_watchlist= {}

@router.get("/watchlist")
def get_watchlist(current_user=Depends(get_current_user)):
    email = current_user.email
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


@router.post("/watchlist/{symbol}")
def add_to_watchlist(symbol: str, current_user=Depends(get_current_user)):
    email = current_user.email
    symbol = symbol.upper()

    if symbol not in fake_stock_data:
        raise HTTPException(status_code=404, detail=f"Stock '{symbol}' not found")

    if email not in fake_watchlist:
        fake_watchlist[email] = []          

    if symbol in fake_watchlist[email]:     
        raise HTTPException(status_code=409, detail=f"'{symbol}' already in watchlist")

    fake_watchlist[email].append(symbol)    

    return {
        "message": f"{symbol} added to watchlist",
        "watchlist": fake_watchlist[email]
    }


@router.delete("/watchlist/{symbol}")
def remove_from_watchlist(symbol: str, current_user=Depends(get_current_user)):
    email = current_user.email
    symbol = symbol.upper()

    if email not in fake_watchlist or symbol not in fake_watchlist[email]:
        raise HTTPException(status_code=404, detail=f"'{symbol}' not in your watchlist")

    fake_watchlist[email].remove(symbol)

    return {
        "message": f"{symbol} removed from watchlist",
        "watchlist": fake_watchlist[email]
    }


#To clear entire watchlist
@router.delete("/watchlist")
def clear_watchlist(current_user=Depends(get_current_user)):
    email = current_user.email
    fake_watchlist[email] = []
    return {"message": "Watchlist cleared"}
