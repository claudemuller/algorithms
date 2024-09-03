use std::option::Option;

/// Searches an array using a binary search.
///
/// # Arguments
///
/// * `haystack` - The array to search.
/// * `needle` - The value to search the array for.
///
/// # Returns
///
/// Returns `Some((index, runs))` if the `needle` is found or `None` if not.
///
pub fn binary_search(haystack: Vec<i32>, needle: i32) -> Option<(i32, i32)> {
    let mut c = 0;
    let mut low: isize = 0;
    let mut high: isize = haystack.len() as isize - 1;

    // While the range to search hasn't shrunk to zero.
    while low <= high {
        c += 1;

        // The mid-point in our range to search.
        let mid = (low + high) / 2;

        // The guess is too low, increase the low index.
        if haystack[mid as usize] < needle {
            low = mid + 1;
            continue;
        }

        // The guess is too high, reduce the high index.
        if haystack[mid as usize] > needle {
            high = mid - 1;
            continue;
        }

        // We found it!
        return Some((mid as i32, c));
    }

    None
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_binary_search() {
        let arr = gen_haystack(1, 128).expect("error generating haystack");
        let result = binary_search(arr, 8);
        assert_eq!(result, Some((7, 4)));

        let arr = gen_haystack(128, 222).expect("error generating haystack");
        let result = binary_search(arr, 8);
        assert_eq!(result, None);

        let arr = gen_haystack(128, 222).expect("error generating haystack");
        let result = binary_search(arr, 143);
        assert_eq!(result, Some((15, 6)));
    }

    fn gen_haystack(lower_n: i32, upper_n: i32) -> Result<Vec<i32>, &'static str> {
        if lower_n >= upper_n {
            return Err("invaild range");
        }

        let mut haystack = Vec::with_capacity((upper_n - lower_n + 1) as usize);
        for i in lower_n..=upper_n {
            haystack.push(i);
        }

        Ok(haystack)
    }
}
