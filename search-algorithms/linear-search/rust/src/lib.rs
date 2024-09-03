/// Searches an array using a linear search.
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
pub fn linear_search(haystack: &[usize], needle: usize) -> Option<(usize, i32)> {
    let mut c = 0;

    for (i, &val) in haystack.iter().enumerate() {
        c += 1;
        if val == needle {
            return Some((i, c));
        }
    }

    None
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_linear_search() {
        let arr = gen_haystack(1, 128).expect("error generating haystack");
        let result = linear_search(&arr, 8);
        assert_eq!(result, Some((7, 8)));

        let arr = gen_haystack(128, 222).expect("error generating haystack");
        let result = linear_search(&arr, 8);
        assert_eq!(result, None);

        let arr = gen_haystack(128, 222).expect("error generating haystack");
        let result = linear_search(&arr, 143);
        assert_eq!(result, Some((15, 16)));
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
