import axios from "axios";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Spin, Drawer, Button, Space } from "antd";
import { movieContext } from "../../context";
import router, { useRouter } from "next/router";
import { AiOutlineArrowUp } from "react-icons/ai";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";

export default function Hero() {
  const [keyword, setKeyword] = useState("");

  const [passData, setpassData] = useState(false);
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState({
    loading: false,
    error: null,
    movie: "",
  });
  const [basicInfo, setbasicInfo] = useState({});
  const [genre, setGenre] = useState([]);
  const [singleGenre, setsingleGenre] = useState([]);

  const router = useRouter();
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=d0a135171d58c78f1c69bcca1de4b35d&language=en-US"
      )
      .then((res) => {
        setGenre(res.data.genres);
      });
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    try {
      setData({
        ...data,
        loading: true,
        error: null,
      });

      router.push({
        pathname: "/movie/query",
        query: {
          str: data.movie,
        },
      });
    } catch (e) {
      console.log(e, "error <=== get data movies");
    }

    // setLoading(true);

    // let inputKeyword = e.target.elements.search.value;
    // setKeyword(inputKeyword);
    // fetchData(inputKeyword);
    // setpassData(true);
  };

  const [visible, setVisible] = useState(false);
  const [size, setSize] = useState();

  const showDefaultDrawer = () => {
    setSize("default");
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  const openGenre = (e) => {
    // https://api.themoviedb.org/3/discover/movie?api_key=d0a135171d58c78f1c69bcca1de4b35d&with_genres=99&page=50
    //  is link se diff pages access krskte han
    try {
      axios
        .get(
          `https://api.themoviedb.org/3/discover/movie?api_key=d0a135171d58c78f1c69bcca1de4b35d&with_genres=${e}`
        )
        .then((res) => {
          setbasicInfo(res.data);
          setsingleGenre(res.data.results);
        });
    } catch (y) {
      console.log(y, "error in getting genre id ===>");
    }
  };
 
  const menu = (
    <Menu
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      {genre.map((i) => {
        return (
          <Menu.Item key={Math.random()} style={{ width: "31%" }}>
            <Link
              href={`movie/genre/` + i?.id}
              target="_blank"
              rel="noopener noreferrer"
            >
              {i?.name}
            </Link>
          </Menu.Item>
        );
      })}
    </Menu>
  );
  return (
    <section className="home-section">
      <div className="home-section-flex-top">
        <img className="home-section-logo-img" src="/images/netflix-logo.jpg" />
        <div className="home-section-btn-flex">
          <Dropdown overlay={menu}>
            <a
              className="ant-dropdown-link home-section-genre"
              onClick={(e) => e.preventDefault()}
              href="#"
            >
              Genre <AiOutlineArrowUp style={{ marginLeft: "5px" }} />
            </a>
          </Dropdown>
          <button onClick={showDefaultDrawer} className="home-section-btn">
            Sign In
          </button>
        </div>
      </div>

      <div className="home-section-flex-bottom">
        <h2 className="home-section-heading">
          Unlimited movies, TV shows, and more.
        </h2>
        <h3 className="home-section-subheading">
          Watch anywhere. Cancel anytime.
        </h3>
      </div>
      <form onSubmit={(e) => onSubmit(e)} className="home-section-form">
        <input
          className="home-section-input"
          placeholder="Enter movies to search..."
          type="text"
          name="search"
          onChange={(e) => setData({ ...data, movie: e.target.value })}
        />

        <button type="submit" className="home-section-search">
          Search
          {data.loading ? <Spin spinning={data.loading} /> : ""}
        </button>
      </form>
      {/* <Drawer
        title={`${size} Drawer`}
        placement="right"
        size={size}
        onClose={onClose}
        visible={visible}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button type="primary" onClick={onClose}>
              OK
            </Button>
          </Space>
        }
      >
        <a href="/movie/genre">Categories</a>
      </Drawer>
    */}
    </section>
  );
}
