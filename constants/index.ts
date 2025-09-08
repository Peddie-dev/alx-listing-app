import { Listing } from "@/interfaces";

/**
 * API & App Config
 */
export const API_URL = "https://api.example.com";
export const APP_NAME = "ALX Listing App";

/**
 * UI Text Constants
 */
export const UI_TEXT = {
  bookNow: "Book Now",
  viewDetails: "View Details",
  loading: "Loading...",
  noListings: "No listings available at the moment.",
};

/**
 * Mock Data: Example property listings
 * (Useful for development before connecting to a real API)
 */
export const MOCK_LISTINGS: Listing[] = [
  {
    id: 1,
    title: "Cozy Apartment in Nairobi",
    description: "A modern 2-bedroom apartment close to the city center.",
    imageUrl: "/assets/placeholder1.jpg",
    price: "$50/night",
    location: "Nairobi, Kenya",
  },
  {
    id: 2,
    title: "Beachfront Villa",
    description: "Spacious villa with ocean views and private pool.",
    imageUrl: "/assets/placeholder2.jpg",
    price: "$200/night",
    location: "Diani Beach, Kenya",
  },
  {
    id: 3,
    title: "Rustic Cabin Retreat",
    description: "Escape to nature in this cozy mountain cabin.",
    imageUrl: "/assets/placeholder3.jpg",
    price: "$80/night",
    location: "Mt. Kenya, Kenya",
  },
];
