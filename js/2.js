var month = prompt("Nhap vao mot thang: ");
switch (Number(month)) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        alert("Thang " + month + " co 31 ngay!");    
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        alert("Thang " + month + " co 30 ngay!");    
        break;
    case 2:
        var year = prompt("Nhap vao nam: ");
        if ((Number(year)%4==0 && Number(year)%100 != 0) || Number(year)%400==0) {
            alert("Thang " + month + " co 29 ngay!");    
            break;
        } else {
            alert("Thang " + month + " co 28 ngay!");    
            break;
        }    
    default:
        alert("Thang " + month + " khong hop le!");    
        break;
}