export const formatSingaporeTime = (
    dateString,
    options = {}
) => {
    return new Date(dateString).toLocaleString(
        "en-SG",
        {
            timeZone: "Asia/Singapore",
            ...options,
        }
    );
};

export const formatHour = (
    dateString
) => {
    return new Date(dateString).toLocaleTimeString(
        "en-SG",
        {
            timeZone: "Asia/Singapore",
            hour: "numeric",
            hour12: true,
        }
    );
};

export const formatDay = (
    dateString
) => {
    return new Date(
        `${dateString}T12:00:00`
    ).toLocaleDateString(
        "en-SG",
        {
            weekday: "long",
        }
    );
};