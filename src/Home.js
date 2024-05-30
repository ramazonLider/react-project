import "./App.css";

function Home() {
  return (
    <div className="App">
      <div id="__next">
        <button
          type="button"
          style={{ zIndex: 1035 }}
          className="btn btn-light btn-icon rounded-circle shadow position-fixed top-50 end-0 translate-middle-y me-3"
        >
          <i className="fi-layers"></i>
        </button>
        <main className="page-wrapper">
          <header
            role="navigation"
            className="navbar-dark fixed-top navbar navbar-expand-lg navbar-light"
          >
            <div className="container">
              <a className="me-3 me-xl-4 navbar-brand" href="/car-finder">
                <span
                  style={{
                    boxSizing: "border-box",
                    display: "inline-block",
                    overflow: "hidden",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: 1,
                    border: 0,
                    margin: 0,
                    padding: 0,
                    position: "relative",
                    maxWidth: "100%",
                  }}
                >
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "block",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                      maxWidth: "100%",
                    }}
                  >
                    <img
                      style={{
                        display: "block",
                        maxWidth: "100%",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                      }}
                      alt=""
                      aria-hidden="true"
                      src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27116%27%20height=%2732%27/%3e"
                    />
                  </span>
                  <img
                    alt="Finder"
                    srcSet="/images/logo/logo-light.svg 1x, /images/logo/logo-light.svg 2x"
                    src="/images/logo/logo-light.svg"
                    decoding="async"
                    data-nimg="intrinsic"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                      boxSizing: "border-box",
                      padding: 0,
                      border: "none",
                      margin: "auto",
                      display: "block",
                      width: 0,
                      height: 0,
                      minWidth: "100%",
                      maxWidth: "100%",
                      minHeight: "100%",
                      maxHeight: "100%",
                    }}
                  />
                </span>
              </a>
              <button
                aria-controls="navbarNav"
                type="button"
                aria-label="Toggle navigation"
                className="ms-auto navbar-toggler collapsed"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <button
                type="button"
                className="btn btn-link btn-light btn-sm d-none d-lg-block order-lg-3 btn-sm"
              >
                <i className="fi-user me-2"></i>
                Sign in
              </button>
              <a
                role="button"
                tabIndex="0"
                className="order-lg-3 ms-2 btn btn-primary btn-sm"
                href="/car-finder/sell-car"
              >
                <i className="fi-plus me-2"></i>
                Sell car
              </a>
              <div
                className="order-md-2 navbar-collapse collapse"
                id="navbarNav"
              >
                <div
                  className="navbar-nav navbar-nav-scroll"
                  style={{ maxHeight: "35rem" }}
                >
                  <div className="me-lg-2 nav-item dropdown">
                    <a
                      id="react-aria-1"
                      aria-expanded="false"
                      role="button"
                      className="align-items-center pe-lg-4 dropdown-toggle nav-link"
                      tabIndex="0"
                      href="#"
                    >
                      <i className="fi-layers me-2"></i>
                      Demos
                      <span
                        className="d-none d-lg-block position-absolute top-50 end-0 translate-middle-y border-end border-light"
                        style={{ width: "1px", height: "30px" }}
                      ></span>
                    </a>
                    <div
                      data-bs-popper="static"
                      className="dropdown-menu dropdown-menu-dark"
                    >
                      <a
                        data-rr-ui-dropdown-item=""
                        className="dropdown-item"
                        href="/real-estate"
                      >
                        <i className="fi-building fs-base me-2"></i>
                        Real Estate Demo
                      </a>
                      <div className="dropdown-divider" role="separator"></div>
                      <a
                        data-rr-ui-dropdown-item=""
                        className="dropdown-item"
                        href="/car-finder"
                      >
                        <i className="fi-car fs-base me-2"></i>
                        Car Finder Demo
                      </a>
                      <div className="dropdown-divider" role="separator"></div>
                      <a
                        data-rr-ui-dropdown-item=""
                        className="dropdown-item"
                        href="/job-board"
                      >
                        <i className="fi-briefcase fs-base me-2"></i>
                        Job Board Demo
                      </a>
                      <div className="dropdown-divider" role="separator"></div>
                      <a
                        data-rr-ui-dropdown-item=""
                        className="dropdown-item"
                        href="/city-guide"
                      >
                        <i className="fi-map-pin fs-base me-2"></i>
                        City Guide Demo
                      </a>
                      <div className="dropdown-divider" role="separator"></div>
                      <a
                        data-rr-ui-dropdown-item=""
                        className="dropdown-item"
                        href="/"
                      >
                        <i className="fi-home fs-base me-2"></i>
                        Main Page
                      </a>
                      <a
                        data-rr-ui-dropdown-item=""
                        className="dropdown-item"
                        href="/components/typography"
                      >
                        <i className="fi-list fs-base me-2"></i>
                        Components
                      </a>
                      <a
                        data-rr-ui-dropdown-item=""
                        className="dropdown-item"
                        href="/docs"
                      >
                        <i className="fi-file fs-base me-2"></i>
                        Documentation
                      </a>
                    </div>
                  </div>
                  <div className="nav-item">
                    <a
                      data-rr-ui-event-key="/car-finder"
                      className="nav-link active"
                      href="/car-finder"
                    >
                      Home
                    </a>
                  </div>
                  <div className="nav-item dropdown">
                    <a
                      id="react-aria-2"
                      aria-expanded="false"
                      role="button"
                      className="dropdown-toggle nav-link"
                      tabIndex="0"
                      href="#"
                    >
                      Catalog
                    </a>
                    <div
                      data-bs-popper="static"
                      className="dropdown-menu dropdown-menu-dark"
                    >
                      <a
                        data-rr-ui-dropdown-item=""
                        className="dropdown-item"
                        href="/car-finder/catalog?view=list"
                      >
                        List View
                      </a>
                      <a
                        data-rr-ui-dropdown-item=""
                        className="dropdown-item"
                        href="/car-finder/catalog?view=grid"
                      >
                        Grid View
                      </a>
                      <a
                        data-rr-ui-dropdown-item=""
                        className="dropdown-item"
                        href="/car-finder/single"
                      >
                        Car Single Page
                      </a>
                    </div>
                  </div>
                  <div className="nav-item dropdown">
                    <a
                      id="react-aria-3"
                      aria-expanded="false"
                      role="button"
                      className="dropdown-toggle nav-link"
                      tabIndex="0"
                      href="#"
                    >
                      Account
                    </a>
                    <div
                      data-bs-popper="static"
                      className="dropdown-menu dropdown-menu-dark"
                    >
                      <a
                        data-rr-ui-dropdown-item=""
                        className="dropdown-item"
                        href="/car-finder/account-info"
                      >
                        Personal Info
                      </a>
                      <a
                        data-rr-ui-dropdown-item=""
                        className="dropdown-item"
                        href="/car-finder/account-security"
                      >
                        Password &amp;Security
                      </a>
                      <a
                        data-rr-ui-dropdown-item=""
                        className="dropdown-item"
                        href="/car-finder/account-cars"
                      >
                        My Cars
                      </a>
                      <a
                        data-rr-ui-dropdown-item=""
                        className="dropdown-item"
                        href="/car-finder/account-wishlist"
                      >
                        Wishlist
                      </a>
                      <a
                        data-rr-ui-dropdown-item=""
                        className="dropdown-item"
                        href="/car-finder/account-reviews"
                      >
                        Reviews
                      </a>
                      <a
                        data-rr-ui-dropdown-item=""
                        className="dropdown-item"
                        href="/car-finder/account-notifications"
                      >
                        Notifications
                      </a>
                      <a
                        data-rr-ui-dropdown-item=""
                        className="dropdown-item"
                        href="/signin-dark"
                      >
                        Sign In
                      </a>
                      <a
                        data-rr-ui-dropdown-item=""
                        className="dropdown-item"
                        href="/signup-dark"
                      >
                        Sign Up
                      </a>
                    </div>
                  </div>
                  <div className="nav-item dropdown">
                    <a
                      id="react-aria-4"
                      aria-expanded="false"
                      role="button"
                      className="dropdown-toggle nav-link"
                      tabIndex="0"
                      href="#"
                    >
                      Vendor
                    </a>
                    <div
                      data-bs-popper="static"
                      className="dropdown-menu dropdown-menu-dark"
                    >
                      <a
                        data-rr-ui-dropdown-item=""
                        className="dropdown-item"
                        href="/car-finder/sell-car"
                      >
                        Sell Car
                      </a>
                      <a
                        data-rr-ui-dropdown-item=""
                        className="dropdown-item"
                        href="/car-finder/promotion"
                      >
                        Ad Promotion Page
                      </a>
                      <a
                        data-rr-ui-dropdown-item=""
                        className="dropdown-item"
                        href="/car-finder/vendor"
                      >
                        Vendor Page
                      </a>
                    </div>
                  </div>
                  <div className="nav-item dropdown">
                    <a
                      id="react-aria-5"
                      aria-expanded="false"
                      role="button"
                      className="dropdown-toggle nav-link"
                      tabIndex="0"
                      href="#"
                    >
                      Pages
                    </a>
                    <div
                      data-bs-popper="static"
                      className="dropdown-menu dropdown-menu-dark"
                    >
                      <a
                        data-rr-ui-dropdown-item=""
                        className="dropdown-item"
                        href="/car-finder/about"
                      >
                        About
                      </a>
                      <div className="dropdown">
                        <a
                          id="react-aria-6"
                          aria-expanded="false"
                          data-rr-ui-dropdown-item=""
                          className="dropdown-toggle dropdown-item"
                          role="button"
                          tabIndex="0"
                          href="#"
                        >
                          Blog
                        </a>
                        <div
                          data-bs-popper="static"
                          className="dropdown-menu dropdown-menu-dark"
                        >
                          <a
                            data-rr-ui-dropdown-item=""
                            className="dropdown-item"
                            href="/car-finder/blog"
                          >
                            Blog Grid
                          </a>
                          <a
                            data-rr-ui-dropdown-item=""
                            className="dropdown-item"
                            href="/car-finder/blog-single"
                          >
                            Single Post
                          </a>
                        </div>
                      </div>
                      <a
                        data-rr-ui-dropdown-item=""
                        className="dropdown-item"
                        href="/car-finder/contacts"
                      >
                        Contacts
                      </a>
                      <a
                        data-rr-ui-dropdown-item=""
                        className="dropdown-item"
                        href="/car-finder/help-center"
                      >
                        Help Center
                      </a>
                      <a
                        data-rr-ui-dropdown-item=""
                        className="dropdown-item"
                        href="/car-finder/404-not-found"
                      >
                        404 Not Found
                      </a>
                    </div>
                  </div>
                  <div className="d-lg-none nav-item">
                    <a role="button" className="nav-link" tabIndex="0" href="#">
                      <i className="fi-user me-2"></i>
                      Sign in
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <section
            className="bg-top-center bg-repeat-0 pt-5"
            style={{
              backgroundImage: "url(/frontend/public/hero-img.png)",
              backgroundSize: "1920px 630px",
            }}
          >
            <div className="pt-5 container">
              <div className="pt-lg-4 pt-xl-5 row">
                <div className="pt-3 pt-md-4 pt-lg-5 col-lg-4 col-md-5">
                  <h1 className="display-4 text-light pb-2 mb-4 me-md-n5">
                    Easy way to find the right car
                  </h1>
                  <p className="fs-lg text-light opacity-70">
                    Finder is a leading digital marketplace for the automotive
                    industry that connects car shoppers with sellers.
                  </p>
                </div>
                <div className="pt-md-5 col-lg-8 col-md-7">
                  <div
                    className="d-flex mt-4 ms-auto"
                    style={{ maxWidth: "800px" }}
                  >
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "inline-block",
                        overflow: "hidden",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        position: "relative",
                        maxWidth: "100%",
                      }}
                    >
                      <span
                        style={{
                          boxSizing: "border-box",
                          display: "block",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0,
                          maxWidth: "100%",
                        }}
                      >
                        <img
                          style={{
                            display: "block",
                            maxWidth: "100%",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: "1",
                            border: "0",
                            margin: "0",
                            padding: "0",
                          }}
                          alt=""
                          aria-hidden="true"
                          src=""
                        />
                      </span>
                      <img
                        alt="Car"
                        light="true"
                        src=""
                        decoding="async"
                        data-nimg="intrinsic"
                        style={{
                          position: "absolute",
                          top: "0",
                          left: "0",
                          bottom: "0",
                          right: "0",
                          boxSizing: "border-box",
                          padding: "0",
                          border: "none",
                          margin: "auto",
                          display: "block",
                          width: "0",
                          height: "0",
                          minWidth: "100%",
                          maxWidth: "100%",
                          minHeight: "100%",
                          maxHeight: "100%",
                          backgroundSize: "cover",
                          backgroundPosition: "0% 0%",
                          filter: "blur(20px)",
                          backgroundImage:
                            'url("data:image/svg+xml;base64,CiAgICA8c3ZnIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkxMiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJnIj4KICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMzNTJlNDQiIG9mZnNldD0iMjAlIiAvPgogICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzFmMWIyZCIgb2Zmc2V0PSI1MCUiIC8+CiAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMzUyZTQ0IiBvZmZzZXQ9IjcwJSIgLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICA8L2RlZnM+CiAgICAgIDxyZWN0IHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkxMiIgZmlsbD0iIzM1MmU0NCIgLz4KICAgICAgPHJlY3QgaWQ9InIiIHdpZHRoPSIxNjAwIiBoZWlnaHQ9IjkxMiIgZmlsbD0idXJsKCNnKSIgLz4KICAgICAgPGFuaW1hdGUgeGxpbms6aHJlZj0iI3IiIGF0dHJpYnV0ZU5hbWU9IngiIGZyb209Ii0xNjAwIiB0bz0iMTYwMCIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgICA8L3N2Zz4=")',
                        }}
                      />
                      <noscript>
                        <img
                          alt="Car"
                          light="true"
                          src=""
                          decoding="async"
                          data-nimg="intrinsic"
                          style={{
                            position: "absolute",
                            top: "0",
                            left: "0",
                            bottom: "0",
                            right: "0",
                            boxSizing: "border-box",
                            padding: "0",
                            border: "none",
                            margin: "auto",
                            display: "block",
                            width: "0",
                            height: "0",
                            minWidth: "100%",
                            maxWidth: "100%",
                            minHeight: "100%",
                            maxHeight: "100%",
                          }}
                          loading="lazy"
                        />
                      </noscript>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 mt-sm-3 mt-lg-n3 pb-5 mb-md-4 container">
              <div className="nav-tabs-light mb-4 nav nav-tabs">
                <div className="nav-item">
                  <a
                    role="button"
                    data-rr-ui-event-key="new"
                    className="nav-link active"
                    tabIndex="0"
                    href="#"
                  >
                    New
                  </a>
                </div>
                <div className="nav-item">
                  <a
                    role="button"
                    data-rr-ui-event-key="used"
                    className="nav-link"
                    tabIndex="0"
                    href="#"
                  >
                    Used
                  </a>
                </div>
              </div>
              <form className="form-group form-group-light d-block">
                <div className="g-0 ms-lg-n2 row">
                  <div className="col-lg-2">
                    <div className="border-end-lg border-light input-group">
                      <span
                        className="text-muted ps-2 ps-sm-3 input-group-text"
                        id="search-icon"
                      >
                        <i className="fi-search"></i>
                      </span>
                      <input
                        placeholder="Keywords..."
                        aria-label="Search"
                        aria-describedby="search-icon"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <hr className="hr-light d-lg-none my-2" />
                  <div className="col-lg-2 col-md-3 col-sm-6">
                    <div className="border-end-sm border-light dropdown">
                      <button
                        type="button"
                        id="react-aria-7"
                        aria-expanded="false"
                        className="dropdown-toggle btn btn-link"
                      >
                        <i className="fi-list me-2"></i>
                        Make
                      </button>
                    </div>
                  </div>
                  <hr className="hr-light d-sm-none my-2" />
                  <div className="col-lg-2 col-md-3 col-sm-6">
                    <div className="border-end-md border-light dropdown">
                      <button
                        type="button"
                        id="react-aria-8"
                        aria-expanded="false"
                        className="dropdown-toggle btn btn-link"
                      >
                        <i className="fi-list me-2"></i>
                        Model
                      </button>
                    </div>
                  </div>
                  <hr className="hr-light d-md-none my-2" />
                  <div className="col-lg-2 col-md-3 col-sm-6">
                    <div className="border-end-sm border-light dropdown">
                      <button
                        type="button"
                        id="react-aria-9"
                        aria-expanded="false"
                        className="dropdown-toggle btn btn-link"
                      >
                        <i className="fi-car me-2"></i>
                        Body type
                      </button>
                    </div>
                  </div>
                  <hr className="hr-light d-sm-none my-2" />
                  <div className="col-lg-2 col-md-3 col-sm-6">
                    <div className="dropdown">
                      <button
                        type="button"
                        id="react-aria-10"
                        aria-expanded="false"
                        className="dropdown-toggle btn btn-link"
                      >
                        <i className="fi-map-pin me-2"></i>
                        Location
                      </button>
                    </div>
                  </div>
                  <hr className="hr-light d-lg-none my-2" />
                  <div className="col-lg-2">
                    <button type="button" className="w-100 btn btn-primary">
                      Search
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </section>
          <section className="pb-5 mb-md-4 container">
            <div className="d-sm-flex align-items-center justify-content-between mb-3 mb-sm-4 pb-sm-2">
              <h2 className="h3 text-light mb-2 mb-sm-0">
                Popular car body types
              </h2>
              <a
                role="button"
                tabIndex="0"
                className="btn btn-link btn-light fw-normal px-0"
                href="/car-finder/catalog?view=grid"
              >
                View all
                <i className="fi-arrow-long-right fs-sm mt-0 ps-1 ms-2"></i>
              </a>
            </div>
            <div className="g-2 g-md-4 row row-cols-lg-5 row-cols-md-4 row-cols-sm-3 row-cols-2">
              <div className="col">
                <div className="card card-body card-light card-hover bg-transparent border-0 px-0 pt-0 text-center">
                  <div className="d-flex justify-content-center mb-3">
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "inline-block",
                        overflow: "hidden",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: "1",
                        border: "0",
                        margin: "0",
                        padding: "0",
                        position: "relative",
                        maxWidth: "100%",
                      }}
                    >
                      <span
                        style={{
                          boxSizing: "border-box",
                          display: "block",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: "1",
                          border: "0",
                          margin: "0",
                          padding: "0",
                          maxWidth: "100%",
                        }}
                      >
                        <img
                          style={{
                            display: "block",
                            maxWidth: "100%",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: "1",
                            border: "0",
                            margin: "0",
                            padding: "0",
                          }}
                          alt=""
                          aria-hidden="true"
                          src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27160%27%20height=%2796%27/%3e"
                        />
                      </span>
                      <img
                        alt="Sedan"
                        light="true"
                        src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                        decoding="async"
                        data-nimg="intrinsic"
                        style={{
                          position: "absolute",
                          top: "0",
                          left: "0",
                          bottom: "0",
                          right: "0",
                          boxSizing: "border-box",
                          padding: "0",
                          border: "none",
                          margin: "auto",
                          display: "block",
                          width: "0",
                          height: "0",
                          minWidth: "100%",
                          maxWidth: "100%",
                          minHeight: "100%",
                          maxHeight: "100%",
                          backgroundSize: "cover",
                          backgroundPosition: "0% 0%",
                          filter: "blur(20px)",
                          backgroundImage:
                            'url("data:image/svg+xml;base64,CiAgICA8c3ZnIHdpZHRoPSIxNjAiIGhlaWdodD0iOTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iZyI+CiAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMzUyZTQ0IiBvZmZzZXQ9IjIwJSIgLz4KICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMxZjFiMmQiIG9mZnNldD0iNTAlIiAvPgogICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzM1MmU0NCIgb2Zmc2V0PSI3MCUiIC8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgPC9kZWZzPgogICAgICA8cmVjdCB3aWR0aD0iMTYwIiBoZWlnaHQ9Ijk2IiBmaWxsPSIjMzUyZTQ0IiAvPgogICAgICA8cmVjdCBpZD0iciIgd2lkdGg9IjE2MCIgaGVpZ2h0PSI5NiIgZmlsbD0idXJsKCNnKSIgLz4KICAgICAgPGFuaW1hdGUgeGxpbms6aHJlZj0iI3IiIGF0dHJpYnV0ZU5hbWU9IngiIGZyb209Ii0xNjAiIHRvPSIxNjAiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogICAgPC9zdmc+")',
                        }}
                      />
                      <noscript>
                        <img
                          alt="Sedan"
                          light="true"
                          srcSet="/images/car-finder/icons/sedan.svg 1x, /images/car-finder/icons/sedan.svg 2x"
                          src="/images/car-finder/icons/sedan.svg"
                          decoding="async"
                          data-nimg="intrinsic"
                          style={{
                            position: "absolute",
                            top: "0",
                            left: "0",
                            bottom: "0",
                            right: "0",
                            boxSizing: "border-box",
                            padding: "0",
                            border: "none",
                            margin: "auto",
                            display: "block",
                            width: "0",
                            height: "0",
                            minWidth: "100%",
                            maxWidth: "100%",
                            minHeight: "100%",
                            maxHeight: "100%",
                          }}
                          loading="lazy"
                        />
                      </noscript>
                    </span>
                  </div>
                  <a
                    className="nav-link-light stretched-link fw-bold"
                    href="/car-finder/catalog?view=list"
                  >
                    Sedan
                  </a>
                </div>
              </div>
              <div className="col">
                <div className="card card-body card-light card-hover bg-transparent border-0 px-0 pt-0 text-center">
                  <div className="d-flex justify-content-center mb-3">
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "inline-block",
                        overflow: "hidden",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        position: "relative",
                        maxWidth: "100%",
                      }}
                    >
                      <span
                        style={{
                          boxSizing: "border-box",
                          display: "block",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0,
                          maxWidth: "100%",
                        }}
                      >
                        <img
                          style={{
                            display: "block",
                            maxWidth: "100%",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                          }}
                          alt=""
                          aria-hidden="true"
                          src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27160%27%20height=%2796%27/%3e"
                        />
                      </span>
                      <img
                        alt="SUV"
                        light="true"
                        src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                        decoding="async"
                        data-nimg="intrinsic"
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
                          boxSizing: "border-box",
                          padding: 0,
                          border: "none",
                          margin: "auto",
                          display: "block",
                          width: 0,
                          height: 0,
                          minWidth: "100%",
                          maxWidth: "100%",
                          minHeight: "100%",
                          maxHeight: "100%",
                          backgroundSize: "cover",
                          backgroundPosition: "0% 0%",
                          filter: "blur(20px)",
                          backgroundImage:
                            "url('data:image/svg+xml;base64,CiAgICA8c3ZnIHdpZHRoPSIxNjAiIGhlaWdodD0iOTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iZyI+CiAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMzUyZTQ0IiBvZmZzZXQ9IjIwJSIgLz4KICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMxZjFiMmQiIG9mZnNldD0iNTAlIiAvPgogICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzM1MmU0NCIgb2Zmc2V0PSI3MCUiIC8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgPC9kZWZzPgogICAgICA8cmVjdCB3aWR0aD0iMTYwIiBoZWlnaHQ9Ijk2IiBmaWxsPSIjMzUyZTQ0IiAvPgogICAgICA8cmVjdCBpZD0iciIgd2lkdGg9IjE2MCIgaGVpZ2h0PSI5NiIgZmlsbD0idXJsKCNnKSIgLz4KICAgICAgPGFuaW1hdGUgeGxpbms6aHJlZj0iI3IiIGF0dHJpYnV0ZU5hbWU9IngiIGZyb209Ii0xNjAiIHRvPSIxNjAiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogICAgPC9zdmc+')",
                        }}
                      />
                      <noscript>
                        <img
                          alt="SUV"
                          light="true"
                          srcSet="/images/car-finder/icons/suv.svg 1x, /images/car-finder/icons/suv.svg 2x"
                          src="/images/car-finder/icons/suv.svg"
                          decoding="async"
                          data-nimg="intrinsic"
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                            boxSizing: "border-box",
                            padding: 0,
                            border: "none",
                            margin: "auto",
                            display: "block",
                            width: 0,
                            height: 0,
                            minWidth: "100%",
                            maxWidth: "100%",
                            minHeight: "100%",
                            maxHeight: "100%",
                          }}
                          loading="lazy"
                        />
                      </noscript>
                    </span>
                  </div>
                  <a
                    className="nav-link-light stretched-link fw-bold"
                    href="/car-finder/catalog?view=grid"
                  >
                    SUV
                  </a>
                </div>
              </div>
              <div className="col">
                <div className="card card-body card-light card-hover bg-transparent border-0 px-0 pt-0 text-center">
                  <div className="d-flex justify-content-center mb-3">
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "inline-block",
                        overflow: "hidden",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        position: "relative",
                        maxWidth: "100%",
                      }}
                    >
                      <span
                        style={{
                          boxSizing: "border-box",
                          display: "block",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0,
                          maxWidth: "100%",
                        }}
                      >
                        <img
                          style={{
                            display: "block",
                            maxWidth: "100%",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                          }}
                          alt=""
                          aria-hidden="true"
                          src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27160%27%20height=%2796%27/%3e"
                        />
                      </span>
                      <img
                        alt="Wagon"
                        light="true"
                        src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                        decoding="async"
                        data-nimg="intrinsic"
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
                          boxSizing: "border-box",
                          padding: 0,
                          border: "none",
                          margin: "auto",
                          display: "block",
                          width: 0,
                          height: 0,
                          minWidth: "100%",
                          maxWidth: "100%",
                          minHeight: "100%",
                          maxHeight: "100%",
                          backgroundSize: "cover",
                          backgroundPosition: "0% 0%",
                          filter: "blur(20px)",
                          backgroundImage:
                            "url('data:image/svg+xml;base64,CiAgICA8c3ZnIHdpZHRoPSIxNjAiIGhlaWdodD0iOTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iZyI+CiAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMzUyZTQ0IiBvZmZzZXQ9IjIwJSIgLz4KICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMxZjFiMmQiIG9mZnNldD0iNTAlIiAvPgogICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzM1MmU0NCIgb2Zmc2V0PSI3MCUiIC8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgPC9kZWZzPgogICAgICA8cmVjdCB3aWR0aD0iMTYwIiBoZWlnaHQ9Ijk2IiBmaWxsPSIjMzUyZTQ0IiAvPgogICAgICA8cmVjdCBpZD0iciIgd2lkdGg9IjE2MCIgaGVpZ2h0PSI5NiIgZmlsbD0idXJsKCNnKSIgLz4KICAgICAgPGFuaW1hdGUgeGxpbms6aHJlZj0iI3IiIGF0dHJpYnV0ZU5hbWU9IngiIGZyb209Ii0xNjAiIHRvPSIxNjAiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogICAgPC9zdmc+')",
                        }}
                      />
                      <noscript>
                        <img
                          alt="Wagon"
                          light="true"
                          srcSet="/images/car-finder/icons/wagon.svg 1x, /images/car-finder/icons/wagon.svg 2x"
                          src="/images/car-finder/icons/wagon.svg"
                          decoding="async"
                          data-nimg="intrinsic"
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                            boxSizing: "border-box",
                            padding: 0,
                            border: "none",
                            margin: "auto",
                            display: "block",
                            width: 0,
                            height: 0,
                            minWidth: "100%",
                            maxWidth: "100%",
                            minHeight: "100%",
                            maxHeight: "100%",
                          }}
                          loading="lazy"
                        />
                      </noscript>
                    </span>
                  </div>
                  <a
                    className="nav-link-light stretched-link fw-bold"
                    href="/car-finder/catalog?view=list"
                  >
                    Wagon
                  </a>
                </div>
              </div>
              <div className="col">
                <div className="card card-body card-light card-hover bg-transparent border-0 px-0 pt-0 text-center">
                  <div className="d-flex justify-content-center mb-3">
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "inline-block",
                        overflow: "hidden",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        position: "relative",
                        maxWidth: "100%",
                      }}
                    >
                      <span
                        style={{
                          boxSizing: "border-box",
                          display: "block",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0,
                          maxWidth: "100%",
                        }}
                      >
                        <img
                          style={{
                            display: "block",
                            maxWidth: "100%",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                          }}
                          alt=""
                          aria-hidden="true"
                          src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27160%27%20height=%2796%27/%3e"
                        />
                      </span>
                      <img
                        alt="Crossover"
                        light="true"
                        src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                        decoding="async"
                        data-nimg="intrinsic"
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
                          boxSizing: "border-box",
                          padding: 0,
                          border: "none",
                          margin: "auto",
                          display: "block",
                          width: 0,
                          height: 0,
                          minWidth: "100%",
                          maxWidth: "100%",
                          minHeight: "100%",
                          maxHeight: "100%",
                          backgroundSize: "cover",
                          backgroundPosition: "0% 0%",
                          filter: "blur(20px)",
                          backgroundImage:
                            "url('data:image/svg+xml;base64,CiAgICA8c3ZnIHdpZHRoPSIxNjAiIGhlaWdodD0iOTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iZyI+CiAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMzUyZTQ0IiBvZmZzZXQ9IjIwJSIgLz4KICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMxZjFiMmQiIG9mZnNldD0iNTAlIiAvPgogICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzM1MmU0NCIgb2Zmc2V0PSI3MCUiIC8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgPC9kZWZzPgogICAgICA8cmVjdCB3aWR0aD0iMTYwIiBoZWlnaHQ9Ijk2IiBmaWxsPSIjMzUyZTQ0IiAvPgogICAgICA8cmVjdCBpZD0iciIgd2lkdGg9IjE2MCIgaGVpZ2h0PSI5NiIgZmlsbD0idXJsKCNnKSIgLz4KICAgICAgPGFuaW1hdGUgeGxpbms6aHJlZj0iI3IiIGF0dHJpYnV0ZU5hbWU9IngiIGZyb209Ii0xNjAiIHRvPSIxNjAiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogICAgPC9zdmc+')",
                        }}
                      />
                      <noscript>
                        <img
                          alt="Crossover"
                          light="true"
                          srcSet="/images/car-finder/icons/crossover.svg 1x, /images/car-finder/icons/crossover.svg 2x"
                          src="/images/car-finder/icons/crossover.svg"
                          decoding="async"
                          data-nimg="intrinsic"
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                            boxSizing: "border-box",
                            padding: 0,
                            border: "none",
                            margin: "auto",
                            display: "block",
                            width: 0,
                            height: 0,
                            minWidth: "100%",
                            maxWidth: "100%",
                            minHeight: "100%",
                            maxHeight: "100%",
                          }}
                          loading="lazy"
                        />
                      </noscript>
                    </span>
                  </div>
                  <a
                    className="nav-link-light stretched-link fw-bold"
                    href="/car-finder/catalog?view=grid"
                  >
                    Crossover
                  </a>
                </div>
              </div>
              <div className="col">
                <div className="card card-body card-light card-hover bg-transparent border-0 px-0 pt-0 text-center">
                  <div className="d-flex justify-content-center mb-3">
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "inline-block",
                        overflow: "hidden",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        position: "relative",
                        maxWidth: "100%",
                      }}
                    >
                      <span
                        style={{
                          boxSizing: "border-box",
                          display: "block",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0,
                          maxWidth: "100%",
                        }}
                      >
                        <img
                          style={{
                            display: "block",
                            maxWidth: "100%",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                          }}
                          alt=""
                          aria-hidden="true"
                          src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27160%27%20height=%2796%27/%3e"
                        />
                      </span>
                      <img
                        alt="Coupe"
                        light="true"
                        src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                        decoding="async"
                        data-nimg="intrinsic"
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
                          boxSizing: "border-box",
                          padding: 0,
                          border: "none",
                          margin: "auto",
                          display: "block",
                          width: 0,
                          height: 0,
                          minWidth: "100%",
                          maxWidth: "100%",
                          minHeight: "100%",
                          maxHeight: "100%",
                          backgroundSize: "cover",
                          backgroundPosition: "0% 0%",
                          filter: "blur(20px)",
                          backgroundImage:
                            'url("data:image/svg+xml;base64,CiAgICA8c3ZnIHdpZHRoPSIxNjAiIGhlaWdodD0iOTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iZyI+CiAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMzUyZTQ0IiBvZmZzZXQ9IjIwJSIgLz4KICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMxZjFiMmQiIG9mZnNldD0iNTAlIiAvPgogICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzM1MmU0NCIgb2Zmc2V0PSI3MCUiIC8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgPC9kZWZzPgogICAgICA8cmVjdCB3aWR0aD0iMTYwIiBoZWlnaHQ9Ijk2IiBmaWxsPSIjMzUyZTQ0IiAvPgogICAgICA8cmVjdCBpZD0iciIgd2lkdGg9IjE2MCIgaGVpZ2h0PSI5NiIgZmlsbD0idXJsKCNnKSIgLz4KICAgICAgPGFuaW1hdGUgeGxpbms6aHJlZj0iI3IiIGF0dHJpYnV0ZU5hbWU9IngiIGZyb209Ii0xNjAiIHRvPSIxNjAiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogICAgPC9zdmc+")',
                        }}
                      />

                      <noscript>
                        <img
                          alt="Coupe"
                          light="true"
                          srcSet="/images/car-finder/icons/coupe.svg 1x, /images/car-finder/icons/coupe.svg 2x"
                          src="/images/car-finder/icons/coupe.svg"
                          decoding="async"
                          data-nimg="intrinsic"
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                            boxSizing: "border-box",
                            padding: 0,
                            border: "none",
                            margin: "auto",
                            display: "block",
                            width: 0,
                            height: 0,
                            minWidth: "100%",
                            maxWidth: "100%",
                            minHeight: "100%",
                            maxHeight: "100%",
                          }}
                          loading="lazy"
                        />
                      </noscript>
                    </span>
                  </div>
                  <a
                    className="nav-link-light stretched-link fw-bold"
                    href="/car-finder/catalog?view=list"
                  >
                    Coupe
                  </a>
                </div>
              </div>
              <div className="col">
                <div className="card card-body card-light card-hover bg-transparent border-0 px-0 pt-0 text-center">
                  <div className="d-flex justify-content-center mb-3">
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "inline-block",
                        overflow: "hidden",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        position: "relative",
                        maxWidth: "100%",
                      }}
                    >
                      <span
                        style={{
                          boxSizing: "border-box",
                          display: "block",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0,
                          maxWidth: "100%",
                        }}
                      >
                        <img
                          style={{
                            display: "block",
                            maxWidth: "100%",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                          }}
                          alt=""
                          aria-hidden="true"
                          src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27160%27%20height=%2796%27/%3e"
                        />
                      </span>
                      <img
                        alt="Pickup"
                        light="true"
                        src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                        decoding="async"
                        data-nimg="intrinsic"
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
                          boxSizing: "border-box",
                          padding: 0,
                          border: "none",
                          margin: "auto",
                          display: "block",
                          width: 0,
                          height: 0,
                          minWidth: "100%",
                          maxWidth: "100%",
                          minHeight: "100%",
                          maxHeight: "100%",
                          backgroundSize: "cover",
                          backgroundPosition: "0% 0%",
                          filter: "blur(20px)",
                          backgroundImage:
                            'url("data:image/svg+xml;base64,CiAgICA8c3ZnIHdpZHRoPSIxNjAiIGhlaWdodD0iOTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iZyI+CiAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMzUyZTQ0IiBvZmZzZXQ9IjIwJSIgLz4KICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMxZjFiMmQiIG9mZnNldD0iNTAlIiAvPgogICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzM1MmU0NCIgb2Zmc2V0PSI3MCUiIC8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgPC9kZWZzPgogICAgICA8cmVjdCB3aWR0aD0iMTYwIiBoZWlnaHQ9Ijk2IiBmaWxsPSIjMzUyZTQ0IiAvPgogICAgICA8cmVjdCBpZD0iciIgd2lkdGg9IjE2MCIgaGVpZ2h0PSI5NiIgZmlsbD0idXJsKCNnKSIgLz4KICAgICAgPGFuaW1hdGUgeGxpbms6aHJlZj0iI3IiIGF0dHJpYnV0ZU5hbWU9IngiIGZyb209Ii0xNjAiIHRvPSIxNjAiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogICAgPC9zdmc+")',
                        }}
                      />
                      <noscript>
                        <img
                          alt="Pickup"
                          light="true"
                          srcSet="/images/car-finder/icons/pickup.svg 1x, /images/car-finder/icons/pickup.svg 2x"
                          src="/images/car-finder/icons/pickup.svg"
                          decoding="async"
                          data-nimg="intrinsic"
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                            boxSizing: "border-box",
                            padding: 0,
                            border: "none",
                            margin: "auto",
                            display: "block",
                            width: 0,
                            height: 0,
                            minWidth: "100%",
                            maxWidth: "100%",
                            minHeight: "100%",
                            maxHeight: "100%",
                          }}
                          loading="lazy"
                        />
                      </noscript>
                    </span>
                  </div>
                  <a
                    className="nav-link-light stretched-link fw-bold"
                    href="/car-finder/catalog?view=grid"
                  >
                    Pickup
                  </a>
                </div>
              </div>
              <div className="col">
                <div className="card card-body card-light card-hover bg-transparent border-0 px-0 pt-0 text-center">
                  <div className="d-flex justify-content-center mb-3">
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "inline-block",
                        overflow: "hidden",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        position: "relative",
                        maxWidth: "100%",
                      }}
                    >
                      <span
                        style={{
                          boxSizing: "border-box",
                          display: "block",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0,
                          maxWidth: "100%",
                        }}
                      >
                        <img
                          style={{
                            display: "block",
                            maxWidth: "100%",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                          }}
                          alt=""
                          aria-hidden="true"
                          src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27160%27%20height=%2796%27/%3e"
                        />
                      </span>
                      <img
                        alt="Sport Coupe"
                        light="true"
                        src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                        decoding="async"
                        data-nimg="intrinsic"
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
                          boxSizing: "border-box",
                          padding: 0,
                          border: "none",
                          margin: "auto",
                          display: "block",
                          width: 0,
                          height: 0,
                          minWidth: "100%",
                          maxWidth: "100%",
                          minHeight: "100%",
                          maxHeight: "100%",
                          backgroundSize: "cover",
                          backgroundPosition: "0% 0%",
                          filter: "blur(20px)",
                          backgroundImage:
                            'url("data:image/svg+xml;base64,CiAgICA8c3ZnIHdpZHRoPSIxNjAiIGhlaWdodD0iOTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iZyI+CiAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMzUyZTQ0IiBvZmZzZXQ9IjIwJSIgLz4KICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMxZjFiMmQiIG9mZnNldD0iNTAlIiAvPgogICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzM1MmU0NCIgb2Zmc2V0PSI3MCUiIC8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgPC9kZWZzPgogICAgICA8cmVjdCB3aWR0aD0iMTYwIiBoZWlnaHQ9Ijk2IiBmaWxsPSIjMzUyZTQ0IiAvPgogICAgICA8cmVjdCBpZD0iciIgd2lkdGg9IjE2MCIgaGVpZ2h0PSI5NiIgZmlsbD0idXJsKCNnKSIgLz4KICAgICAgPGFuaW1hdGUgeGxpbms6aHJlZj0iI3IiIGF0dHJpYnV0ZU5hbWU9IngiIGZyb209Ii0xNjAiIHRvPSIxNjAiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogICAgPC9zdmc+")',
                        }}
                      />
                      <noscript>
                        <img
                          alt="Sport Coupe"
                          light="true"
                          srcSet="/images/car-finder/icons/sport.svg 1x, /images/car-finder/icons/sport.svg 2x"
                          src="/images/car-finder/icons/sport.svg"
                          decoding="async"
                          data-nimg="intrinsic"
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                            boxSizing: "border-box",
                            padding: 0,
                            border: "none",
                            margin: "auto",
                            display: "block",
                            width: 0,
                            height: 0,
                            minWidth: "100%",
                            maxWidth: "100%",
                            minHeight: "100%",
                            maxHeight: "100%",
                          }}
                          loading="lazy"
                        />
                      </noscript>
                    </span>
                  </div>
                  <a
                    className="nav-link-light stretched-link fw-bold"
                    href="/car-finder/catalog?view=list"
                  >
                    Sport Coupe
                  </a>
                </div>
              </div>
              <div className="col">
                <div className="card card-body card-light card-hover bg-transparent border-0 px-0 pt-0 text-center">
                  <div className="d-flex justify-content-center mb-3">
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "inline-block",
                        overflow: "hidden",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        position: "relative",
                        maxWidth: "100%",
                      }}
                    >
                      <span
                        style={{
                          boxSizing: "border-box",
                          display: "block",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0,
                          maxWidth: "100%",
                        }}
                      >
                        <img
                          style={{
                            display: "block",
                            maxWidth: "100%",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                          }}
                          alt=""
                          aria-hidden="true"
                          src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27160%27%20height=%2796%27/%3e"
                        />
                      </span>
                      <img
                        alt="Sport Coupe"
                        light="true"
                        src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                        decoding="async"
                        data-nimg="intrinsic"
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
                          boxSizing: "border-box",
                          padding: 0,
                          border: "none",
                          margin: "auto",
                          display: "block",
                          width: 0,
                          height: 0,
                          minWidth: "100%",
                          maxWidth: "100%",
                          minHeight: "100%",
                          maxHeight: "100%",
                          backgroundSize: "cover",
                          backgroundPosition: "0% 0%",
                          filter: "blur(20px)",
                          backgroundImage:
                            'url("data:image/svg+xml;base64,CiAgICA8c3ZnIHdpZHRoPSIxNjAiIGhlaWdodD0iOTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iZyI+CiAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMzUyZTQ0IiBvZmZzZXQ9IjIwJSIgLz4KICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMxZjFiMmQiIG9mZnNldD0iNTAlIiAvPgogICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzM1MmU0NCIgb2Zmc2V0PSI3MCUiIC8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgPC9kZWZzPgogICAgICA8cmVjdCB3aWR0aD0iMTYwIiBoZWlnaHQ9Ijk2IiBmaWxsPSIjMzUyZTQ0IiAvPgogICAgICA8cmVjdCBpZD0iciIgd2lkdGg9IjE2MCIgaGVpZ2h0PSI5NiIgZmlsbD0idXJsKCNnKSIgLz4KICAgICAgPGFuaW1hdGUgeGxpbms6aHJlZj0iI3IiIGF0dHJpYnV0ZU5hbWU9IngiIGZyb209Ii0xNjAiIHRvPSIxNjAiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogICAgPC9zdmc+")',
                        }}
                      />
                      <noscript>
                        <img
                          alt="Sport Coupe"
                          light="true"
                          srcSet="/images/car-finder/icons/sport.svg 1x, /images/car-finder/icons/sport.svg 2x"
                          src="/images/car-finder/icons/sport.svg"
                          decoding="async"
                          data-nimg="intrinsic"
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                            boxSizing: "border-box",
                            padding: 0,
                            border: "none",
                            margin: "auto",
                            display: "block",
                            width: 0,
                            height: 0,
                            minWidth: "100%",
                            maxWidth: "100%",
                            minHeight: "100%",
                            maxHeight: "100%",
                          }}
                          loading="lazy"
                        />
                      </noscript>
                    </span>
                  </div>
                  <a
                    className="nav-link-light stretched-link fw-bold"
                    href="/car-finder/catalog?view=grid"
                  >
                    Compact
                  </a>
                </div>
              </div>
              <div className="col">
                <div className="card card-body card-light card-hover bg-transparent border-0 px-0 pt-0 text-center">
                  <div className="d-flex justify-content-center mb-3">
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "inline-block",
                        overflow: "hidden",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        position: "relative",
                        maxWidth: "100%",
                      }}
                    >
                      <span
                        style={{
                          boxSizing: "border-box",
                          display: "block",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0,
                          maxWidth: "100%",
                        }}
                      >
                        <img
                          style={{
                            display: "block",
                            maxWidth: "100%",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                          }}
                          alt=""
                          aria-hidden="true"
                          src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27160%27%20height=%2796%27/%3e"
                        />
                      </span>
                      <img
                        alt="Sport Coupe"
                        light="true"
                        src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                        decoding="async"
                        data-nimg="intrinsic"
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
                          boxSizing: "border-box",
                          padding: 0,
                          border: "none",
                          margin: "auto",
                          display: "block",
                          width: 0,
                          height: 0,
                          minWidth: "100%",
                          maxWidth: "100%",
                          minHeight: "100%",
                          maxHeight: "100%",
                          backgroundSize: "cover",
                          backgroundPosition: "0% 0%",
                          filter: "blur(20px)",
                          backgroundImage:
                            'url("data:image/svg+xml;base64,CiAgICA8c3ZnIHdpZHRoPSIxNjAiIGhlaWdodD0iOTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iZyI+CiAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMzUyZTQ0IiBvZmZzZXQ9IjIwJSIgLz4KICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMxZjFiMmQiIG9mZnNldD0iNTAlIiAvPgogICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzM1MmU0NCIgb2Zmc2V0PSI3MCUiIC8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgPC9kZWZzPgogICAgICA8cmVjdCB3aWR0aD0iMTYwIiBoZWlnaHQ9Ijk2IiBmaWxsPSIjMzUyZTQ0IiAvPgogICAgICA8cmVjdCBpZD0iciIgd2lkdGg9IjE2MCIgaGVpZ2h0PSI5NiIgZmlsbD0idXJsKCNnKSIgLz4KICAgICAgPGFuaW1hdGUgeGxpbms6aHJlZj0iI3IiIGF0dHJpYnV0ZU5hbWU9IngiIGZyb209Ii0xNjAiIHRvPSIxNjAiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogICAgPC9zdmc+")',
                        }}
                      />
                      <noscript>
                        <img
                          alt="Sport Coupe"
                          light="true"
                          srcSet="/images/car-finder/icons/sport.svg 1x, /images/car-finder/icons/sport.svg 2x"
                          src="/images/car-finder/icons/sport.svg"
                          decoding="async"
                          data-nimg="intrinsic"
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                            boxSizing: "border-box",
                            padding: 0,
                            border: "none",
                            margin: "auto",
                            display: "block",
                            width: 0,
                            height: 0,
                            minWidth: "100%",
                            maxWidth: "100%",
                            minHeight: "100%",
                            maxHeight: "100%",
                          }}
                          loading="lazy"
                        />
                      </noscript>
                    </span>
                  </div>
                  <a
                    className="nav-link-light stretched-link fw-bold"
                    href="/car-finder/catalog?view=list"
                  >
                    Convertible
                  </a>
                </div>
              </div>
              <div className="col">
                <div className="card card-body card-light card-hover bg-transparent border-0 px-0 pt-0 text-center">
                  <div className="d-flex justify-content-center mb-3">
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "inline-block",
                        overflow: "hidden",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        position: "relative",
                        maxWidth: "100%",
                      }}
                    >
                      <span
                        style={{
                          boxSizing: "border-box",
                          display: "block",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0,
                          maxWidth: "100%",
                        }}
                      >
                        <img
                          style={{
                            display: "block",
                            maxWidth: "100%",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                          }}
                          alt=""
                          aria-hidden="true"
                          src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27160%27%20height=%2796%27/%3e"
                        />
                      </span>
                      <img
                        alt="Sport Coupe"
                        light="true"
                        src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                        decoding="async"
                        data-nimg="intrinsic"
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
                          boxSizing: "border-box",
                          padding: 0,
                          border: "none",
                          margin: "auto",
                          display: "block",
                          width: 0,
                          height: 0,
                          minWidth: "100%",
                          maxWidth: "100%",
                          minHeight: "100%",
                          maxHeight: "100%",
                          backgroundSize: "cover",
                          backgroundPosition: "0% 0%",
                          filter: "blur(20px)",
                          backgroundImage:
                            'url("data:image/svg+xml;base64,CiAgICA8c3ZnIHdpZHRoPSIxNjAiIGhlaWdodD0iOTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iZyI+CiAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMzUyZTQ0IiBvZmZzZXQ9IjIwJSIgLz4KICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMxZjFiMmQiIG9mZnNldD0iNTAlIiAvPgogICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzM1MmU0NCIgb2Zmc2V0PSI3MCUiIC8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgPC9kZWZzPgogICAgICA8cmVjdCB3aWR0aD0iMTYwIiBoZWlnaHQ9Ijk2IiBmaWxsPSIjMzUyZTQ0IiAvPgogICAgICA8cmVjdCBpZD0iciIgd2lkdGg9IjE2MCIgaGVpZ2h0PSI5NiIgZmlsbD0idXJsKCNnKSIgLz4KICAgICAgPGFuaW1hdGUgeGxpbms6aHJlZj0iI3IiIGF0dHJpYnV0ZU5hbWU9IngiIGZyb209Ii0xNjAiIHRvPSIxNjAiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogICAgPC9zdmc+")',
                        }}
                      />
                      <noscript>
                        <img
                          alt="Sport Coupe"
                          light="true"
                          srcSet="/images/car-finder/icons/sport.svg 1x, /images/car-finder/icons/sport.svg 2x"
                          src="/images/car-finder/icons/sport.svg"
                          decoding="async"
                          data-nimg="intrinsic"
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                            boxSizing: "border-box",
                            padding: 0,
                            border: "none",
                            margin: "auto",
                            display: "block",
                            width: 0,
                            height: 0,
                            minWidth: "100%",
                            maxWidth: "100%",
                            minHeight: "100%",
                            maxHeight: "100%",
                          }}
                          loading="lazy"
                        />
                      </noscript>
                    </span>
                  </div>
                  <a
                    className="nav-link-light stretched-link fw-bold"
                    href="/car-finder/catalog?view=grid"
                  >
                    Family MPV
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className="pt-sm-1 pb-5 mb-md-4 container">
            <div className="d-sm-flex align-items-center justify-content-between mb-4 pb-sm-2">
              <h2 className="h3 text-light mb-2 mb-sm-0">Top offers</h2>
              <a
                role="button"
                tabIndex="0"
                className="btn btn-link btn-light fw-normal px-0"
                href="/car-finder/catalog?view=list"
              >
                View all offers
                <i className="fi-arrow-long-right fs-sm mt-0 ps-1 ms-2"></i>
              </a>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="card card-light card-hover h-lg-100 mb-4 mb-lg-0">
                  <div className="swiper card-img-top card-img-hover">
                    <div className="swiper-wrapper">
                      <div
                        className="swiper-slide d-flex swiper-slide-duplicate"
                        data-swiper-slide-index="1"
                      >
                        <span
                          style={{
                            boxSizing: "border-box",
                            display: "inline-block",
                            overflow: "hidden",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                            position: "relative",
                            maxWidth: "100%",
                          }}
                        >
                          <span
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: 1,
                              border: 0,
                              margin: 0,
                              padding: 0,
                              maxWidth: "100%",
                            }}
                          >
                            <img
                              style={{
                                display: "block",
                                maxWidth: "100%",
                                width: "initial",
                                height: "initial",
                                background: "none",
                                opacity: 1,
                                border: 0,
                                margin: 0,
                                padding: 0,
                              }}
                              alt=""
                              aria-hidden="true"
                              src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27965%27%20height=%27400%27/%3e"
                            />
                          </span>
                          <img
                            alt="Image"
                            light="1"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                            decoding="async"
                            data-nimg="intrinsic"
                            style={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              bottom: 0,
                              right: 0,
                              boxSizing: "border-box",
                              padding: 0,
                              border: "none",
                              margin: "auto",
                              display: "block",
                              width: 0,
                              height: 0,
                              minWidth: "100%",
                              maxWidth: "100%",
                              minHeight: "100%",
                              maxHeight: "100%",
                              backgroundSize: "cover",
                              backgroundPosition: "0% 0%",
                              filter: "blur(20px)",
                              backgroundImage:
                                'url("data:image/svg+xml;base64,CiAgICA8c3ZnIHdpZHRoPSI5NjUiIGhlaWdodD0iNDAwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImciPgogICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzM1MmU0NCIgb2Zmc2V0PSIyMCUiIC8+CiAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMWYxYjJkIiBvZmZzZXQ9IjUwJSIgLz4KICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMzNTJlNDQiIG9mZnNldD0iNzAlIiAvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgIDwvZGVmcz4KICAgICAgPHJlY3Qgd2lkdGg9Ijk2NSIgaGVpZ2h0PSI0MDAiIGZpbGw9IiMzNTJlNDQiIC8+CiAgICAgIDxyZWN0IGlkPSJyIiB3aWR0aD0iOTY1IiBoZWlnaHQ9IjQwMCIgZmlsbD0idXJsKCNnKSIgLz4KICAgICAgPGFuaW1hdGUgeGxpbms6aHJlZj0iI3IiIGF0dHJpYnV0ZU5hbWU9IngiIGZyb209Ii05NjUiIHRvPSI5NjUiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogICAgPC9zdmc+")',
                            }}
                          />
                          <noscript>
                            <img
                              alt="Image"
                              light="1"
                              srcSet="/_next/image?url=%2Fimages%2Fcar-finder%2Fcatalog%2F17.jpg&amp;w=1080&amp;q=75 1x, /_next/image?url=%2Fimages%2Fcar-finder%2Fcatalog%2F17.jpg&amp;w=2048&amp;q=75 2x"
                              src="/_next/image?url=%2Fimages%2Fcar-finder%2Fcatalog%2F17.jpg&amp;w=2048&amp;q=75"
                              decoding="async"
                              data-nimg="intrinsic"
                              style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                bottom: 0,
                                right: 0,
                                boxSizing: "border-box",
                                padding: 0,
                                border: "none",
                                margin: "auto",
                                display: "block",
                                width: 0,
                                height: 0,
                                minWidth: "100%",
                                maxWidth: "100%",
                                minHeight: "100%",
                                maxHeight: "100%",
                              }}
                              loading="lazy"
                            />
                          </noscript>
                        </span>
                      </div>
                      <div
                        className="swiper-slide d-flex"
                        data-swiper-slide-index="0"
                      >
                        <span
                          style={{
                            boxSizing: "border-box",
                            display: "inline-block",
                            overflow: "hidden",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                            position: "relative",
                            maxWidth: "100%",
                          }}
                        >
                          <span
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: 1,
                              border: 0,
                              margin: 0,
                              padding: 0,
                              maxWidth: "100%",
                            }}
                          >
                            <img
                              style={{
                                display: "block",
                                maxWidth: "100%",
                                width: "initial",
                                height: "initial",
                                background: "none",
                                opacity: 1,
                                border: 0,
                                margin: 0,
                                padding: 0,
                              }}
                              alt=""
                              aria-hidden="true"
                              src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27965%27%20height=%27400%27/%3e"
                            />
                          </span>
                          <img
                            alt="Image"
                            light="1"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                            decoding="async"
                            data-nimg="intrinsic"
                            style={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              bottom: 0,
                              right: 0,
                              boxSizing: "border-box",
                              padding: 0,
                              border: "none",
                              margin: "auto",
                              display: "block",
                              width: 0,
                              height: 0,
                              minWidth: "100%",
                              maxWidth: "100%",
                              minHeight: "100%",
                              maxHeight: "100%",
                              backgroundSize: "cover",
                              backgroundPosition: "0% 0%",
                              filter: "blur(20px)",
                              backgroundImage:
                                'url("data:image/svg+xml;base64,CiAgICA8c3ZnIHdpZHRoPSI5NjUiIGhlaWdodD0iNDAwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImciPgogICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzM1MmU0NCIgb2Zmc2V0PSIyMCUiIC8+CiAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMWYxYjJkIiBvZmZzZXQ9IjUwJSIgLz4KICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMzNTJlNDQiIG9mZnNldD0iNzAlIiAvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgIDwvZGVmcz4KICAgICAgPHJlY3Qgd2lkdGg9Ijk2NSIgaGVpZ2h0PSI0MDAiIGZpbGw9IiMzNTJlNDQiIC8+CiAgICAgIDxyZWN0IGlkPSJyIiB3aWR0aD0iOTY1IiBoZWlnaHQ9IjQwMCIgZmlsbD0idXJsKCNnKSIgLz4KICAgICAgPGFuaW1hdGUgeGxpbms6aHJlZj0iI3IiIGF0dHJpYnV0ZU5hbWU9IngiIGZyb209Ii05NjUiIHRvPSI5NjUiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogICAgPC9zdmc+")',
                            }}
                          />
                          <noscript>
                            <img
                              alt="Image"
                              light="1"
                              srcSet="/_next/image?url=%2Fimages%2Fcar-finder%2Fcatalog%2F17.jpg&amp;w=1080&amp;q=75 1x, /_next/image?url=%2Fimages%2Fcar-finder%2Fcatalog%2F17.jpg&amp;w=2048&amp;q=75 2x"
                              src="/_next/image?url=%2Fimages%2Fcar-finder%2Fcatalog%2F17.jpg&amp;w=2048&amp;q=75"
                              decoding="async"
                              data-nimg="intrinsic"
                              style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                bottom: 0,
                                right: 0,
                                boxSizing: "border-box",
                                padding: 0,
                                border: "none",
                                margin: "auto",
                                display: "block",
                                width: 0,
                                height: 0,
                                minWidth: "100%",
                                maxWidth: "100%",
                                minHeight: "100%",
                                maxHeight: "100%",
                              }}
                              loading="lazy"
                            />
                          </noscript>
                        </span>
                      </div>
                      <div
                        className="swiper-slide d-flex"
                        data-swiper-slide-index="1"
                      >
                        <span
                          style={{
                            boxSizing: "border-box",
                            display: "inline-block",
                            overflow: "hidden",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                            position: "relative",
                            maxWidth: "100%",
                          }}
                        >
                          <span
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: 1,
                              border: 0,
                              margin: 0,
                              padding: 0,
                              maxWidth: "100%",
                            }}
                          >
                            <img
                              style={{
                                display: "block",
                                maxWidth: "100%",
                                width: "initial",
                                height: "initial",
                                background: "none",
                                opacity: 1,
                                border: 0,
                                margin: 0,
                                padding: 0,
                              }}
                              alt=""
                              aria-hidden="true"
                              src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27965%27%20height=%27400%27/%3e"
                            />
                          </span>
                          <img
                            alt="Image"
                            light="1"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                            decoding="async"
                            data-nimg="intrinsic"
                            style={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              bottom: 0,
                              right: 0,
                              boxSizing: "border-box",
                              padding: 0,
                              border: "none",
                              margin: "auto",
                              display: "block",
                              width: 0,
                              height: 0,
                              minWidth: "100%",
                              maxWidth: "100%",
                              minHeight: "100%",
                              maxHeight: "100%",
                              backgroundSize: "cover",
                              backgroundPosition: "0% 0%",
                              filter: "blur(20px)",
                              backgroundImage:
                                'url("data:image/svg+xml;base64,CiAgICA8c3ZnIHdpZHRoPSI5NjUiIGhlaWdodD0iNDAwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImciPgogICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzM1MmU0NCIgb2Zmc2V0PSIyMCUiIC8+CiAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMWYxYjJkIiBvZmZzZXQ9IjUwJSIgLz4KICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMzNTJlNDQiIG9mZnNldD0iNzAlIiAvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgIDwvZGVmcz4KICAgICAgPHJlY3Qgd2lkdGg9Ijk2NSIgaGVpZ2h0PSI0MDAiIGZpbGw9IiMzNTJlNDQiIC8+CiAgICAgIDxyZWN0IGlkPSJyIiB3aWR0aD0iOTY1IiBoZWlnaHQ9IjQwMCIgZmlsbD0idXJsKCNnKSIgLz4KICAgICAgPGFuaW1hdGUgeGxpbms6aHJlZj0iI3IiIGF0dHJpYnV0ZU5hbWU9IngiIGZyb209Ii05NjUiIHRvPSI5NjUiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogICAgPC9zdmc+")',
                            }}
                          />
                          <noscript>
                            <img
                              alt="Image"
                              light="1"
                              srcSet="/_next/image?url=%2Fimages%2Fcar-finder%2Fcatalog%2F17.jpg&amp;w=1080&amp;q=75 1x, /_next/image?url=%2Fimages%2Fcar-finder%2Fcatalog%2F17.jpg&amp;w=2048&amp;q=75 2x"
                              src="/_next/image?url=%2Fimages%2Fcar-finder%2Fcatalog%2F17.jpg&amp;w=2048&amp;q=75"
                              decoding="async"
                              data-nimg="intrinsic"
                              style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                bottom: 0,
                                right: 0,
                                boxSizing: "border-box",
                                padding: 0,
                                border: "none",
                                margin: "auto",
                                display: "block",
                                width: 0,
                                height: 0,
                                minWidth: "100%",
                                maxWidth: "100%",
                                minHeight: "100%",
                                maxHeight: "100%",
                              }}
                              loading="lazy"
                            />
                          </noscript>
                        </span>
                      </div>
                      <div
                        className="swiper-slide d-flex swiper-slide-duplicate"
                        data-swiper-slide-index="0"
                      >
                        <span
                          style={{
                            boxSizing: "border-box",
                            display: "inline-block",
                            overflow: "hidden",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                            position: "relative",
                            maxWidth: "100%",
                          }}
                        >
                          <span
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: 1,
                              border: 0,
                              margin: 0,
                              padding: 0,
                              maxWidth: "100%",
                            }}
                          >
                            <img
                              style={{
                                display: "block",
                                maxWidth: "100%",
                                width: "initial",
                                height: "initial",
                                background: "none",
                                opacity: 1,
                                border: 0,
                                margin: 0,
                                padding: 0,
                              }}
                              alt=""
                              aria-hidden="true"
                              src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27965%27%20height=%27400%27/%3e"
                            />
                          </span>
                          <img
                            alt="Image"
                            light="1"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                            decoding="async"
                            data-nimg="intrinsic"
                            style={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              bottom: 0,
                              right: 0,
                              boxSizing: "border-box",
                              padding: 0,
                              border: "none",
                              margin: "auto",
                              display: "block",
                              width: 0,
                              height: 0,
                              minWidth: "100%",
                              maxWidth: "100%",
                              minHeight: "100%",
                              maxHeight: "100%",
                              backgroundSize: "cover",
                              backgroundPosition: "0% 0%",
                              filter: "blur(20px)",
                              backgroundImage:
                                'url("data:image/svg+xml;base64,CiAgICA8c3ZnIHdpZHRoPSI5NjUiIGhlaWdodD0iNDAwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImciPgogICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzM1MmU0NCIgb2Zmc2V0PSIyMCUiIC8+CiAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMWYxYjJkIiBvZmZzZXQ9IjUwJSIgLz4KICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMzNTJlNDQiIG9mZnNldD0iNzAlIiAvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgIDwvZGVmcz4KICAgICAgPHJlY3Qgd2lkdGg9Ijk2NSIgaGVpZ2h0PSI0MDAiIGZpbGw9IiMzNTJlNDQiIC8+CiAgICAgIDxyZWN0IGlkPSJyIiB3aWR0aD0iOTY1IiBoZWlnaHQ9IjQwMCIgZmlsbD0idXJsKCNnKSIgLz4KICAgICAgPGFuaW1hdGUgeGxpbms6aHJlZj0iI3IiIGF0dHJpYnV0ZU5hbWU9IngiIGZyb209Ii05NjUiIHRvPSI5NjUiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogICAgPC9zdmc+")',
                            }}
                          />
                          <noscript>
                            <img
                              alt="Image"
                              light="1"
                              srcSet="/_next/image?url=%2Fimages%2Fcar-finder%2Fcatalog%2F17.jpg&amp;w=1080&amp;q=75 1x, /_next/image?url=%2Fimages%2Fcar-finder%2Fcatalog%2F17.jpg&amp;w=2048&amp;q=75 2x"
                              src="/_next/image?url=%2Fimages%2Fcar-finder%2Fcatalog%2F17.jpg&amp;w=2048&amp;q=75"
                              decoding="async"
                              data-nimg="intrinsic"
                              style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                bottom: 0,
                                right: 0,
                                boxSizing: "border-box",
                                padding: 0,
                                border: "none",
                                margin: "auto",
                                display: "block",
                                width: 0,
                                height: 0,
                                minWidth: "100%",
                                maxWidth: "100%",
                                minHeight: "100%",
                                maxHeight: "100%",
                              }}
                              loading="lazy"
                            />
                          </noscript>
                        </span>
                      </div>
                    </div>
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                    <a className="img-overlay" href="/car-finder/single"></a>
                    <div className="position-absolute start-0 top-0 pt-3 ps-3">
                      <span className="d-table badge bg-info mb-1">Used</span>
                      <span className="d-table badge bg-success mb-1">
                        Certified
                      </span>
                    </div>
                    <div className="content-overlay end-0 top-0 pt-3 pe-3">
                      <button
                        type="button"
                        className="btn btn-icon btn-light btn-xs text-primary rounded-circle"
                      >
                        <i className="fi-heart"></i>
                      </button>
                    </div>
                  </div>

                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between pb-1">
                      <span className="fs-sm text-light me-3">2015</span>
                      <div className="form-check form-check-light">
                        <label className="form-check-label">
                          <input type="checkbox" className="form-check-input" />
                          <span className="fs-sm">Compare</span>
                        </label>
                      </div>
                    </div>
                    <h3 className="h6 mb-1">
                      <a className="nav-link-light" href="/car-finder/single">
                        Mercedes Benz Convertible Coupe
                      </a>
                    </h3>
                    <div className="text-primary fw-bold mb-1">$25,800</div>
                    <div className="fs-sm text-light opacity-70">
                      <i className="fi-map-pin me-1"></i>
                      New York
                    </div>
                  </div>
                  <div className="card-footer border-0 pt-0">
                    <div className="border-top border-light pt-3">
                      <div className="me-n1">
                        <div className="row g-2">
                          <div className="col me-sm-1">
                            <div className="bg-dark text-light rounded text-center w-100 h-100 text-nowrap p-2">
                              <i className="fi-dashboard text-light d-block h4 mb-0"></i>
                              <span className="fs-xs">48K mi</span>
                            </div>
                          </div>
                          <div className="col me-sm-1">
                            <div className="bg-dark text-light rounded text-center w-100 h-100 text-nowrap p-2">
                              <i className="fi-gearbox text-light d-block h4 mb-0"></i>
                              <span className="fs-xs">Automatic</span>
                            </div>
                          </div>
                          <div className="col me-sm-1">
                            <div className="bg-dark text-light rounded text-center w-100 h-100 text-nowrap p-2">
                              <i className="fi-petrol text-light d-block h4 mb-0"></i>
                              <span className="fs-xs">Gasoline</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card card-light card-hover card-horizontal mb-4">
                  <div className="swiper card-img-top card-img-hover">
                    <div className="swiper-wrapper">
                      <div
                        className="swiper-slide d-flex swiper-slide-duplicate"
                        data-swiper-slide-index="1"
                      >
                        <span
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            overflow: "hidden",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                            position: "absolute",
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                          }}
                        >
                          <img
                            alt="Image"
                            light="1"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                            decoding="async"
                            data-nimg="fill"
                            style={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              bottom: 0,
                              right: 0,
                              boxSizing: "border-box",
                              padding: 0,
                              border: "none",
                              margin: "auto",
                              display: "block",
                              width: 0,
                              height: 0,
                              minWidth: "100%",
                              maxWidth: "100%",
                              minHeight: "100%",
                              maxHeight: "100%",
                              objectFit: "cover",
                              backgroundSize: "cover",
                              backgroundPosition: "0% 0%",
                              filter: "blur(20px)",
                              backgroundImage:
                                'url("data:image/svg+xml;base64,CiAgICA8c3ZnIHdpZHRoPSJ1bmRlZmluZWQiIGhlaWdodD0idW5kZWZpbmVkIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImciPgogICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzM1MmU0NCIgb2Zmc2V0PSIyMCUiIC8+CiAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMWYxYjJkIiBvZmZzZXQ9IjUwJSIgLz4KICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMzNTJlNDQiIG9mZnNldD0iNzAlIiAvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgIDwvZGVmcz4KICAgICAgPHJlY3Qgd2lkdGg9InVuZGVmaW5lZCIgaGVpZ2h0PSJ1bmRlZmluZWQiIGZpbGw9IiMzNTJlNDQiIC8+CiAgICAgIDxyZWN0IGlkPSJyIiB3aWR0aD0idW5kZWZpbmVkIiBoZWlnaHQ9InVuZGVmaW5lZCIgZmlsbD0idXJsKCNnKSIgLz4KICAgICAgPGFuaW1hdGUgeGxpbms6aHJlZj0iI3IiIGF0dHJpYnV0ZU5hbWU9IngiIGZyb209Ii11bmRlZmluZWQiIHRvPSJ1bmRlZmluZWQiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogICAgPC9zdmc+")',
                            }}
                          />
                          <noscript>
                            <img
                              alt="Image"
                              light="1"
                              sizes="100vw"
                              srcSet="/_next/image?url=%2Fimages%2Fcar-finder%2Fcatalog%2F09.jpg&amp;w=640&amp;q=100 640w, /_next/image?url=%2Fimages%2Fcar-finder%2Fcatalog%2F09.jpg&amp;w=750&amp;q=100 750w, /_next/image?url=%2Fimages%2Fcar-finder%2Fcatalog%2F09.jpg&amp;w=828&amp;q=100 828w, /_next/image?url=%2Fimages%2Fcar-finder%2Fcatalog%2F09.jpg&amp;w=1080&amp;q=100 1080w, /_next/image?url=%2Fimages%2Fcar-finder%2Fcatalog%2F09.jpg&amp;w=1200&amp;q=100 1200w, /_next/image?url=%2Fimages%2Fcar-finder%2Fcatalog%2F09.jpg&amp;w=1920&amp;q=100 1920w, /_next/image?url=%2Fimages%2Fcar-finder%2Fcatalog%2F09.jpg&amp;w=2048&amp;q=100 2048w, /_next/image?url=%2Fimages%2Fcar-finder%2Fcatalog%2F09.jpg&amp;w=3840&amp;q=100 3840w"
                              src="/_next/image?url=%2Fimages%2Fcar-finder%2Fcatalog%2F09.jpg&amp;w=3840&amp;q=100"
                              decoding="async"
                              data-nimg="fill"
                              style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                bottom: 0,
                                right: 0,
                                boxSizing: "border-box",
                                padding: 0,
                                border: "none",
                                margin: "auto",
                                display: "block",
                                width: 0,
                                height: 0,
                                minWidth: "100%",
                                maxWidth: "100%",
                                minHeight: "100%",
                                maxHeight: "100%",
                                objectFit: "cover",
                              }}
                              loading="lazy"
                            />
                          </noscript>
                        </span>
                      </div>
                      <div
                        className="swiper-slide d-flex"
                        data-swiper-slide-index="0"
                      >
                        <span
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            overflow: "hidden",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                            position: "absolute",
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                          }}
                        >
                          <img
                            alt="Image"
                            light="1"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                            decoding="async"
                            data-nimg="fill"
                            style={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              bottom: 0,
                              right: 0,
                              boxSizing: "border-box",
                              padding: 0,
                              border: "none",
                              margin: "auto",
                              display: "block",
                              width: 0,
                              height: 0,
                              minWidth: "100%",
                              maxWidth: "100%",
                              minHeight: "100%",
                              maxHeight: "100%",
                              objectFit: "cover",
                              backgroundSize: "cover",
                              backgroundPosition: "0% 0%",
                              filter: "blur(20px)",
                              backgroundImage:
                                'url("data:image/svg+xml;base64,CiAgICA8c3ZnIHdpZHRoPSJ1bmRlZmluZWQiIGhlaWdodD0idW5kZWZpbmVkIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImciPgogICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzM1MmU0NCIgb2Zmc2V0PSIyMCUiIC8+CiAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMWYxYjJkIiBvZmZzZXQ9IjUwJSIgLz4KICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMzNTJlNDQiIG9mZnNldD0iNzAlIiAvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgIDwvZGVmcz4KICAgICAgPHJlY3Qgd2lkdGg9InVuZGVmaW5lZCIgaGVpZ2h0PSJ1bmRlZmluZWQiIGZpbGw9IiMzNTJlNDQiIC8+CiAgICAgIDxyZWN0IGlkPSJyIiB3aWR0aD0idW5kZWZpbmVkIiBoZWlnaHQ9InVuZGVmaW5lZCIgZmlsbD0idXJsKCNnKSIgLz4KICAgICAgPGFuaW1hdGUgeGxpbms6aHJlZj0iI3IiIGF0dHJpYnV0ZU5hbWU9IngiIGZyb209Ii11bmRlZmluZWQiIHRvPSJ1bmRlZmluZWQiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogICAgPC9zdmc+")',
                            }}
                          />
                          <noscript>
                            <img
                              alt="Image"
                              light="1"
                              sizes="100vw"
                              srcSet="/_next/image?url=%2Fimages%2Fcar-finder%2Fcatalog%2F09.jpg&amp;w=640&amp;q=100 640w, /_next/image?url=%2Fimages%2Fcar-finder%2Fcatalog%2F09.jpg&amp;w=750&amp;q=100 750w, /_next/image?url=%2Fimages%2Fcar-finder%2Fcatalog%2F09.jpg&amp;w=828&amp;q=100 828w, /_next/image?url=%2Fimages%2Fcar-finder%2Fcatalog%2F09.jpg&amp;w=1080&amp;q=100 1080w, /_next/image?url=%2Fimages%2Fcar-finder%2Fcatalog%2F09.jpg&amp;w=1200&amp;q=100 1200w, /_next/image?url=%2Fimages%2Fcar-finder%2Fcatalog%2F09.jpg&amp;w=1920&amp;q=100 1920w, /_next/image?url=%2Fimages%2Fcar-finder%2Fcatalog%2F09.jpg&amp;w=2048&amp;q=100 2048w, /_next/image?url=%2Fimages%2Fcar-finder%2Fcatalog%2F09.jpg&amp;w=3840&amp;q=100 3840w"
                              src="/_next/image?url=%2Fimages%2Fcar-finder%2Fcatalog%2F09.jpg&amp;w=3840&amp;q=100"
                              decoding="async"
                              data-nimg="fill"
                              style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                bottom: 0,
                                right: 0,
                                boxSizing: "border-box",
                                padding: 0,
                                border: "none",
                                margin: "auto",
                                display: "block",
                                width: 0,
                                height: 0,
                                minWidth: "100%",
                                maxWidth: "100%",
                                minHeight: "100%",
                                maxHeight: "100%",
                                objectFit: "cover",
                              }}
                              loading="lazy"
                            />
                          </noscript>
                        </span>
                      </div>
                      <div
                        className="swiper-slide d-flex"
                        data-swiper-slide-index="1"
                      >
                        <span
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            overflow: "hidden",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                            position: "absolute",
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                          }}
                        >
                          <img
                            alt="Image"
                            light="1"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                            decoding="async"
                            data-nimg="fill"
                            style={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              bottom: 0,
                              right: 0,
                              boxSizing: "border-box",
                              padding: 0,
                              border: "none",
                              margin: "auto",
                              display: "block",
                              width: 0,
                              height: 0,
                              minWidth: "100%",
                              maxWidth: "100%",
                              minHeight: "100%",
                              maxHeight: "100%",
                              objectFit: "cover",
                              backgroundSize: "cover",
                              backgroundPosition: "0% 0%",
                              filter: "blur(20px)",
                              backgroundImage:
                                'url("data:image/svg+xml;base64,CiAgICA8c3ZnIHdpZHRoPSJ1bmRlZmluZWQiIGhlaWdodD0idW5kZWZpbmVkIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImciPgogICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzM1MmU0NCIgb2Zmc2V0PSIyMCUiIC8+CiAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMWYxYjJkIiBvZmZzZXQ9IjUwJSIgLz4KICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMzNTJlNDQiIG9mZnNldD0iNzAlIiAvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgIDwvZGVmcz4KICAgICAgPHJlY3Qgd2lkdGg9InVuZGVmaW5lZCIgaGVpZ2h0PSJ1bmRlZmluZWQiIGZpbGw9IiMzNTJlNDQiIC8+CiAgICAgIDxyZWN0IGlkPSJyIiB3aWR0aD0idW5kZWZpbmVkIiBoZWlnaHQ9InVuZGVmaW5lZCIgZmlsbD0idXJsKCNnKSIgLz4KICAgICAgPGFuaW1hdGUgeGxpbms6aHJlZj0iI3IiIGF0dHJpYnV0ZU5hbWU9IngiIGZyb209Ii11bmRlZmluZWQiIHRvPSJ1bmRlZmluZWQiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogICAgPC9zdmc+")',
                            }}
                          />
                          <noscript>
                            <img
                              alt="Image"
                              light="1"
                              sizes="100vw"
                              srcSet="/_next/image?url=%2Fimages%2Fcar-finder%2Fcatalog%2F09.jpg&amp;w=640&amp;q=100 640w, /_next/image?url=%2Fimages%2Fcar-finder%2Fcatalog%2F09.jpg&amp;w=750&amp;q=100 750w, /_next/image?url=%2Fimages%2Fcar-finder%2Fcatalog%2F09.jpg&amp;w=828&amp;q=100 828w, /_next/image?url=%2Fimages%2Fcar-finder%2Fcatalog%2F09.jpg&amp;w=1080&amp;q=100 1080w, /_next/image?url=%2Fimages%2Fcar-finder%2Fcatalog%2F09.jpg&amp;w=1200&amp;q=100 1200w, /_next/image?url=%2Fimages%2Fcar-finder%2Fcatalog%2F09.jpg&amp;w=1920&amp;q=100 1920w, /_next/image?url=%2Fimages%2Fcar-finder%2Fcatalog%2F09.jpg&amp;w=2048&amp;q=100 2048w, /_next/image?url=%2Fimages%2Fcar-finder%2Fcatalog%2F09.jpg&amp;w=3840&amp;q=100 3840w"
                              src="/_next/image?url=%2Fimages%2Fcar-finder%2Fcatalog%2F09.jpg&amp;w=3840&amp;q=100"
                              decoding="async"
                              data-nimg="fill"
                              style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                bottom: 0,
                                right: 0,
                                boxSizing: "border-box",
                                padding: 0,
                                border: "none",
                                margin: "auto",
                                display: "block",
                                width: 0,
                                height: 0,
                                minWidth: "100%",
                                maxWidth: "100%",
                                minHeight: "100%",
                                maxHeight: "100%",
                                objectFit: "cover",
                              }}
                              loading="lazy"
                            />
                          </noscript>
                        </span>
                      </div>
                      <div
                        className="swiper-slide d-flex swiper-slide-duplicate"
                        data-swiper-slide-index="0"
                      >
                        <span
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            overflow: "hidden",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                            position: "absolute",
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                          }}
                        >
                          <img
                            alt="Image"
                            light="1"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                            decoding="async"
                            data-nimg="fill"
                            style={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              bottom: 0,
                              right: 0,
                              boxSizing: "border-box",
                              padding: 0,
                              border: "none",
                              margin: "auto",
                              display: "block",
                              width: 0,
                              height: 0,
                              minWidth: "100%",
                              maxWidth: "100%",
                              minHeight: "100%",
                              maxHeight: "100%",
                              objectFit: "cover",
                              backgroundSize: "cover",
                              backgroundPosition: "0% 0%",
                              filter: "blur(20px)",
                              backgroundImage:
                                'url("data:image/svg+xml;base64,CiAgICA8c3ZnIHdpZHRoPSJ1bmRlZmluZWQiIGhlaWdodD0idW5kZWZpbmVkIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImciPgogICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzM1MmU0NCIgb2Zmc2V0PSIyMCUiIC8+CiAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMWYxYjJkIiBvZmZzZXQ9IjUwJSIgLz4KICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMzNTJlNDQiIG9mZnNldD0iNzAlIiAvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgIDwvZGVmcz4KICAgICAgPHJlY3Qgd2lkdGg9InVuZGVmaW5lZCIgaGVpZ2h0PSJ1bmRlZmluZWQiIGZpbGw9IiMzNTJlNDQiIC8+CiAgICAgIDxyZWN0IGlkPSJyIiB3aWR0aD0idW5kZWZpbmVkIiBoZWlnaHQ9InVuZGVmaW5lZCIgZmlsbD0idXJsKCNnKSIgLz4KICAgICAgPGFuaW1hdGUgeGxpbms6aHJlZj0iI3IiIGF0dHJpYnV0ZU5hbWU9IngiIGZyb209Ii11bmRlZmluZWQiIHRvPSJ1bmRlZmluZWQiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogICAgPC9zdmc+")',
                            }}
                          />
                          <noscript>
                            <img
                              alt="Image"
                              light="1"
                              sizes="100vw"
                              srcSet="/_next/image?url=%2Fimages%2Fcar-finder%2Fcatalog%2F09.jpg&amp;w=640&amp;q=100 640w, /_next/image?url=%2Fimages%2Fcar-finder%2Fcatalog%2F09.jpg&amp;w=750&amp;q=100 750w, /_next/image?url=%2Fimages%2Fcar-finder%2Fcatalog%2F09.jpg&amp;w=828&amp;q=100 828w, /_next/image?url=%2Fimages%2Fcar-finder%2Fcatalog%2F09.jpg&amp;w=1080&amp;q=100 1080w, /_next/image?url=%2Fimages%2Fcar-finder%2Fcatalog%2F09.jpg&amp;w=1200&amp;q=100 1200w, /_next/image?url=%2Fimages%2Fcar-finder%2Fcatalog%2F09.jpg&amp;w=1920&amp;q=100 1920w, /_next/image?url=%2Fimages%2Fcar-finder%2Fcatalog%2F09.jpg&amp;w=2048&amp;q=100 2048w, /_next/image?url=%2Fimages%2Fcar-finder%2Fcatalog%2F09.jpg&amp;w=3840&amp;q=100 3840w"
                              src="/_next/image?url=%2Fimages%2Fcar-finder%2Fcatalog%2F09.jpg&amp;w=3840&amp;q=100"
                              decoding="async"
                              data-nimg="fill"
                              style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                bottom: 0,
                                right: 0,
                                boxSizing: "border-box",
                                padding: 0,
                                border: "none",
                                margin: "auto",
                                display: "block",
                                width: 0,
                                height: 0,
                                minWidth: "100%",
                                maxWidth: "100%",
                                minHeight: "100%",
                                maxHeight: "100%",
                                objectFit: "cover",
                              }}
                              loading="lazy"
                            />
                          </noscript>
                        </span>
                      </div>
                    </div>
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                    <a className="img-overlay" href="/car-finder/single"></a>
                    <div className="position-absolute start-0 top-0 pt-3 ps-3">
                      <span className="d-table badge bg-info mb-1">Used</span>
                    </div>
                    <div className="content-overlay end-0 top-0 pt-3 pe-3">
                      <button
                        type="button"
                        className="btn btn-icon btn-light btn-xs text-primary rounded-circle"
                      >
                        <i className="fi-heart"></i>
                      </button>
                    </div>
                  </div>

                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between pb-1">
                      <span className="fs-sm text-light me-3">1995</span>
                      <div className="form-check form-check-light">
                        <label className="form-check-label">
                          <input type="checkbox" className="form-check-input" />
                          <span className="fs-sm">Compare</span>
                        </label>
                      </div>
                    </div>
                    <h3 className="h6 mb-1">
                      <a className="nav-link-light" href="/car-finder/single">
                        Ford Truck Lifted
                      </a>
                    </h3>
                    <div className="text-primary fw-bold mb-1">$24,000</div>
                    <div className="fs-sm text-light opacity-70">
                      <i className="fi-map-pin me-1"></i>
                      Chicago
                    </div>
                    <div className="border-top border-light pt-3 mt-3">
                      <div className="me-n1">
                        <div className="row g-2">
                          <div className="col me-sm-1">
                            <div className="bg-dark text-light rounded text-center w-100 h-100 text-nowrap p-2">
                              <i className="fi-dashboard text-light d-block h4 mb-0"></i>
                              <span className="fs-xs">278K mi</span>
                            </div>
                          </div>
                          <div className="col me-sm-1">
                            <div className="bg-dark text-light rounded text-center w-100 h-100 text-nowrap p-2">
                              <i className="fi-gearbox text-light d-block h4 mb-0"></i>
                              <span className="fs-xs">Manual</span>
                            </div>
                          </div>
                          <div className="col me-sm-1">
                            <div className="bg-dark text-light rounded text-center w-100 h-100 text-nowrap p-2">
                              <i className="fi-petrol text-light d-block h4 mb-0"></i>
                              <span className="fs-xs">Diesel</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card card-light card-hover card-horizontal">
                  <div className="swiper card-img-top card-img-hover">
                    <div className="swiper-wrapper">
                      <div
                        className="swiper-slide d-flex swiper-slide-duplicate"
                        data-swiper-slide-index="1"
                      >
                        <span
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            overflow: "hidden",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                            position: "absolute",
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                          }}
                        >
                          <img
                            alt="Image"
                            light="1"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                            decoding="async"
                            data-nimg="fill"
                            style={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              bottom: 0,
                              right: 0,
                              boxSizing: "border-box",
                              padding: 0,
                              border: "none",
                              margin: "auto",
                              display: "block",
                              width: 0,
                              height: 0,
                              minWidth: "100%",
                              maxWidth: "100%",
                              minHeight: "100%",
                              maxHeight: "100%",
                              objectFit: "cover",
                              backgroundSize: "cover",
                              backgroundPosition: "0% 0%",
                              filter: "blur(20px)",
                              backgroundImage:
                                'url("data:image/svg+xml;base64,CiAgICA8c3ZnIHdpZHRoPSJ1bmRlZmluZWQiIGhlaWdodD0idW5kZWZpbmVkIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImciPgogICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzM1MmU0NCIgb2Zmc2V0PSIyMCUiIC8+CiAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMWYxYjJkIiBvZmZzZXQ9IjUwJSIgLz4KICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMzNTJlNDQiIG9mZnNldD0iNzAlIiAvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgIDwvZGVmcz4KICAgICAgPHJlY3Qgd2lkdGg9InVuZGVmaW5lZCIgaGVpZ2h0PSJ1bmRlZmluZWQiIGZpbGw9IiMzNTJlNDQiIC8+CiAgICAgIDxyZWN0IGlkPSJyIiB3aWR0aD0idW5kZWZpbmVkIiBoZWlnaHQ9InVuZGVmaW5lZCIgZmlsbD0idXJsKCNnKSIgLz4KICAgICAgPGFuaW1hdGUgeGxpbms6aHJlZj0iI3IiIGF0dHJpYnV0ZU5hbWU9IngiIGZyb209Ii11bmRlZmluZWQiIHRvPSJ1bmRlZmluZWQiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogICAgPC9zdmc+")',
                            }}
                          />
                          <noscript>
                            <img
                              alt="Image"
                              light="1"
                              sizes="100vw"
                              srcSet="/_next/image?url=%2Fimages%2Fcar-finder%2Fcatalog%2F09.jpg&amp;w=640&amp;q=100 640w, /_next/image?url=%2Fimages%2Fcar-finder%2Fcatalog%2F09.jpg&amp;w=750&amp;q=100 750w, /_next/image?url=%2Fimages%2Fcar-finder%2Fcatalog%2F09.jpg&amp;w=828&amp;q=100 828w, /_next/image?url=%2Fimages%2Fcar-finder%2Fcatalog%2F09.jpg&amp;w=1080&amp;q=100 1080w, /_next/image?url=%2Fimages%2Fcar-finder%2Fcatalog%2F09.jpg&amp;w=1200&amp;q=100 1200w, /_next/image?url=%2Fimages%2Fcar-finder%2Fcatalog%2F09.jpg&amp;w=1920&amp;q=100 1920w, /_next/image?url=%2Fimages%2Fcar-finder%2Fcatalog%2F09.jpg&amp;w=2048&amp;q=100 2048w, /_next/image?url=%2Fimages%2Fcar-finder%2Fcatalog%2F09.jpg&amp;w=3840&amp;q=100 3840w"
                              src="/_next/image?url=%2Fimages%2Fcar-finder%2Fcatalog%2F09.jpg&amp;w=3840&amp;q=100"
                              decoding="async"
                              data-nimg="fill"
                              style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                bottom: 0,
                                right: 0,
                                boxSizing: "border-box",
                                padding: 0,
                                border: "none",
                                margin: "auto",
                                display: "block",
                                width: 0,
                                height: 0,
                                minWidth: "100%",
                                maxWidth: "100%",
                                minHeight: "100%",
                                maxHeight: "100%",
                                objectFit: "cover",
                              }}
                              loading="lazy"
                            />
                          </noscript>
                        </span>
                      </div>
                      <div
                        className="swiper-slide d-flex"
                        data-swiper-slide-index="0"
                      >
                        <span
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            overflow: "hidden",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                            position: "absolute",
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                          }}
                        >
                          <img
                            alt="Image"
                            light="1"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                            decoding="async"
                            data-nimg="fill"
                            style={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              bottom: 0,
                              right: 0,
                              boxSizing: "border-box",
                              padding: 0,
                              border: "none",
                              margin: "auto",
                              display: "block",
                              width: 0,
                              height: 0,
                              minWidth: "100%",
                              maxWidth: "100%",
                              minHeight: "100%",
                              maxHeight: "100%",
                              objectFit: "cover",
                              backgroundSize: "cover",
                              backgroundPosition: "0% 0%",
                              filter: "blur(20px)",
                              backgroundImage:
                                'url("data:image/svg+xml;base64,CiAgICA8c3ZnIHdpZHRoPSJ1bmRlZmluZWQiIGhlaWdodD0idW5kZWZpbmVkIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImciPgogICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzM1MmU0NCIgb2Zmc2V0PSIyMCUiIC8+CiAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMWYxYjJkIiBvZmZzZXQ9IjUwJSIgLz4KICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMzNTJlNDQiIG9mZnNldD0iNzAlIiAvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgIDwvZGVmcz4KICAgICAgPHJlY3Qgd2lkdGg9InVuZGVmaW5lZCIgaGVpZ2h0PSJ1bmRlZmluZWQiIGZpbGw9IiMzNTJlNDQiIC8+CiAgICAgIDxyZWN0IGlkPSJyIiB3aWR0aD0idW5kZWZpbmVkIiBoZWlnaHQ9InVuZGVmaW5lZCIgZmlsbD0idXJsKCNnKSIgLz4KICAgICAgPGFuaW1hdGUgeGxpbms6aHJlZj0iI3IiIGF0dHJpYnV0ZU5hbWU9IngiIGZyb209Ii11bmRlZmluZWQiIHRvPSJ1bmRlZmluZWQiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogICAgPC9zdmc+")',
                            }}
                          />
                          <noscript>
                            <img
                              alt="Image"
                              light="1"
                              sizes="100vw"
                              srcSet="/_next/image?url=%2Fimages%2Fcar-finder%2Fcatalog%2F09.jpg&amp;w=640&amp;q=100 640w, /_next/image?url=%2Fimages%2Fcar-finder%2Fcatalog%2F09.jpg&amp;w=750&amp;q=100 750w, /_next/image?url=%2Fimages%2Fcar-finder%2Fcatalog%2F09.jpg&amp;w=828&amp;q=100 828w, /_next/image?url=%2Fimages%2Fcar-finder%2Fcatalog%2F09.jpg&amp;w=1080&amp;q=100 1080w, /_next/image?url=%2Fimages%2Fcar-finder%2Fcatalog%2F09.jpg&amp;w=1200&amp;q=100 1200w, /_next/image?url=%2Fimages%2Fcar-finder%2Fcatalog%2F09.jpg&amp;w=1920&amp;q=100 1920w, /_next/image?url=%2Fimages%2Fcar-finder%2Fcatalog%2F09.jpg&amp;w=2048&amp;q=100 2048w, /_next/image?url=%2Fimages%2Fcar-finder%2Fcatalog%2F09.jpg&amp;w=3840&amp;q=100 3840w"
                              src="/_next/image?url=%2Fimages%2Fcar-finder%2Fcatalog%2F09.jpg&amp;w=3840&amp;q=100"
                              decoding="async"
                              data-nimg="fill"
                              style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                bottom: 0,
                                right: 0,
                                boxSizing: "border-box",
                                padding: 0,
                                border: "none",
                                margin: "auto",
                                display: "block",
                                width: 0,
                                height: 0,
                                minWidth: "100%",
                                maxWidth: "100%",
                                minHeight: "100%",
                                maxHeight: "100%",
                                objectFit: "cover",
                              }}
                              loading="lazy"
                            />
                          </noscript>
                        </span>
                      </div>
                      <div
                        className="swiper-slide d-flex"
                        data-swiper-slide-index="1"
                      >
                        <span
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            overflow: "hidden",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                            position: "absolute",
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                          }}
                        >
                          <img
                            alt="Image"
                            light="1"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                            decoding="async"
                            data-nimg="fill"
                            style={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              bottom: 0,
                              right: 0,
                              boxSizing: "border-box",
                              padding: 0,
                              border: "none",
                              margin: "auto",
                              display: "block",
                              width: 0,
                              height: 0,
                              minWidth: "100%",
                              maxWidth: "100%",
                              minHeight: "100%",
                              maxHeight: "100%",
                              objectFit: "cover",
                              backgroundSize: "cover",
                              backgroundPosition: "0% 0%",
                              filter: "blur(20px)",
                              backgroundImage:
                                'url("data:image/svg+xml;base64,CiAgICA8c3ZnIHdpZHRoPSJ1bmRlZmluZWQiIGhlaWdodD0idW5kZWZpbmVkIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImciPgogICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzM1MmU0NCIgb2Zmc2V0PSIyMCUiIC8+CiAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMWYxYjJkIiBvZmZzZXQ9IjUwJSIgLz4KICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMzNTJlNDQiIG9mZnNldD0iNzAlIiAvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgIDwvZGVmcz4KICAgICAgPHJlY3Qgd2lkdGg9InVuZGVmaW5lZCIgaGVpZ2h0PSJ1bmRlZmluZWQiIGZpbGw9IiMzNTJlNDQiIC8+CiAgICAgIDxyZWN0IGlkPSJyIiB3aWR0aD0idW5kZWZpbmVkIiBoZWlnaHQ9InVuZGVmaW5lZCIgZmlsbD0idXJsKCNnKSIgLz4KICAgICAgPGFuaW1hdGUgeGxpbms6aHJlZj0iI3IiIGF0dHJpYnV0ZU5hbWU9IngiIGZyb209Ii11bmRlZmluZWQiIHRvPSJ1bmRlZmluZWQiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogICAgPC9zdmc+")',
                            }}
                          />
                          <noscript>
                            <img
                              alt="Image"
                              light="1"
                              sizes="100vw"
                              srcSet="/_next/image?url=%2Fimages%2Fcar-finder%2Fcatalog%2F09.jpg&amp;w=640&amp;q=100 640w, /_next/image?url=%2Fimages%2Fcar-finder%2Fcatalog%2F09.jpg&amp;w=750&amp;q=100 750w, /_next/image?url=%2Fimages%2Fcar-finder%2Fcatalog%2F09.jpg&amp;w=828&amp;q=100 828w, /_next/image?url=%2Fimages%2Fcar-finder%2Fcatalog%2F09.jpg&amp;w=1080&amp;q=100 1080w, /_next/image?url=%2Fimages%2Fcar-finder%2Fcatalog%2F09.jpg&amp;w=1200&amp;q=100 1200w, /_next/image?url=%2Fimages%2Fcar-finder%2Fcatalog%2F09.jpg&amp;w=1920&amp;q=100 1920w, /_next/image?url=%2Fimages%2Fcar-finder%2Fcatalog%2F09.jpg&amp;w=2048&amp;q=100 2048w, /_next/image?url=%2Fimages%2Fcar-finder%2Fcatalog%2F09.jpg&amp;w=3840&amp;q=100 3840w"
                              src="/_next/image?url=%2Fimages%2Fcar-finder%2Fcatalog%2F09.jpg&amp;w=3840&amp;q=100"
                              decoding="async"
                              data-nimg="fill"
                              style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                bottom: 0,
                                right: 0,
                                boxSizing: "border-box",
                                padding: 0,
                                border: "none",
                                margin: "auto",
                                display: "block",
                                width: 0,
                                height: 0,
                                minWidth: "100%",
                                maxWidth: "100%",
                                minHeight: "100%",
                                maxHeight: "100%",
                                objectFit: "cover",
                              }}
                              loading="lazy"
                            />
                          </noscript>
                        </span>
                      </div>
                      <div
                        className="swiper-slide d-flex swiper-slide-duplicate"
                        data-swiper-slide-index="0"
                      >
                        <span
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            overflow: "hidden",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                            position: "absolute",
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                          }}
                        >
                          <img
                            alt="Image"
                            light="1"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                            decoding="async"
                            data-nimg="fill"
                            style={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              bottom: 0,
                              right: 0,
                              boxSizing: "border-box",
                              padding: 0,
                              border: "none",
                              margin: "auto",
                              display: "block",
                              width: 0,
                              height: 0,
                              minWidth: "100%",
                              maxWidth: "100%",
                              minHeight: "100%",
                              maxHeight: "100%",
                              objectFit: "cover",
                              backgroundSize: "cover",
                              backgroundPosition: "0% 0%",
                              filter: "blur(20px)",
                              backgroundImage:
                                'url("data:image/svg+xml;base64,CiAgICA8c3ZnIHdpZHRoPSJ1bmRlZmluZWQiIGhlaWdodD0idW5kZWZpbmVkIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImciPgogICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzM1MmU0NCIgb2Zmc2V0PSIyMCUiIC8+CiAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMWYxYjJkIiBvZmZzZXQ9IjUwJSIgLz4KICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMzNTJlNDQiIG9mZnNldD0iNzAlIiAvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgIDwvZGVmcz4KICAgICAgPHJlY3Qgd2lkdGg9InVuZGVmaW5lZCIgaGVpZ2h0PSJ1bmRlZmluZWQiIGZpbGw9IiMzNTJlNDQiIC8+CiAgICAgIDxyZWN0IGlkPSJyIiB3aWR0aD0idW5kZWZpbmVkIiBoZWlnaHQ9InVuZGVmaW5lZCIgZmlsbD0idXJsKCNnKSIgLz4KICAgICAgPGFuaW1hdGUgeGxpbms6aHJlZj0iI3IiIGF0dHJpYnV0ZU5hbWU9IngiIGZyb209Ii11bmRlZmluZWQiIHRvPSJ1bmRlZmluZWQiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogICAgPC9zdmc+")',
                            }}
                          />
                          <noscript>
                            <img
                              alt="Image"
                              light="1"
                              sizes="100vw"
                              srcSet="/_next/image?url=%2Fimages%2Fcar-finder%2Fcatalog%2F09.jpg&amp;w=640&amp;q=100 640w, /_next/image?url=%2Fimages%2Fcar-finder%2Fcatalog%2F09.jpg&amp;w=750&amp;q=100 750w, /_next/image?url=%2Fimages%2Fcar-finder%2Fcatalog%2F09.jpg&amp;w=828&amp;q=100 828w, /_next/image?url=%2Fimages%2Fcar-finder%2Fcatalog%2F09.jpg&amp;w=1080&amp;q=100 1080w, /_next/image?url=%2Fimages%2Fcar-finder%2Fcatalog%2F09.jpg&amp;w=1200&amp;q=100 1200w, /_next/image?url=%2Fimages%2Fcar-finder%2Fcatalog%2F09.jpg&amp;w=1920&amp;q=100 1920w, /_next/image?url=%2Fimages%2Fcar-finder%2Fcatalog%2F09.jpg&amp;w=2048&amp;q=100 2048w, /_next/image?url=%2Fimages%2Fcar-finder%2Fcatalog%2F09.jpg&amp;w=3840&amp;q=100 3840w"
                              src="/_next/image?url=%2Fimages%2Fcar-finder%2Fcatalog%2F09.jpg&amp;w=3840&amp;q=100"
                              decoding="async"
                              data-nimg="fill"
                              style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                bottom: 0,
                                right: 0,
                                boxSizing: "border-box",
                                padding: 0,
                                border: "none",
                                margin: "auto",
                                display: "block",
                                width: 0,
                                height: 0,
                                minWidth: "100%",
                                maxWidth: "100%",
                                minHeight: "100%",
                                maxHeight: "100%",
                                objectFit: "cover",
                              }}
                              loading="lazy"
                            />
                          </noscript>
                        </span>
                      </div>
                    </div>
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                    <a className="img-overlay" href="/car-finder/single"></a>
                    <div className="position-absolute start-0 top-0 pt-3 ps-3">
                      <span className="d-table badge bg-danger mb-1">New</span>
                    </div>
                    <div className="content-overlay end-0 top-0 pt-3 pe-3">
                      <button
                        type="button"
                        className="btn btn-icon btn-light btn-xs text-primary rounded-circle"
                      >
                        <i className="fi-heart"></i>
                      </button>
                    </div>
                  </div>

                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between pb-1">
                      <span className="fs-sm text-light me-3">2018</span>
                      <div className="form-check form-check-light">
                        <label className="form-check-label">
                          <input type="checkbox" className="form-check-input" />
                          <span className="fs-sm">Compare</span>
                        </label>
                      </div>
                    </div>
                    <h3 className="h6 mb-1">
                      <a className="nav-link-light" href="/car-finder/single">
                        BMW 640 XI Gran Turismo
                      </a>
                    </h3>
                    <div className="text-primary fw-bold mb-1">$43,500</div>
                    <div className="fs-sm text-light opacity-70">
                      <i className="fi-map-pin me-1"></i>
                      San Francisco
                    </div>
                    <div className="border-top border-light pt-3 mt-3">
                      <div className="me-n1">
                        <div className="row g-2">
                          <div className="col me-sm-1">
                            <div className="bg-dark text-light rounded text-center w-100 h-100 text-nowrap p-2">
                              <i className="fi-dashboard text-light d-block h4 mb-0"></i>
                              <span className="fs-xs">10K mi</span>
                            </div>
                          </div>
                          <div className="col me-sm-1">
                            <div className="bg-dark text-light rounded text-center w-100 h-100 text-nowrap p-2">
                              <i className="fi-gearbox text-light d-block h4 mb-0"></i>
                              <span className="fs-xs">Automatic</span>
                            </div>
                          </div>
                          <div className="col me-sm-1">
                            <div className="bg-dark text-light rounded text-center w-100 h-100 text-nowrap p-2">
                              <i className="fi-petrol text-light d-block h4 mb-0"></i>
                              <span className="fs-xs">Gasoline</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="py-2 py-sm-3 container">
            <div className="g-2 g-sm-4 row">
              <div className="mb-4 pb-2 col-xl-1 col-sm-2 col-3">
                <a
                  className="d-flex justify-content-center opacity-40 opacity-transition"
                  href="/car-finder#"
                >
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "inline-block",
                      overflow: "hidden",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                      position: "relative",
                      maxWidth: "100%",
                    }}
                  >
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        maxWidth: "100%",
                      }}
                    >
                      <img
                        style={{
                          display: "block",
                          maxWidth: "100%",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0,
                        }}
                        alt=""
                        aria-hidden="true"
                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2786%27%20height=%2748%27/%3e"
                      />
                    </span>
                    <img
                      alt="Opel"
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                      decoding="async"
                      data-nimg="intrinsic"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        boxSizing: "border-box",
                        padding: 0,
                        border: "none",
                        margin: "auto",
                        display: "block",
                        width: 0,
                        height: 0,
                        minWidth: "100%",
                        maxWidth: "100%",
                        minHeight: "100%",
                        maxHeight: "100%",
                        backgroundSize: "cover",
                        backgroundPosition: "0% 0%",
                        filter: "blur(20px)",
                        backgroundImage:
                          'url("data:image/svg+xml;base64,CiAgICA8c3ZnIHdpZHRoPSI4NiIgaGVpZ2h0PSI0OCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJnIj4KICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNlZmVkZjAiIG9mZnNldD0iMjAlIiAvPgogICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI2Q4ZDdkYSIgb2Zmc2V0PSI1MCUiIC8+CiAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjZWZlZGYwIiBvZmZzZXQ9IjcwJSIgLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICA8L2RlZnM+CiAgICAgIDxyZWN0IHdpZHRoPSI4NiIgaGVpZ2h0PSI0OCIgZmlsbD0iI2VmZWRmMCIgLz4KICAgICAgPHJlY3QgaWQ9InIiIHdpZHRoPSI4NiIgaGVpZ2h0PSI0OCIgZmlsbD0idXJsKCNnKSIgLz4KICAgICAgPGFuaW1hdGUgeGxpbms6aHJlZj0iI3IiIGF0dHJpYnV0ZU5hbWU9IngiIGZyb209Ii04NiIgdG89Ijg2IiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICAgIDwvc3ZnPg==")',
                      }}
                    />
                    <noscript>
                      <img
                        alt="Opel"
                        srcSet="/images/car-finder/brands/opel.svg 1x, /images/car-finder/brands/opel.svg 2x"
                        src="/images/car-finder/brands/opel.svg"
                        decoding="async"
                        data-nimg="intrinsic"
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
                          boxSizing: "border-box",
                          padding: 0,
                          border: "none",
                          margin: "auto",
                          display: "block",
                          width: 0,
                          height: 0,
                          minWidth: "100%",
                          maxWidth: "100%",
                          minHeight: "100%",
                          maxHeight: "100%",
                        }}
                        loading="lazy"
                      />
                    </noscript>
                  </span>
                </a>
              </div>
              <div className="mb-4 pb-2 col-xl-1 col-sm-2 col-3">
                <a
                  className="d-flex justify-content-center opacity-40 opacity-transition"
                  href="/car-finder#"
                >
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "inline-block",
                      overflow: "hidden",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                      position: "relative",
                      maxWidth: "100%",
                    }}
                  >
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        maxWidth: "100%",
                      }}
                    >
                      <img
                        style={{
                          display: "block",
                          maxWidth: "100%",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0,
                        }}
                        alt=""
                        aria-hidden="true"
                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2786%27%20height=%2748%27/%3e"
                      />
                    </span>
                    <img
                      alt="Opel"
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                      decoding="async"
                      data-nimg="intrinsic"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        boxSizing: "border-box",
                        padding: 0,
                        border: "none",
                        margin: "auto",
                        display: "block",
                        width: 0,
                        height: 0,
                        minWidth: "100%",
                        maxWidth: "100%",
                        minHeight: "100%",
                        maxHeight: "100%",
                        backgroundSize: "cover",
                        backgroundPosition: "0% 0%",
                        filter: "blur(20px)",
                        backgroundImage:
                          'url("data:image/svg+xml;base64,CiAgICA8c3ZnIHdpZHRoPSI4NiIgaGVpZ2h0PSI0OCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJnIj4KICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNlZmVkZjAiIG9mZnNldD0iMjAlIiAvPgogICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI2Q4ZDdkYSIgb2Zmc2V0PSI1MCUiIC8+CiAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjZWZlZGYwIiBvZmZzZXQ9IjcwJSIgLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICA8L2RlZnM+CiAgICAgIDxyZWN0IHdpZHRoPSI4NiIgaGVpZ2h0PSI0OCIgZmlsbD0iI2VmZWRmMCIgLz4KICAgICAgPHJlY3QgaWQ9InIiIHdpZHRoPSI4NiIgaGVpZ2h0PSI0OCIgZmlsbD0idXJsKCNnKSIgLz4KICAgICAgPGFuaW1hdGUgeGxpbms6aHJlZj0iI3IiIGF0dHJpYnV0ZU5hbWU9IngiIGZyb209Ii04NiIgdG89Ijg2IiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICAgIDwvc3ZnPg==")',
                      }}
                    />
                    <noscript>
                      <img
                        alt="Opel"
                        srcSet="/images/car-finder/brands/opel.svg 1x, /images/car-finder/brands/opel.svg 2x"
                        src="/images/car-finder/brands/opel.svg"
                        decoding="async"
                        data-nimg="intrinsic"
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
                          boxSizing: "border-box",
                          padding: 0,
                          border: "none",
                          margin: "auto",
                          display: "block",
                          width: 0,
                          height: 0,
                          minWidth: "100%",
                          maxWidth: "100%",
                          minHeight: "100%",
                          maxHeight: "100%",
                        }}
                        loading="lazy"
                      />
                    </noscript>
                  </span>
                </a>
              </div>
              <div className="mb-4 pb-2 col-xl-1 col-sm-2 col-3">
                <a
                  className="d-flex justify-content-center opacity-40 opacity-transition"
                  href="/car-finder#"
                >
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "inline-block",
                      overflow: "hidden",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                      position: "relative",
                      maxWidth: "100%",
                    }}
                  >
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        maxWidth: "100%",
                      }}
                    >
                      <img
                        style={{
                          display: "block",
                          maxWidth: "100%",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0,
                        }}
                        alt=""
                        aria-hidden="true"
                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2786%27%20height=%2748%27/%3e"
                      />
                    </span>
                    <img
                      alt="Opel"
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                      decoding="async"
                      data-nimg="intrinsic"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        boxSizing: "border-box",
                        padding: 0,
                        border: "none",
                        margin: "auto",
                        display: "block",
                        width: 0,
                        height: 0,
                        minWidth: "100%",
                        maxWidth: "100%",
                        minHeight: "100%",
                        maxHeight: "100%",
                        backgroundSize: "cover",
                        backgroundPosition: "0% 0%",
                        filter: "blur(20px)",
                        backgroundImage:
                          'url("data:image/svg+xml;base64,CiAgICA8c3ZnIHdpZHRoPSI4NiIgaGVpZ2h0PSI0OCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJnIj4KICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNlZmVkZjAiIG9mZnNldD0iMjAlIiAvPgogICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI2Q4ZDdkYSIgb2Zmc2V0PSI1MCUiIC8+CiAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjZWZlZGYwIiBvZmZzZXQ9IjcwJSIgLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICA8L2RlZnM+CiAgICAgIDxyZWN0IHdpZHRoPSI4NiIgaGVpZ2h0PSI0OCIgZmlsbD0iI2VmZWRmMCIgLz4KICAgICAgPHJlY3QgaWQ9InIiIHdpZHRoPSI4NiIgaGVpZ2h0PSI0OCIgZmlsbD0idXJsKCNnKSIgLz4KICAgICAgPGFuaW1hdGUgeGxpbms6aHJlZj0iI3IiIGF0dHJpYnV0ZU5hbWU9IngiIGZyb209Ii04NiIgdG89Ijg2IiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICAgIDwvc3ZnPg==")',
                      }}
                    />
                    <noscript>
                      <img
                        alt="Opel"
                        srcSet="/images/car-finder/brands/opel.svg 1x, /images/car-finder/brands/opel.svg 2x"
                        src="/images/car-finder/brands/opel.svg"
                        decoding="async"
                        data-nimg="intrinsic"
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
                          boxSizing: "border-box",
                          padding: 0,
                          border: "none",
                          margin: "auto",
                          display: "block",
                          width: 0,
                          height: 0,
                          minWidth: "100%",
                          maxWidth: "100%",
                          minHeight: "100%",
                          maxHeight: "100%",
                        }}
                        loading="lazy"
                      />
                    </noscript>
                  </span>
                </a>
              </div>
              <div className="mb-4 pb-2 col-xl-1 col-sm-2 col-3">
                <a
                  className="d-flex justify-content-center opacity-40 opacity-transition"
                  href="/car-finder#"
                >
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "inline-block",
                      overflow: "hidden",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                      position: "relative",
                      maxWidth: "100%",
                    }}
                  >
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        maxWidth: "100%",
                      }}
                    >
                      <img
                        style={{
                          display: "block",
                          maxWidth: "100%",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0,
                        }}
                        alt=""
                        aria-hidden="true"
                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2786%27%20height=%2748%27/%3e"
                      />
                    </span>
                    <img
                      alt="Opel"
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                      decoding="async"
                      data-nimg="intrinsic"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        boxSizing: "border-box",
                        padding: 0,
                        border: "none",
                        margin: "auto",
                        display: "block",
                        width: 0,
                        height: 0,
                        minWidth: "100%",
                        maxWidth: "100%",
                        minHeight: "100%",
                        maxHeight: "100%",
                        backgroundSize: "cover",
                        backgroundPosition: "0% 0%",
                        filter: "blur(20px)",
                        backgroundImage:
                          'url("data:image/svg+xml;base64,CiAgICA8c3ZnIHdpZHRoPSI4NiIgaGVpZ2h0PSI0OCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJnIj4KICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNlZmVkZjAiIG9mZnNldD0iMjAlIiAvPgogICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI2Q4ZDdkYSIgb2Zmc2V0PSI1MCUiIC8+CiAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjZWZlZGYwIiBvZmZzZXQ9IjcwJSIgLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICA8L2RlZnM+CiAgICAgIDxyZWN0IHdpZHRoPSI4NiIgaGVpZ2h0PSI0OCIgZmlsbD0iI2VmZWRmMCIgLz4KICAgICAgPHJlY3QgaWQ9InIiIHdpZHRoPSI4NiIgaGVpZ2h0PSI0OCIgZmlsbD0idXJsKCNnKSIgLz4KICAgICAgPGFuaW1hdGUgeGxpbms6aHJlZj0iI3IiIGF0dHJpYnV0ZU5hbWU9IngiIGZyb209Ii04NiIgdG89Ijg2IiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICAgIDwvc3ZnPg==")',
                      }}
                    />
                    <noscript>
                      <img
                        alt="Opel"
                        srcSet="/images/car-finder/brands/opel.svg 1x, /images/car-finder/brands/opel.svg 2x"
                        src="/images/car-finder/brands/opel.svg"
                        decoding="async"
                        data-nimg="intrinsic"
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
                          boxSizing: "border-box",
                          padding: 0,
                          border: "none",
                          margin: "auto",
                          display: "block",
                          width: 0,
                          height: 0,
                          minWidth: "100%",
                          maxWidth: "100%",
                          minHeight: "100%",
                          maxHeight: "100%",
                        }}
                        loading="lazy"
                      />
                    </noscript>
                  </span>
                </a>
              </div>
              <div className="mb-4 pb-2 col-xl-1 col-sm-2 col-3">
                <a
                  className="d-flex justify-content-center opacity-40 opacity-transition"
                  href="/car-finder#"
                >
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "inline-block",
                      overflow: "hidden",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                      position: "relative",
                      maxWidth: "100%",
                    }}
                  >
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        maxWidth: "100%",
                      }}
                    >
                      <img
                        style={{
                          display: "block",
                          maxWidth: "100%",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0,
                        }}
                        alt=""
                        aria-hidden="true"
                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2786%27%20height=%2748%27/%3e"
                      />
                    </span>
                    <img
                      alt="Opel"
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                      decoding="async"
                      data-nimg="intrinsic"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        boxSizing: "border-box",
                        padding: 0,
                        border: "none",
                        margin: "auto",
                        display: "block",
                        width: 0,
                        height: 0,
                        minWidth: "100%",
                        maxWidth: "100%",
                        minHeight: "100%",
                        maxHeight: "100%",
                        backgroundSize: "cover",
                        backgroundPosition: "0% 0%",
                        filter: "blur(20px)",
                        backgroundImage:
                          'url("data:image/svg+xml;base64,CiAgICA8c3ZnIHdpZHRoPSI4NiIgaGVpZ2h0PSI0OCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJnIj4KICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNlZmVkZjAiIG9mZnNldD0iMjAlIiAvPgogICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI2Q4ZDdkYSIgb2Zmc2V0PSI1MCUiIC8+CiAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjZWZlZGYwIiBvZmZzZXQ9IjcwJSIgLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICA8L2RlZnM+CiAgICAgIDxyZWN0IHdpZHRoPSI4NiIgaGVpZ2h0PSI0OCIgZmlsbD0iI2VmZWRmMCIgLz4KICAgICAgPHJlY3QgaWQ9InIiIHdpZHRoPSI4NiIgaGVpZ2h0PSI0OCIgZmlsbD0idXJsKCNnKSIgLz4KICAgICAgPGFuaW1hdGUgeGxpbms6aHJlZj0iI3IiIGF0dHJpYnV0ZU5hbWU9IngiIGZyb209Ii04NiIgdG89Ijg2IiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICAgIDwvc3ZnPg==")',
                      }}
                    />
                    <noscript>
                      <img
                        alt="Opel"
                        srcSet="/images/car-finder/brands/opel.svg 1x, /images/car-finder/brands/opel.svg 2x"
                        src="/images/car-finder/brands/opel.svg"
                        decoding="async"
                        data-nimg="intrinsic"
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
                          boxSizing: "border-box",
                          padding: 0,
                          border: "none",
                          margin: "auto",
                          display: "block",
                          width: 0,
                          height: 0,
                          minWidth: "100%",
                          maxWidth: "100%",
                          minHeight: "100%",
                          maxHeight: "100%",
                        }}
                        loading="lazy"
                      />
                    </noscript>
                  </span>
                </a>
              </div>
              <div className="mb-4 pb-2 col-xl-1 col-sm-2 col-3">
                <a
                  className="d-flex justify-content-center opacity-40 opacity-transition"
                  href="/car-finder#"
                >
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "inline-block",
                      overflow: "hidden",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                      position: "relative",
                      maxWidth: "100%",
                    }}
                  >
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        maxWidth: "100%",
                      }}
                    >
                      <img
                        style={{
                          display: "block",
                          maxWidth: "100%",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0,
                        }}
                        alt=""
                        aria-hidden="true"
                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2786%27%20height=%2748%27/%3e"
                      />
                    </span>
                    <img
                      alt="Opel"
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                      decoding="async"
                      data-nimg="intrinsic"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        boxSizing: "border-box",
                        padding: 0,
                        border: "none",
                        margin: "auto",
                        display: "block",
                        width: 0,
                        height: 0,
                        minWidth: "100%",
                        maxWidth: "100%",
                        minHeight: "100%",
                        maxHeight: "100%",
                        backgroundSize: "cover",
                        backgroundPosition: "0% 0%",
                        filter: "blur(20px)",
                        backgroundImage:
                          'url("data:image/svg+xml;base64,CiAgICA8c3ZnIHdpZHRoPSI4NiIgaGVpZ2h0PSI0OCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJnIj4KICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNlZmVkZjAiIG9mZnNldD0iMjAlIiAvPgogICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI2Q4ZDdkYSIgb2Zmc2V0PSI1MCUiIC8+CiAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjZWZlZGYwIiBvZmZzZXQ9IjcwJSIgLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICA8L2RlZnM+CiAgICAgIDxyZWN0IHdpZHRoPSI4NiIgaGVpZ2h0PSI0OCIgZmlsbD0iI2VmZWRmMCIgLz4KICAgICAgPHJlY3QgaWQ9InIiIHdpZHRoPSI4NiIgaGVpZ2h0PSI0OCIgZmlsbD0idXJsKCNnKSIgLz4KICAgICAgPGFuaW1hdGUgeGxpbms6aHJlZj0iI3IiIGF0dHJpYnV0ZU5hbWU9IngiIGZyb209Ii04NiIgdG89Ijg2IiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICAgIDwvc3ZnPg==")',
                      }}
                    />
                    <noscript>
                      <img
                        alt="Opel"
                        srcSet="/images/car-finder/brands/opel.svg 1x, /images/car-finder/brands/opel.svg 2x"
                        src="/images/car-finder/brands/opel.svg"
                        decoding="async"
                        data-nimg="intrinsic"
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
                          boxSizing: "border-box",
                          padding: 0,
                          border: "none",
                          margin: "auto",
                          display: "block",
                          width: 0,
                          height: 0,
                          minWidth: "100%",
                          maxWidth: "100%",
                          minHeight: "100%",
                          maxHeight: "100%",
                        }}
                        loading="lazy"
                      />
                    </noscript>
                  </span>
                </a>
              </div>
              <div className="mb-4 pb-2 col-xl-1 col-sm-2 col-3">
                <a
                  className="d-flex justify-content-center opacity-40 opacity-transition"
                  href="/car-finder#"
                >
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "inline-block",
                      overflow: "hidden",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                      position: "relative",
                      maxWidth: "100%",
                    }}
                  >
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        maxWidth: "100%",
                      }}
                    >
                      <img
                        style={{
                          display: "block",
                          maxWidth: "100%",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0,
                        }}
                        alt=""
                        aria-hidden="true"
                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2786%27%20height=%2748%27/%3e"
                      />
                    </span>
                    <img
                      alt="Opel"
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                      decoding="async"
                      data-nimg="intrinsic"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        boxSizing: "border-box",
                        padding: 0,
                        border: "none",
                        margin: "auto",
                        display: "block",
                        width: 0,
                        height: 0,
                        minWidth: "100%",
                        maxWidth: "100%",
                        minHeight: "100%",
                        maxHeight: "100%",
                        backgroundSize: "cover",
                        backgroundPosition: "0% 0%",
                        filter: "blur(20px)",
                        backgroundImage:
                          'url("data:image/svg+xml;base64,CiAgICA8c3ZnIHdpZHRoPSI4NiIgaGVpZ2h0PSI0OCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJnIj4KICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNlZmVkZjAiIG9mZnNldD0iMjAlIiAvPgogICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI2Q4ZDdkYSIgb2Zmc2V0PSI1MCUiIC8+CiAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjZWZlZGYwIiBvZmZzZXQ9IjcwJSIgLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICA8L2RlZnM+CiAgICAgIDxyZWN0IHdpZHRoPSI4NiIgaGVpZ2h0PSI0OCIgZmlsbD0iI2VmZWRmMCIgLz4KICAgICAgPHJlY3QgaWQ9InIiIHdpZHRoPSI4NiIgaGVpZ2h0PSI0OCIgZmlsbD0idXJsKCNnKSIgLz4KICAgICAgPGFuaW1hdGUgeGxpbms6aHJlZj0iI3IiIGF0dHJpYnV0ZU5hbWU9IngiIGZyb209Ii04NiIgdG89Ijg2IiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICAgIDwvc3ZnPg==")',
                      }}
                    />
                    <noscript>
                      <img
                        alt="Opel"
                        srcSet="/images/car-finder/brands/opel.svg 1x, /images/car-finder/brands/opel.svg 2x"
                        src="/images/car-finder/brands/opel.svg"
                        decoding="async"
                        data-nimg="intrinsic"
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
                          boxSizing: "border-box",
                          padding: 0,
                          border: "none",
                          margin: "auto",
                          display: "block",
                          width: 0,
                          height: 0,
                          minWidth: "100%",
                          maxWidth: "100%",
                          minHeight: "100%",
                          maxHeight: "100%",
                        }}
                        loading="lazy"
                      />
                    </noscript>
                  </span>
                </a>
              </div>
              <div className="mb-4 pb-2 col-xl-1 col-sm-2 col-3">
                <a
                  className="d-flex justify-content-center opacity-40 opacity-transition"
                  href="/car-finder#"
                >
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "inline-block",
                      overflow: "hidden",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                      position: "relative",
                      maxWidth: "100%",
                    }}
                  >
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        maxWidth: "100%",
                      }}
                    >
                      <img
                        style={{
                          display: "block",
                          maxWidth: "100%",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0,
                        }}
                        alt=""
                        aria-hidden="true"
                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2786%27%20height=%2748%27/%3e"
                      />
                    </span>
                    <img
                      alt="Opel"
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                      decoding="async"
                      data-nimg="intrinsic"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        boxSizing: "border-box",
                        padding: 0,
                        border: "none",
                        margin: "auto",
                        display: "block",
                        width: 0,
                        height: 0,
                        minWidth: "100%",
                        maxWidth: "100%",
                        minHeight: "100%",
                        maxHeight: "100%",
                        backgroundSize: "cover",
                        backgroundPosition: "0% 0%",
                        filter: "blur(20px)",
                        backgroundImage:
                          'url("data:image/svg+xml;base64,CiAgICA8c3ZnIHdpZHRoPSI4NiIgaGVpZ2h0PSI0OCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJnIj4KICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNlZmVkZjAiIG9mZnNldD0iMjAlIiAvPgogICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI2Q4ZDdkYSIgb2Zmc2V0PSI1MCUiIC8+CiAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjZWZlZGYwIiBvZmZzZXQ9IjcwJSIgLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICA8L2RlZnM+CiAgICAgIDxyZWN0IHdpZHRoPSI4NiIgaGVpZ2h0PSI0OCIgZmlsbD0iI2VmZWRmMCIgLz4KICAgICAgPHJlY3QgaWQ9InIiIHdpZHRoPSI4NiIgaGVpZ2h0PSI0OCIgZmlsbD0idXJsKCNnKSIgLz4KICAgICAgPGFuaW1hdGUgeGxpbms6aHJlZj0iI3IiIGF0dHJpYnV0ZU5hbWU9IngiIGZyb209Ii04NiIgdG89Ijg2IiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICAgIDwvc3ZnPg==")',
                      }}
                    />
                    <noscript>
                      <img
                        alt="Opel"
                        srcSet="/images/car-finder/brands/opel.svg 1x, /images/car-finder/brands/opel.svg 2x"
                        src="/images/car-finder/brands/opel.svg"
                        decoding="async"
                        data-nimg="intrinsic"
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
                          boxSizing: "border-box",
                          padding: 0,
                          border: "none",
                          margin: "auto",
                          display: "block",
                          width: 0,
                          height: 0,
                          minWidth: "100%",
                          maxWidth: "100%",
                          minHeight: "100%",
                          maxHeight: "100%",
                        }}
                        loading="lazy"
                      />
                    </noscript>
                  </span>
                </a>
              </div>
              <div className="mb-4 pb-2 col-xl-1 col-sm-2 col-3">
                <a
                  className="d-flex justify-content-center opacity-40 opacity-transition"
                  href="/car-finder#"
                >
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "inline-block",
                      overflow: "hidden",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                      position: "relative",
                      maxWidth: "100%",
                    }}
                  >
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        maxWidth: "100%",
                      }}
                    >
                      <img
                        style={{
                          display: "block",
                          maxWidth: "100%",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0,
                        }}
                        alt=""
                        aria-hidden="true"
                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2786%27%20height=%2748%27/%3e"
                      />
                    </span>
                    <img
                      alt="Opel"
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                      decoding="async"
                      data-nimg="intrinsic"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        boxSizing: "border-box",
                        padding: 0,
                        border: "none",
                        margin: "auto",
                        display: "block",
                        width: 0,
                        height: 0,
                        minWidth: "100%",
                        maxWidth: "100%",
                        minHeight: "100%",
                        maxHeight: "100%",
                        backgroundSize: "cover",
                        backgroundPosition: "0% 0%",
                        filter: "blur(20px)",
                        backgroundImage:
                          'url("data:image/svg+xml;base64,CiAgICA8c3ZnIHdpZHRoPSI4NiIgaGVpZ2h0PSI0OCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJnIj4KICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNlZmVkZjAiIG9mZnNldD0iMjAlIiAvPgogICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI2Q4ZDdkYSIgb2Zmc2V0PSI1MCUiIC8+CiAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjZWZlZGYwIiBvZmZzZXQ9IjcwJSIgLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICA8L2RlZnM+CiAgICAgIDxyZWN0IHdpZHRoPSI4NiIgaGVpZ2h0PSI0OCIgZmlsbD0iI2VmZWRmMCIgLz4KICAgICAgPHJlY3QgaWQ9InIiIHdpZHRoPSI4NiIgaGVpZ2h0PSI0OCIgZmlsbD0idXJsKCNnKSIgLz4KICAgICAgPGFuaW1hdGUgeGxpbms6aHJlZj0iI3IiIGF0dHJpYnV0ZU5hbWU9IngiIGZyb209Ii04NiIgdG89Ijg2IiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICAgIDwvc3ZnPg==")',
                      }}
                    />
                    <noscript>
                      <img
                        alt="Opel"
                        srcSet="/images/car-finder/brands/opel.svg 1x, /images/car-finder/brands/opel.svg 2x"
                        src="/images/car-finder/brands/opel.svg"
                        decoding="async"
                        data-nimg="intrinsic"
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
                          boxSizing: "border-box",
                          padding: 0,
                          border: "none",
                          margin: "auto",
                          display: "block",
                          width: 0,
                          height: 0,
                          minWidth: "100%",
                          maxWidth: "100%",
                          minHeight: "100%",
                          maxHeight: "100%",
                        }}
                        loading="lazy"
                      />
                    </noscript>
                  </span>
                </a>
              </div>
              <div className="mb-4 pb-2 col-xl-1 col-sm-2 col-3">
                <a
                  className="d-flex justify-content-center opacity-40 opacity-transition"
                  href="/car-finder#"
                >
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "inline-block",
                      overflow: "hidden",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                      position: "relative",
                      maxWidth: "100%",
                    }}
                  >
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        maxWidth: "100%",
                      }}
                    >
                      <img
                        style={{
                          display: "block",
                          maxWidth: "100%",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0,
                        }}
                        alt=""
                        aria-hidden="true"
                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2786%27%20height=%2748%27/%3e"
                      />
                    </span>
                    <img
                      alt="Opel"
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                      decoding="async"
                      data-nimg="intrinsic"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        boxSizing: "border-box",
                        padding: 0,
                        border: "none",
                        margin: "auto",
                        display: "block",
                        width: 0,
                        height: 0,
                        minWidth: "100%",
                        maxWidth: "100%",
                        minHeight: "100%",
                        maxHeight: "100%",
                        backgroundSize: "cover",
                        backgroundPosition: "0% 0%",
                        filter: "blur(20px)",
                        backgroundImage:
                          'url("data:image/svg+xml;base64,CiAgICA8c3ZnIHdpZHRoPSI4NiIgaGVpZ2h0PSI0OCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJnIj4KICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNlZmVkZjAiIG9mZnNldD0iMjAlIiAvPgogICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI2Q4ZDdkYSIgb2Zmc2V0PSI1MCUiIC8+CiAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjZWZlZGYwIiBvZmZzZXQ9IjcwJSIgLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICA8L2RlZnM+CiAgICAgIDxyZWN0IHdpZHRoPSI4NiIgaGVpZ2h0PSI0OCIgZmlsbD0iI2VmZWRmMCIgLz4KICAgICAgPHJlY3QgaWQ9InIiIHdpZHRoPSI4NiIgaGVpZ2h0PSI0OCIgZmlsbD0idXJsKCNnKSIgLz4KICAgICAgPGFuaW1hdGUgeGxpbms6aHJlZj0iI3IiIGF0dHJpYnV0ZU5hbWU9IngiIGZyb209Ii04NiIgdG89Ijg2IiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICAgIDwvc3ZnPg==")',
                      }}
                    />
                    <noscript>
                      <img
                        alt="Opel"
                        srcSet="/images/car-finder/brands/opel.svg 1x, /images/car-finder/brands/opel.svg 2x"
                        src="/images/car-finder/brands/opel.svg"
                        decoding="async"
                        data-nimg="intrinsic"
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
                          boxSizing: "border-box",
                          padding: 0,
                          border: "none",
                          margin: "auto",
                          display: "block",
                          width: 0,
                          height: 0,
                          minWidth: "100%",
                          maxWidth: "100%",
                          minHeight: "100%",
                          maxHeight: "100%",
                        }}
                        loading="lazy"
                      />
                    </noscript>
                  </span>
                </a>
              </div>
              <div className="mb-4 pb-2 col-xl-1 col-sm-2 col-3">
                <a
                  className="d-flex justify-content-center opacity-40 opacity-transition"
                  href="/car-finder#"
                >
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "inline-block",
                      overflow: "hidden",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                      position: "relative",
                      maxWidth: "100%",
                    }}
                  >
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        maxWidth: "100%",
                      }}
                    >
                      <img
                        style={{
                          display: "block",
                          maxWidth: "100%",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0,
                        }}
                        alt=""
                        aria-hidden="true"
                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2786%27%20height=%2748%27/%3e"
                      />
                    </span>
                    <img
                      alt="Opel"
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                      decoding="async"
                      data-nimg="intrinsic"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        boxSizing: "border-box",
                        padding: 0,
                        border: "none",
                        margin: "auto",
                        display: "block",
                        width: 0,
                        height: 0,
                        minWidth: "100%",
                        maxWidth: "100%",
                        minHeight: "100%",
                        maxHeight: "100%",
                        backgroundSize: "cover",
                        backgroundPosition: "0% 0%",
                        filter: "blur(20px)",
                        backgroundImage:
                          'url("data:image/svg+xml;base64,CiAgICA8c3ZnIHdpZHRoPSI4NiIgaGVpZ2h0PSI0OCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJnIj4KICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNlZmVkZjAiIG9mZnNldD0iMjAlIiAvPgogICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI2Q4ZDdkYSIgb2Zmc2V0PSI1MCUiIC8+CiAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjZWZlZGYwIiBvZmZzZXQ9IjcwJSIgLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICA8L2RlZnM+CiAgICAgIDxyZWN0IHdpZHRoPSI4NiIgaGVpZ2h0PSI0OCIgZmlsbD0iI2VmZWRmMCIgLz4KICAgICAgPHJlY3QgaWQ9InIiIHdpZHRoPSI4NiIgaGVpZ2h0PSI0OCIgZmlsbD0idXJsKCNnKSIgLz4KICAgICAgPGFuaW1hdGUgeGxpbms6aHJlZj0iI3IiIGF0dHJpYnV0ZU5hbWU9IngiIGZyb209Ii04NiIgdG89Ijg2IiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICAgIDwvc3ZnPg==")',
                      }}
                    />
                    <noscript>
                      <img
                        alt="Opel"
                        srcSet="/images/car-finder/brands/opel.svg 1x, /images/car-finder/brands/opel.svg 2x"
                        src="/images/car-finder/brands/opel.svg"
                        decoding="async"
                        data-nimg="intrinsic"
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
                          boxSizing: "border-box",
                          padding: 0,
                          border: "none",
                          margin: "auto",
                          display: "block",
                          width: 0,
                          height: 0,
                          minWidth: "100%",
                          maxWidth: "100%",
                          minHeight: "100%",
                          maxHeight: "100%",
                        }}
                        loading="lazy"
                      />
                    </noscript>
                  </span>
                </a>
              </div>
              <div className="mb-4 pb-2 col-xl-1 col-sm-2 col-3">
                <a
                  className="d-flex justify-content-center opacity-40 opacity-transition"
                  href="/car-finder#"
                >
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "inline-block",
                      overflow: "hidden",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                      position: "relative",
                      maxWidth: "100%",
                    }}
                  >
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        maxWidth: "100%",
                      }}
                    >
                      <img
                        style={{
                          display: "block",
                          maxWidth: "100%",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0,
                        }}
                        alt=""
                        aria-hidden="true"
                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2786%27%20height=%2748%27/%3e"
                      />
                    </span>
                    <img
                      alt="Opel"
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                      decoding="async"
                      data-nimg="intrinsic"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        boxSizing: "border-box",
                        padding: 0,
                        border: "none",
                        margin: "auto",
                        display: "block",
                        width: 0,
                        height: 0,
                        minWidth: "100%",
                        maxWidth: "100%",
                        minHeight: "100%",
                        maxHeight: "100%",
                        backgroundSize: "cover",
                        backgroundPosition: "0% 0%",
                        filter: "blur(20px)",
                        backgroundImage:
                          'url("data:image/svg+xml;base64,CiAgICA8c3ZnIHdpZHRoPSI4NiIgaGVpZ2h0PSI0OCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJnIj4KICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNlZmVkZjAiIG9mZnNldD0iMjAlIiAvPgogICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI2Q4ZDdkYSIgb2Zmc2V0PSI1MCUiIC8+CiAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjZWZlZGYwIiBvZmZzZXQ9IjcwJSIgLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICA8L2RlZnM+CiAgICAgIDxyZWN0IHdpZHRoPSI4NiIgaGVpZ2h0PSI0OCIgZmlsbD0iI2VmZWRmMCIgLz4KICAgICAgPHJlY3QgaWQ9InIiIHdpZHRoPSI4NiIgaGVpZ2h0PSI0OCIgZmlsbD0idXJsKCNnKSIgLz4KICAgICAgPGFuaW1hdGUgeGxpbms6aHJlZj0iI3IiIGF0dHJpYnV0ZU5hbWU9IngiIGZyb209Ii04NiIgdG89Ijg2IiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICAgIDwvc3ZnPg==")',
                      }}
                    />
                    <noscript>
                      <img
                        alt="Opel"
                        srcSet="/images/car-finder/brands/opel.svg 1x, /images/car-finder/brands/opel.svg 2x"
                        src="/images/car-finder/brands/opel.svg"
                        decoding="async"
                        data-nimg="intrinsic"
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
                          boxSizing: "border-box",
                          padding: 0,
                          border: "none",
                          margin: "auto",
                          display: "block",
                          width: 0,
                          height: 0,
                          minWidth: "100%",
                          maxWidth: "100%",
                          minHeight: "100%",
                          maxHeight: "100%",
                        }}
                        loading="lazy"
                      />
                    </noscript>
                  </span>
                </a>
              </div>
            </div>
          </section>
          <section className="pt-4 pt-md-5 container">
            <div className="d-sm-flex align-items-center justify-content-between">
              <h2 className="h3 text-light mb-2 mb-sm-0">
                What sets Finder apart?
              </h2>
              <a
                role="button"
                tabIndex="0"
                className="btn btn-link btn-light fw-normal px-0"
                href="/car-finder#"
              >
                How to sell cars on Finder
                <i className="fi-arrow-long-right fs-sm mt-0 ps-1 ms-2"></i>
              </a>
            </div>
            <div className="row">
              <div className="pt-4 mt-2 pt-md-5 mt-md-3 col-lg-4 col-md-5 offset-lg-1">
                <div className="d-flex pb-4 pb-md-5 mb-2">
                  <i className="fi-file lead text-primary mt-1 order-md-2"></i>
                  <div className="text-md-end ps-3 ps-md-0 pe-md-3 order-md-1">
                    <h3 className="h6 text-light mb-1">
                      Over 1 Million Listings
                    </h3>
                    <p className="fs-sm text-light opacity-70 mb-0">
                      That &#x27;s more than you &#x27;ll find on any other
                      major online automotive marketplace in the USA.
                    </p>
                  </div>
                </div>
                <div className="d-flex pb-4 pb-md-5 mb-2">
                  <i className="fi-search lead text-primary mt-1 order-md-2"></i>
                  <div className="text-md-end ps-3 ps-md-0 pe-md-3 order-md-1">
                    <h3 className="h6 text-light mb-1">Personalized Search</h3>
                    <p className="fs-sm text-light opacity-70 mb-0">
                      Our powerful search makes it easy to personalize your
                      results so you only see the cars and features you care
                      about.
                    </p>
                  </div>
                </div>
                <div className="d-flex pb-4 pb-md-5 mb-2">
                  <i className="fi-settings lead text-primary mt-1 order-md-2"></i>
                  <div className="text-md-end ps-3 ps-md-0 pe-md-3 order-md-1">
                    <h3 className="h6 text-light mb-1">Non-Stop Innovation</h3>
                    <p className="fs-sm text-light opacity-70 mb-0">
                      Our team is constantly developing new features that make
                      the process of buying and selling a car simpler.
                    </p>
                  </div>
                </div>
              </div>
              <div className="d-none d-md-block col-md-2">
                <div
                  id="wrapper"
                  className="position-relative mx-auto"
                  style={{ maxWidth: "5rem", minHeight: "26rem" }}
                >
                  <div className="content-overlay mt-5 pt-5">
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "inline-block",
                        overflow: "hidden",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        position: "relative",
                        maxWidth: "100%",
                      }}
                    >
                      <span
                        style={{
                          boxSizing: "border-box",
                          display: "block",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0,
                          maxWidth: "100%",
                        }}
                      >
                        <img
                          style={{
                            display: "block",
                            maxWidth: "100%",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                          }}
                          alt=""
                          aria-hidden="true"
                          src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2780%27%20height=%27177%27/%3e"
                        />
                      </span>
                      <img
                        light="true"
                        alt="Car image"
                        src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                        decoding="async"
                        data-nimg="intrinsic"
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
                          boxSizing: "border-box",
                          padding: 0,
                          border: "none",
                          margin: "auto",
                          display: "block",
                          width: 0,
                          height: 0,
                          minWidth: "100%",
                          maxWidth: "100%",
                          minHeight: "100%",
                          maxHeight: "100%",
                          backgroundSize: "cover",
                          backgroundPosition: "0% 0%",
                          filter: "blur(20px)",
                          backgroundImage:
                            'url("data:image/svg+xml;base64,CiAgICA8c3ZnIHdpZHRoPSI4MCIgaGVpZ2h0PSIxNzciIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iZyI+CiAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMzUyZTQ0IiBvZmZzZXQ9IjIwJSIgLz4KICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMxZjFiMmQiIG9mZnNldD0iNTAlIiAvPgogICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzM1MmU0NCIgb2Zmc2V0PSI3MCUiIC8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgPC9kZWZzPgogICAgICA8cmVjdCB3aWR0aD0iODAiIGhlaWdodD0iMTc3IiBmaWxsPSIjMzUyZTQ0IiAvPgogICAgICA8cmVjdCBpZD0iciIgd2lkdGg9IjgwIiBoZWlnaHQ9IjE3NyIgZmlsbD0idXJsKCNnKSIgLz4KICAgICAgPGFuaW1hdGUgeGxpbms6aHJlZj0iI3IiIGF0dHJpYnV0ZU5hbWU9IngiIGZyb209Ii04MCIgdG89IjgwIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICAgIDwvc3ZnPg==")',
                        }}
                      />
                      <noscript>
                        <img
                          light="true"
                          alt="Car image"
                          srcSet="/images/car-finder/home/car.svg 1x, /images/car-finder/home/car.svg 2x"
                          src="/images/car-finder/home/car.svg"
                          decoding="async"
                          data-nimg="intrinsic"
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                            boxSizing: "border-box",
                            padding: 0,
                            border: "none",
                            margin: "auto",
                            display: "block",
                            width: 0,
                            height: 0,
                            minWidth: "100%",
                            maxWidth: "100%",
                            minHeight: "100%",
                            maxHeight: "100%",
                          }}
                          loading="lazy"
                        />
                      </noscript>
                    </span>
                  </div>
                  <div className="position-absolute top-0 start-50 translate-middle-x h-100 overflow-hidden mt-n5">
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="2"
                      height="656"
                      x="0px"
                      y="0px"
                      viewBox="0 0 2 656"
                    >
                      <path
                        fill="#fff"
                        fillOpacity=".16"
                        d="M2,335.1V354H0l0-18.9H2z M2,368.6v18.9H0l0-18.9H2z M2,402.1v18.9H0l0-18.9H2z M2,435.7v18.9H0l0-18.9H2z M2,469.2v18.9H0l0-18.9H2z M2,502.8v18.9H0l0-18.9H2z M2,536.3v18.9H0l0-18.9H2z M2,569.9v18.9H0l0-18.9H2z M2,603.4l0,18.9H0l0-18.9H2z M2,637v9.5v9.5H0L0,637H2z"
                      ></path>
                      <g fillOpacity=".16">
                        <path fill="#fff" d="M2,18.9H0L0,0h2V18.9z"></path>
                        <path fill="#fff" d="M2,52.5H0l0-18.9h2V52.5z"></path>
                        <path fill="#fff" d="M2,86H0l0-18.9h2V86z"></path>
                        <path fill="#fff" d="M2,119.6H0l0-18.9h2V119.6z"></path>
                        <path fill="#fff" d="M2,153.1H0l0-18.9h2V153.1z"></path>
                        <path fill="#fff" d="M2,186.7H0l0-18.9h2V186.7z"></path>
                        <path fill="#fff" d="M2,220.2H0l0-18.9h2V220.2z"></path>
                        <path fill="#fff" d="M2,253.8H0l0-18.9h2V253.8z"></path>
                        <path
                          fill="#fff"
                          d="M2,287.3H0l0-18.9h2L2,287.3z"
                        ></path>
                        <path
                          fill="#fff"
                          d="M2,320.8H0l0-18.9h2v9.5V320.8z"
                        ></path>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="pt-md-5 mt-md-3 col-lg-4 col-md-5">
                <div className="d-flex pb-4 pb-md-5 mb-2">
                  <i className="fi-info-circle lead text-primary mt-1"></i>
                  <div className="ps-3">
                    <h3 className="h6 text-light mb-1">Valuable Insights</h3>
                    <p className="fs-sm text-light opacity-70 mb-0">
                      We provide free access to key info like dealer reviews,
                      market value, price drops.
                    </p>
                  </div>
                </div>
                <div className="d-flex pb-4 pb-md-5 mb-2">
                  <i className="fi-users lead text-primary mt-1"></i>
                  <div className="ps-3">
                    <h3 className="h6 text-light mb-1">
                      Consumer-First Mentality
                    </h3>
                    <p className="fs-sm text-light opacity-70 mb-0">
                      We focus on building the most transparent, trustworthy
                      experience for our users, and we &#x27;ve proven that
                      works for dealers, too.
                    </p>
                  </div>
                </div>
                <div className="d-flex pb-4 pb-md-5 mb-2">
                  <i className="fi-calculator lead text-primary mt-1"></i>
                  <div className="ps-3">
                    <h3 className="h6 text-light mb-1">Online Car Appraisal</h3>
                    <p className="fs-sm text-light opacity-70 mb-0">
                      Specify the parameters of your car to form its market
                      value on the basis of similar cars on Finder.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="pt-sm-5 pt-4 pb-3 container">
            <div className="d-sm-flex align-items-center justify-content-between mb-3 mb-sm-4 pb-2">
              <h2 className="h3 text-light mb-3 mb-sm-0">Latest cars</h2>
              <div className="d-flex align-items-center">
                <div className="nav-tabs-light fs-sm me-4 pe-2 mb-0 nav nav-tabs">
                  <div className="nav-item">
                    <a
                      role="button"
                      data-rr-ui-event-key="new"
                      className="nav-link"
                      tabIndex="0"
                      href="#"
                    >
                      New
                    </a>
                  </div>
                  <div className="nav-item">
                    <a
                      role="button"
                      data-rr-ui-event-key="used"
                      className="nav-link active"
                      tabIndex="0"
                      href="#"
                    >
                      Used
                    </a>
                  </div>
                </div>
                <a
                  role="button"
                  tabIndex="0"
                  className="btn btn-link btn-light fw-normal px-0"
                  href="/car-finder/catalog?view=grid"
                >
                  View all
                  <i className="fi-arrow-long-right fs-sm mt-0 ps-1 ms-2"></i>
                </a>
              </div>
            </div>
            <div className="position-relative">
              <div className="swiper">
                <div className="swiper-wrapper">
                  <div
                    className="swiper-slide h-auto swiper-slide-duplicate"
                    data-swiper-slide-index="3"
                  >
                    <div className="card card-light card-hover h-100">
                      <template id="B:0"></template>

                      <div className="card-body">
                        <div className="d-flex align-items-center justify-content-between pb-1">
                          <span className="fs-sm text-light me-3">2018</span>
                          <div className="form-check form-check-light">
                            <label className="form-check-label">
                              <input
                                type="checkbox"
                                className="form-check-input"
                              />
                              <span className="fs-sm">Compare</span>
                            </label>
                          </div>
                        </div>
                        <h3 className="h6 mb-1">
                          <a
                            className="nav-link-light"
                            href="/car-finder/single"
                          >
                            Mercedes Benz C300 Sport
                          </a>
                        </h3>
                        <div className="text-primary fw-bold mb-1">$53,600</div>
                        <div className="fs-sm text-light opacity-70">
                          <i className="fi-map-pin me-1"></i>
                          San Francisco
                        </div>
                      </div>
                      <div className="card-footer border-0 pt-0">
                        <div className="border-top border-light pt-3">
                          <div className="me-n1">
                            <div className="row g-2">
                              <div className="col me-sm-1">
                                <div className="bg-dark text-light rounded text-center w-100 h-100 text-nowrap p-2">
                                  <i className="fi-dashboard text-light d-block h4 mb-0"></i>
                                  <span className="fs-xs">35K mi</span>
                                </div>
                              </div>
                              <div className="col me-sm-1">
                                <div className="bg-dark text-light rounded text-center w-100 h-100 text-nowrap p-2">
                                  <i className="fi-gearbox text-light d-block h4 mb-0"></i>
                                  <span className="fs-xs">Automatic</span>
                                </div>
                              </div>
                              <div className="col me-sm-1">
                                <div className="bg-dark text-light rounded text-center w-100 h-100 text-nowrap p-2">
                                  <i className="fi-petrol text-light d-block h4 mb-0"></i>
                                  <span className="fs-xs">Hybrid</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="swiper-slide h-auto"
                    data-swiper-slide-index="0"
                  >
                    <div className="card card-light card-hover h-100">
                      <template id="B:1"></template>

                      <div className="card-body">
                        <div className="d-flex align-items-center justify-content-between pb-1">
                          <span className="fs-sm text-light me-3">2019</span>
                          <div className="form-check form-check-light">
                            <label className="form-check-label">
                              <input
                                type="checkbox"
                                className="form-check-input"
                              />
                              <span className="fs-sm">Compare</span>
                            </label>
                          </div>
                        </div>
                        <h3 className="h6 mb-1">
                          <a
                            className="nav-link-light"
                            href="/car-finder/single"
                          >
                            Nissan 370Z Nismo
                          </a>
                        </h3>
                        <div className="text-primary fw-bold mb-1">$37,900</div>
                        <div className="fs-sm text-light opacity-70">
                          <i className="fi-map-pin me-1"></i>
                          New York
                        </div>
                      </div>
                      <div className="card-footer border-0 pt-0">
                        <div className="border-top border-light pt-3">
                          <div className="me-n1">
                            <div className="row g-2">
                              <div className="col me-sm-1">
                                <div className="bg-dark text-light rounded text-center w-100 h-100 text-nowrap p-2">
                                  <i className="fi-dashboard text-light d-block h4 mb-0"></i>
                                  <span className="fs-xs">34K mi</span>
                                </div>
                              </div>
                              <div className="col me-sm-1">
                                <div className="bg-dark text-light rounded text-center w-100 h-100 text-nowrap p-2">
                                  <i className="fi-gearbox text-light d-block h4 mb-0"></i>
                                  <span className="fs-xs">Automatic</span>
                                </div>
                              </div>
                              <div className="col me-sm-1">
                                <div className="bg-dark text-light rounded text-center w-100 h-100 text-nowrap p-2">
                                  <i className="fi-petrol text-light d-block h4 mb-0"></i>
                                  <span className="fs-xs">Gasoline</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="swiper-slide h-auto"
                    data-swiper-slide-index="1"
                  >
                    <div className="card card-light card-hover h-100">
                      <template id="B:2"></template>

                      <div className="card-body">
                        <div className="d-flex align-items-center justify-content-between pb-1">
                          <span className="fs-sm text-light me-3">2017</span>
                          <div className="form-check form-check-light">
                            <label className="form-check-label">
                              <input
                                type="checkbox"
                                className="form-check-input"
                              />
                              <span className="fs-sm">Compare</span>
                            </label>
                          </div>
                        </div>
                        <h3 className="h6 mb-1">
                          <a
                            className="nav-link-light"
                            href="/car-finder/single"
                          >
                            Ford Explorer XLT
                          </a>
                        </h3>
                        <div className="text-primary fw-bold mb-1">$26,950</div>
                        <div className="fs-sm text-light opacity-70">
                          <i className="fi-map-pin me-1"></i>
                          Kansas
                        </div>
                      </div>
                      <div className="card-footer border-0 pt-0">
                        <div className="border-top border-light pt-3">
                          <div className="me-n1">
                            <div className="row g-2">
                              <div className="col me-sm-1">
                                <div className="bg-dark text-light rounded text-center w-100 h-100 text-nowrap p-2">
                                  <i className="fi-dashboard text-light d-block h4 mb-0"></i>
                                  <span className="fs-xs">34K mi</span>
                                </div>
                              </div>
                              <div className="col me-sm-1">
                                <div className="bg-dark text-light rounded text-center w-100 h-100 text-nowrap p-2">
                                  <i className="fi-gearbox text-light d-block h4 mb-0"></i>
                                  <span className="fs-xs">Manual</span>
                                </div>
                              </div>
                              <div className="col me-sm-1">
                                <div className="bg-dark text-light rounded text-center w-100 h-100 text-nowrap p-2">
                                  <i className="fi-petrol text-light d-block h4 mb-0"></i>
                                  <span className="fs-xs">Diesel</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="swiper-slide h-auto"
                    data-swiper-slide-index="2"
                  >
                    <div className="card card-light card-hover h-100">
                      <template id="B:3"></template>

                      <div className="card-body">
                        <div className="d-flex align-items-center justify-content-between pb-1">
                          <span className="fs-sm text-light me-3">2019</span>
                          <div className="form-check form-check-light">
                            <label className="form-check-label">
                              <input
                                type="checkbox"
                                className="form-check-input"
                              />
                              <span className="fs-sm">Compare</span>
                            </label>
                          </div>
                        </div>
                        <h3 className="h6 mb-1">
                          <a
                            className="nav-link-light"
                            href="/car-finder/single"
                          >
                            Mazda MX-5 Miata Convertible
                          </a>
                        </h3>
                        <div className="text-primary fw-bold mb-1">$29,700</div>
                        <div className="fs-sm text-light opacity-70">
                          <i className="fi-map-pin me-1"></i>
                          Los Angeles
                        </div>
                      </div>
                      <div className="card-footer border-0 pt-0">
                        <div className="border-top border-light pt-3">
                          <div className="me-n1">
                            <div className="row g-2">
                              <div className="col me-sm-1">
                                <div className="bg-dark text-light rounded text-center w-100 h-100 text-nowrap p-2">
                                  <i className="fi-dashboard text-light d-block h4 mb-0"></i>
                                  <span className="fs-xs">18K mi</span>
                                </div>
                              </div>
                              <div className="col me-sm-1">
                                <div className="bg-dark text-light rounded text-center w-100 h-100 text-nowrap p-2">
                                  <i className="fi-gearbox text-light d-block h4 mb-0"></i>
                                  <span className="fs-xs">Manual</span>
                                </div>
                              </div>
                              <div className="col me-sm-1">
                                <div className="bg-dark text-light rounded text-center w-100 h-100 text-nowrap p-2">
                                  <i className="fi-petrol text-light d-block h4 mb-0"></i>
                                  <span className="fs-xs">Gasoline</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="swiper-slide h-auto"
                    data-swiper-slide-index="3"
                  >
                    <div className="card card-light card-hover h-100">
                      <template id="B:4"></template>

                      <div className="card-body">
                        <div className="d-flex align-items-center justify-content-between pb-1">
                          <span className="fs-sm text-light me-3">2018</span>
                          <div className="form-check form-check-light">
                            <label className="form-check-label">
                              <input
                                type="checkbox"
                                className="form-check-input"
                              />
                              <span className="fs-sm">Compare</span>
                            </label>
                          </div>
                        </div>
                        <h3 className="h6 mb-1">
                          <a
                            className="nav-link-light"
                            href="/car-finder/single"
                          >
                            Mercedes Benz C300 Sport
                          </a>
                        </h3>
                        <div className="text-primary fw-bold mb-1">$53,600</div>
                        <div className="fs-sm text-light opacity-70">
                          <i className="fi-map-pin me-1"></i>
                          San Francisco
                        </div>
                      </div>
                      <div className="card-footer border-0 pt-0">
                        <div className="border-top border-light pt-3">
                          <div className="me-n1">
                            <div className="row g-2">
                              <div className="col me-sm-1">
                                <div className="bg-dark text-light rounded text-center w-100 h-100 text-nowrap p-2">
                                  <i className="fi-dashboard text-light d-block h4 mb-0"></i>
                                  <span className="fs-xs">35K mi</span>
                                </div>
                              </div>
                              <div className="col me-sm-1">
                                <div className="bg-dark text-light rounded text-center w-100 h-100 text-nowrap p-2">
                                  <i className="fi-gearbox text-light d-block h4 mb-0"></i>
                                  <span className="fs-xs">Automatic</span>
                                </div>
                              </div>
                              <div className="col me-sm-1">
                                <div className="bg-dark text-light rounded text-center w-100 h-100 text-nowrap p-2">
                                  <i className="fi-petrol text-light d-block h4 mb-0"></i>
                                  <span className="fs-xs">Hybrid</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="swiper-slide h-auto swiper-slide-duplicate"
                    data-swiper-slide-index="0"
                  >
                    <div className="card card-light card-hover h-100">
                      <template id="B:5"></template>
                      <div className="card-body">
                        <div className="d-flex align-items-center justify-content-between pb-1">
                          <span className="fs-sm text-light me-3">2019</span>
                          <div className="form-check form-check-light">
                            <label className="form-check-label">
                              <input
                                type="checkbox"
                                className="form-check-input"
                              />
                              <span className="fs-sm">Compare</span>
                            </label>
                          </div>
                        </div>
                        <h3 className="h6 mb-1">
                          <a
                            className="nav-link-light"
                            href="/car-finder/single"
                          >
                            Nissan 370Z Nismo
                          </a>
                        </h3>
                        <div className="text-primary fw-bold mb-1">$37,900</div>
                        <div className="fs-sm text-light opacity-70">
                          <i className="fi-map-pin me-1"></i>
                          New York
                        </div>
                      </div>
                      <div className="card-footer border-0 pt-0">
                        <div className="border-top border-light pt-3">
                          <div className="me-n1">
                            <div className="row g-2">
                              <div className="col me-sm-1">
                                <div className="bg-dark text-light rounded text-center w-100 h-100 text-nowrap p-2">
                                  <i className="fi-dashboard text-light d-block h4 mb-0"></i>
                                  <span className="fs-xs">34K mi</span>
                                </div>
                              </div>
                              <div className="col me-sm-1">
                                <div className="bg-dark text-light rounded text-center w-100 h-100 text-nowrap p-2">
                                  <i className="fi-gearbox text-light d-block h4 mb-0"></i>
                                  <span className="fs-xs">Automatic</span>
                                </div>
                              </div>
                              <div className="col me-sm-1">
                                <div className="bg-dark text-light rounded text-center w-100 h-100 text-nowrap p-2">
                                  <i className="fi-petrol text-light d-block h4 mb-0"></i>
                                  <span className="fs-xs">Gasoline</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                type="button"
                id="carsPrev"
                className="d-none d-xxl-block mt-n5 ms-n5 btn btn-prev btn-light"
              ></button>
              <button
                type="button"
                id="carsNext"
                className="d-none d-xxl-block mt-n5 me-n5 btn btn-next btn-light"
              ></button>
            </div>
            <div
              id="carsBullets"
              className="swiper-pagination swiper-pagination-light position-relative bottom-0 pt-2 mt-4 pb-4 pb-sm-3"
            ></div>
          </section>
        </main>
        <footer className="footer bg-faded-light">
          <div className="border-bottom border-light py-4">
            <div className="d-sm-flex align-items-center justify-content-between container">
              <a className="d-inline-flex" href="/car-finder">
                <span
                  style={{
                    boxSizing: "border-box",
                    display: "inline-block",
                    overflow: "hidden",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: 1,
                    border: 0,
                    margin: 0,
                    padding: 0,
                    position: "relative",
                    maxWidth: "100%",
                  }}
                >
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "block",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                      maxWidth: "100%",
                    }}
                  >
                    <img
                      style={{
                        display: "block",
                        maxWidth: "100%",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                      }}
                      alt=""
                      aria-hidden="true"
                      src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2780%27%20height=%27177%27/%3e"
                    />
                  </span>
                  <img
                    light="true"
                    alt="Car image"
                    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                    decoding="async"
                    data-nimg="intrinsic"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                      boxSizing: "border-box",
                      padding: 0,
                      border: "none",
                      margin: "auto",
                      display: "block",
                      width: 0,
                      height: 0,
                      minWidth: "100%",
                      maxWidth: "100%",
                      minHeight: "100%",
                      maxHeight: "100%",
                      backgroundSize: "cover",
                      backgroundPosition: "0% 0%",
                      filter: "blur(20px)",
                      backgroundImage:
                        'url("data:image/svg+xml;base64,CiAgICA8c3ZnIHdpZHRoPSI4MCIgaGVpZ2h0PSIxNzciIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iZyI+CiAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMzUyZTQ0IiBvZmZzZXQ9IjIwJSIgLz4KICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMxZjFiMmQiIG9mZnNldD0iNTAlIiAvPgogICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzM1MmU0NCIgb2Zmc2V0PSI3MCUiIC8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgPC9kZWZzPgogICAgICA8cmVjdCB3aWR0aD0iODAiIGhlaWdodD0iMTc3IiBmaWxsPSIjMzUyZTQ0IiAvPgogICAgICA8cmVjdCBpZD0iciIgd2lkdGg9IjgwIiBoZWlnaHQ9IjE3NyIgZmlsbD0idXJsKCNnKSIgLz4KICAgICAgPGFuaW1hdGUgeGxpbms6aHJlZj0iI3IiIGF0dHJpYnV0ZU5hbWU9IngiIGZyb209Ii04MCIgdG89IjgwIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICAgIDwvc3ZnPg==")',
                    }}
                  />
                  <noscript>
                    <img
                      light="true"
                      alt="Car image"
                      srcSet="/images/car-finder/home/car.svg 1x, /images/car-finder/home/car.svg 2x"
                      src="/images/car-finder/home/car.svg"
                      decoding="async"
                      data-nimg="intrinsic"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        boxSizing: "border-box",
                        padding: 0,
                        border: "none",
                        margin: "auto",
                        display: "block",
                        width: 0,
                        height: 0,
                        minWidth: "100%",
                        maxWidth: "100%",
                        minHeight: "100%",
                        maxHeight: "100%",
                      }}
                      loading="lazy"
                    />
                  </noscript>
                </span>
              </a>
              <div className="d-flex pt-3 pt-sm-0">
                <div className="ms-n3 dropdown">
                  <button
                    type="button"
                    id="react-aria-11"
                    aria-expanded="false"
                    className="btn btn-light btn-link btn-sm fw-normal shadow-none py-2 dropdown-toggle btn btn-primary"
                  >
                    <i className="fi-globe me-2"></i>
                    Eng
                  </button>
                </div>
                <div className="dropdown">
                  <button
                    type="button"
                    id="react-aria-12"
                    aria-expanded="false"
                    className="dropdown-toggle btn btn-light btn-link btn-sm fw-normal shadow-none py-2 pe-2"
                  >
                    <i className="fi-map-pin me-2"></i>
                    New York
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-4 pb-3 pt-lg-5 pb-lg-4 container">
            <div className="row pt-2 pt-lg-0 row">
              <div className="pb-2 mb-4 col-lg-3">
                <h3 className="h5 text-light mb-2">
                  Subscribe to our newsletter
                </h3>
                <p className="fs-sm text-light opacity-70">
                  Don &#x27;t miss any relevant offers!
                </p>
                <form className="form-group form-group-light">
                  <div className="input-group input-group-sm">
                    <span className="text-muted input-group-text">
                      <i className="fi-mail"></i>
                    </span>
                    <input placeholder="Your email" className="form-control" />
                  </div>
                  <button
                    type="button"
                    className="btn btn-primary btn-icon btn-sm"
                  >
                    <i className="fi-send"></i>
                  </button>
                </form>
              </div>
              <div className="mb-2 mb-sm-4 col-lg-2 col-md-3 col-sm-6 offset-xl-1">
                <h3 className="fs-base text-light">Buying &amp;Selling</h3>
                <ul className="list-unstyled fs-sm">
                  <li>
                    <a className="nav-link-light" href="/car-finder#">
                      Find a car
                    </a>
                  </li>
                  <li>
                    <a className="nav-link-light" href="/car-finder#">
                      Sell your car
                    </a>
                  </li>
                  <li>
                    <a className="nav-link-light" href="/car-finder#">
                      Car dealers
                    </a>
                  </li>
                  <li>
                    <a className="nav-link-light" href="/car-finder#">
                      Compare cars
                    </a>
                  </li>
                  <li>
                    <a className="nav-link-light" href="/car-finder#">
                      Online car appraisal
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mb-2 mb-sm-4 col-lg-2 col-md-3 col-sm-6">
                <h3 className="fs-base text-light">About</h3>
                <ul className="list-unstyled fs-sm">
                  <li>
                    <a className="nav-link-light" href="/car-finder#">
                      About Finder
                    </a>
                  </li>
                  <li>
                    <a className="nav-link-light" href="/car-finder#">
                      Contact us
                    </a>
                  </li>
                  <li>
                    <a className="nav-link-light" href="/car-finder#">
                      FAQs &amp;support
                    </a>
                  </li>
                  <li>
                    <a className="nav-link-light" href="/car-finder#">
                      Mobile app
                    </a>
                  </li>
                  <li>
                    <a className="nav-link-light" href="/car-finder#">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mb-2 mb-sm-4 col-lg-2 col-md-3 col-sm-6">
                <h3 className="fs-base text-light">Profile</h3>
                <ul className="list-unstyled fs-sm">
                  <li>
                    <a className="nav-link-light" href="/car-finder#">
                      My account
                    </a>
                  </li>
                  <li>
                    <a className="nav-link-light" href="/car-finder#">
                      Wishlist
                    </a>
                  </li>
                  <li>
                    <a className="nav-link-light" href="/car-finder#">
                      My listings
                    </a>
                  </li>
                  <li>
                    <a className="nav-link-light" href="/car-finder#">
                      Add listing
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mb-2 mb-sm-4 col-xl-2 col-md-3 col-sm-6">
                <ul className="nav-light flex-column nav">
                  <li className="mb-2 nav-item">
                    <a
                      href="tel:4065550120"
                      data-rr-ui-event-key="tel:4065550120"
                      className="fw-normal text-light text-nowrap p-0 nav-link"
                    >
                      <i className="fi-device-mobile mt-n1 me-2 align-middle text-primary"></i>
                      (406) 555-0120
                    </a>
                  </li>
                  <li className="mb-2 nav-item">
                    <a
                      href="mailto:example@gmail.com"
                      data-rr-ui-event-key="mailto:example@gmail.com"
                      className="fw-normal text-light text-nowrap p-0 nav-link"
                    >
                      <i className="fi-mail mt-n1 me-2 align-middle text-primary"></i>
                      example@gmail.com
                    </a>
                  </li>
                </ul>
                <div className="d-flex flex-wrap pt-4">
                  <a
                    href="#"
                    className="btn btn-icon btn-xs rounded-circle btn-translucent-light mb-2 me-2"
                  >
                    <i className="fi-facebook"></i>
                  </a>
                  <a
                    href="#"
                    className="btn btn-icon btn-xs rounded-circle btn-translucent-light mb-2 me-2"
                  >
                    <i className="fi-twitter"></i>
                  </a>
                  <a
                    href="#"
                    className="btn btn-icon btn-xs rounded-circle btn-translucent-light mb-2 me-2"
                  >
                    <i className="fi-telegram"></i>
                  </a>
                  <a
                    href="#"
                    className="btn btn-icon btn-xs rounded-circle btn-translucent-light mb-2"
                  >
                    <i className="fi-messenger"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="d-lg-flex align-items-center justify-content-between fs-sm pb-3 container">
            <div className="d-flex flex-wrap justify-content-center order-lg-2 mb-3">
              <a
                className="nav-link-light fw-normal nav-link"
                href="/car-finder#"
              >
                Terms of use
              </a>
              <a
                className="nav-link-light fw-normal nav-link"
                href="/car-finder#"
              >
                Privacy policy
              </a>
              <a
                className="nav-link-light fw-normal nav-link"
                href="/car-finder#"
              >
                Accessibility statement
              </a>
              <a
                className="nav-link-light fw-normal pe-0 nav-link"
                href="/car-finder#"
              >
                Interest based ads
              </a>
            </div>
            <p className="text-center text-lg-start order-lg-1 mb-lg-0">
              <span className="text-light opacity-50">
                © All rights reserved. Made by{" "}
              </span>
              <a
                href="https://createx.studio/"
                className="nav-link-light fw-bold"
                target="_blank"
                rel="noreferrer"
              >
                Createx Studio
              </a>
            </p>
          </div>
        </footer>
        <button type="btton" className="btn-scroll-top">
          <span className="btn-scroll-top-tooltip text-muted fs-sm me-2">
            Top
          </span>
          <i className="btn-scroll-top-icon fi-chevron-up"></i>
        </button>
      </div>
      <div hidden id="S:0">
        <div className="card-img-top card-img-hover d-flex">
          <span
            style={{
              boxSizing: "border-box",
              display: "inline-block",
              overflow: "hidden",
              width: "initial",
              height: "initial",
              background: "none",
              opacity: 1,
              border: 0,
              margin: 0,
              padding: 0,
              position: "relative",
              maxWidth: "100%",
            }}
          >
            <span
              style={{
                boxSizing: "border-box",
                display: "block",
                width: "initial",
                height: "initial",
                background: "none",
                opacity: 1,
                border: 0,
                margin: 0,
                padding: 0,
                maxWidth: "100%",
              }}
            >
              <img
                style={{
                  display: "block",
                  maxWidth: "100%",
                  width: "initial",
                  height: "initial",
                  background: "none",
                  opacity: 1,
                  border: 0,
                  margin: 0,
                  padding: 0,
                }}
                alt=""
                aria-hidden="true"
                src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2780%27%20height=%27177%27/%3e"
              />
            </span>
            <img
              light="true"
              alt="Car image"
              src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
              decoding="async"
              data-nimg="intrinsic"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                boxSizing: "border-box",
                padding: 0,
                border: "none",
                margin: "auto",
                display: "block",
                width: 0,
                height: 0,
                minWidth: "100%",
                maxWidth: "100%",
                minHeight: "100%",
                maxHeight: "100%",
                backgroundSize: "cover",
                backgroundPosition: "0% 0%",
                filter: "blur(20px)",
                backgroundImage:
                  'url("data:image/svg+xml;base64,CiAgICA8c3ZnIHdpZHRoPSI4MCIgaGVpZ2h0PSIxNzciIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iZyI+CiAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMzUyZTQ0IiBvZmZzZXQ9IjIwJSIgLz4KICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMxZjFiMmQiIG9mZnNldD0iNTAlIiAvPgogICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzM1MmU0NCIgb2Zmc2V0PSI3MCUiIC8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgPC9kZWZzPgogICAgICA8cmVjdCB3aWR0aD0iODAiIGhlaWdodD0iMTc3IiBmaWxsPSIjMzUyZTQ0IiAvPgogICAgICA8cmVjdCBpZD0iciIgd2lkdGg9IjgwIiBoZWlnaHQ9IjE3NyIgZmlsbD0idXJsKCNnKSIgLz4KICAgICAgPGFuaW1hdGUgeGxpbms6aHJlZj0iI3IiIGF0dHJpYnV0ZU5hbWU9IngiIGZyb209Ii04MCIgdG89IjgwIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICAgIDwvc3ZnPg==")',
              }}
            />
            <noscript>
              <img
                light="true"
                alt="Car image"
                srcSet="/images/car-finder/home/car.svg 1x, /images/car-finder/home/car.svg 2x"
                src="/images/car-finder/home/car.svg"
                decoding="async"
                data-nimg="intrinsic"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  boxSizing: "border-box",
                  padding: 0,
                  border: "none",
                  margin: "auto",
                  display: "block",
                  width: 0,
                  height: 0,
                  minWidth: "100%",
                  maxWidth: "100%",
                  minHeight: "100%",
                  maxHeight: "100%",
                }}
                loading="lazy"
              />
            </noscript>
          </span>

          <a className="img-overlay" href="/car-finder/single"></a>
          <div className="position-absolute start-0 top-0 pt-3 ps-3">
            <span className="d-table badge bg-info mb-1">Used</span>
          </div>
          <div className="content-overlay end-0 top-0 pt-3 pe-3">
            <button
              type="button"
              className="btn btn-icon btn-light btn-xs text-primary rounded-circle"
            >
              <i className="fi-heart"></i>
            </button>
          </div>
        </div>
      </div>
      <div hidden id="S:1">
        <div className="card-img-top card-img-hover d-flex">
          <span
            style={{
              boxSizing: "border-box",
              display: "inline-block",
              overflow: "hidden",
              width: "initial",
              height: "initial",
              background: "none",
              opacity: 1,
              border: 0,
              margin: 0,
              padding: 0,
              position: "relative",
              maxWidth: "100%",
            }}
          >
            <span
              style={{
                boxSizing: "border-box",
                display: "block",
                width: "initial",
                height: "initial",
                background: "none",
                opacity: 1,
                border: 0,
                margin: 0,
                padding: 0,
                maxWidth: "100%",
              }}
            >
              <img
                style={{
                  display: "block",
                  maxWidth: "100%",
                  width: "initial",
                  height: "initial",
                  background: "none",
                  opacity: 1,
                  border: 0,
                  margin: 0,
                  padding: 0,
                }}
                alt=""
                aria-hidden="true"
                src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27473%27%20height=%27242%27/%3e"
              />
            </span>
            <img
              alt="Image"
              light="1"
              src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
              decoding="async"
              data-nimg="intrinsic"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                boxSizing: "border-box",
                padding: 0,
                border: "none",
                margin: "auto",
                display: "block",
                width: 0,
                height: 0,
                minWidth: "100%",
                maxWidth: "100%",
                minHeight: "100%",
                maxHeight: "100%",
                backgroundSize: "cover",
                backgroundPosition: "0% 0%",
                filter: "blur(20px)",
                backgroundImage:
                  'url("data:image/svg+xml;base64,CiAgICA8c3ZnIHdpZHRoPSI0NzMiIGhlaWdodD0iMjQyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImciPgogICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzM1MmU0NCIgb2Zmc2V0PSIyMCUiIC8+CiAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMWYxYjJkIiBvZmZzZXQ9IjUwJSIgLz4KICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMzNTJlNDQiIG9mZnNldD0iNzAlIiAvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgIDwvZGVmcz4KICAgICAgPHJlY3Qgd2lkdGg9IjQ3MyIgaGVpZ2h0PSIyNDIiIGZpbGw9IiMzNTJlNDQiIC8+CiAgICAgIDxyZWN0IGlkPSJyIiB3aWR0aD0iNDczIiBoZWlnaHQ9IjI0MiIgZmlsbD0idXJsKCNnKSIgLz4KICAgICAgPGFuaW1hdGUgeGxpbms6aHJlZj0iI3IiIGF0dHJpYnV0ZU5hbWU9IngiIGZyb209Ii00NzMiIHRvPSI0NzMiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogICAgPC9zdmc+")',
              }}
            />
            <noscript>
              <img
                alt="Image"
                light="1"
                srcSet="/_next/image?url=%2Fimages%2Fcar-finder%2Fcatalog%2F04.jpg&amp;w=640&amp;q=75 1x, /_next/image?url=%2Fimages%2Fcar-finder%2Fcatalog%2F04.jpg&amp;w=1080&amp;q=75 2x"
                src="/_next/image?url=%2Fimages%2Fcar-finder%2Fcatalog%2F04.jpg&amp;w=1080&amp;q=75"
                decoding="async"
                data-nimg="intrinsic"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  boxSizing: "border-box",
                  padding: 0,
                  border: "none",
                  margin: "auto",
                  display: "block",
                  width: 0,
                  height: 0,
                  minWidth: "100%",
                  maxWidth: "100%",
                  minHeight: "100%",
                  maxHeight: "100%",
                }}
                loading="lazy"
              />
            </noscript>
          </span>

          <a className="img-overlay" href="/car-finder/single"></a>
          <div className="position-absolute start-0 top-0 pt-3 ps-3">
            <span className="d-table badge bg-info mb-1">Used</span>
          </div>
          <div className="content-overlay end-0 top-0 pt-3 pe-3">
            <button
              type="button"
              className="btn btn-icon btn-light btn-xs text-primary rounded-circle"
            >
              <i className="fi-heart"></i>
            </button>
          </div>
        </div>
      </div>
      <div hidden id="S:2">
        <div className="card-img-top card-img-hover d-flex">
          <span
            style={{
              boxSizing: "border-box",
              display: "inline-block",
              overflow: "hidden",
              width: "initial",
              height: "initial",
              background: "none",
              opacity: 1,
              border: 0,
              margin: 0,
              padding: 0,
              position: "relative",
              maxWidth: "100%",
            }}
          >
            <span
              style={{
                boxSizing: "border-box",
                display: "block",
                width: "initial",
                height: "initial",
                background: "none",
                opacity: 1,
                border: 0,
                margin: 0,
                padding: 0,
                maxWidth: "100%",
              }}
            >
              <img
                style={{
                  display: "block",
                  maxWidth: "100%",
                  width: "initial",
                  height: "initial",
                  background: "none",
                  opacity: 1,
                  border: 0,
                  margin: 0,
                  padding: 0,
                }}
                alt=""
                aria-hidden="true"
                src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27473%27%20height=%27242%27/%3e"
              />
            </span>
            <img
              alt="Image"
              light="1"
              src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
              decoding="async"
              data-nimg="intrinsic"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                boxSizing: "border-box",
                padding: 0,
                border: "none",
                margin: "auto",
                display: "block",
                width: 0,
                height: 0,
                minWidth: "100%",
                maxWidth: "100%",
                minHeight: "100%",
                maxHeight: "100%",
                backgroundSize: "cover",
                backgroundPosition: "0% 0%",
                filter: "blur(20px)",
                backgroundImage:
                  'url("data:image/svg+xml;base64,CiAgICA8c3ZnIHdpZHRoPSI0NzMiIGhlaWdodD0iMjQyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImciPgogICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzM1MmU0NCIgb2Zmc2V0PSIyMCUiIC8+CiAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMWYxYjJkIiBvZmZzZXQ9IjUwJSIgLz4KICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMzNTJlNDQiIG9mZnNldD0iNzAlIiAvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgIDwvZGVmcz4KICAgICAgPHJlY3Qgd2lkdGg9IjQ3MyIgaGVpZ2h0PSIyNDIiIGZpbGw9IiMzNTJlNDQiIC8+CiAgICAgIDxyZWN0IGlkPSJyIiB3aWR0aD0iNDczIiBoZWlnaHQ9IjI0MiIgZmlsbD0idXJsKCNnKSIgLz4KICAgICAgPGFuaW1hdGUgeGxpbms6aHJlZj0iI3IiIGF0dHJpYnV0ZU5hbWU9IngiIGZyb209Ii00NzMiIHRvPSI0NzMiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogICAgPC9zdmc+")',
              }}
            />
            <noscript>
              <img
                alt="Image"
                light="1"
                srcSet="/_next/image?url=%2Fimages%2Fcar-finder%2Fcatalog%2F04.jpg&amp;w=640&amp;q=75 1x, /_next/image?url=%2Fimages%2Fcar-finder%2Fcatalog%2F04.jpg&amp;w=1080&amp;q=75 2x"
                src="/_next/image?url=%2Fimages%2Fcar-finder%2Fcatalog%2F04.jpg&amp;w=1080&amp;q=75"
                decoding="async"
                data-nimg="intrinsic"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  boxSizing: "border-box",
                  padding: 0,
                  border: "none",
                  margin: "auto",
                  display: "block",
                  width: 0,
                  height: 0,
                  minWidth: "100%",
                  maxWidth: "100%",
                  minHeight: "100%",
                  maxHeight: "100%",
                }}
                loading="lazy"
              />
            </noscript>
          </span>

          <a className="img-overlay" href="/car-finder/single"></a>
          <div className="position-absolute start-0 top-0 pt-3 ps-3">
            <span className="d-table badge bg-info mb-1">Used</span>
            <span className="d-table badge bg-success mb-1">Certified</span>
          </div>
          <div className="content-overlay end-0 top-0 pt-3 pe-3">
            <button
              type="button"
              className="btn btn-icon btn-light btn-xs text-primary rounded-circle"
            >
              <i className="fi-heart"></i>
            </button>
          </div>
        </div>
      </div>
      <div hidden id="S:3">
        <div className="card-img-top card-img-hover d-flex">
          <span
            style={{
              boxSizing: "border-box",
              display: "inline-block",
              overflow: "hidden",
              width: "initial",
              height: "initial",
              background: "none",
              opacity: 1,
              border: 0,
              margin: 0,
              padding: 0,
              position: "relative",
              maxWidth: "100%",
            }}
          >
            <span
              style={{
                boxSizing: "border-box",
                display: "block",
                width: "initial",
                height: "initial",
                background: "none",
                opacity: 1,
                border: 0,
                margin: 0,
                padding: 0,
                maxWidth: "100%",
              }}
            >
              <img
                style={{
                  display: "block",
                  maxWidth: "100%",
                  width: "initial",
                  height: "initial",
                  background: "none",
                  opacity: 1,
                  border: 0,
                  margin: 0,
                  padding: 0,
                }}
                alt=""
                aria-hidden="true"
                src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27473%27%20height=%27242%27/%3e"
              />
            </span>
            <img
              alt="Image"
              light="1"
              src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
              decoding="async"
              data-nimg="intrinsic"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                boxSizing: "border-box",
                padding: 0,
                border: "none",
                margin: "auto",
                display: "block",
                width: 0,
                height: 0,
                minWidth: "100%",
                maxWidth: "100%",
                minHeight: "100%",
                maxHeight: "100%",
                backgroundSize: "cover",
                backgroundPosition: "0% 0%",
                filter: "blur(20px)",
                backgroundImage:
                  'url("data:image/svg+xml;base64,CiAgICA8c3ZnIHdpZHRoPSI0NzMiIGhlaWdodD0iMjQyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImciPgogICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzM1MmU0NCIgb2Zmc2V0PSIyMCUiIC8+CiAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMWYxYjJkIiBvZmZzZXQ9IjUwJSIgLz4KICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMzNTJlNDQiIG9mZnNldD0iNzAlIiAvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgIDwvZGVmcz4KICAgICAgPHJlY3Qgd2lkdGg9IjQ3MyIgaGVpZ2h0PSIyNDIiIGZpbGw9IiMzNTJlNDQiIC8+CiAgICAgIDxyZWN0IGlkPSJyIiB3aWR0aD0iNDczIiBoZWlnaHQ9IjI0MiIgZmlsbD0idXJsKCNnKSIgLz4KICAgICAgPGFuaW1hdGUgeGxpbms6aHJlZj0iI3IiIGF0dHJpYnV0ZU5hbWU9IngiIGZyb209Ii00NzMiIHRvPSI0NzMiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogICAgPC9zdmc+")',
              }}
            />
            <noscript>
              <img
                alt="Image"
                light="1"
                srcSet="/_next/image?url=%2Fimages%2Fcar-finder%2Fcatalog%2F04.jpg&amp;w=640&amp;q=75 1x, /_next/image?url=%2Fimages%2Fcar-finder%2Fcatalog%2F04.jpg&amp;w=1080&amp;q=75 2x"
                src="/_next/image?url=%2Fimages%2Fcar-finder%2Fcatalog%2F04.jpg&amp;w=1080&amp;q=75"
                decoding="async"
                data-nimg="intrinsic"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  boxSizing: "border-box",
                  padding: 0,
                  border: "none",
                  margin: "auto",
                  display: "block",
                  width: 0,
                  height: 0,
                  minWidth: "100%",
                  maxWidth: "100%",
                  minHeight: "100%",
                  maxHeight: "100%",
                }}
                loading="lazy"
              />
            </noscript>
          </span>

          <a className="img-overlay" href="/car-finder/single"></a>
          <div className="position-absolute start-0 top-0 pt-3 ps-3">
            <span className="d-table badge bg-info mb-1">Used</span>
          </div>
          <div className="content-overlay end-0 top-0 pt-3 pe-3">
            <button
              type="button"
              className="btn btn-icon btn-light btn-xs text-primary rounded-circle"
            >
              <i className="fi-heart"></i>
            </button>
          </div>
        </div>
      </div>
      <div hidden id="S:4">
        <div className="card-img-top card-img-hover d-flex">
          <span
            style={{
              boxSizing: "border-box",
              display: "inline-block",
              overflow: "hidden",
              width: "initial",
              height: "initial",
              background: "none",
              opacity: 1,
              border: 0,
              margin: 0,
              padding: 0,
              position: "relative",
              maxWidth: "100%",
            }}
          >
            <span
              style={{
                boxSizing: "border-box",
                display: "block",
                width: "initial",
                height: "initial",
                background: "none",
                opacity: 1,
                border: 0,
                margin: 0,
                padding: 0,
                maxWidth: "100%",
              }}
            >
              <img
                style={{
                  display: "block",
                  maxWidth: "100%",
                  width: "initial",
                  height: "initial",
                  background: "none",
                  opacity: 1,
                  border: 0,
                  margin: 0,
                  padding: 0,
                }}
                alt=""
                aria-hidden="true"
                src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27473%27%20height=%27242%27/%3e"
              />
            </span>
            <img
              alt="Image"
              light="1"
              src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
              decoding="async"
              data-nimg="intrinsic"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                boxSizing: "border-box",
                padding: 0,
                border: "none",
                margin: "auto",
                display: "block",
                width: 0,
                height: 0,
                minWidth: "100%",
                maxWidth: "100%",
                minHeight: "100%",
                maxHeight: "100%",
                backgroundSize: "cover",
                backgroundPosition: "0% 0%",
                filter: "blur(20px)",
                backgroundImage:
                  'url("data:image/svg+xml;base64,CiAgICA8c3ZnIHdpZHRoPSI0NzMiIGhlaWdodD0iMjQyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImciPgogICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzM1MmU0NCIgb2Zmc2V0PSIyMCUiIC8+CiAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMWYxYjJkIiBvZmZzZXQ9IjUwJSIgLz4KICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMzNTJlNDQiIG9mZnNldD0iNzAlIiAvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgIDwvZGVmcz4KICAgICAgPHJlY3Qgd2lkdGg9IjQ3MyIgaGVpZ2h0PSIyNDIiIGZpbGw9IiMzNTJlNDQiIC8+CiAgICAgIDxyZWN0IGlkPSJyIiB3aWR0aD0iNDczIiBoZWlnaHQ9IjI0MiIgZmlsbD0idXJsKCNnKSIgLz4KICAgICAgPGFuaW1hdGUgeGxpbms6aHJlZj0iI3IiIGF0dHJpYnV0ZU5hbWU9IngiIGZyb209Ii00NzMiIHRvPSI0NzMiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogICAgPC9zdmc+")',
              }}
            />
            <noscript>
              <img
                alt="Image"
                light="1"
                srcSet="/_next/image?url=%2Fimages%2Fcar-finder%2Fcatalog%2F04.jpg&amp;w=640&amp;q=75 1x, /_next/image?url=%2Fimages%2Fcar-finder%2Fcatalog%2F04.jpg&amp;w=1080&amp;q=75 2x"
                src="/_next/image?url=%2Fimages%2Fcar-finder%2Fcatalog%2F04.jpg&amp;w=1080&amp;q=75"
                decoding="async"
                data-nimg="intrinsic"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  boxSizing: "border-box",
                  padding: 0,
                  border: "none",
                  margin: "auto",
                  display: "block",
                  width: 0,
                  height: 0,
                  minWidth: "100%",
                  maxWidth: "100%",
                  minHeight: "100%",
                  maxHeight: "100%",
                }}
                loading="lazy"
              />
            </noscript>
          </span>

          <a className="img-overlay" href="/car-finder/single"></a>
          <div className="position-absolute start-0 top-0 pt-3 ps-3">
            <span className="d-table badge bg-info mb-1">Used</span>
          </div>
          <div className="content-overlay end-0 top-0 pt-3 pe-3">
            <button
              type="button"
              className="btn btn-icon btn-light btn-xs text-primary rounded-circle"
            >
              <i className="fi-heart"></i>
            </button>
          </div>
        </div>
      </div>
      <div hidden id="S:5">
        <div className="card-img-top card-img-hover d-flex">
          <span
            style={{
              boxSizing: "border-box",
              display: "inline-block",
              overflow: "hidden",
              width: "initial",
              height: "initial",
              background: "none",
              opacity: 1,
              border: 0,
              margin: 0,
              padding: 0,
              position: "relative",
              maxWidth: "100%",
            }}
          >
            <span
              style={{
                boxSizing: "border-box",
                display: "block",
                width: "initial",
                height: "initial",
                background: "none",
                opacity: 1,
                border: 0,
                margin: 0,
                padding: 0,
                maxWidth: "100%",
              }}
            >
              <img
                style={{
                  display: "block",
                  maxWidth: "100%",
                  width: "initial",
                  height: "initial",
                  background: "none",
                  opacity: 1,
                  border: 0,
                  margin: 0,
                  padding: 0,
                }}
                alt=""
                aria-hidden="true"
                src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27473%27%20height=%27242%27/%3e"
              />
            </span>
            <img
              alt="Image"
              light="1"
              src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
              decoding="async"
              data-nimg="intrinsic"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                boxSizing: "border-box",
                padding: 0,
                border: "none",
                margin: "auto",
                display: "block",
                width: 0,
                height: 0,
                minWidth: "100%",
                maxWidth: "100%",
                minHeight: "100%",
                maxHeight: "100%",
                backgroundSize: "cover",
                backgroundPosition: "0% 0%",
                filter: "blur(20px)",
                backgroundImage:
                  'url("data:image/svg+xml;base64,CiAgICA8c3ZnIHdpZHRoPSI0NzMiIGhlaWdodD0iMjQyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImciPgogICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzM1MmU0NCIgb2Zmc2V0PSIyMCUiIC8+CiAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMWYxYjJkIiBvZmZzZXQ9IjUwJSIgLz4KICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMzNTJlNDQiIG9mZnNldD0iNzAlIiAvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICAgIDwvZGVmcz4KICAgICAgPHJlY3Qgd2lkdGg9IjQ3MyIgaGVpZ2h0PSIyNDIiIGZpbGw9IiMzNTJlNDQiIC8+CiAgICAgIDxyZWN0IGlkPSJyIiB3aWR0aD0iNDczIiBoZWlnaHQ9IjI0MiIgZmlsbD0idXJsKCNnKSIgLz4KICAgICAgPGFuaW1hdGUgeGxpbms6aHJlZj0iI3IiIGF0dHJpYnV0ZU5hbWU9IngiIGZyb209Ii00NzMiIHRvPSI0NzMiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogICAgPC9zdmc+")',
              }}
            />
            <noscript>
              <img
                alt="Image"
                light="1"
                srcSet="/_next/image?url=%2Fimages%2Fcar-finder%2Fcatalog%2F04.jpg&amp;w=640&amp;q=75 1x, /_next/image?url=%2Fimages%2Fcar-finder%2Fcatalog%2F04.jpg&amp;w=1080&amp;q=75 2x"
                src="/_next/image?url=%2Fimages%2Fcar-finder%2Fcatalog%2F04.jpg&amp;w=1080&amp;q=75"
                decoding="async"
                data-nimg="intrinsic"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  boxSizing: "border-box",
                  padding: 0,
                  border: "none",
                  margin: "auto",
                  display: "block",
                  width: 0,
                  height: 0,
                  minWidth: "100%",
                  maxWidth: "100%",
                  minHeight: "100%",
                  maxHeight: "100%",
                }}
                loading="lazy"
              />
            </noscript>
          </span>

          <a className="img-overlay" href="/car-finder/single"></a>
          <div className="position-absolute start-0 top-0 pt-3 ps-3">
            <span className="d-table badge bg-info mb-1">Used</span>
          </div>
          <div className="content-overlay end-0 top-0 pt-3 pe-3">
            <button
              type="button"
              className="btn btn-icon btn-light btn-xs text-primary rounded-circle"
            >
              <i className="fi-heart"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
