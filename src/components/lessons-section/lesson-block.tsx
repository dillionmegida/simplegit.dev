import React from "react"
import Lesson from "../../interfaces/Lesson"
import NewTabLink from "../new-tab-link"
import classNames from "classnames"
import YouTube from "../Icon/YouTube"
import styled from "styled-components"
import { Link } from "gatsby"

const Item = styled.li`
  .lesson {
    display: block;
    text-align: left;
    color: white;
    height: 100%;
    padding: 20px;
    --background-color: color-mix(in srgb, black, transparent 50%);
    background-color: var(--background-color);
    border: 1px solid var(--background-color);
    transition: background-color 300ms;

    &:hover {
      background-color: color-mix(in srgb, yellow, transparent 80%);
    }

    &__title {
      display: block;
      width: 100%;
      text-align: left;
      line-height: 1.2;
      font-size: 1.2rem;
    }

    &__duration {
      display: block;
      color: color-mix(in srgb, white, var(--primary) 50%);
      font-size: 1rem;
      line-height: 2;
    }
  }
`

type Props = {
  lesson: Lesson
}

export default function LessonBlock({ lesson }: Props) {
  return (
    <Item key={lesson.title}>
      <NewTabLink href={lesson.youtube} className="lesson">
        {/* <span className="lesson__duration">{lesson.duration}</span> */}
        <span className="lesson__title">{lesson.title}</span>
      </NewTabLink>
      {/* <img
className="lesson__cover"
src={lesson.cover}
alt={lesson.title}
/> */}
    </Item>
  )
}
