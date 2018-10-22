import {
  cartesian2polar,
  deg2rad,
  diameter,
  isInCircle,
  polar2cartesian,
  rad2deg,
  scaleRadius,
  translate,
  translateDiagonal,
} from './math_utils'

// Some litmus test for rad2deg and deg2rad

describe('math_utils', () => {
  const basicallyZero = (val: number) => val < 0.0000000000001

  describe('cartesian2polar', () => {
    test('cartesian2polar (0, 0)', () => {
      const polar = cartesian2polar({ x: 0, y: 0 })
      expect(polar.angle).toEqual(0)
      expect(polar.radius).toEqual(0)
    })

    test('cartesian2polar (1, 0)', () => {
      const polar = cartesian2polar({ x: 1, y: 0 })
      expect(polar.angle).toEqual(0)
      expect(polar.radius).toEqual(1)
    })

    test('cartesian2polar (0, 1)', () => {
      const polar = cartesian2polar({ x: 0, y: 1 })
      expect(polar.angle).toEqual(Math.PI / 2)
      expect(polar.radius).toEqual(1)
    })

    test('cartesian2polar (-1, 0)', () => {
      const polar = cartesian2polar({ x: -1, y: 0 })
      expect(polar.angle).toEqual(Math.PI)
      expect(polar.radius).toEqual(1)
    })

    test('cartesian2polar (0, -1)', () => {
      const polar = cartesian2polar({ x: 0, y: -1 })
      expect(polar.angle).toEqual(-Math.PI / 2)
      expect(polar.radius).toEqual(1)
    })

    test('cartesian2polar (0.5, 0.5)', () => {
      const polar = cartesian2polar({ x: 0.5, y: 0.5 })
      expect(polar.angle).toEqual(Math.PI / 4)
      expect(polar.radius).toEqual(Math.sqrt(2) / 2)
    })
  })

  describe('polar2cartesian', () => {
    test('polar2cartesian (0, 0)', () => {
      const coord = polar2cartesian({ angle: 0, radius: 0 })
      expect(coord.x).toEqual(0)
      expect(coord.y).toEqual(0)
    })

    test('polar2cartesian (0, 1)', () => {
      const coord = polar2cartesian({ angle: 0, radius: 1 })
      expect(coord.x).toEqual(1)
      expect(coord.y).toEqual(0)
    })

    test('polar2cartesian (Math.PI/2, 1)', () => {
      const coord = polar2cartesian({ angle: Math.PI / 2, radius: 1 })
      expect(basicallyZero(coord.x)).toBeTruthy()
      expect(coord.y).toEqual(1)
    })

    test('polar2cartesian (Math.PI, 1)', () => {
      const coord = polar2cartesian({ angle: Math.PI, radius: 1 })
      expect(coord.x).toEqual(-1)
      expect(basicallyZero(coord.y)).toBeTruthy()
    })
  })

  describe('rad2deg', () => {
    test('deg2rad 0', () => {
      expect(deg2rad(0)).toEqual(0)
    })

    test('deg2rad 90', () => {
      expect(deg2rad(90)).toEqual(Math.PI / 2)
    })

    test('deg2rad 180', () => {
      expect(deg2rad(180)).toEqual(Math.PI)
    })

    test('deg2rad 270', () => {
      expect(deg2rad(270)).toEqual((3 * Math.PI) / 2)
    })

    test('deg2rad 360', () => {
      expect(deg2rad(360)).toEqual(2 * Math.PI)
    })
  })

  describe('deg2rad', () => {
    test('rad2deg 0', () => {
      expect(rad2deg(0)).toEqual(0)
    })

    test('rad2deg PI/2', () => {
      expect(rad2deg(Math.PI / 2)).toEqual(90)
    })

    test('rad2deg PI', () => {
      expect(rad2deg(Math.PI)).toEqual(180)
    })

    test('rad2deg (3/2)PI', () => {
      expect(rad2deg((3 * Math.PI) / 2)).toEqual(270)
    })

    test('rad2deg 2*PI', () => {
      expect(rad2deg(Math.PI * 2)).toEqual(360)
    })
  })

  describe('diameter', () => {
    const testVal = (radius: number) => {
      test(`diameter for radius = ${radius}`, () => {
        expect(diameter(radius)).toEqual(2 * radius)
      })
    }

    for (let i = 0; i <= 5; i++) {
      testVal(i)
    }
  })

  describe('translate', () => {
    test(`translate 5 by 2`, () => {
      expect(translate(2, 5)).toEqual(7)
    })

    test(`translate 0 by 0`, () => {
      expect(translate(0, 0)).toEqual(0)
    })

    test(`translate 5 by -2`, () => {
      expect(translate(-2, 5)).toEqual(3)
    })

    test(`translate -2 by 5`, () => {
      expect(translate(5, -2)).toEqual(3)
    })

    test(`translate 0 by -2`, () => {
      expect(translate(-2, 0)).toEqual(-2)
    })
  })

  describe('translateDiagonal', () => {
    test(`translate (0, 0) by 2`, () => {
      const coord = translateDiagonal(2, { x: 0, y: 0 })
      expect(coord.x).toEqual(2)
      expect(coord.y).toEqual(2)
    })

    test(`translate (0, 0) by -2`, () => {
      const coord = translateDiagonal(-2, { x: 0, y: 0 })
      expect(coord.x).toEqual(-2)
      expect(coord.y).toEqual(-2)
    })

    test(`translate (5, 3) by -2`, () => {
      const coord = translateDiagonal(-2, { x: 5, y: 3 })
      expect(coord.x).toEqual(3)
      expect(coord.y).toEqual(1)
    })

    test(`translate (-6, 3) by 4`, () => {
      const coord = translateDiagonal(4, { x: -6, y: 3 })
      expect(coord.x).toEqual(-2)
      expect(coord.y).toEqual(7)
    })
  })

  describe('scaleRadius', () => {
    test(`scaleRadius (0, 0) by 2`, () => {
      const coord = scaleRadius(2, { angle: 0, radius: 0 })
      expect(coord.angle).toEqual(0)
      expect(coord.radius).toEqual(0)
    })

    test(`scaleRadius (0, 1) by 2`, () => {
      const coord = scaleRadius(2, { angle: 0, radius: 1 })
      expect(coord.angle).toEqual(0)
      expect(coord.radius).toEqual(2)
    })

    test(`scaleRadius (Math.PI, 2.5) by 4`, () => {
      const coord = scaleRadius(4, { angle: Math.PI, radius: 2.5 })
      expect(coord.angle).toEqual(Math.PI)
      expect(coord.radius).toEqual(10)
    })
  })

  describe('isInCircle', () => {
    test(`isInCircle (5, 5) of radius 5`, () => {
      expect(isInCircle({ x: 5, y: 5 }, 5)).toBeTruthy()
    })

    test(`isInCircle (2, 2) of radius 5`, () => {
      expect(isInCircle({ x: 2, y: 2 }, 5)).toBeTruthy()
    })

    test(`isInCircle (10, 10) of radius 5`, () => {
      expect(isInCircle({ x: 10, y: 10 }, 5)).toBeFalsy()
    })
  })
})
