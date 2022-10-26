export default function App() {
    return (
        <div className="app">
            <h1>Rendering Lists</h1>
        </div>
    );
}
// react
const rootNode = document.getElementById('react_root_node');
const root = ReactDOM.createRoot(rootNode);
root.render(<App />);