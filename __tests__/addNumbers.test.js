import { expect, it, describe } from 'vitest'
import { addNumbers } from "../addNumbers"

describe("Add numbers function test suits", () => {
    it("Should return 0 if no value or empty string is provided", () => {
        expect(addNumbers("")).toBe(0)
    })
})