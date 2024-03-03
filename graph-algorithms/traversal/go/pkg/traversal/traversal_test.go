package traversal_test

import (
	"fmt"
	"strings"
	"testing"

	"github.com/stretchr/testify/assert"

	"github.com/claudemuller/algorithms/graph-algorithms/go/pkg/traversal"
)

func TestDepthFirstTraversal(t *testing.T) {
	type test struct {
		name  string
		src   string
		graph map[string][]string
		want  string
	}
	/*
	 * a------→c
	 * |       |
	 * ↓       ↓
	 * b       e
	 * |
	 * ↓
	 * d------→f
	 */
	tests := []test{
		{
			name: "depth first success",
			src:  "a",
			graph: map[string][]string{
				"a": {"c", "b"},
				"b": {"d"},
				"c": {"e"},
				"d": {"f"},
				"e": {},
				"f": {},
			},
			want: "abdfce",
		},
	}

	for _, tc := range tests {
		got := traversal.DepthFirstTraversal(tc.graph, tc.src)

		assert.Equal(t, tc.want, strings.Join(got, ""), fmt.Sprintf("%s: %s", tc.name, "depth first traversal failed"))
	}
}

func TestDepthFirstTraversalRec(t *testing.T) {
	type test struct {
		name  string
		src   string
		graph map[string][]string
		want  string
	}
	/*
	 * a------→c
	 * |       |
	 * ↓       ↓
	 * b       e
	 * |
	 * ↓
	 * d------→f
	 */
	tests := []test{
		{
			name: "depth first rec success",
			src:  "a",
			graph: map[string][]string{
				"a": {"b", "c"},
				"b": {"d"},
				"c": {"e"},
				"d": {"f"},
				"e": {},
				"f": {},
			},
			want: "abdfce",
		},
	}

	for _, tc := range tests {
		got := traversal.DepthFirstTraversalRec(tc.graph, tc.src)

		assert.Equal(t, tc.want, strings.Join(got, ""), fmt.Sprintf("%s: %s", tc.name, "depth first traversal failed"))
	}
}

func TestBreadthFirstTraversal(t *testing.T) {
	type test struct {
		name  string
		src   string
		graph map[string][]string
		want  string
	}
	/*
	 * a------→c
	 * |       |
	 * ↓       ↓
	 * b       e
	 * |
	 * ↓
	 * d------→f
	 */
	tests := []test{
		{
			name: "breadth first success",
			src:  "a",
			graph: map[string][]string{
				"a": {"b", "c"},
				"b": {"d"},
				"c": {"e"},
				"d": {"f"},
				"e": {},
				"f": {},
			},
			want: "abcdef",
		},
	}

	for _, tc := range tests {
		got := traversal.BreadthFirstTraversal(tc.graph, tc.src)

		assert.Equal(t, tc.want, strings.Join(got, ""), fmt.Sprintf("%s: %s", tc.name, "breadth first traversal failed"))
	}
}

func TestEdgeListToAdjList(t *testing.T) {
	type test struct {
		name string
		src  string
		list [][]string
		want map[string][]string
	}
	/*
	 * a------→c
	 * |       |
	 * ↓       ↓
	 * b       e
	 * |
	 * ↓
	 * d------→f
	 */
	tests := []test{
		{
			name: "edge list to adj list success",
			src:  "a",
			list: [][]string{
				{"a", "c"},
				{"a", "b"},
				{"c", "e"},
				{"b", "d"},
				{"d", "f"},
			},
			want: map[string][]string{
				"a": {"c", "b"},
				"b": {"a", "d"},
				"c": {"a", "e"},
				"d": {"b", "f"},
				"e": {"c"},
				"f": {"d"},
			},
		},
	}

	for _, tc := range tests {
		got := traversal.EdgeListToAdjList(tc.list)

		assert.Equal(t, tc.want, got, fmt.Sprintf("%s: %s", tc.name, "list conversion failed"))
	}
}
