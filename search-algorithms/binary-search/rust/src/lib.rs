use std::{option::Option, usize};

pub fn binary_search(haystack: Vec<usize>, needle: usize) -> Option<usize> {
    let mut low = 0;
    let mut high = haystack.len() - 1;

    // While the range to search hasn't shrunk to zero.
    while low <= high {
        // The mid-point in our range to search.
        let mid = (low + high) / 2;

        // The guess is too low, increase the low index.
        if haystack[mid] < needle {
            low = mid + 1;
            continue;
        }

        // The guess is too high, reduce the high index.
        if haystack[mid] > needle {
            high = mid - 1;
            continue;
        }

        // We found it!
        return Some(mid);
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
        assert_eq!(result, Some(7));

        let arr = gen_haystack(128, 222).expect("error generating haystack");
        let result = binary_search(arr, 8);
        assert_eq!(result, None);

        let arr = gen_haystack(128, 222).expect("error generating haystack");
        let result = binary_search(arr, 143);
        assert_eq!(result, Some(15));
    }

    fn gen_haystack(lower_n: usize, upper_n: usize) -> Result<Vec<usize>, &'static str> {
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
