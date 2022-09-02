import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setDarkMode, setLanguage } from "../stores/site";

function Footer() {
  const dispatch = useDispatch();
  const { dark, language } = useSelector((state) => state.site);
  const languages = ["Tr", "En"];

  const handleLanguage = (lang) => {
    dispatch(setLanguage(lang));
  };

  return (
    <div>
      footer
      <div>
        {languages.map((lang, index) => (
          <button
            onClick={() => handleLanguage(lang)}
            className={lang === language ? "active" : ""}
            key={index}
          >
            {lang}
          </button>
        ))}
      </div>
      <div>
        <button onClick={() => dispatch(setDarkMode())}>
          {dark ? "Light Moda gec" : "Dark mode gec"}
        </button>
      </div>
    </div>
  );
}

export default Footer;
