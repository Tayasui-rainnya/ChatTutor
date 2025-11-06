import type { Point } from 'jsxgraph'
import { defineElement } from '../element-structor'

export interface ArcAttributes {
  center: [number, number] | Point
  from: [number, number] | Point
  to: [number, number] | Point
  color?: string
}

export const arc = defineElement<ArcAttributes>((options) => {
  return (board) => {
    return board.create('arc', [options.center, options.from, options.to], {
      ...(options.color && { strokeColor: options.color }),
    })
  }
})

