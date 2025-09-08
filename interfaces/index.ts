// interfaces/index.ts

/**
 * Props for the reusable Card component
 */
export interface CardProps {
  title: string;          // Title of the property/listing
  description: string;    // Short description or summary
  imageUrl: string;       // Path or URL to the property image
  price?: string;         // Optional: price per night or per stay
  location?: string;      // Optional: property location
  onClick?: () => void;   // Optional: handler when card is clicked
}

/**
 * Props for the reusable Button component
 */
export interface ButtonProps {
  label: string;                        // Text displayed on the button
  onClick: () => void;                  // Click handler function
  type?: "button" | "submit" | "reset"; // Button type, defaults to "button"
  disabled?: boolean;                   // Optional: disable state
  variant?: "primary" | "secondary";    // Optional: styling variants
}

/**
 * Example interface for a property listing
 */
export interface Listing {
  id: number;           // Unique identifier
  title: string;        // Listing title
  description: string;  // Listing description
  imageUrl: string;     // Image URL
  price: string;        // Price per night/stay
  location: string;     // Location of the property
}
