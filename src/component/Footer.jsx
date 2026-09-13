
import footerLogo from '../assets/logo-text.png';
function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-12 pb-6 text-gray-500 text-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8">
          <div className="md:col-span-5 text-center md:text-left space-y-3">
            <div className="flex items-center justify-center md:justify-start">
              <img src={footerLogo} alt="Dev Stack Logo" className="h-9 object-contain" />
            </div>
            <p className="text-gray-400 max-w-xs mx-auto md:mx-0 text-xs leading-relaxed">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            <div className="flex justify-center md:justify-start items-center gap-2 pt-1 font-medium text-gray-600">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-purple-600">GitHub</a>
              <span>•</span>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-purple-600">Twitter</a>
              <span>•</span>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-purple-600">LinkedIn</a>
            </div>
          </div>
          <div className="hidden md:grid md:col-span-7 grid-cols-3 gap-4">
            <div className="space-y-2">
              <h4 className="font-bold text-xs text-gray-900 uppercase">Product</h4>
              <div className="flex flex-col space-y-1 text-xs">
                <a href="#home" className="hover:underline">Home</a>
                <a href="#technologies" className="hover:underline">Technologies</a>
                <a href="#projects" className="hover:underline">Projects</a>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-xs text-gray-900 uppercase">Company</h4>
              <div className="flex flex-col space-y-1 text-xs">
                <a href="#about" className="hover:underline">About</a>
                <a href="#contact" className="hover:underline">Contact</a>
                <a href="#careers" className="hover:underline">Careers</a>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-xs text-gray-900 uppercase">Legal</h4>
              <div className="flex flex-col space-y-1 text-xs">
                <a href="#privacy" className="hover:underline">Privacy Policy</a>
                <a href="#terms" className="hover:underline">Terms of Service</a>
              </div>
            </div>
          </div>

        </div>
        <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-2 text-gray-400 text-xs">
          <p>&copy; 2026 Dev Stack. All rights reserved.</p>
          <div className="flex space-x-3">
            <a href="#privacy" className="hover:underline">Privacy</a>
            <a href="#terms" className="hover:underline">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
