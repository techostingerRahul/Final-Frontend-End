export function AuthFooter() {
  console.log("Auth Footer reached");
  return (
    <>
      <footer
        style={{
          backgroundColor: "mediumvioletred",
          color: "white",
          textAlign: "center",
          padding: "10px 0",
        }}
      >
        <p>© {new Date().getFullYear()} | Second Half | All rights reserved</p>
      </footer>
    </>
  );
}
