import React from "react"

import styled from "styled-components"
import { LINKS } from "../constants"
import LessonsSection from "./lessons-section"

const Header = styled.header`
  position: relative;
  padding-top: 40px;

  .bg {
    border-radius: 50px;
    background-color: var(--color-git-dark);
    padding: 20px 40px 0;
    width: 100%;
    /* background-color: #e5e5f7; */
    opacity: 0.8;
    opacity: 0.8;
    background-image: radial-gradient(
      var(--color-git-dark) 1px,
      var(--color-git-light) 1px
    );
    background-size: 10px 10px;

    .tag {
      color: white;
      line-height: 1.2;
      top: 20px;
      position: relative;
      font-size: clamp(1.4rem, 6vw, 4rem);
      font-weight: 800;
    }

    .highlight {
      background-color: color-mix(in srgb, #163239, transparent 50%);
      color: yellow;
      display: inline-block;
      padding: 2px 10px;
      border-radius: 5px;

      &--2 {
        background-color: color-mix(in srgb, #163239, transparent 80%);
        color: #f9902e;
      }
      &--3 {
        background-color: color-mix(in srgb, #163239, transparent 50%);
        color: #2ef964;
      }
    }

    .course-cover {
      max-width: 800px;
      width: 100%;
      margin: 0 auto;
      border-radius: inherit;
      overflow: hidden;
      position: relative;
      top: 40px;
    }
  }
`

const Content = styled.div`
  font-size: clamp(1.3rem, 3vw, 1.5rem);
  color: white;
  line-height: 1.2;
  text-align: left;
  font-weight: 300;
  margin-top: 50px;

  .watch-section {
    position: relative;
  }
  .watch-link {
    font-size: clamp(0.8rem, 3vw, 2rem);
    border: 3px solid var(--color-git-dark-2);
    background-color: var(--color-git-dark-4);
    padding: 20px 30px;
    border-radius: 10px;
    color: yellow;
    display: inline-block;
    margin: 40px 0;
    text-transform: uppercase;
    transition: background-color 300ms;

    &:hover {
      background-color: var(--color-git-dark-3);
    }

    &::after {
      content: "";
      position: absolute;
      inset: 0;
      background-color: var(--color-git-dark-2);
      margin: auto 0;
      height: 2px;
      width: 100%;
      z-index: -1;
    }
  }
`

export default function Landing() {
  return (
    <>
      <Header className="container">
        <div className="bg">
          <h1 className="tag">
            Learn Git in this <span className="highlight">FREE</span>{" "}
            <span className="highlight">SIMPLIFIED</span> course
          </h1>
          <div className="course-cover">
            <img src="/git-course.png" alt="" />
          </div>
        </div>
      </Header>
      <Content className="container container-md">
        <p>
          Git is a Distributed Version Control System, DVCS, which makes
          managing versions of your project easier, as well as collaborations
          between multiple people. It is used by a lot of companies.
          <br />
          <br />
          While useful, it can also be confusing. There are a lot of commands to
          use from <code>branch</code> to <code>checkout</code> to{" "}
          <code>switch</code> to <code>rebase</code> and so much more. Which
          should you use? 🤔 And what do all these commands mean? 😵‍💫
          <br />
          <br />
          In this course, I'll be helping you become proficient in using git. 💪🏾
          Not only would you understand how git works and what all the features
          are used for, but we'll also see how to apply all that we learn with
          examples 😉
        </p>
        <div className="watch-section">
          <a className="watch-link" href={LINKS.playlist}>
            Watch Lessons on YouTube
          </a>
        </div>
      </Content>
      <LessonsSection />
    </>
  )
}
