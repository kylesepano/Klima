export const saveFavorites = (
    favorites
) => {
    localStorage.setItem(
        "favorites",
        JSON.stringify(favorites)
    );
};

export const getFavorites = () => {
    return JSON.parse(
        localStorage.getItem(
            "favorites"
        ) || "[]"
    );
};

export const saveRecentSearches = (
    searches
) => {
    localStorage.setItem(
        "recentSearches",
        JSON.stringify(searches)
    );
};

export const getRecentSearches = () => {
    return JSON.parse(
        localStorage.getItem(
            "recentSearches"
        ) || "[]"
    );
};

export const addRecentSearch = (
    city
) => {
    const current =
        JSON.parse(
            localStorage.getItem(
                "recentSearches"
            ) || "[]"
        );

    const filtered =
        current.filter(
            (item) =>
                item.city !== city.city
        );

    const updated = [
        city,
        ...filtered,
    ].slice(0, 5);

    localStorage.setItem(
        "recentSearches",
        JSON.stringify(updated)
    );

    return updated;
};

export function getSavedLocations() {
    return JSON.parse(
        localStorage.getItem("savedLocations") || "[]"
    );
}

export function saveLocation(location) {

    const current =
        getSavedLocations();

    const exists =
        current.some(
            item =>
                item.lat === location.lat &&
                item.lon === location.lon
        );

    if (exists) return current;

    const updated = [
        location,
        ...current,
    ].slice(0, 10);

    localStorage.setItem(
        "savedLocations",
        JSON.stringify(updated)
    );

    return updated;
}