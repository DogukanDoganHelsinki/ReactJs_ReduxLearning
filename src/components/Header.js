import React from "react";
import { useSelector } from "react-redux";

function Header() {
  const { dark, language } = useSelector((state) => state.site);

  return (
    <div>
      Header
      <div>
        Dark mod = {dark ? "Yes" : "No"} <br />
        Selected Language = {language}
      </div>
    </div>
  );
}

export default Header;
