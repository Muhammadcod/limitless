import React from "react";
import googlelogo from "./googlelogo.png";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <nav class="navbar navbar-expand-lg navbar-light borpx-4 ">
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
              <div
                class=" sky border"
                style={{ width: "30px", height: "30px" }}
              ></div>
              <div
                class=" border text-white"
                style={{
                  width: "32px",
                  height: "32px",

                  borderRadius: "50%",
                  marginLeft: "15px",
                  background: "#4285f4"
                }}
              >
                A
              </div>
            </div>
          </div>
        </nav>
        <main>
          <div
            class=""
            style={{
              height: "219px"
            }}
          >
            <div
              class=" container "
              style={{
                height: "201px",
                paddingTop: "95px"
              }}
            >
              <img src={googlelogo} className="" alt="logo" />
            </div>
          </div>

          <form class="">
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
                  type="text"
                  class="form-contro border-0"
                  placeholder=""
                />
              </div>

              <div class="mx-auto butn">
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
            </div>
          </form>
          <div class="language small">
            Google offered in:
            <a class="" href="/">
              Hausa
            </a>
            <a class="" href="/">
              Igbo
            </a>
            <a class="" href="/">
              Èdè Yorùbá
            </a>
            <a class="" href="/">
              Nigerian Pidgin
            </a>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
