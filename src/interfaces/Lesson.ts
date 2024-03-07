export default interface Lesson {
  title: string
  youtube: string | null
  duration: string
  path?: string
}

export type LessonsBlock = {
  label: string
  lessons: Lesson[]
}[]
