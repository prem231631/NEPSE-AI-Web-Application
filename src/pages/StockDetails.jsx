import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DashboardNavbar from "../components/DashboardNavbar";
import Sidebar from "../components/Sidebar";
import "../styles/stockDetails.css";

function StockDetails() {
    const { symbol } = useParams();

    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [stock, setStock] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStock = async () => {
            try {
                const token = localStorage.getItem("token");

                const response = await fetch(
                    `http://127.0.0.1:8001/stocks/${symbol}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );

                const data = await response.json();

                setStock(data);
            } catch (error) {
                console.log(error);
            }

            setLoading(false);
        };

        fetchStock();
    }, [symbol]);

    return (
        <div className="dashboard-layout">
            <Sidebar sidebarOpen={sidebarOpen} />

            <div className={`dashboard-content ${sidebarOpen ? "sidebar-open" : ""}`}>
                <DashboardNavbar setSidebarOpen={setSidebarOpen} />

                <div className="stock-details-page">

                    {loading ? (
                        <h2>Loading...</h2>
                    ) : !stock?.name ? (
                        <h2>Stock not found</h2>
                    ) : (
                        <>
                            <div className="stock-header">

                                <h1>{stock.symbol}</h1>

                                <h2>{stock.name}</h2>

                                <p>
                                    Sector :
                                    <strong> {stock.sector}</strong>
                                </p>

                                <h3>
                                    Latest Price :
                                    Rs. {stock.latest_price}
                                </h3>

                            </div>

                            <div className="history-card">

                                <h2>Price History</h2>

                                <table>

                                    <thead>

                                        <tr>
                                            <th>Date</th>
                                            <th>Open</th>
                                            <th>Close</th>
                                            <th>High</th>
                                            <th>Low</th>
                                            <th>Volume</th>
                                        </tr>

                                    </thead>

                                    <tbody>

                                        {stock.history.map((day, index) => (
                                            <tr key={index}>
                                                <td>{day.date}</td>
                                                <td>{day.open}</td>
                                                <td>{day.close}</td>
                                                <td>{day.high}</td>
                                                <td>{day.low}</td>
                                                <td>{day.volume}</td>
                                            </tr>
                                        ))}

                                    </tbody>

                                </table>

                            </div>

                        </>
                    )}

                </div>
            </div>
        </div>
    );
}

export default StockDetails;