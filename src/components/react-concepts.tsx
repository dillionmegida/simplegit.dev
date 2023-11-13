import styled from "styled-components"
import React from "react"
import { REACT_CONCEPTS } from "../constants"
import classnames from "classnames"

function randomize(arr) {
  return arr
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
}

function selectRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

const colorsArr = ["orange", "yellow", "green"]

const Section = styled.div`
  .orange {
    color: #2ef964;
  }

  .green {
    color: #f9902e;
  }

  .yellow {
    color: yellow;
  }
  
  .terms {
    max-width: 800px;
    width: 100%;
    padding: 80px 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 5px;
    &__term {
      padding: 10px 15px;
      border-radius: 5px;
      font-size: 0.9rem;
      background-color: color-mix(in srgb, #163239, transparent 50%);
      border: 3px solid color-mix(in srgb, #163239, transparent 80%);
      transition: background-color 300ms;

      &:hover {
        background-color: color-mix(in srgb, #163239, transparent 90%);
      }
    }
  }
`

export default function ReactConcepts() {
  return (
    <Section className="container">
      <div className="terms">
        {randomize(REACT_CONCEPTS).map(item => (
          <span
            className={classnames("terms__term", selectRandom(colorsArr))}
            key={item}
          >
            {item}
          </span>
        ))}
      </div>
    </Section>
  )
}
