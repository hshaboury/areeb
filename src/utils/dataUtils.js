// Utility functions for data handling

/**
 * Normalizes track name for consistent lookup
 * Converts "Data Science" -> "datascience", "Front End" -> "frontend", etc.
 */
export const normalizeTrackKey = (track) => {
  if (!track) return 'frontend'; // Default fallback
  return track.toLowerCase().replace(/\s+/g, '');
};
