import "../../styles/Market Analysis/sectorPerformance.css";

const sectors = [
    {
        name: "Banking",
        change: "+1.4%",
        positive: true,
    },
    {
        name: "Hydropower",
        change: "+3.2%",
        positive: true,
    },
    {
        name: "Insurance",
        change: "-0.8%",
        positive: false,
    },
    {
        name: "Microfinance",
        change: "+0.5%",
        positive: true,
    },
];

function SectorPerformance() {
    return (
        <section className="sector-card">
            <h2>Sector Performance</h2>

            <div className="sector-grid">
                {sectors.map((sector) => (
                    <div className="sector-box" key={sector.name}>
                        <h4>{sector.name}</h4>

                        <p className={sector.positive ? "green" : "red"}>
                            {sector.change}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default SectorPerformance;