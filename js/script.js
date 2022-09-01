// event pada saat link di klik
$('.page-scroll').on('click', function(e) {

    // ambil isi href
    var tujuan = $(this).attr('href');
    // tangkap element ybs
    var elementTujuan = $(tujuan);

    // pindahkan scroll
    $('html, body').animate({ 

        scrollTop: elementTujuan.offset().top - 50

    }, 1000);


    e.preventDefault();

});