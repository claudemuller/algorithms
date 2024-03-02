import {
  breadthFirstTraversal,
  depthFirstTraversal,
  depthFirstTraversalRec,
  edgeListToAdjacencyList,
} from "./traversal";

describe("depthFirstTraversal", () => {
  describe("given a graph", () => {
    /*
     * a------→c
     * |       |
     * ↓       ↓
     * b       e
     * |
     * ↓
     * d------→f
     */

    it("should traverse the graph depth first", () => {
      // Arrange.
      const graph = {
        a: ["c", "b"],
        b: ["d"],
        c: ["e"],
        d: ["f"],
        e: [],
        f: [],
      };
      const expected = "abdfce";

      // Act.
      const actual = depthFirstTraversal(graph, "a");

      // Assert.
      expect(actual.join("")).toEqual(expected);
    });
  });
});

describe("depthFirstTraversalRec", () => {
  describe("given a graph", () => {
    /*
     * a------→c
     * |       |
     * ↓       ↓
     * b       e
     * |
     * ↓
     * d------→f
     */

    it("should traverse the graph depth first recursively", () => {
      // Arrange.
      const graph = {
        a: ["b", "c"],
        b: ["d"],
        c: ["e"],
        d: ["f"],
        e: [],
        f: [],
      };
      const expected = "abdfce";

      // Act.
      const actual = depthFirstTraversalRec(graph, "a");

      // Assert.
      expect(actual.join("")).toEqual(expected);
    });
  });
});

describe("breadthFirstTraversal", () => {
  describe("given a graph", () => {
    /*
     * a------→c
     * |       |
     * ↓       ↓
     * b       e
     * |
     * ↓
     * d------→f
     */

    it("should traverse the graph breadth first", () => {
      // Arrange.
      const graph = {
        a: ["b", "c"],
        b: ["d"],
        c: ["e"],
        d: ["f"],
        e: [],
        f: [],
      };
      const expected = "abcdef";

      // Act.
      const actual = breadthFirstTraversal(graph, "a");

      // Assert.
      expect(actual.join("")).toEqual(expected);
    });
  });
});

describe("edgeListToAdjacencyList", () => {
  describe("given an edge list", () => {
    /*
     * a------→c
     * |       |
     * ↓       ↓
     * b       e
     * |
     * ↓
     * d------→f
     */

    it("should traverse the graph breadth first", () => {
      // Arrange.
      const list = [
        ["a", "c"],
        ["a", "b"],
        ["c", "e"],
        ["b", "d"],
        ["d", "f"],
      ];
      const expected = {
        a: ["c", "b"],
        b: ["a", "d"],
        c: ["a", "e"],
        d: ["b", "f"],
        e: ["c"],
        f: ["d"],
      };

      // Act.
      const actual = edgeListToAdjacencyList(list);

      // Assert.
      expect(actual).toMatchObject(expected);
    });
  });
});
