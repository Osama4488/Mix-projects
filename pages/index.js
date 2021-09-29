import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
// import { Pagination } from "antd";
export default function Home() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href="/calculator">Calculator</Link>
          </li>
          <li>
            <Link href="/movie/home">movie</Link>
          </li>
          <li>
            <Link href="/movie/genre">Home Genres</Link>
          </li>
        </ul>
      </nav>
      {/* <div>
        <Pagination defaultCurrent={1} total={10} />
      </div> */}
    </>
  );
}

// <Navbar bg="primary" variant="dark">
//     <Container>
//     <Navbar.Brand href="#home">Navbar</Navbar.Brand>
//     <Nav className="me-auto">
//       <Nav.Link href="#home">Home</Nav.Link>
//       <Nav.Link href="#features">Features</Nav.Link>
//       <Nav.Link href="#pricing">Pricing</Nav.Link>
//     </Nav>
//     </Container>
//   </Navbar>
