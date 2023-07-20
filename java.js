setTimeout(function(){
    document.getElementById('intro').style.display="none";
    document.getElementById('hd').style.display="flex";
    document.getElementById('ch').style.display="flex";
},3500)

let cont = document.getElementById('ch');
for(let i = 0; i<50 ;i++){
    let chat = document.createElement(`div`);
    chat.classList.add(`chat`);
    cont.appendChild(chat)
    chat.innerHTML=`
<div style="display: flex; align-items: center;">
<img style="border-radius: 50%;" height="60px" width="60px" src="https://scontent.fcai19-8.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&amp;cb=99be929b-3346023f&amp;ccb=1-7&amp;_nc_sid=7206a8&amp;_nc_eui2=AeGdiUFujg0BX6-q6QLgndAsso2H55p0AlGyjYfnmnQCUXRMNUtXnSbKTQ8fdYaWGEwGwIlA4JDlwoZDmnvnsTN6&amp;_nc_ohc=DH2e7R2-NdgAX9946MK&amp;_nc_ht=scontent.fcai19-8.fna&amp;oh=00_AfAhDq760ROi2uJBuRvZBRTsN1cdQgjccIpkHw9w3jW-Dg&amp;oe=64D28FB8">
<div class="message">
<span>Friend Name</span>
<p>This is the message sent from your friend</p></div></div>
<div class="time">
<p>6:14PM</p>
<div class="count">1</div></div>
`}

let vs = document.getElementById('v-s');
for(let i = 0; i<15 ;i++){
    let story = document.createElement(`div`);
    story.classList.add('n-stat')
    vs.appendChild(story)
    story.innerHTML=`
    <div class="n-1">
    <span>
        <img src="photo_2023-07-11_05-23-20 (2).jpg">
    </span>
</div>
<div class="n-2">
    <span>Friend Name</span>
    <p>Yesterday, 12:00 AM</p>
</div>  
    `
}

let callc = document.getElementById('callcont');
for(let i = 0; i<10 ;i++){
let cl = document.createElement(`div`);
cl.classList.add(`c`)
callc.appendChild(cl)
cl.innerHTML=`
<div class="c-1">
<span>
    <img style="border-radius: 50%;" height="60px" width="60px" src="https://scontent.fcai19-8.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&amp;cb=99be929b-3346023f&amp;ccb=1-7&amp;_nc_sid=7206a8&amp;_nc_eui2=AeGdiUFujg0BX6-q6QLgndAsso2H55p0AlGyjYfnmnQCUXRMNUtXnSbKTQ8fdYaWGEwGwIlA4JDlwoZDmnvnsTN6&amp;_nc_ohc=DH2e7R2-NdgAX9946MK&amp;_nc_ht=scontent.fcai19-8.fna&amp;oh=00_AfAhDq760ROi2uJBuRvZBRTsN1cdQgjccIpkHw9w3jW-Dg&amp;oe=64D28FB8">
</span>
<div class="call-info">
    <span style="color: red; font-size: 18px;">Friend Name</span>
    <p style="display: flex; align-items: center;">
        <span class="ar-ic">
            <i class="fa-solid fa-arrow-down"></i>
        </span>
        <span style="font-size: 15px;">Today, 12:00 AM</span>
    </p>
</div>
</div>
<div class="c-2">
<i class="fa-solid fa-phone"></i>
</div>
`
}

function smenu(){
    document.getElementById('menu').style.display="inline-block"
}

function rmenu(){
    document.getElementById('menu').style.display="none"
}

function tonight(){
    document.getElementById('lm').style.display="inline-block"
    document.getElementById('nm').style.display="none"
    var a = false
    if(a){
        document.getElementById('styl').setAttribute("href","st-light.css")
        a=true
    }
    else{
        document.getElementById('styl').setAttribute("href","st-dark.css")
        a=false
    }
}

function tolight(){
    document.getElementById('nm').style.display="inline-block"
    document.getElementById('lm').style.display="none"
    var b = true
    if(b){
        document.getElementById('styl').setAttribute("href","st-light.css")
        b=false
    }
    else{
        document.getElementById('styl').setAttribute("href","st-dark.css")
        b=true
    }
}

    function shchats(){
    document.getElementById('ch').style.display="inline-block"
    document.getElementById('st').style.display="none"
    document.getElementById('ca').style.display="none"
}

function shstat(){
    document.getElementById('st').style.display="inline-block"
    document.getElementById('ch').style.display="none"
    document.getElementById('ca').style.display="none"
}

function shcalles(){
    document.getElementById('ca').style.display="inline-block"
    document.getElementById('ch').style.display="none"
    document.getElementById('st').style.display="none"
}