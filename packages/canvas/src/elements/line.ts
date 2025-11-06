import type { Point } from 'jsxgraph'
import { defineElement } from '../element-structor'

export interface LineAttributes {
  from: [number, number] | Point
  to: [number, number] | Point
  color?: string
}

export const line = defineElement<LineAttributes>((options) => {
  return (board) => {
    return board.create('line', [options.from, options.to], {
      ...(options.color && {
        strokeColor: options.color,
        straightFirst: false,
        straightLast: false,
      }),
    })
  }
})
