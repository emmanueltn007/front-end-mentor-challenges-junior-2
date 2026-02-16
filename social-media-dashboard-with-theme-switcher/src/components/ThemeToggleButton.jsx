function ThemeToggleButton({ handleDarkModeToggle, isDarkMode }) {
  return (
    <button
      onClick={handleDarkModeToggle}
      className={`cursor-pointer ${isDarkMode ? "" : ""}`}
      aria-label="Dark mode toggle button"
    >
      {isDarkMode ? (
        <svg
          className="w-16 text-[hsl(0,80%,86%)]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
        >
          <path
            d="M224 128C118 128 32 214 32 320C32 426 118 512 224 512L416 512C522 512 608 426 608 320C608 214 522 128 416 128L224 128zM416 224C469 224 512 267 512 320C512 373 469 416 416 416C363 416 320 373 320 320C320 267 363 224 416 224z"
            fill="currentColor"
          />
        </svg>
      ) : (
        <svg
          className="w-16 text-[hsl(230,22%,74%)]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
        >
          <path
            d="M416 192C486.7 192 544 249.3 544 320C544 390.7 486.7 448 416 448L224 448C153.3 448 96 390.7 96 320C96 249.3 153.3 192 224 192L416 192zM608 320C608 214 522 128 416 128L224 128C118 128 32 214 32 320C32 426 118 512 224 512L416 512C522 512 608 426 608 320zM224 400C268.2 400 304 364.2 304 320C304 275.8 268.2 240 224 240C179.8 240 144 275.8 144 320C144 364.2 179.8 400 224 400z"
            fill="currentColor"
          />
        </svg>
      )}
    </button>
  );
}

export default ThemeToggleButton;