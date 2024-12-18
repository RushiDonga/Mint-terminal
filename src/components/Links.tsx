import React from "react";

const Links = () => {
  return (
    <div>
      <div className="suggest">
        <ul>
          <li>Github</li>
          <li>Twitter</li>
          <li>Linkedin</li>
          <li>Instagram</li>
        </ul>
        <ul>
          <a
            href="https://github.com/RushiDonga"
            target="_blank"
            rel="noreferrer noopener"
          >
            github/RushiDonga
          </a>
          <a
            href="https://linktr.ee/rushidonga"
            target="_blank"
            rel="noreferrer noopener"
          >
            linktree/rushidonga
          </a>
          <a
            href="https://www.linkedin.com/in/rushidonga/"
            target="_blank"
            rel="noreferrer noopener"
          >
            linkedin/rushidonga
          </a>
          <a
            href="https://www.instagram.com/rushi_04.deb/"
            target="_blank"
            rel="noreferrer noopener"
          >
            instagram/rushi_04.deb
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Links;
