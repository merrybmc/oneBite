export default function MovieItem({
  id,
  title,
  releaseDate,
  company,
  genres,
  subTitle,
  description,
  runtime,
  posterImgUrl,
}) {
  return (
    <div>
      <img src={posterImgUrl} />
    </div>
  );
}
