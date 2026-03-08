import './App.css';
// 1. Import the Video component
import Video from './Video'; 

export default function App() {
  // 2. Create some sample data for the video prop
  const myVideo = {
    title: "Learning React",
    description: "A great tutorial for beginners.",
    url: "https://react.dev"
  };

  return (
    <main>
      <h1>React ⚛️ + Vite ⚡ + Replit!</h1>

      {/* 3. Add the Video component here and pass the data */}
      <Video video={myVideo} />

    </main>
  );
}