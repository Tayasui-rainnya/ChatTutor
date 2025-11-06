import type { Circle, Point } from 'jsxgraph'
import { defineElement } from '../element-structor'

export interface CircleAttributes {
  center: [number, number] | Point
  radius: number | Point | Circle
  color?: string
}

export const circle = defineElement<CircleAttributes>((options) => {
  return (board) => {
    return board.create('circle', [options.center, options.radius], {
      ...(options.color && { strokeColor: options.color }),
    })
  }
})

