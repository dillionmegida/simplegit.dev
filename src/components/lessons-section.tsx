import React from "react"
import styled from "styled-components"
import NewTabLink from "../components/new-tab-link"
import YouTube from "../components/Icon/YouTube"
import { addTimes } from "../helpers/time"
import { lessons } from "./lessons"
import classNames from "classnames"

const Section = styled.section`
  /* background-color: color-mix(in srgb, black, transparent 90%); */

  .heading {
    text-align: left;
    font-size: 1.2rem;
    font-weight: bold;
    width: 100%;
    background-color: white;
    padding: 20px 30px;
    color: black;
  }

  .lesson {
    text-align: left;

    &:not(:last-child) {
      border-bottom: 1px solid color-mix(in srgb, var(--primary), white 30%);
    }

    &__section {
      width: 100%;

      &-label {
        width: 100%;
        text-align: left;
        line-height: 1.4;
        display: flex;
        justify-content: space-between;
        padding: 15px 30px;
        color: white;
        background-color: color-mix(in srgb, white, transparent 95%);

        &-text {
          text-transform: uppercase;
        }
      }
    }

    &__link {
      display: flex;
      align-items: flex-start;
      gap: 15px;
      --background-color: color-mix(in srgb, black, transparent 50%);
      background-color: var(--background-color);
      width: 100%;
      padding: 30px;
      color: white;
      transition: color 300ms, background-color 300ms;
      --color-on-hover: yellow;

      &--not-published {
        cursor: not-allowed;
        --color-on-hover: white;
        --background-color: color-mix(in srgb, black, transparent 95%);
      }

      @media (max-width: 500px) {
        padding: 20px;
      }

      &:hover,
      &:focus {
        background-color: var(--primary);
        color: var(--color-on-hover);
        text-decoration: none;
        box-shadow: 1px 1px 20px color-mix(in srgb, black, transparent 80%);
      }
    }

    &__title {
      flex: 1;
      width: 100%;
      text-align: left;
      line-height: 1.6;
      font-size: 1.2rem;
    }

    &__duration {
      color: color-mix(in srgb, white, var(--primary) 50%);
      font-size: 1rem;
      line-height: 2;
    }
  }
`

export default function LessonsSection() {
  return (
    <Section>
      <div className="container container-md">
        <h2 className="heading">Course Outline [Click on any]</h2>
        {lessons.map(lesson => (
          <div className="lesson__section">
            {lesson.label && lesson.lessons ? (
              <div className="lesson__section-label">
                <span className="lesson__section-label-text">
                  {lesson.label}
                </span>

                <span>{addTimes(lesson.lessons.map(l => l.duration))}</span>
              </div>
            ) : (
              <div className="lesson__section-label">...</div>
            )}
            {lesson.lessons?.map(lesson => (
              <ul className="lesson-items">
                <li key={lesson.title}>
                  <NewTabLink
                    href={lesson.youtube}
                    className={classNames(
                      "lesson__link",
                      !lesson.youtube && "lesson__link--not-published"
                    )}
                  >
                    {/* <img
              className="lesson__cover"
              src={lesson.cover}
              alt={lesson.title}
            /> */}
                    <YouTube color="white" size={30} />
                    <span className="lesson__title">{lesson.title}</span>

                    <span className="lesson__duration">{lesson.duration}</span>
                  </NewTabLink>
                </li>
              </ul>
            ))}
          </div>
        ))}
      </div>
    </Section>
  )
}
