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
})