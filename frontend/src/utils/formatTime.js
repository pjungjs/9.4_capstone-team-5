export default function convertToSlug(time) {
  return new Date(time).toLocaleString('en-US', {
    dateStyle: 'short',
    timeStyle: 'short',
  });
}
