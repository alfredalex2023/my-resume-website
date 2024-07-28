// page.js
// This file defines the Home component which serves as the landing page of the website.

import Image from "next/image";
import profilePic from "../../public/alfred.jpg";

// Home component displays the profile picture, name, introduction, and social media links
export default function Home() {
  return (
    <div className="container">
      {/* Profile picture */}
      <Image
        src={profilePic}
        alt="Your Name"
        width={150}
        height={150}
        style={{ borderRadius: "50%", margin: "0 auto", display: "block" }}
      />
      {/* Name */}
      <h1>ALFRED ALEX THOMAS</h1>
      {/* Introduction */}
      <p>
        I am a Software Development student at SAIT seeking an entry level role
        in the industry.
      </p>
      {/* Social media links */}
      <p>
        <a href="https://www.linkedin.com/in/alfred-alex-thomas-1a95751a2/">
          LinkedIn
        </a>{" "}
        | <a href="https://github.com/alfredalex2023">GitHub</a>
      </p>
    </div>
  );
}
