import { sum } from "../sum";
test("Description: Sum Function should Calculate the Sum of Two Numbers",() => {
    // Here we are going to write the Implementation of the Test Function

    const result = sum(3,2);
    
    // How to check Result is 5 or not -> expect(result).toBe(5)
    // Assertion
    expect(result).toBe(5)
});