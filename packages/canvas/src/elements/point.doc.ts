import { registerCanvasElementDocument } from '../document'

export default registerCanvasElementDocument({
  name: 'point',
  description: 'A point on the canvas',
  attrs: [
    {
      name: 'x',
      description: 'The x coordinate of the point',
      required: true,
    },
    {
      name: 'y',
      description: 'The y coordinate of the point',
      required: true,
    },
    {
      name: 'name',
      description: 'The name of the point, support latex',
      required: true,
    },
    {
      name: 'color',
      description: 'The color of the point',
      required: false,
    },
    {
      name: 'static',
      description: 'Whether the point is static, by default, it is dynamic that user can drag it',
      required: false,
    },
  ],
})