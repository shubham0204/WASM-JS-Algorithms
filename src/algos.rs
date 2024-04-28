
pub fn impl_insertion_sort( nums: Vec<i32> ) -> Vec<i32> {
    let mut nums_copy = nums.to_vec() ;
    for i in 0..nums_copy.len() {
        for j in (1..=i).rev() {
            if nums_copy[j] < nums_copy[j-1] {
                let temp = nums_copy[j] ;
                nums_copy[j] = nums_copy[j-1] ;
                nums_copy[j-1] = temp ;
            }
        }
    }
    nums_copy
}

pub fn impl_prime_factors( n: usize ) -> Vec<usize> {
    let mut factors: Vec<usize> = Vec::new() ;
    let mut num = n;
    let mut i: usize = 2 ;
    while i * i <= num {
        if num % i != 0 {
            i += 1 ;
        }
        else {
            num = num / i;
            factors.push(i)
        }
    }
    if n > 1 {
        factors.push(num)
    }
    factors
}

#[cfg(test)]
mod tests {

    use crate::{impl_insertion_sort, impl_prime_factors};

    #[test]
    fn test_insertion_sort() {
        let nums = vec![ 9 , 8 , 0 , 3 , 2 ] ;
        let sorted_nums: Vec<i32> = impl_insertion_sort( nums ) ;
        assert_eq!( sorted_nums , vec![ 0 , 2 , 3 , 8 , 9 ] )
    }

    #[test]
    fn test_prime_factors() {
        let factors: Vec<usize> = impl_prime_factors( 923842938492 ) ;
        assert_eq!( factors , vec![2,2,3,3,439,1201,48673] ) ;
    }

}