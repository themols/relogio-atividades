export function formatSecondsToTime(seconds: number) {
  const minute = String(Math.floor(seconds / 60)).padStart(2, '0');
  const second = String(Math.floor(seconds % 60)).padStart(2, '0');

  return `${minute}:${second}`;
}
