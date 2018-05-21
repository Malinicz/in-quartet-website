export function formatSongLength(timeInSeconds) {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds - minutes * 60;
  const formattedMinutes = minutes >= 10 ? minutes : `0${minutes}`;
  const formattedSeconds = seconds >= 10 ? seconds : `0${seconds}`;
  return `${formattedMinutes}:${formattedSeconds}`;
}
