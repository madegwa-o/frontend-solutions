import { useState } from 'react';

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    return (
        <div className={isDarkMode ? "dark bg-gray-900 text-white" : "bg-gray-100 text-gray-800"}>
            <header className="p-6 shadow-md">
                <h1 className="text-4xl font-extrabold text-center">
                    Tailwind Features Showcase
                </h1>
                <button
                    onClick={() => setIsDarkMode(!isDarkMode)}
                    className="mt-4 block mx-auto px-4 py-2 rounded bg-blue-500 hover:bg-blue-700 text-white"
                >
                    Toggle Dark Mode
                </button>
            </header>

            <main className="p-6">
                {/* Typography */}
                <section className="my-6">
                    <h2 className="text-2xl font-semibold underline">Typography</h2>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">
                        Tailwind offers extensive typography utilities for styling text.
                    </p>
                    <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-500 dark:text-gray-300">
                        "The quick brown fox jumps over the lazy dog."
                    </blockquote>
                </section>

                {/* Grid Layout */}
                <section className="my-6">
                    <h2 className="text-2xl font-semibold underline">Grid Layout</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        <div className="bg-blue-200 p-4 text-center rounded">1</div>
                        <div className="bg-blue-300 p-4 text-center rounded">2</div>
                        <div className="bg-blue-400 p-4 text-center rounded">3</div>
                        <div className="bg-blue-500 p-4 text-center rounded">4</div>
                        <div className="bg-blue-600 p-4 text-center rounded">5</div>
                    </div>
                </section>

                {/* Flexbox */}
                <section className="my-6">
                    <h2 className="text-2xl font-semibold underline">Flexbox</h2>
                    <div className="flex items-center justify-between bg-gray-200 dark:bg-gray-700 p-4 rounded">
                        <span>Item 1</span>
                        <span>Item 2</span>
                        <span>Item 3</span>
                    </div>
                </section>

                {/* Buttons */}
                <section className="my-6">
                    <h2 className="text-2xl font-semibold underline">Buttons</h2>
                    <div className="flex gap-4">
                        <button className="px-4 py-2 rounded bg-green-500 hover:bg-green-700 text-white">
                            Success
                        </button>
                        <button className="px-4 py-2 rounded bg-red-500 hover:bg-red-700 text-white">
                            Danger
                        </button>
                        <button className="px-4 py-2 rounded bg-yellow-500 hover:bg-yellow-700 text-white">
                            Warning
                        </button>
                    </div>
                </section>

                {/* Animations */}
                <section className="my-6">
                    <h2 className="text-2xl font-semibold underline">Animations</h2>
                    <div className="p-4 animate-bounce bg-indigo-400 text-white text-center rounded">
                        Bouncing Box
                    </div>
                </section>
            </main>

            <footer className="text-center p-4 bg-gray-800 text-white dark:bg-gray-900">
                Tailwind Features Demo - React + Vite
            </footer>
        </div>
    );
}

export default App;
