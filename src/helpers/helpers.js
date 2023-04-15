import { differenceInCalendarDays, differenceInDays, parseISO } from 'date-fns';

// Delay function to create better UI experience
export const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Function to return initials of a given name
export function getInitials(name) {
  // Split the name into words
  const words = name.split(' ');

  // Use the first letter of each word to create the initials
  const initials = words.map((word) => word[0]).join('');

  return initials.toUpperCase();
}

// Function to return a file extension
export function getFileExtension(fileName) {
  if (fileName) {
    return fileName
      .slice(((fileName.lastIndexOf('.') - 1) >>> 0) + 2)
      .toLowerCase();
  }
}

// Function to return highest streak of an array of dates
export function getStreakRecord(dates) {
  const uniqueDates = [...new Set(dates)];
  if (uniqueDates.length === 0) return 0;

  let currentStreak = 1;
  let longestStreak = 1;

  for (let i = 1; i < uniqueDates.length; i++) {
    const diff = differenceInDays(
      parseISO(uniqueDates[i]),
      parseISO(uniqueDates[i - 1])
    );
    if (diff === 1) {
      currentStreak++;
      if (currentStreak > longestStreak) {
        longestStreak = currentStreak;
      }
    } else {
      currentStreak = 1;
    }
  }

  return longestStreak;
}

// Function to return current streak of an array of dates
export function getCurrentStreak(dates) {
  const uniqueDates = [...new Set(dates)];
  const today = new Date();
  let streak = 0;

  for (let i = uniqueDates.length - 1; i >= 0; i--) {
    const daysDiff = differenceInCalendarDays(today, parseISO(uniqueDates[i]));

    if (daysDiff === 0) {
      streak++;
    } else if (daysDiff === 1) {
      streak++;
      today.setDate(today.getDate() - 1);
    } else {
      break;
    }
  }

  return streak;
}
