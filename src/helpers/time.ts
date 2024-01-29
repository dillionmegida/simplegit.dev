export function addTimes(times) {
  // Initialize total hours and total minutes
  let totalHours = 0;
  let totalMinutes = 0;

  // Iterate through each time in the array
  times.forEach((time) => {
      // Parse the input time into hours and minutes
      const [hours, minutes] = time.split(':').map(Number);

      // Add to the total hours and total minutes
      totalHours += hours;
      totalMinutes += minutes;
  });

  // Adjust total hours and minutes if necessary
  totalHours += Math.floor(totalMinutes / 60);
  totalMinutes = totalMinutes % 60;

  // Format the result as "hh:mm"
  const result = `${String(totalHours).padStart(2, '0')}m:${String(totalMinutes).padStart(2, '0')}s`;

  return result;
}