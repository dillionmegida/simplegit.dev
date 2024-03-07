import React from "react"
import styled from "styled-components"
import NewTabLink from "../new-tab-link"
import YouTube from "../Icon/YouTube"
import { addTimes } from "../../helpers/time"
import { lessons } from "../lessons"
import classNames from "classnames"
import LessonBlock from "./lesson-block"

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
        background-color: color-mix(in srgb, white, transparent 75%);

        &-text {
          text-transform: uppercase;
        }
      }
    }

    &__lessons {
      display: grid;
      --columns: 3;
      grid-template-columns: repeat(var(--columns), 1fr);
      align-items: stretch;
      background-color: color-mix(in srgb, white, transparent 95%);

      @media (max-width: 700px) {
        --columns: 2;
      }

      @media (max-width: 700px) {
        --columns: 1;
      }

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

                {/* <span>{addTimes(lesson.lessons.map(l => l.duration))}</span> */}
              </div>
            ) : (
              <div className="lesson__section-label">...</div>
            )}
            <ul className="lesson__lessons">
              {lesson.lessons?.map(lesson => (
                <LessonBlock key={lesson.title} lesson={lesson} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
