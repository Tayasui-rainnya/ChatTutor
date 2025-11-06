import { registerCanvasElementDocument } from '../document'

export default registerCanvasElementDocument({
  name: 'line',
  description: 'A line on the canvas',
  attrs: [
    {
      name: 'from',
      description: 'The start point of the line, a number tuple like [x, y] or a Point element',
      required: true,
    },
    {
      name: 'to',
      description: 'The end point of the line, a number tuple like [x, y] or a Point element',
      required: true,
    },
    {
      name: 'color',
      description: 'The color of the line',
      required: false,
    },
  ],
})