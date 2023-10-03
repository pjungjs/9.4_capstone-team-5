export default function convertToSlug(text) {
  // Convert to lowercase
  text = text.toLowerCase();

  // Remove non-alphanumeric characters (except hyphens and spaces)
  text = text.replace(/[^a-z0-9\s-]/g, '');

  // Replace spaces with hyphens
  text = text.replace(/\s+/g, '-');

  // Replace consecutive hyphens with a single hyphen and remove leading/trailing hyphens
  text = text.replace(/-+/g, '-').replace(/^-+|-+$/g, '');

  return text;
}
