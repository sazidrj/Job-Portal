const Footer = () => {
  return (
    <footer className="bg-[#4a2789] text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h5 className="text-lg font-semibold">Job Portal</h5>
          <p className="text-sm">© 2024 Job Portal. All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          <a href="/" className="hover:text-gray-400">
            Home
          </a>
          <a href="/about" className="hover:text-gray-400">
            About
          </a>
          <a href="/jobs" className="hover:text-gray-400">
            Jobs
          </a>
          <a href="/contact" className="hover:text-gray-400">
            Contact
          </a>
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22.676 0H1.326C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.326 24h11.495v-9.294H9.798V11.24h3.023V8.625c0-3.004 1.792-4.652 4.532-4.652 1.313 0 2.686.235 2.686.235v2.953h-1.513c-1.491 0-1.954.926-1.954 1.874v2.205h3.328l-.532 3.466h-2.796V24h5.487C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.676 0z" />
            </svg>
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.937 4.937 0 0 0 2.165-2.724 9.864 9.864 0 0 1-3.127 1.195 4.92 4.92 0 0 0-8.384 4.482A13.96 13.96 0 0 1 1.671 3.149a4.93 4.93 0 0 0 1.523 6.574A4.903 4.903 0 0 1 .96 9.097v.061a4.93 4.93 0 0 0 3.95 4.827 4.93 4.93 0 0 1-2.212.084 4.935 4.935 0 0 0 4.604 3.417A9.867 9.867 0 0 1 0 21.543 13.944 13.944 0 0 0 7.548 24c9.056 0 14.007-7.504 14.007-14.007 0-.213-.005-.425-.014-.637A10.01 10.01 0 0 0 24 4.557z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22.225 0H1.771C.791 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.205 24 24 23.227 24 22.271V1.729C24 .774 23.205 0 22.225 0zM7.069 20.452H3.694v-10.97h3.375v10.97zM5.385 7.645c-1.077 0-1.951-.872-1.951-1.948s.875-1.948 1.951-1.948c1.077 0 1.951.872 1.951 1.948 0 1.077-.874 1.948-1.951 1.948zm14.722 12.807h-3.375v-5.858c0-1.395-.026-3.192-1.947-3.192-1.947 0-2.247 1.52-2.247 3.087v5.963h-3.374v-10.97h3.241v1.497h.045c.45-.855 1.547-1.755 3.185-1.755 3.406 0 4.03 2.24 4.03 5.157v6.071h-.001z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
