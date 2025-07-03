import React from 'react';

const HomePage = () => {
    return (
        <div>
            {/* [ Pre-loader ] start */}
            <div className="loader-bg">
                <div className="loader-track">
                    <div className="loader-fill" />
                </div>
            </div>
            {/* [ Pre-loader ] End */}

            
            {/* [ Sidebar Menu ] start */}
            <nav className="pc-sidebar">
                <div className="navbar-wrapper">
                    <div className="m-header">
                        <a href="/dashboard/index.html" className="b-brand text-primary">
                            {/* ========   Change your logo from here   ============ */}
                            <img
                                src="/assets/images/logo-dark.svg"
                                className="img-fluid logo-lg"
                                alt="logo"
                            />
                        </a>
                    </div>
                    <div className="navbar-content">
                        <ul className="pc-navbar">
                            <li className="pc-item">
                                <a href="/dashboard/index.html" className="pc-link">
              <span className="pc-micon">
                <i className="ti ti-dashboard" />
              </span>
                                    <span className="pc-mtext">Dashboard</span>
                                </a>
                            </li>
                            <li className="pc-item pc-caption">
                                <label>UI Components</label>
                                <i className="ti ti-dashboard" />
                            </li>
                            <li className="pc-item">
                                <a href="/elements/bc_typography.html" className="pc-link">
              <span className="pc-micon">
                <i className="ti ti-typography" />
              </span>
                                    <span className="pc-mtext">Typography</span>
                                </a>
                            </li>
                            <li className="pc-item">
                                <a href="/elements/bc_color.html" className="pc-link">
              <span className="pc-micon">
                <i className="ti ti-color-swatch" />
              </span>
                                    <span className="pc-mtext">Color</span>
                                </a>
                            </li>
                            <li className="pc-item">
                                <a href="/elements/icon-tabler.html" className="pc-link">
              <span className="pc-micon">
                <i className="ti ti-plant-2" />
              </span>
                                    <span className="pc-mtext">Icons</span>
                                </a>
                            </li>
                            <li className="pc-item pc-caption">
                                <label>Pages</label>
                                <i className="ti ti-news" />
                            </li>
                            <li className="pc-item">
                                <a href="/pages/login.html" className="pc-link">
              <span className="pc-micon">
                <i className="ti ti-lock" />
              </span>
                                    <span className="pc-mtext">Login</span>
                                </a>
                            </li>
                            <li className="pc-item">
                                <a href="/pages/register.html" className="pc-link">
              <span className="pc-micon">
                <i className="ti ti-user-plus" />
              </span>
                                    <span className="pc-mtext">Register</span>
                                </a>
                            </li>
                            <li className="pc-item pc-caption">
                                <label>Other</label>
                                <i className="ti ti-brand-chrome" />
                            </li>
                            <li className="pc-item pc-hasmenu">
                                <a href="#!" className="pc-link">
              <span className="pc-micon">
                <i className="ti ti-menu" />
              </span>
                                    <span className="pc-mtext">Menu levels</span>
                                    <span className="pc-arrow">
                <i data-feather="chevron-right" />
              </span>
                                </a>
                                <ul className="pc-submenu">
                                    <li className="pc-item">
                                        <a className="pc-link" href="#!">
                                            Level 2.1
                                        </a>
                                    </li>
                                    <li className="pc-item pc-hasmenu">
                                        <a href="#!" className="pc-link">
                                            Level 2.2
                                            <span className="pc-arrow">
                    <i data-feather="chevron-right" />
                  </span>
                                        </a>
                                        <ul className="pc-submenu">
                                            <li className="pc-item">
                                                <a className="pc-link" href="#!">
                                                    Level 3.1
                                                </a>
                                            </li>
                                            <li className="pc-item">
                                                <a className="pc-link" href="#!">
                                                    Level 3.2
                                                </a>
                                            </li>
                                            <li className="pc-item pc-hasmenu">
                                                <a href="#!" className="pc-link">
                                                    Level 3.3
                                                    <span className="pc-arrow">
                        <i data-feather="chevron-right" />
                      </span>
                                                </a>
                                                <ul className="pc-submenu">
                                                    <li className="pc-item">
                                                        <a className="pc-link" href="#!">
                                                            Level 4.1
                                                        </a>
                                                    </li>
                                                    <li className="pc-item">
                                                        <a className="pc-link" href="#!">
                                                            Level 4.2
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="pc-item pc-hasmenu">
                                        <a href="#!" className="pc-link">
                                            Level 2.3
                                            <span className="pc-arrow">
                    <i data-feather="chevron-right" />
                  </span>
                                        </a>
                                        <ul className="pc-submenu">
                                            <li className="pc-item">
                                                <a className="pc-link" href="#!">
                                                    Level 3.1
                                                </a>
                                            </li>
                                            <li className="pc-item">
                                                <a className="pc-link" href="#!">
                                                    Level 3.2
                                                </a>
                                            </li>
                                            <li className="pc-item pc-hasmenu">
                                                <a href="#!" className="pc-link">
                                                    Level 3.3
                                                    <span className="pc-arrow">
                        <i data-feather="chevron-right" />
                      </span>
                                                </a>
                                                <ul className="pc-submenu">
                                                    <li className="pc-item">
                                                        <a className="pc-link" href="#!">
                                                            Level 4.1
                                                        </a>
                                                    </li>
                                                    <li className="pc-item">
                                                        <a className="pc-link" href="#!">
                                                            Level 4.2
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="pc-item">
                                <a href="/other/sample-page.html" className="pc-link">
              <span className="pc-micon">
                <i className="ti ti-brand-chrome" />
              </span>
                                    <span className="pc-mtext">Sample page</span>
                                </a>
                            </li>
                        </ul>
                        <div className="card text-center">
                            <div className="card-body">
                                <img
                                    src="/assets/images/img-navbar-card.png"
                                    alt="images"
                                    className="img-fluid mb-2"
                                />
                                <h5>Upgrade To Pro</h5>
                                <p>To get more features and components</p>
                                <a
                                    href="https://codedthemes.com/item/berry-bootstrap-5-admin-template/"
                                    target="_blank"
                                    className="btn btn-success"
                                >
                                    Buy Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            {/* [ Sidebar Menu ] end */}


            {/* [ Header Topbar ] start */}
            <header className="pc-header">
                <div className="header-wrapper">
                    {" "}
                    {/* [Mobile Media Block] start */}
                    <div className="me-auto pc-mob-drp">
                        <ul className="list-unstyled">
                            {/* ======= Menu collapse Icon ===== */}
                            <li className="pc-h-item pc-sidebar-collapse">
                                <a href="#" className="pc-head-link ms-0" id="sidebar-hide">
                                    <i className="ti ti-menu-2" />
                                </a>
                            </li>
                            <li className="pc-h-item pc-sidebar-popup">
                                <a href="#" className="pc-head-link ms-0" id="mobile-collapse">
                                    <i className="ti ti-menu-2" />
                                </a>
                            </li>
                            <li className="dropdown pc-h-item d-inline-flex d-md-none">
                                <a
                                    className="pc-head-link dropdown-toggle arrow-none m-0"
                                    data-bs-toggle="dropdown"
                                    href="#"
                                    role="button"
                                    aria-haspopup="false"
                                    aria-expanded="false"
                                >
                                    <i className="ti ti-search" />
                                </a>
                                <div className="dropdown-menu pc-h-dropdown drp-search">
                                    <form className="px-3">
                                        <div className="form-group mb-0 d-flex align-items-center">
                                            <i data-feather="search" />
                                            <input
                                                type="search"
                                                className="form-control border-0 shadow-none"
                                                placeholder="Search here. . ."
                                            />
                                        </div>
                                    </form>
                                </div>
                            </li>
                            <li className="pc-h-item d-none d-md-inline-flex">
                                <form className="header-search">
                                    <i data-feather="search" className="icon-search" />
                                    <input
                                        type="search"
                                        className="form-control"
                                        placeholder="Search here. . ."
                                    />
                                </form>
                            </li>
                        </ul>
                    </div>
                    {/* [Mobile Media Block end] */}
                    <div className="ms-auto">
                        <ul className="list-unstyled">
                            <li className="dropdown pc-h-item">
                                <a
                                    className="pc-head-link dropdown-toggle arrow-none me-0"
                                    data-bs-toggle="dropdown"
                                    href="#"
                                    role="button"
                                    aria-haspopup="false"
                                    aria-expanded="false"
                                >
                                    <i className="ti ti-mail" />
                                </a>
                                <div className="dropdown-menu dropdown-notification dropdown-menu-end pc-h-dropdown">
                                    <div className="dropdown-header d-flex align-items-center justify-content-between">
                                        <h5 className="m-0">Message</h5>
                                        <a href="#!" className="pc-head-link bg-transparent">
                                            <i className="ti ti-x text-danger" />
                                        </a>
                                    </div>
                                    <div className="dropdown-divider" />
                                    <div
                                        className="dropdown-header px-0 text-wrap header-notification-scroll position-relative"
                                        style={{ maxHeight: "calc(100vh - 215px)" }}
                                    >
                                        <div className="list-group list-group-flush w-100">
                                            <a className="list-group-item list-group-item-action">
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0">
                                                        <img
                                                            src="/assets/images/user/avatar-2.jpg"
                                                            alt="user-image"
                                                            className="user-avtar"
                                                        />
                                                    </div>
                                                    <div className="flex-grow-1 ms-1">
                                                        <span className="float-end text-muted">3:00 AM</span>
                                                        <p className="text-body mb-1">
                                                            It's <b>Cristina danny's</b> birthday today.
                                                        </p>
                                                        <span className="text-muted">2 min ago</span>
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="list-group-item list-group-item-action">
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0">
                                                        <img
                                                            src="/assets/images/user/avatar-1.jpg"
                                                            alt="user-image"
                                                            className="user-avtar"
                                                        />
                                                    </div>
                                                    <div className="flex-grow-1 ms-1">
                                                        <span className="float-end text-muted">6:00 PM</span>
                                                        <p className="text-body mb-1">
                                                            <b>Aida Burg</b> commented your post.
                                                        </p>
                                                        <span className="text-muted">5 August</span>
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="list-group-item list-group-item-action">
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0">
                                                        <img
                                                            src="/assets/images/user/avatar-3.jpg"
                                                            alt="user-image"
                                                            className="user-avtar"
                                                        />
                                                    </div>
                                                    <div className="flex-grow-1 ms-1">
                                                        <span className="float-end text-muted">2:45 PM</span>
                                                        <p className="text-body mb-1">
                                                            <b>There was a failure to your setup.</b>
                                                        </p>
                                                        <span className="text-muted">7 hours ago</span>
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="list-group-item list-group-item-action">
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0">
                                                        <img
                                                            src="/assets/images/user/avatar-4.jpg"
                                                            alt="user-image"
                                                            className="user-avtar"
                                                        />
                                                    </div>
                                                    <div className="flex-grow-1 ms-1">
                                                        <span className="float-end text-muted">9:10 PM</span>
                                                        <p className="text-body mb-1">
                                                            <b>Cristina Danny </b> invited to join{" "}
                                                            <b> Meeting.</b>
                                                        </p>
                                                        <span className="text-muted">
                          Daily scrum meeting time
                        </span>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="dropdown-divider" />
                                    <div className="text-center py-2">
                                        <a href="#!" className="link-primary">
                                            View all
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li className="dropdown pc-h-item header-user-profile">
                                <a
                                    className="pc-head-link dropdown-toggle arrow-none me-0"
                                    data-bs-toggle="dropdown"
                                    href="#"
                                    role="button"
                                    aria-haspopup="false"
                                    data-bs-auto-close="outside"
                                    aria-expanded="false"
                                >
                                    <img
                                        src="/assets/images/user/avatar-2.jpg"
                                        alt="user-image"
                                        className="user-avtar"
                                    />
                                    <span>Stebin Ben</span>
                                </a>
                                <div className="dropdown-menu dropdown-user-profile dropdown-menu-end pc-h-dropdown">
                                    <div className="dropdown-header">
                                        <div className="d-flex mb-1">
                                            <div className="flex-shrink-0">
                                                <img
                                                    src="/assets/images/user/avatar-2.jpg"
                                                    alt="user-image"
                                                    className="user-avtar wid-35"
                                                />
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h6 className="mb-1">Stebin Ben</h6>
                                                <span>UI/UX Designer</span>
                                            </div>
                                            <a href="#!" className="pc-head-link bg-transparent">
                                                <i className="ti ti-power text-danger" />
                                            </a>
                                        </div>
                                    </div>
                                    <ul
                                        className="nav drp-tabs nav-fill nav-tabs"
                                        id="mydrpTab"
                                        role="tablist"
                                    >
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="nav-link active"
                                                id="drp-t1"
                                                data-bs-toggle="tab"
                                                data-bs-target="#drp-tab-1"
                                                type="button"
                                                role="tab"
                                                aria-controls="drp-tab-1"
                                                aria-selected="true"
                                            >
                                                <i className="ti ti-user" /> Profile
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="nav-link"
                                                id="drp-t2"
                                                data-bs-toggle="tab"
                                                data-bs-target="#drp-tab-2"
                                                type="button"
                                                role="tab"
                                                aria-controls="drp-tab-2"
                                                aria-selected="false"
                                            >
                                                <i className="ti ti-settings" /> Setting
                                            </button>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="mysrpTabContent">
                                        <div
                                            className="tab-pane fade show active"
                                            id="drp-tab-1"
                                            role="tabpanel"
                                            aria-labelledby="drp-t1"
                                            tabIndex={0}
                                        >
                                            <a href="#!" className="dropdown-item">
                                                <i className="ti ti-edit-circle" />
                                                <span>Edit Profile</span>
                                            </a>
                                            <a href="#!" className="dropdown-item">
                                                <i className="ti ti-user" />
                                                <span>View Profile</span>
                                            </a>
                                            <a href="#!" className="dropdown-item">
                                                <i className="ti ti-clipboard-list" />
                                                <span>Social Profile</span>
                                            </a>
                                            <a href="#!" className="dropdown-item">
                                                <i className="ti ti-wallet" />
                                                <span>Billing</span>
                                            </a>
                                            <a href="#!" className="dropdown-item">
                                                <i className="ti ti-power" />
                                                <span>Logout</span>
                                            </a>
                                        </div>
                                        <div
                                            className="tab-pane fade"
                                            id="drp-tab-2"
                                            role="tabpanel"
                                            aria-labelledby="drp-t2"
                                            tabIndex={0}
                                        >
                                            <a href="#!" className="dropdown-item">
                                                <i className="ti ti-help" />
                                                <span>Support</span>
                                            </a>
                                            <a href="#!" className="dropdown-item">
                                                <i className="ti ti-user" />
                                                <span>Account Settings</span>
                                            </a>
                                            <a href="#!" className="dropdown-item">
                                                <i className="ti ti-lock" />
                                                <span>Privacy Center</span>
                                            </a>
                                            <a href="#!" className="dropdown-item">
                                                <i className="ti ti-messages" />
                                                <span>Feedback</span>
                                            </a>
                                            <a href="#!" className="dropdown-item">
                                                <i className="ti ti-list" />
                                                <span>History</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
            {/* [ Header ] end */}

            {/* [ Main Content ] start */}
            <div className="pc-container">
                <div className="pc-content">
                    {/* [ breadcrumb ] start */}
                    <div className="page-header">
                        <div className="page-block">
                            <div className="row align-items-center">
                                <div className="col-md-12">
                                    <div className="page-header-title">
                                        <h5 className="m-b-10">Home</h5>
                                    </div>
                                    <ul className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <a href="/dashboard/index.html">Home</a>
                                        </li>
                                        <li className="breadcrumb-item">
                                            <a href="javascript: void(0)">Dashboard</a>
                                        </li>
                                        <li className="breadcrumb-item" aria-current="page">
                                            Home
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* [ breadcrumb ] end */}
                    {/* [ Main Content ] start */}
                    <div className="row">
                        {/* [ sample-page ] start */}
                        <div className="col-md-6 col-xl-3">
                            <div className="card">
                                <div className="card-body">
                                    <h6 className="mb-2 f-w-400 text-muted">Total Page Views</h6>
                                    <h4 className="mb-3">
                                        4,42,236{" "}
                                        <span className="badge bg-light-primary border border-primary">
                  <i className="ti ti-trending-up" /> 59.3%
                </span>
                                    </h4>
                                    <p className="mb-0 text-muted text-sm">
                                        You made an extra <span className="text-primary">35,000</span>{" "}
                                        this year
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-3">
                            <div className="card">
                                <div className="card-body">
                                    <h6 className="mb-2 f-w-400 text-muted">Total Users</h6>
                                    <h4 className="mb-3">
                                        78,250{" "}
                                        <span className="badge bg-light-success border border-success">
                  <i className="ti ti-trending-up" /> 70.5%
                </span>
                                    </h4>
                                    <p className="mb-0 text-muted text-sm">
                                        You made an extra <span className="text-success">8,900</span>{" "}
                                        this year
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-3">
                            <div className="card">
                                <div className="card-body">
                                    <h6 className="mb-2 f-w-400 text-muted">Total Order</h6>
                                    <h4 className="mb-3">
                                        18,800{" "}
                                        <span className="badge bg-light-warning border border-warning">
                  <i className="ti ti-trending-down" /> 27.4%
                </span>
                                    </h4>
                                    <p className="mb-0 text-muted text-sm">
                                        You made an extra <span className="text-warning">1,943</span>{" "}
                                        this year
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-3">
                            <div className="card">
                                <div className="card-body">
                                    <h6 className="mb-2 f-w-400 text-muted">Total Sales</h6>
                                    <h4 className="mb-3">
                                        $35,078{" "}
                                        <span className="badge bg-light-danger border border-danger">
                  <i className="ti ti-trending-down" /> 27.4%
                </span>
                                    </h4>
                                    <p className="mb-0 text-muted text-sm">
                                        You made an extra <span className="text-danger">$20,395</span>{" "}
                                        this year
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-xl-8">
                            <div className="d-flex align-items-center justify-content-between mb-3">
                                <h5 className="mb-0">Unique Visitor</h5>
                                <ul
                                    className="nav nav-pills justify-content-end mb-0"
                                    id="chart-tab-tab"
                                    role="tablist"
                                >
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link"
                                            id="chart-tab-home-tab"
                                            data-bs-toggle="pill"
                                            data-bs-target="#chart-tab-home"
                                            type="button"
                                            role="tab"
                                            aria-controls="chart-tab-home"
                                            aria-selected="true"
                                        >
                                            Month
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link active"
                                            id="chart-tab-profile-tab"
                                            data-bs-toggle="pill"
                                            data-bs-target="#chart-tab-profile"
                                            type="button"
                                            role="tab"
                                            aria-controls="chart-tab-profile"
                                            aria-selected="false"
                                        >
                                            Week
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <div className="tab-content" id="chart-tab-tabContent">
                                        <div
                                            className="tab-pane"
                                            id="chart-tab-home"
                                            role="tabpanel"
                                            aria-labelledby="chart-tab-home-tab"
                                            tabIndex={0}
                                        >
                                            <div id="visitor-chart-1" />
                                        </div>
                                        <div
                                            className="tab-pane show active"
                                            id="chart-tab-profile"
                                            role="tabpanel"
                                            aria-labelledby="chart-tab-profile-tab"
                                            tabIndex={0}
                                        >
                                            <div id="visitor-chart" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-xl-4">
                            <h5 className="mb-3">Income Overview</h5>
                            <div className="card">
                                <div className="card-body">
                                    <h6 className="mb-2 f-w-400 text-muted">This Week Statistics</h6>
                                    <h3 className="mb-3">$7,650</h3>
                                    <div id="income-overview-chart" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-xl-8">
                            <h5 className="mb-3">Recent Orders</h5>
                            <div className="card tbl-card">
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-hover table-borderless mb-0">
                                            <thead>
                                            <tr>
                                                <th>TRACKING NO.</th>
                                                <th>PRODUCT NAME</th>
                                                <th>TOTAL ORDER</th>
                                                <th>STATUS</th>
                                                <th className="text-end">TOTAL AMOUNT</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>
                                                    <a href="#" className="text-muted">
                                                        84564564
                                                    </a>
                                                </td>
                                                <td>Camera Lens</td>
                                                <td>40</td>
                                                <td>
                        <span className="d-flex align-items-center gap-2">
                          <i className="fas fa-circle text-danger f-10 m-r-5" />
                          Rejected
                        </span>
                                                </td>
                                                <td className="text-end">$40,570</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="#" className="text-muted">
                                                        84564564
                                                    </a>
                                                </td>
                                                <td>Laptop</td>
                                                <td>300</td>
                                                <td>
                        <span className="d-flex align-items-center gap-2">
                          <i className="fas fa-circle text-warning f-10 m-r-5" />
                          Pending
                        </span>
                                                </td>
                                                <td className="text-end">$180,139</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="#" className="text-muted">
                                                        84564564
                                                    </a>
                                                </td>
                                                <td>Mobile</td>
                                                <td>355</td>
                                                <td>
                        <span className="d-flex align-items-center gap-2">
                          <i className="fas fa-circle text-success f-10 m-r-5" />
                          Approved
                        </span>
                                                </td>
                                                <td className="text-end">$180,139</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="#" className="text-muted">
                                                        84564564
                                                    </a>
                                                </td>
                                                <td>Camera Lens</td>
                                                <td>40</td>
                                                <td>
                        <span className="d-flex align-items-center gap-2">
                          <i className="fas fa-circle text-danger f-10 m-r-5" />
                          Rejected
                        </span>
                                                </td>
                                                <td className="text-end">$40,570</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="#" className="text-muted">
                                                        84564564
                                                    </a>
                                                </td>
                                                <td>Laptop</td>
                                                <td>300</td>
                                                <td>
                        <span className="d-flex align-items-center gap-2">
                          <i className="fas fa-circle text-warning f-10 m-r-5" />
                          Pending
                        </span>
                                                </td>
                                                <td className="text-end">$180,139</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="#" className="text-muted">
                                                        84564564
                                                    </a>
                                                </td>
                                                <td>Mobile</td>
                                                <td>355</td>
                                                <td>
                        <span className="d-flex align-items-center gap-2">
                          <i className="fas fa-circle text-success f-10 m-r-5" />
                          Approved
                        </span>
                                                </td>
                                                <td className="text-end">$180,139</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="#" className="text-muted">
                                                        84564564
                                                    </a>
                                                </td>
                                                <td>Camera Lens</td>
                                                <td>40</td>
                                                <td>
                        <span className="d-flex align-items-center gap-2">
                          <i className="fas fa-circle text-danger f-10 m-r-5" />
                          Rejected
                        </span>
                                                </td>
                                                <td className="text-end">$40,570</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="#" className="text-muted">
                                                        84564564
                                                    </a>
                                                </td>
                                                <td>Laptop</td>
                                                <td>300</td>
                                                <td>
                        <span className="d-flex align-items-center gap-2">
                          <i className="fas fa-circle text-warning f-10 m-r-5" />
                          Pending
                        </span>
                                                </td>
                                                <td className="text-end">$180,139</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="#" className="text-muted">
                                                        84564564
                                                    </a>
                                                </td>
                                                <td>Mobile</td>
                                                <td>355</td>
                                                <td>
                        <span className="d-flex align-items-center gap-2">
                          <i className="fas fa-circle text-success f-10 m-r-5" />
                          Approved
                        </span>
                                                </td>
                                                <td className="text-end">$180,139</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="#" className="text-muted">
                                                        84564564
                                                    </a>
                                                </td>
                                                <td>Mobile</td>
                                                <td>355</td>
                                                <td>
                        <span className="d-flex align-items-center gap-2">
                          <i className="fas fa-circle text-success f-10 m-r-5" />
                          Approved
                        </span>
                                                </td>
                                                <td className="text-end">$180,139</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-xl-4">
                            <h5 className="mb-3">Analytics Report</h5>
                            <div className="card">
                                <div className="list-group list-group-flush">
                                    <a
                                        href="#"
                                        className="list-group-item list-group-item-action d-flex align-items-center justify-content-between"
                                    >
                                        Company Finance Growth<span className="h5 mb-0">+45.14%</span>
                                    </a>
                                    <a
                                        href="#"
                                        className="list-group-item list-group-item-action d-flex align-items-center justify-content-between"
                                    >
                                        Company Expenses Ratio<span className="h5 mb-0">0.58%</span>
                                    </a>
                                    <a
                                        href="#"
                                        className="list-group-item list-group-item-action d-flex align-items-center justify-content-between"
                                    >
                                        Business Risk Cases<span className="h5 mb-0">Low</span>
                                    </a>
                                </div>
                                <div className="card-body px-2">
                                    <div id="analytics-report-chart" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-xl-8">
                            <h5 className="mb-3">Sales Report</h5>
                            <div className="card">
                                <div className="card-body">
                                    <h6 className="mb-2 f-w-400 text-muted">This Week Statistics</h6>
                                    <h3 className="mb-0">$7,650</h3>
                                    <div id="sales-report-chart" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-xl-4">
                            <h5 className="mb-3">Transaction History</h5>
                            <div className="card">
                                <div className="list-group list-group-flush">
                                    <a href="#" className="list-group-item list-group-item-action">
                                        <div className="d-flex">
                                            <div className="flex-shrink-0">
                                                <div className="avtar avtar-s rounded-circle text-success bg-light-success">
                                                    <i className="ti ti-gift f-18" />
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h6 className="mb-1">Order #002434</h6>
                                                <p className="mb-0 text-muted">Today, 2:00 AM</p>
                                            </div>
                                            <div className="flex-shrink-0 text-end">
                                                <h6 className="mb-1">+ $1,430</h6>
                                                <p className="mb-0 text-muted">78%</p>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="#" className="list-group-item list-group-item-action">
                                        <div className="d-flex">
                                            <div className="flex-shrink-0">
                                                <div className="avtar avtar-s rounded-circle text-primary bg-light-primary">
                                                    <i className="ti ti-message-circle f-18" />
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h6 className="mb-1">Order #984947</h6>
                                                <p className="mb-0 text-muted">5 August, 1:45 PM</p>
                                            </div>
                                            <div className="flex-shrink-0 text-end">
                                                <h6 className="mb-1">- $302</h6>
                                                <p className="mb-0 text-muted">8%</p>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="#" className="list-group-item list-group-item-action">
                                        <div className="d-flex">
                                            <div className="flex-shrink-0">
                                                <div className="avtar avtar-s rounded-circle text-danger bg-light-danger">
                                                    <i className="ti ti-settings f-18" />
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h6 className="mb-1">Order #988784</h6>
                                                <p className="mb-0 text-muted">7 hours ago</p>
                                            </div>
                                            <div className="flex-shrink-0 text-end">
                                                <h6 className="mb-1">- $682</h6>
                                                <p className="mb-0 text-muted">16%</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* [ Main Content ] end */}


            <footer className="pc-footer">
                <div className="footer-wrapper container-fluid">
                    <div className="row">
                        <div className="col-sm my-1">
                            <p className="m-0">
                                Mantis ♥ crafted by Team{" "}
                                <a href="https://themeforest.net/user/codedthemes" target="_blank">
                                    Codedthemes
                                </a>{" "}
                                Distributed by <a href="https://themewagon.com/">ThemeWagon</a>.
                            </p>
                        </div>
                        <div className="col-auto my-1">
                            <ul className="list-inline footer-link mb-0">
                                <li className="list-inline-item">
                                    <a href="../index.html">Home</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>


        </div>
    );
};

export default HomePage;