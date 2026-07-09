export function getMarketStatus() {

    const now = new Date();

    const nepalTime = new Date(
        now.toLocaleString("en-US", {
            timeZone: "Asia/Kathmandu",
        })
    );

    const day = nepalTime.getDay();

    const hour = nepalTime.getHours();
    const minute = nepalTime.getMinutes();

    const currentMinutes = hour * 60 + minute;

    const marketOpenTime = 11 * 60;
    const marketCloseTime = 15 * 60;

    const isWeekday = day >= 1 && day <= 5;

    let marketOpen = false;
    let marketStatus = "";
    let marketMessage = "";

    if (
        isWeekday &&
        currentMinutes >= marketOpenTime &&
        currentMinutes < marketCloseTime
    ) {

        marketOpen = true;
        marketStatus = "Open";

        const remaining = marketCloseTime - currentMinutes;

        marketMessage = `Closes in ${Math.floor(remaining / 60)}h ${remaining % 60}m`;

    } else {

        marketStatus = "Closed";

        let nextOpen = new Date(nepalTime);

        if (isWeekday && currentMinutes < marketOpenTime) {

            nextOpen.setHours(11, 0, 0, 0);

        } else {

            nextOpen.setDate(nextOpen.getDate() + 1);

            while (
                nextOpen.getDay() === 0 ||
                nextOpen.getDay() === 6
            ) {
                nextOpen.setDate(nextOpen.getDate() + 1);
            }

            nextOpen.setHours(11, 0, 0, 0);
        }

        const diff = nextOpen - nepalTime;

        const totalMinutes = Math.floor(diff / 60000);

        marketMessage =
            `Opens in ${Math.floor(totalMinutes / 60)}h ${totalMinutes % 60}m`;
    }

    return {
        marketOpen,
        marketStatus,
        marketMessage
    };

}