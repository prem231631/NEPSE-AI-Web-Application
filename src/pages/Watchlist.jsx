import { useEffect, useState } from "react";
import DashboardNavbar from "../components/DashboardNavbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import "../styles/watchlist.css";

function Watchlist() {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [watchlist, setWatchlist] = useState([]);
    const [loading, setLoading] = useState(true);

    const token = localStorage.getItem("token");

    const loadWatchlist = async () => {
        try {
            const response = await fetch(
                "http://127.0.0.1:8001/watchlist",
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const data = await response.json();

            if (response.ok) {
                setWatchlist(data.watchlist);
            }
        } catch (err) {
            console.log(err);
        }

        setLoading(false);
    };

    useEffect(() => {
        loadWatchlist();
    }, []);

    const removeStock = async (symbol) => {
        const confirmDelete = window.confirm(
            `Remove ${symbol} from watchlist?`
        );

        if (!confirmDelete) return;

        await fetch(
            `http://127.0.0.1:8001/watchlist/${symbol}`,
            {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        loadWatchlist();
    };

    return (
        <div className="dashboard-layout">
            <Sidebar sidebarOpen={sidebarOpen} />

            <div className={`dashboard-content ${sidebarOpen ? "sidebar-open" : ""}`}>
                <DashboardNavbar
                    setSidebarOpen={setSidebarOpen}
                />

                <div className="watchlist-page">
                    <h1>My Watchlist</h1>

                    {loading ? (

                        <h3>Loading...</h3>

                    ) : watchlist.length === 0 ? (
                        <div className="empty-watchlist">

                            <h2>No stocks added</h2>

                            <p>Your watchlist is empty.</p>
                        </div>
                    ) : (
                        <table className="watchlist-table">
                            <thead>
                                <tr>
                                    <th>Symbol</th>
                                    <th>Company</th>
                                    <th>Sector</th>
                                    <th>Latest Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {watchlist.map((stock) => (
                                    <tr key={stock.symbol}>
                                        <td>{stock.symbol}</td>

                                        <td>{stock.name}</td>

                                        <td>{stock.sector}</td>

                                        <td>Rs. {stock.latest_price}</td>

                                        <td>
                                            <button
                                                className="remove-btn"
                                                onClick={() =>
                                                    removeStock(stock.symbol)
                                                }
                                            >
                                                Remove
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>

                <Footer />
            </div>
        </div>
    );
}

export default Watchlist;