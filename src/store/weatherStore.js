import { create } from "zustand";

import {
  getRecentSearches,
} from "../utils/storage";

export const useWeatherStore = create((set) => ({
  location: null,

  weather: null,

  forecast: null,

  aqi: null,

  loading: false,


  favorites: [],

  recentSearches: [],

  searchResults: [],

  sidebarCollapsed: false,

  setSidebarCollapsed: () =>
    set((state) => ({
      sidebarCollapsed:
        !state.sidebarCollapsed,
    })),

  savedLocations: [],

  setSavedLocations: (savedLocations) =>
    set({ savedLocations }),

  setLocation: (location) =>
    set({ location }),

  setWeather: (weather) =>
    set({ weather }),

  setForecast: (forecast) =>
    set({ forecast }),

  setAQI: (aqi) =>
    set({ aqi }),

  setLoading: (loading) =>
    set({ loading }),


  setFavorites: (favorites) =>
    set({ favorites }),

  setRecentSearches: (
    recentSearches
  ) =>
    set({
      recentSearches,
    }),

  setSearchResults: (
    searchResults
  ) =>
    set({
      searchResults,
    }),

  activeSection: "dashboard",

  setActiveSection: (section) =>
    set({
      activeSection: section,
    }),

  searchQuery: "",

  setSearchQuery: (
    searchQuery
  ) =>
    set({
      searchQuery,
    }),

  recentSearches:
    getRecentSearches(),

  setRecentSearches:
    (searches) =>
      set({
        recentSearches: searches,
      }),
}));