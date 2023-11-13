import React from "react"
import styled from "styled-components"
import NewTabLink from "../components/new-tab-link"

const Section = styled.section`
  background-color: color-mix(in srgb, black, transparent 90%);
  margin-top: 60px;

  .container {
    padding: 100px 20px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    justify-items: center;

    .lesson {
      border: 4px solid color-mix(in srgb, black, transparent 80%);
      border-radius: 10px;
      transition: border-color 300ms, transform 300ms;
      position: relative;

      &:hover,
      &:focus {
        border: 4px solid yellow;
        transform: translateY(-20px);
      }

      /* &::after {
        content: "";
        width: 100%;
        background-color: color-mix(in srgb, black, transparent 30%);
        background-color: red;
        height: 10px;
        bottom: -20px;
      } */

      &__cover {
        border-radius: 10px;
        width: 100%;
        object-fit: cover;
      }
    }
  }
`

const lessons = [
  {
    title: "Introduction to the course",
    cover: "/lessons/0-react-intro.png",
    youtube: "https://youtu.be/iqYK2UgNv-w",
  },
  {
    title: "Setting up React environment with Vite",
    cover: "/lessons/1-vite-react.png",
    youtube: "https://youtu.be/iUdJTMGC6aI",
  },
  {
    title: "Components and JSX",
    cover: "/lessons/2-component-jsx.png",
    youtube: "https://youtu.be/QqiByoW1eik",
  },
  {
    title: "Props",
    cover: "/lessons/3-component-props.png",
    youtube: "https://youtu.be/KGDi6818H4w",
  },
]

export default function LessonsSection() {
  return (
    <Section>
      <div className="container">
        {lessons.map(lesson => (
          <NewTabLink
            href={lesson.youtube}
            className="lesson"
            key={lesson.title}
          >
            <img
              className="lesson__cover"
              src={lesson.cover}
              alt={lesson.title}
            />
          </NewTabLink>
        ))}
      </div>
    </Section>
  )
}
