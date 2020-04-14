var bckWidth = localStorage.getItem('back-widthVal');

function Fill(Width) {
    $('#ModelA-IMG').attr('src', `../assets/images/wizard/style/${Width}/A.jpg`)
    $('#ModelB-IMG').attr('src', `../assets/images/wizard/style/${Width}/B.jpg`)
    $('#ModelC-IMG').attr('src', `../assets/images/wizard/style/${Width}/C.jpg`)
    $('#ModelD-IMG').attr('src', `../assets/images/wizard/style/${Width}/D.jpg`)
    $('#ModelE-IMG').attr('src', `../assets/images/wizard/style/${Width}/E.jpg`)
}

if (bckWidth <= 1200) {
    Fill(1200);
} else if (bckWidth > 1201 && bckWidth <= 1500) {
    Fill(1500);
} else if (bckWidth > 1501 && bckWidth <= 1800) {
    Fill(1800);
} else if (bckWidth > 1801 && bckWidth <= 2100) {
    Fill(2100);
} else if (bckWidth > 2101 && bckWidth <= 2400) {
    Fill(2400);
} else if (bckWidth > 2401 && bckWidth <= 2700) {
    Fill(2700);
} else if (bckWidth > 2701 && bckWidth <= 3000) {
    Fill(3000);
} else if (bckWidth > 3001 && bckWidth <= 3300) {
    Fill(3300);
} else if (bckWidth > 3301 && bckWidth <= 3600) {
    Fill(3600);
}