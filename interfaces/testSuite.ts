import { TestCase } from "./testCase";

export type TestSuite = {
    name: string;
    description: string;
    testCases: TestCase[];
}