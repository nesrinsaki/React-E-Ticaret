function Header() {
    return (
  <>
  {/* BEGIN HEADER */}
  <div className="page-header">
    {/* BEGIN HEADER TOP */}
    <div className="page-header-top">
      <div className="container">
        {/* BEGIN LOGO */}
        <div className="page-logo">
          <a href="index.html">
            <img
              src="assets/admin/layout3/img/logo-default.png"
              alt="logo"
              className="logo-default"
            />
          </a>
        </div>
        {/* END LOGO */}
        {/* BEGIN RESPONSIVE MENU TOGGLER */}
        <a href="javascript:;" className="menu-toggler" />
        {/* END RESPONSIVE MENU TOGGLER */}
        {/* BEGIN TOP NAVIGATION MENU */}
        <div className="top-menu">
          <ul className="nav navbar-nav pull-right">
          </ul>
        </div>
        {/* END TOP NAVIGATION MENU */}
      </div>
    </div>
    {/* END HEADER TOP */}
    {/* BEGIN HEADER MENU */}
    <div className="page-header-menu">
      <div className="container">
        {/* BEGIN HEADER SEARCH BOX */}
        <form className="search-form" action="extra_search.html" method="GET">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              name="query"
            />
            <span className="input-group-btn">
              <a href="javascript:;" className="btn submit">
                <i className="icon-magnifier" />
              </a>
            </span>
          </div>
        </form>
        {/* END HEADER SEARCH BOX */}
        {/* BEGIN MEGA MENU */}
        {/* DOC: Apply "hor-menu-light" class after the "hor-menu" class below to have a horizontal menu with white background */}
        {/* DOC: Remove data-hover="dropdown" and data-close-others="true" attributes below to disable the dropdown opening on mouse hover */}
        <div className="hor-menu ">
          <ul className="nav navbar-nav">
            <li>
              <a href="index.html">ANASAYFA</a>
            </li>
            <li className="menu-dropdown classic-menu-dropdown ">
              <a
                data-hover="megamenu-dropdown"
                data-close-others="true"
                data-toggle="dropdown"
                href="javascript:;"
              >
                TANIMLAR <i className="fa fa-angle-down" />
              </a>
              <ul className="dropdown-menu pull-left">
                <li className=" dropdown-submenu">
                  <a href=":;">
                    <i className="icon-user" />
                    Müşteri{" "}
                  </a>
                  <ul className="dropdown-menu">
                    <li className=" ">
                      <a href="musteri_liste.html">Müşteri Listesi </a>
                    </li>
                    <li className=" ">
                      <a href="musteri_yeni.html">Yeni Kayıt </a>
                    </li>
                  </ul>
                </li>
                <li className=" dropdown-submenu">
                  <a href=":;">
                    <i className="icon-bar-chart" />
                    Ürün{" "}
                  </a>
                  <ul className="dropdown-menu">
                    <li className=" ">
                      <a href="urun_liste.html">Ürün Listesi </a>
                    </li>
                    <li className=" ">
                      <a href="urun_yeni.html">Yeni Ürün Kaydı </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="menu-dropdown classic-menu-dropdown ">
              <a
                data-hover="megamenu-dropdown"
                data-close-others="true"
                data-toggle="dropdown"
                href="javascript:;"
              >
                OPERASYON <i className="fa fa-angle-down" />
              </a>
              <ul className="dropdown-menu pull-left">
                <li className=" dropdown-submenu">
                  <a href=":;">
                    <i className="icon-briefcase" />
                    Sipariş{" "}
                  </a>
                  <ul className="dropdown-menu">
                    <li className=" ">
                      <a href="siparis_liste.html">Sipariş Listesi </a>
                    </li>
                    <li className=" ">
                      <a href="siparis_yeni.html">Yeni Sipariş </a>
                    </li>
                  </ul>
                </li>
                <li className=" dropdown-submenu">
                  <a href=":;">
                    <i className="icon-bar-chart" />
                    Tahsilat{" "}
                  </a>
                  <ul className="dropdown-menu">
                    <li className=" ">
                      <a href="tahsilat_liste.html">Tahsilat Listesi </a>
                    </li>
                    <li className=" ">
                      <a href="tahsilat_yeni.html">Yeni Tahsilat </a>
                    </li>
                  </ul>
                </li>
                <li className=" dropdown-submenu">
                  <a href=":;">
                    <i className="icon-pointer" />
                    Ödeme{" "}
                  </a>
                  <ul className="dropdown-menu">
                    <li className=" ">
                      <a href="odeme_liste.html">Ödeme Listesi </a>
                    </li>
                    <li className=" ">
                      <a href="odeme_yeni.html">Yeni Ödeme </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="menu-dropdown classic-menu-dropdown ">
              <a
                data-hover="megamenu-dropdown"
                data-close-others="true"
                data-toggle="dropdown"
                href="javascript:;"
              >
                EKRAN İÇERİKLERİ <i className="fa fa-angle-down" />
              </a>
              <ul className="dropdown-menu pull-left">
                <li className=" dropdown-submenu">
                  <a href=":;">
                    <i className="icon-briefcase" />
                    Sipariş Durumu{" "}
                  </a>
                  <ul className="dropdown-menu">
                    <li className=" ">
                      <a href="siparisdurumu_liste.html">Liste </a>
                    </li>
                    <li className=" ">
                      <a href="siparisdurumu_yeni.html">Yeni </a>
                    </li>
                  </ul>
                </li>
                <li className=" dropdown-submenu">
                  <a href=":;">
                    <i className="icon-bar-chart" />
                    Şehir{" "}
                  </a>
                  <ul className="dropdown-menu">
                    <li className=" ">
                      <a href="sehir_liste.html">Liste </a>
                    </li>
                    <li className=" ">
                      <a href="sehir_yeni.html">Yeni </a>
                    </li>
                  </ul>
                </li>
                <li className=" dropdown-submenu">
                  <a href=":;">
                    <i className="icon-pointer" />
                    Tahsilat Tipi{" "}
                  </a>
                  <ul className="dropdown-menu">
                    <li className=" ">
                      <a href="tahsilattipi_liste.html">Liste </a>
                    </li>
                    <li className=" ">
                      <a href="tahsilattipi_yeni.html">Yeni </a>
                    </li>
                  </ul>
                </li>
                <li className=" dropdown-submenu">
                  <a href=":;">
                    <i className="icon-puzzle" />
                    Ürün Kategorisi{" "}
                  </a>
                  <ul className="dropdown-menu">
                    <li className=" ">
                      <a href="urunkategorisi_liste.html">Liste </a>
                    </li>
                    <li className=" ">
                      <a href="urunkategorisi_yeni.html">Yeni </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        {/* END MEGA MENU */}
      </div>
    </div>
    {/* END HEADER MENU */}
  </div>
  {/* END HEADER */}
  </>
  );
  }
  export default Header;