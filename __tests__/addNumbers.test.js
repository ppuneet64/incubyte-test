import { expect, it, describe } from 'vitest'
import { addNumbers } from "../addNumbers"

describe("Add numbers function test suits", () => {
    it("Should return 0 if no value or empty string is provided", () => {
        expect(addNumbers("")).toBe(0)
    })
    it("Should return 0 if no numaric value is provided in string", () => {
        expect(addNumbers("//&$")).toBe(0)
    })
    it("Should throw error  if negative value is provided in string", () => {
        const resFn = () => {
            addNumbers("//1;-2,3")
        }
        return expect(resFn).toThrowError('negatives not allowed: -2')
    })
    it("Should return sum of all numbers after all condition checks", () => {
        expect(addNumbers("//1\n2;3,4")).toBe(10)
        expect(addNumbers("//110\n2;3,4")).toBe(119)
        expect(addNumbers("//1000\n2;3,4")).toBe(1009)
    })
})