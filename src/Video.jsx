// Placeholder components so the code works
function Thumbnail({ video }) {
  return <img src="https://via.placeholder.com/150" alt={video.title} />;
}

function LikeButton({ video }) {
  return <button>Like</button>;
}

// Add 'export default' here
export default function Video({ video }) {
  return (
    <div>
      <Thumbnail video={video} />
      <a href={video.url}>
        <h3>{video.title}</h3>
        <p>{video.description}</p>
      </a>
      <LikeButton video={video} />
    </div>
  );
}