import './App.css';
import PostDelete from './API/PostDelete';
import PostUpload from './API/PostUpload';

function App() {
  return (
    <div className="App">
        <PostUpload></PostUpload>
        <PostDelete></PostDelete>
    </div>
  );
}

export default App;