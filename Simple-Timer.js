/**
 * 
 * BAWAH MEKANISME DENGAN MENGGUNAKAN CLEAR INTERVAL UNTUK MENGHENTIKAN INTERVAL
 * 
 */


function manggil () {
    var jamm = document.getElementById("jam").value;
    var menitt = document.getElementById("menit").value;
    var detikk = document.getElementById("detik").value;
    var ingatkann = document.getElementById("ingatkan").value;


    console.log (jamm, "ini jam")
    console.log (menitt, "ini menit")
    console.log (detikk, "ini detik")
    console.log (ingatkann, "ini remind me to")
}

var alarm = document.getElementById("bising");

// console.log(h8Timer(0, 0, 10, "makan"))

function h8Timer (jamm, menitt, detikk, ingatkann) {
    var jamm = document.getElementById("jam").value;
    var menitt = document.getElementById("menit").value;
    var detikk = document.getElementById("detik").value;
    var ingatkann = document.getElementById("ingatkan").value;
    

    document.getElementById("display-reminder").innerHTML = ingatkann
    document.getElementById("display-jam").innerHTML = jamm
    document.getElementById("display-menit").innerHTML = menitt
    document.getElementById("display-detik").innerHTML = detikk

    // confirm("memulai countdown " + ingatkann)

    let detikCount = {h : jamm, m : menitt, s : detikk}
    let timeout = ((jamm * 3600) + (menitt * 60) + detikk) * 1000
    
    // display jalannya waktu
    if (detikCount.s < 10) {
        console.log (`${detikCount.h}h ${detikCount.m}m 0${detikCount.s}s`)
        document.getElementById("display-reminder").innerHTML = ingatkann
        document.getElementById("display-jam").innerHTML = detikCount.h
        document.getElementById("display-menit").innerHTML = detikCount.m
        document.getElementById("display-detik").innerHTML = detikCount.s
    } else {
        console.log (`${detikCount.h}h ${detikCount.m}m ${detikCount.s}s`)
        document.getElementById("display-reminder").innerHTML = ingatkann
        document.getElementById("display-jam").innerHTML = detikCount.h
        document.getElementById("display-menit").innerHTML = detikCount.m
        document.getElementById("display-detik").innerHTML = detikCount.s
    }

    var b = setTimeout(() => {
        for (let i = 0; i < timeout; i+=1000) {
            if (i === 0) {
                alarm.play();
                // alert(ingatkann);
            }
        } 
        
    }, timeout);



    var count = setInterval (function(){
        detikCount.s --
    
        // setting display sisa waktu
        if (detikCount.s >= 1) {
            if (detikCount.s < 10) {
                console.log(`${detikCount.h}h ${detikCount.m}m 0${detikCount.s}s     masuk if line 67`)
                document.getElementById("display-jam").innerHTML = detikCount.h
                document.getElementById("display-menit").innerHTML = detikCount.m
                document.getElementById("display-detik").innerHTML = detikCount.s
            } else {
                console.log(`${detikCount.h}h ${detikCount.m}m ${detikCount.s}s      masuk else line 69`)
                document.getElementById("display-jam").innerHTML = detikCount.h
                document.getElementById("display-menit").innerHTML = detikCount.m
                document.getElementById("display-detik").innerHTML = detikCount.s
            }
    
        }
            
        // mekanisme penambahan sisa waktu
        if ( detikCount.s == 0 && detikCount.m === 0 && detikCount.h === 0) {
            console.log(ingatkann, "masuk if line 76")
            clearInterval(count)
        } else if (detikCount.s == 0 && detikCount.m > 0) {
            console.log(`${detikCount.h}h ${detikCount.m}m 0${detikCount.s}s       masuk else if line 79`)
            document.getElementById("display-jam").innerHTML = detikCount.h
            document.getElementById("display-menit").innerHTML = detikCount.m
            document.getElementById("display-detik").innerHTML = detikCount.s
            detikCount.s += 60
            detikCount.m --
        } else if (detikCount.s == 0 && detikCount.h > 0) {
            console.log(`${detikCount.h}h ${detikCount.m}m 0${detikCount.s}s       masuk else if line 86`)
            document.getElementById("display-jam").innerHTML = detikCount.h
            document.getElementById("display-menit").innerHTML = detikCount.m
            document.getElementById("display-detik").innerHTML = detikCount.s
            detikCount.m += 59
            detikCount.s += 60
            detikCount.h --
        }
    }, 1000)
}

function stop () {
    clearInterval()
    clearTimeout()
    console.log("test")
    alarm.pause();
    let elemen = document.getElementById("hasil");
    elemen.removeChild(elemen.firstChild);
}
