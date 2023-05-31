export default function About() {
  return (
    <main>
      <h1>About</h1>
      <div>{process.env.REACT_APP_BASE_URL}</div>
    </main>
  );
}
