import * as React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import {
  container,
  bannerSource,
  childrenContainer,
  back,
  next,
  hide,
  nav,
} from "./carousal.module.scss";

export class CarousalItem extends React.Component<
  { mode?: "cover" | "contain"; image?: IGatsbyImageData },
  {}
> {
  constructor(props) {
    super(props);
  }

  private myRef = React.createRef();

  moveToView = () => {
    this.myRef.current.scrollIntoView({
      behavior: "auto",
      inline: "start",
      block: "nearest",
    });
  };

  render() {
    return (
      <div className="relative rounded-lg shadow-lg overflow-hidden" ref={this.myRef}>
        <GatsbyImage
          style={{ height: `100%` }}
          image={this.props.image}
          imgStyle={{ objectFit: this.props.mode }}
          alt=""
        />
        <div className={bannerSource}>{this.props.children}</div>
      </div>
    );
  }
}

export class Carousal extends React.Component<
  { mode?: "cover" | "contain" },
  {}
> {
  constructor(props) {
    super(props);
    this.prev = this.prev.bind(this);
    this.next = this.next.bind(this);
    this.goTo = this.goTo.bind(this);

    this.children = React.Children.map(this.props.children, (element, idx) => {
      const ref = React.createRef();
      this.childrenRefs.push(ref);
      const mode = this.props.hasOwnProperty("mode")
        ? this.props.mode
        : "cover";
      return React.cloneElement(element as any, {
        mode: mode,
        key: idx,
        ref: ref,
      });
    });
  }

  private children = null;
  private childrenRefs = [];

  state = {
    previousIndex: 0,
    index: 0,
  };

  prev() {
    let purpose = this.state.index - 1;
    if (purpose < 0) {
      purpose = this.childrenRefs.length - 1;
    }
    this.setState({ previousIndex: this.state.index, index: purpose });
  }

  next() {
    let purpose = this.state.index + 1;
    if (purpose > this.childrenRefs.length - 1) {
      purpose = 0;
    }
    this.setState({ previousIndex: this.state.index, index: purpose });
  }

  goTo(id: number) {
    this.setState({ previousIndex: this.state.index, index: id });
  }

  render() {
    const navs = [];
    for (let i = 0; i < this.childrenRefs.length; i++) {
      if (this.state.index === i) {
        navs.push(
          <b key={i} onClick={this.goTo.bind(this, i)}>
            {i + 1}
          </b>
        );
      } else {
        navs.push(
          <span key={i} onClick={this.goTo.bind(this, i)}>
            {i + 1}
          </span>
        );
      }
    }

    return (
      <div className="relative h-full">
        <div
          className={`${container} ${
            this.childrenRefs.length > 1 ? "" : hide
          }`}
        >
          <div className={childrenContainer}>{this.children}</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={back}
            onClick={this.prev}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={next}
            onClick={this.next}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
          <div className={nav}>{navs}</div>
        </div>
      </div>
    );
  }

  componentDidUpdate() {
    if (this.state.index != this.state.previousIndex) {
      this.childrenRefs[this.state.index].current.moveToView();
    }
  }
}
