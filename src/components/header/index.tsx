import * as React from "react";
import { Link } from "gatsby";
import { rootNav, icon, logo } from "./header.module.scss";
import yt_icon from "@images/ui/youtube_icon.png";
import fb_icon from "@images/ui/fb_icon.png";
import instagram_icon from "@images/ui/instagram.png";

interface Menu {
  title: string;
  link?: string;
  menus?: Array<Menu>;
}

const menus: Array<Menu> = [
  {
    title: `About Me`,
    link: `/about`,
  },
  {
    title: `Web applications`,
    menus: [
      {
        title: "Occupational medicine checkup system",
        link: "https://checkup.doctortons.com"
      }, {
        title: "ATK system",
        link: "https://atk.doctortons.com"
      }
    ]
  },
  {
    title: `Works`,
    menus: [
      {
        title: "Projects",
        link: "/projects"
      }, {
        title: "Software",
        link: "/programs"
      }
    ]
  },
  {
    title: `Blogs`,
    link: `/blogs`,
  },
  {
    title: `Arts`,
    link: `/arts`,
  },
];

export class Header extends React.Component<{}, {}> {
  constructor(props) {
    super(props);
  }

  state = {
    isMenuOpen: false,
    selectedMenu: null,
  };

  toggleMenu = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen })
  }

  mainMenuClickHandler = (selectedMenu: string, menus: Array<Menu>) => {
    if (this.state.selectedMenu === selectedMenu) {
      this.setState({ selectedMenu: null });
    } else {
      this.setState({
        selectedMenu: selectedMenu
      });
    }
  };

  renderSubmenu(menus: Array<Menu>) {
    return (
      <React.Fragment>
        {menus.map((menu, idx) => (
          <Link key={idx} to={menu.link}>
            {menu.title}
          </Link>
        ))}
      </React.Fragment>
    );
  }

  renderMainMenu(menus: Array<Menu>) {
    return (
      <nav className={`${rootNav} `}>
        {menus.map((menu, idx) => {
          if (menu.hasOwnProperty("link")) {
            return (
              <Link key={idx} to={menu.link}>
                {menu.title}
              </Link>
            );
          } else {
            return (
              <div className="nested-nav-container" key={idx}>
                <a
                  onClick={() =>
                    this.mainMenuClickHandler(menu.title, menu.menus)
                  }
                >
                  <div className="flex gap-1">
                    {this.state.selectedMenu === menu.title ? <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
                    </svg> : <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>}{" "}
                    {menu.title}
                  </div>
                </a>
                <nav className={this.state.selectedMenu === menu.title ? "show" : ""}>
                  {this.renderSubmenu(menu.menus)}
                </nav>
              </div>
            );
          }
        })}
      </nav>
    );
  }

  render() {
    return (
      <div className="top-container">
        <header className="app-header">
          <div className="flex gap-3 lg:flex-1 pl-3">
            <a href="https://www.facebook.com/lukespacewalker">
              <img src={fb_icon} className={icon} />
            </a>
            <a href="https://www.youtube.com/channel/UCdGwXjUz3JZhIk7b9vQRmCQ">
              <img src={yt_icon} className={icon} />
            </a>
            <a href="https://www.instagram.com/lukesp763/">
              <img src={instagram_icon} className={icon} />
            </a>
            <a href="https://github.com/Lukespacewalker/">
              <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" className={icon}>
                <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
            </a>
          </div>
          <div className={`flex-0 ${logo}`}>
            <Link to="/"></Link>
          </div>
          <div className={`nav-container ${this.state.isMenuOpen ? "show" : ""}`}>
            {this.renderMainMenu(menus)}
          </div>
          <div className="relative py-6 px-3 lg:hidden text-gray-900" onClick={this.toggleMenu} >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
        </header>
      </div>
    );
  }
}

/*
import * as React from "react";

import { logo, showingNav } from "./header.module.scss";

interface IMenu {
  order: number;
  title: string;
  link?: string;
  menus?: IMenu[];
}

class Menus extends React.Component<
  { items: IMenu[] },
  {
    selectedMenu: string;
    subMenu: JSX.Element;
  }
> {
  constructor(props) {
    super(props);
  }

  state = {
    selectedMenu: null,
    subMenu: null,
  };

  mainMenuClickHandler = (selectedMenu: string, menus: Array<IMenu>) => {
    if (this.state.selectedMenu === selectedMenu) {
      this.setState({ selectedMenu: null, subMenu: null });
    } else {
      this.setState({
        selectedMenu: selectedMenu,
        //subMenu: this.renderSubmenu(menus),
      });
    }
  };

  render() {
    return (
      <nav className="flex flex-col gap-3">
        {this.props.items.map((menu, idx) => {
          if (menu.hasOwnProperty("link")) {
            return (
              <Link key={idx} to={menu.link}>
                {menu.title}
              </Link>
            );
          } else {
            return (
              <a
                className="p-3"
                key={idx}
                onClick={() =>
                  this.mainMenuClickHandler(menu.title, menu.menus)
                }
              >
                <React.Fragment key={idx}>
                  {this.state.selectedMenu === menu.title ? "-" : "+"}{" "}
                  {menu.title}
                </React.Fragment>
              </a>
            );
          }
        })}
      </nav>
    );
  }
}

export class Header extends React.Component<{ isFrontPage?: boolean }, {}> {
  constructor(props) {
    super(props);
  }

  state = {
    isPaneOpen: false,
  };

  private toggleMenu = () => {
    this.setState({ isPaneOpen: !this.state.isPaneOpen });
  };

  render() {
    return (
      <div className="h-screen w-24">
        <header
          className={`fixed z-10 overflow-hidden flex items-center h-screen w-24 shadow-lg rounded-lg transition-all ${
            this.state.isPaneOpen ? showingNav : ""
          }`}
        >
          <div className="flex items-center bg-gray-800 h-screen">
            <div className={logo}>
              <a onClick={this.toggleMenu}></a>
            </div>
          </div>
          <div className="flex items-center bg-gray-200 h-screen p-6">
            <Menus items={menus} />
          </div>
        </header>
      </div>
    );
  }
}
*/