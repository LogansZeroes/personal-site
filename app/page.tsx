export default function Page() {
  return (
    <main className="page">
      <div className="center">
        <div>
          <h1 className="name">
            Logan<br />Radochonski
          </h1>
          <div className="rule" />
          {/* <p className="location">Seoul, Korea</p> */}
          <p className="korean-name">
            성지민
            <span className="korean-tip-wrap">
              <a className="korean-tip-icon" href="https://breakingbap.com/korean" target="_blank" rel="noopener noreferrer">?</a>
              <span className="korean-tip">How do I read your name? →</span>
            </span>
          </p>
        </div>
      </div>

      <footer className="footer">
        <a href="mailto:logan@radochon.ski">Email</a>
        <a href="https://github.com/LogansZeroes" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/radologan" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </footer>
    </main>
  );
}
