import "./navbar.css";
import gitlog from "./../logogit.jpg";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Select from "react-select";
import ProdData from "./SampleData.json";
import { border, borderRadius } from "@mui/system";

function Navbar() {
  const [selectedOption, setSelectedOption] = useState(null);

  const customStyles = {
    control: (base, state) => ({
      ...base,
      
      borderColor: "rgb(57, 126, 67)",
      borderRadius: "25px",
      boxShadow: state.isFocused ? null : null,
      "&:hover": {
      },
    }),
  };

  const options = ProdData.map((item) => ({
    value: item.id,
    label: item.name,
  }));

  const handleOptionChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  return (
    <>
      <div className="topBar">
        <div className="centText">
          <span>HOT LINE - 071 - 222 66 22</span>
        </div>
        <div className="topBarMenu">
          {/* <span>HOME</span> */}
          {/* <span>ABOUT US</span> */}
          <NavLink to="" style={{ textDecoration: "none", color: "#fff" }}>
            HOME
          </NavLink>

          <NavLink to="about" style={{ textDecoration: "none", color: "#fff" }}>
            ABOUT US
          </NavLink>
          <NavLink
            to="contact"
            style={{ textDecoration: "none", color: "#fff" }}
          >
            CONTACT US
          </NavLink>

          {/* <span onClick={handleContactUs}>CONTACT US</span> */}
        </div>
      </div>
      <div className="navbar">
        <div className="navBarLeft">
          {/* <h2>GALLE IT</h2> */}
          <img src={gitlog} alt="" className="logoImg" />
        </div>
        <div className="navBarCenter">
          <Select
            options={options}
            value={selectedOption}
            onChange={handleOptionChange}
            placeholder="Search..."
            className="searchInput"
            styles={customStyles}
            menuPortalTarget={document.body}
          />

          {/* <input type="text" placeholder="Search..." className="searchInput" />
          <input
            type="submit"
            name=""
            value="Search"
            className="searchButton"
          /> */}
        </div>
        <div className="navBarRight">
          <div className="topbarLinks">
            {/* <span className="topbarLink">Homepage</span>
            <span className="topbarLink">Timeline</span> */}
            <PersonOutlinedIcon sx={{ fontSize: 40, marginRight: 5 }} />
            <ShoppingCartOutlinedIcon sx={{ fontSize: 40, marginRight: 5 }} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
