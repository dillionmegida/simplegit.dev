import React from "react"

import styled from "styled-components"
import { LINKS } from "../constants"

const Header = styled.header`
  position: relative;
  padding-top: 160px;

  .react-logo {
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: contain;
    z-index: -1;
    opacity: 0.03;
  }

  h1 {
    font-size: clamp(3rem, 8vw, 8rem);
    margin: 20px 0;
    position: relative;
    left: 12px;
    width: max-content;

    span {
      border-radius: 5px;
      padding: 0px 15px;
      background-color: transparent;
      transition: background-color 300ms;

      &.reactjs {
        position: relative;
        left: -28px;
      }
    }

    .simple:hover {
      background-color: color-mix(in srgb, #163239, transparent 50%);
      color: yellow;
    }

    .reactjs:hover {
      background-color: color-mix(in srgb, #163239, transparent 50%);
      color: #2ef964;
    }
  }
  .short-desc,
  .watch-link {
    font-size: clamp(1.4rem, 3vw, 1.6rem);
  }

  .short-desc {
    max-width: 600px;
    line-height: 1.5;
    text-align: center;

    .highlight {
      background-color: color-mix(in srgb, #163239, transparent 50%);
      color: yellow;
      display: inline-block;
      padding: 2px 10px;
      &--2 {
        background-color: color-mix(in srgb, #163239, transparent 80%);
        color: #f9902e;
      }
      &--3 {
        background-color: color-mix(in srgb, #163239, transparent 50%);
        color: #2ef964;
      }
      font-weight: 500;
      padding: 1px 5px;
      border-radius: 5px;
    }
  }
`

export default function Landing() {
  return (
    <Header className="container">
      <img className="react-logo" src="/git-logo.png" alt="Git logo" />
      <h1>gitsimplified</h1>
      <p className="short-desc">
        by{" "}
        <a
          className="highlight highlight--3"
          href="https://youtube.com/@deeecode"
        >
          deeecode
        </a>
        <br />
        <br />
        <span className="highlight highlight--2">More info coming soon</span>
      </p>
      {/* <a className="watch-link" href={LINKS.playlist}>
        Watch on YouTube
      </a> */}

      {/* <p>More info coming soon...</p> */}
    </Header>
  )
}
