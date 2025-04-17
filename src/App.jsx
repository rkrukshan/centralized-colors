import Colors from './styles/colors'; // Import colors

function App() {
  return (
    <div className={`min-h-screen flex flex-col items-center justify-between ${Colors.background}`}>
      {/* Header */}
      <header className={`w-full p-4 text-center ${Colors.header}`}>
        <h1 className={`text-4xl font-bold ${Colors.primary}`}>
          Centralized Color Structure 
        </h1>
      </header>

      {/* Main Content */}
      <main className="text-center space-y-4">
        {/* Highlighted Text */}
        <p className={`text-xl ${Colors.highlight}`}>
          This text is highlighted with a custom yellow color.
        </p>

        {/* Button with custom button color */}
        <button className={`px-6 py-2 rounded-lg shadow-lg hover:opacity-90 transition ${Colors.button} ${Colors.buttonText}`}>
          Click Me
        </button>

        {/* Link with custom link color */}
        <a href="#" className={`hover:text-blue-700 ${Colors.link}`}>
          Visit Our Website
        </a>

        {/* Section with custom border color */}
        <div className={`p-4 ${Colors.border}`}>
          <p className={`text-xl ${Colors.primary}`}>This section has a custom border color.</p>
        </div>
      </main>

      {/* Footer */}
      <footer className={`w-full p-4 text-center ${Colors.footer}`}>
        <p className="text-white">Footer content goes here</p>
      </footer>
    </div>
  );
}

export default App;
