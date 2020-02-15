import React from "react";
import googlelogo from "./googlelogo.png";

const UserSearchForm = ({
  onSubmitHandler,
  searchTerm,
  onInputChange,
  error
}) => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light px-4">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto small">
            <li class="nav-item active">
              <a class="nav-link" href="/">
                Gmail <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">
                Images
              </a>
            </li>
          </ul>
          <div
            class=" account-action d-flex "
            style={{ width: "75px", height: "32px", marginLeft: "15px" }}
          >
            <div class="sky" style={{ width: "30px", height: "30px" }}></div>
            <div
              class="profilePicture text-white text-center radius ml-2"
              style={{
                width: "32px",
                height: "32px",
                padding: "3px",
                background: "#4285f4",
                borderRadius: "50%"
              }}
            >
              A
            </div>
          </div>
        </div>
      </nav>

      <div
        class=""
        style={{
          height: "219px"
        }}
      >
        <div
          class=" container text-center "
          style={{
            height: "201px",
            paddingTop: "95px"
          }}
        >
          <img src={googlelogo} className="" alt="logo" />
        </div>
      </div>
      <div className=" ">
        <form onSubmit={onSubmitHandler} autocomplete="off">
          <div class="container ">
            <div
              class="form-group has-search mx-auto border d-flex"
              style={{
                borderRadius: "50px",
                fontSize: "20px"
              }}
            >
              <span class="fa fa-search fa-xs form-control-feedback"></span>
              <input
                id="myInput"
                type="search"
                value={searchTerm}
                class="form-contro border-0"
                onChange={onInputChange}
                required
              />
            </div>
          </div>
          <div class="mx-auto butn text-center">
            <input
              class="mr-1"
              value="Google Search"
              aria-label="Google Search"
              name="btnK"
              type="submit"
            />
            <input
              class="ml-1"
              value="I'm Feeling Lucky"
              aria-label="I'm Feeling Lucky"
              name="btnI"
              type="submit"
            />
          </div>
          {error && (
            <div style={{ color: `red` }}>
              some error occurred, while fetching api
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default UserSearchForm;
