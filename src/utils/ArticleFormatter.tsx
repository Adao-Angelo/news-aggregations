export default function formatArticleBody(rawBody: string): JSX.Element[] {
  const cleanedText = rawBody.replace(/\s{2,}/g, " ").replace(/�/g, "");

  const paragraphs = cleanedText.split(
    /(?<!\.\.\.)(?<=\.|\?|!)(\s+(?=[A-Z0-9]))/g
  );

  return paragraphs
    .map((paragraph) => paragraph.trim())
    .filter((paragraph) => paragraph.length > 20)
    .map((paragraph, index) => (
      <p key={index} className="mb-4 leading-relaxed text-gray-800">
        {paragraph}
      </p>
    ));
}
