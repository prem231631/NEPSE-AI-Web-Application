import { useState } from "react";
import "../../styles/Market Analysis/marketTable.css";

const tableData = {
  gainers: [
    { symbol: "SHL", ltp: "542.50", change: "+9.98%", high: "542.50", low: "495.00", volume: "452,100" },
    { symbol: "MKCL", ltp: "1240.00", change: "+8.45%", high: "1255.00", low: "1140.00", volume: "12,542" },
    { symbol: "UPPER", ltp: "342.10", change: "+7.20%", high: "345.00", low: "318.00", volume: "2,145,000" },
    { symbol: "CITY", ltp: "890.00", change: "+6.50%", high: "905.00", low: "830.00", volume: "84,120" },
    { symbol: "RAWA", ltp: "215.40", change: "+5.95%", high: "218.00", low: "202.00", volume: "158,400" }
  ],

  losers: [
    { symbol: "HDL", ltp: "1885.00", change: "-4.92%", high: "1930.00", low: "1875.00", volume: "84,250" },
    { symbol: "NICA", ltp: "548.00", change: "-3.75%", high: "560.00", low: "540.00", volume: "210,000" },
    { symbol: "EBL", ltp: "865.00", change: "-3.12%", high: "878.00", low: "860.00", volume: "56,800" },
    { symbol: "GBIME", ltp: "421.00", change: "-2.86%", high: "430.00", low: "419.00", volume: "103,450" },
    { symbol: "SBL", ltp: "512.00", change: "-2.10%", high: "518.00", low: "505.00", volume: "66,540" }
  ],

  volume: [
    { symbol: "NABIL", ltp: "892.00", change: "+2.84%", high: "900.00", low: "880.00", volume: "4,850,000" },
    { symbol: "NTC", ltp: "1045.00", change: "+5.21%", high: "1055.00", low: "1018.00", volume: "4,120,000" },
    { symbol: "HIDCL", ltp: "235.20", change: "+0.72%", high: "240.00", low: "228.00", volume: "3,900,000" },
    { symbol: "SHIVM", ltp: "612.00", change: "-0.42%", high: "620.00", low: "602.00", volume: "3,540,000" },
    { symbol: "ADBL", ltp: "410.00", change: "+1.08%", high: "418.00", low: "405.00", volume: "3,110,000" }
  ],

  turnover: [
    { symbol: "NTC", ltp: "1045.00", change: "+5.21%", high: "1055.00", low: "1018.00", volume: "Rs. 52 Cr" },
    { symbol: "NABIL", ltp: "892.00", change: "+2.84%", high: "900.00", low: "880.00", volume: "Rs. 48 Cr" },
    { symbol: "SHIVM", ltp: "612.00", change: "-0.42%", high: "620.00", low: "602.00", volume: "Rs. 39 Cr" },
    { symbol: "HIDCL", ltp: "235.20", change: "+0.72%", high: "240.00", low: "228.00", volume: "Rs. 35 Cr" },
    { symbol: "ADBL", ltp: "410.00", change: "+1.08%", high: "418.00", low: "405.00", volume: "Rs. 30 Cr" }
  ]
};

export default function MarketTable() {

  const [activeTab, setActiveTab] = useState("gainers");

  return (
    <div className="market-table">
      <div className="table-tabs">
        <button
          className={activeTab === "gainers" ? "active" : ""}
          onClick={() => setActiveTab("gainers")}
        >
          Top Gainers
        </button>

        <button
          className={activeTab === "losers" ? "active" : ""}
          onClick={() => setActiveTab("losers")}
        >
          Top Losers
        </button>

        <button
          className={activeTab === "volume" ? "active" : ""}
          onClick={() => setActiveTab("volume")}
        >
          Top Volume
        </button>

        <button
          className={activeTab === "turnover" ? "active" : ""}
          onClick={() => setActiveTab("turnover")}
        >
          Top Turnover
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>LTP</th>
            <th>Change (%)</th>
            <th>High</th>
            <th>Low</th>
            <th>Volume</th>
          </tr>
        </thead>

        <tbody>
          {tableData[activeTab].map((stock, index) => (
            <tr key={index}>
              <td>{stock.symbol}</td>
              <td>{stock.ltp}</td>
              <td
                className={
                  stock.change.startsWith("+")
                    ? "positive"
                    : "negative"
                }
              >
                {stock.change}
              </td>

              <td>{stock.high}</td>
              <td>{stock.low}</td>
              <td>{stock.volume}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}