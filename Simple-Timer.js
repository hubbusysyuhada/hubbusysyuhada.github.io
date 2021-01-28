var alarm = document.getElementById("bising");
var antrean = 0

function h8Timer (jamm, menitt, detikk, ingatkann) {
    antrean++
    var jamm = document.getElementById("jam").value;
    var menitt = document.getElementById("menit").value;
    var detikk = document.getElementById("detik").value;
    var ingatkann = document.getElementById("ingatkan").value;
    
    document.getElementById("queue").innerHTML = antrean

    let detikCount = {h : jamm, m : menitt, s : detikk}
    let timeout = ((jamm * 3600) + (menitt * 60) + detikk) * 1000
    
    // display jalannya waktu
    if (detikCount.s < 10) {
        console.log (`${detikCount.h}h ${detikCount.m}m 0${detikCount.s}s set to remind: ${ingatkann}`)
    
    } else {
        console.log (`${detikCount.h}h ${detikCount.m}m ${detikCount.s}s set to remind: ${ingatkann}`)
    }

    var b = setTimeout(() => {
        for (let i = 0; i < timeout; i+=1000) {
            if (i === 0) {
                alarm.play();
                alert(`REMINDER: ${ingatkann}!!`);
            }
        } 
        
    }, timeout);

    var count = setInterval (function(){
        detikCount.s --
    
        // setting display sisa waktu
        if (detikCount.s >= 1) {
            if (detikCount.s < 10) {
                console.log(`${detikCount.h}h ${detikCount.m}m 0${detikCount.s}s to remind: ${ingatkann}`)
            } else {
                console.log(`${detikCount.h}h ${detikCount.m}m ${detikCount.s}s to remind: ${ingatkann}`)
            }
    
        }
            
        // mekanisme penambahan sisa waktu
        if ( detikCount.s == 0 && detikCount.m === 0 && detikCount.h === 0) {
            clearInterval(count)
        } else if (detikCount.s == 0 && detikCount.m > 0) {
            console.log(`${detikCount.h}h ${detikCount.m}m 0${detikCount.s}s to remind: ${ingatkann}`)
            detikCount.s += 60
            detikCount.m --
        } else if (detikCount.s == 0 && detikCount.h > 0) {
            console.log(`${detikCount.h}h ${detikCount.m}m 0${detikCount.s}s to remind: ${ingatkann}`)
            detikCount.m += 59
            detikCount.s += 60
            detikCount.h --
        }
    }, 1000)
}

function stop () {
    antrean--
    if (antrean < 0 ) {
        antrean = 0
    }
    alarm.pause();
    document.getElementById("queue").innerHTML = antrean
}
