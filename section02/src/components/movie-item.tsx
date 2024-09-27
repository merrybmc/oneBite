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
  tabState,
}) {
  return (
    <div>
      <img
        src={posterImgUrl}
        style={
          tabState === 'recommend'
            ? { width: '250px', height: '400px' }
            : { width: '140px', height: '220px' }
        }
      />
    </div>
  );
}
