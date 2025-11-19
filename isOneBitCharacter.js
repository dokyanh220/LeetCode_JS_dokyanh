var isOneBitCharacter = function(bits) {
    let i = 0
    const n = bits.length

    // Duyệt qua mảng cho đến khi con trỏ cách bit cuối cùng ít nhất 1 vị trí
    // Vòng lặp dừng khi i == n - 1 (vị trí cuối cùng) hoặc i >= n (vượt quá)
    while (i < n - 1) {
        if (bits[i] === 1) {
            // Đây là ký tự 2-bit (10 hoặc 11). Di chuyển 2 vị trí.
            i += 2
        } else { // bits[i] === 0
            // Đây là ký tự 1-bit (0). Di chuyển 1 vị trí.
            i += 1
        }
    }
    
    // Sau khi vòng lặp kết thúc:
    // - Nếu i == n - 1: Nghĩa là ký tự cuối cùng (bits[n-1]) được tiếp cận
    //   bằng một bước nhảy 1-bit. => Ký tự cuối cùng là 1-bit.
    // - Nếu i >= n (chỉ có thể là i == n do bước nhảy 2-bit): Nghĩa là
    //   ký tự áp chót là 2-bit và đã bỏ qua bit cuối cùng. => Ký tự cuối cùng là 2-bit.
    return i === n - 1
}

console.log('🚀 ~ isOneBitCharacter ~ isOneBitCharacter:', isOneBitCharacter([0, 1, 1]))

