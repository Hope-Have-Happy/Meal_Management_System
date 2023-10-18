import "./App.css";

function App() {
  return (
    <>
      <div>
        <h2>User Profile</h2>
        <img
          src={`${
            import.meta.env.VITE_BASE_API_URL
          }/uploads/652945f212736e2ddfc23057/profile.jpg`}
          alt='User Profile'
          width={100}
        />
        <div>
          <a href='http://localhost:3000/pages/index.html'>Go to biltu page</a>
        </div>
      </div>
    </>
  );
}

export default App;
