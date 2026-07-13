from fastapi import APIRouter, HTTPException, Depends
from login import get_current_user

router = APIRouter()

fake_stock_data = {
    "NABIL": {
        "name": "Nabil Bank Limited",
        "sector": "Banking",
        "history": [
            {"date": "2024-01-01", "open": 1180, "close": 1200, "high": 1210, "low": 1175, "volume": 5200},
            {"date": "2024-01-02", "open": 1200, "close": 1225, "high": 1230, "low": 1195, "volume": 4800},
            {"date": "2024-01-03", "open": 1225, "close": 1210, "high": 1240, "low": 1205, "volume": 5100},
        ]
    },
    "NICA": {
        "name": "NIC Asia Bank",
        "sector": "Banking",
        "history": [
            {"date": "2024-01-01", "open": 840, "close": 850, "high": 860, "low": 835, "volume": 3100},
            {"date": "2024-01-02", "open": 850, "close": 845, "high": 855, "low": 840, "volume": 2900},
            {"date": "2024-01-03", "open": 845, "close": 860, "high": 865, "low": 842, "volume": 3300},
        ]
    },
    "SCB": {
        "name": "Standard Chartered Bank Nepal",
        "sector": "Banking",
        "history": [
            {"date": "2024-01-01", "open": 4800, "close": 4850, "high": 4900, "low": 4790, "volume": 1200},
            {"date": "2024-01-02", "open": 4850, "close": 4900, "high": 4920, "low": 4840, "volume": 1100},
            {"date": "2024-01-03", "open": 4900, "close": 4880, "high": 4930, "low": 4870, "volume": 1300},
        ]
    },
    "MBL": {
        "name": "Machhapuchchhre Bank Limited",
        "sector": "Banking",
        "history": [
            {"date": "2024-01-01", "open": 320, "close": 330, "high": 335, "low": 318, "volume": 6100},
            {"date": "2024-01-02", "open": 330, "close": 325, "high": 332, "low": 320, "volume": 5800},
            {"date": "2024-01-03", "open": 325, "close": 340, "high": 345, "low": 322, "volume": 6300},
        ]
    },
    "SANIMA": {
        "name": "Sanima Bank Limited",
        "sector": "Banking",
        "history": [
            {"date": "2024-01-01", "open": 410, "close": 420, "high": 425, "low": 408, "volume": 4100},
            {"date": "2024-01-02", "open": 420, "close": 415, "high": 422, "low": 410, "volume": 3900},
            {"date": "2024-01-03", "open": 415, "close": 430, "high": 435, "low": 412, "volume": 4300},
        ]
    },
    "HIDCL": {
        "name": "Hydroelectricity Investment and Development Company",
        "sector": "Hydropower",
        "history": [
            {"date": "2024-01-01", "open": 280, "close": 290, "high": 295, "low": 278, "volume": 7100},
            {"date": "2024-01-02", "open": 290, "close": 285, "high": 292, "low": 282, "volume": 6800},
            {"date": "2024-01-03", "open": 285, "close": 295, "high": 298, "low": 283, "volume": 7300},
        ]
    }
}


@router.get("/stocks")
def get_all_stocks(current_user=Depends(get_current_user)):
    return {
        "stocks": [
            {
                "symbol": symbol,
                "name": data["name"],
                "sector": data["sector"],
                "latest_price": data["history"][-1]["close"]
            }
            for symbol, data in fake_stock_data.items()
        ]
    }

@router.get("/stocks/{symbol}")
def get_stock(symbol: str, current_user=Depends(get_current_user)):
    data = fake_stock_data.get(symbol.upper())
    if not data:
        raise HTTPException(status_code=404, detail=f"Stock '{symbol}' not found")
    return {
        "symbol": symbol.upper(),
        "name": data["name"],
        "sector": data["sector"],
        "latest_price": data["history"][-1]["close"],
        "history": data["history"]
    }


@router.get("/stocks/{symbol}/price")
def get_stock_price(symbol: str, current_user=Depends(get_current_user)):
    data = fake_stock_data.get(symbol.upper())
    if not data:
        raise HTTPException(status_code=404, detail=f"Stock '{symbol}' not found")
    latest = data["history"][-1]
    return {
        "symbol": symbol.upper(),
        "price": latest["close"],
        "date": latest["date"],
        "note": "Placeholder data — real scraper not connected yet"
    }

@router.get("/stocks/{symbol}/history")
def get_stock_history(symbol: str, current_user=Depends(get_current_user)):
    data = fake_stock_data.get(symbol.upper())
    if not data:
        raise HTTPException(status_code=404, detail=f"Stock '{symbol}' not found")
    return {
        "symbol": symbol.upper(),
        "history": data["history"]
    }
