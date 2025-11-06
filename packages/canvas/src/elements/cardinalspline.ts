import type { Point } from 'jsxgraph'
import { defineElement } from '../element-structor'

export interface CardinalsplineAttributes {
  points: Array<[number, number] | Point>
  tau?: number
  color?: string
}

export const cardinalspline = defineElement<CardinalsplineAttributes>((options) => {
  return (board) => {
    return board.create('cardinalspline', [options.points, options.tau ?? 0.5], {
      ...(options.color && { strokeColor: options.color }),
    })
  }
})

