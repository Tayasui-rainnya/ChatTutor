import type { Point } from 'jsxgraph'
import { defineElement } from '../element-structor'

export interface MajorarcAttributes {
  center: [number, number] | Point
  from: [number, number] | Point
  to: [number, number] | Point
  color?: string
}

export const majorarc = defineElement<MajorarcAttributes>((options) => {
  return (board) => {
    return board.create('majorarc', [options.center, options.from, options.to], {
      ...(options.color && { strokeColor: options.color }),
    })
  }
})

