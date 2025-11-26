import { Mail, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-6 px-6 bg-black">
      <div className="container mx-auto max-w-6xl flex justify-between items-center">
        <p className="text-white">
          © {new Date().getFullYear()} Access Ventures. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <a href="mailto:team@accessvc.co" className="bg-white rounded-full p-2 text-black hover:bg-gray-200">
            <Mail size={20} />
          </a>
          <a href="https://www.linkedin.com/company/accessventuresllc/" className="bg-white rounded-full p-2 text-black hover:bg-gray-200">
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
