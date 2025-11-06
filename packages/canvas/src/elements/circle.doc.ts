import { registerCanvasElementDocument } from '../document'

export default registerCanvasElementDocument({
  name: 'circle',
  description: 'A circle defined by a center point and radius',
  attrs: [
    {
      name: 'center',
      description: 'The center point of the circle, a number tuple like [x, y] or a Point element',
      required: true,
    },
    {
      name: 'radius',
      description: 'The radius of the circle: a number, a Point element (distance from center to that point), or a Circle element (same radius)',
      required: true,
    },
    {
      name: 'color',
      description: 'The color of the circle',
      required: false,
    },
  ],
})

