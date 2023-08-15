import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <ul style={{ listStyle: "none", display: "flex", alignItems: "center" }}>
          <li style={{ marginRight: "1.25rem" }}> {/* 20px converted to rem */}
            <Link to="/">Home</Link>
          </li>
          <li
            style={{
              position: "relative",
              marginRight: "1.25rem", // 20px converted to rem
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.getElementsByTagName("ul")[0].style.display = "block";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.getElementsByTagName("ul")[0].style.display = "none";
            }}
          >
            <Link to="/events">Events</Link>
            <ul
              style={{
                position: "absolute",
                top: "100%",
                left: 0,
                listStyle: "none",
                display: "none",
                backgroundColor: "#fff",
                padding: "1rem", // 16px converted to rem
                boxShadow: "0 0.125rem 0.25rem rgba(0, 0, 0, 0.1)", // 2px converted to rem
              }}
            >
              <li>
                <Link to="/events/item1">Item1</Link>
              </li>
              <li>
                <Link to="/events/item2">Item2</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/">Our Team</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
