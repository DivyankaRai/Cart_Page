import React from "react";

const Footer = () => {
  return (
    <footer className="bg-lightblue rounded-lg shadow mt-10">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="text-lg font-semibold text-white">𝑪𝒍𝒐𝒕𝒉𝒊𝒇𝒚</span>
          </div>
          <ul className="flex items-center text-sm font-medium text-white">
            <li className="me-4">About</li>
            <li className="me-4">Privacy Policy</li>
            <li className="me-4">Licensing</li>
            <li>Contact</li>
          </ul>
        </div>
        <hr className="my-6 border-white" />
        <span className="block text-sm text-white">
          © 2024 𝑪𝒍𝒐𝒕𝒉𝒊𝒇𝒚™. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
