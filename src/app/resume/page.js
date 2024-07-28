// resume/page.js
// This file defines the Resume component which displays the resume details including education, work experience, skills, and certifications.

export default function Resume() {
  return (
    <div className="container">
      {/* Education section */}
      <section>
        <h2>Education</h2>
        <p>
          SOFTWARE DEVELOPMENT DIPLOMA - Southern Alberta Institute of
          Technology (SAIT), Calgary, AB
        </p>
      </section>
      {/* Work Experience section */}
      <section>
        <h2>Work Experience</h2>
        <p>Currently I dont have any work experience.</p>
      </section>
      {/* Skills section */}
      <section>
        <h2>Skills</h2>
        <p>Python, HTML, CSS, JAVASCRIPT, REACT, SQL, Manual Testing.</p>
      </section>
      {/* Certifications section */}
      <section>
        <h2>Certifications</h2>
        <p>
          Foundations of Software Testing and Validation - University of Leeds,
          provided by Coursera (Awarded April 2024){" "}
        </p>
      </section>
    </div>
  );
}
