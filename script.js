// let y=0 ,z=0;
// $("#meni").mouseleave(()=>{
//     setTimeout(() => {
//         if(y==1){
//         }
//         else if(y==0){
//             $(".dropDown").css("opacity","0");
//             $(".dropDown").css("height","0px");
//             setTimeout(() => {
//                 $(".dropDown").css("display","none");
//             }, 300);
//             y=0;
//             console.log("jedan nije");
//         }
//     }, 100);
    
        
// })
// $("#meni").mouseenter(()=>{
//         $(".dropDown").css("display","flex");
//         setTimeout(() => {
//             $(".dropDown").css("opacity","1");
//             $(".dropDown").css("height","20vw");
//         }, 200);  
//         z=1;
        
// })
// $(".dropDown").mouseenter(()=>{
//     y=1;
//     z=0;
// })
// $(".dropDown").mouseleave(()=>{
//     y=0;
//     setTimeout(() => {
//         if(z==1){
            
//         }
//         else if(z==0)
//         {
//             $(".dropDown").css("opacity","0");
//             $(".dropDown").css("height","0px");
//             setTimeout(() => {
//                 $(".dropDown").css("display","none");
//             }, 300);
//         }
            
//     }, 200);
    

// })





// $("#torta,#kolac,#slano").click(()=>{
//         $(".popUp").css("opacity","1")
//         setTimeout(() => {
//             $(".popUp").css("display","block")
//         }, 200);
// })
// $("#torta").click(()=>{
//         $("#tt").css("opacity","1")
//         setTimeout(() => {
//             $("#tt").css("display","block")
//         }, 200);
// })
// $("#kolac").click(()=>{
//         $("#kt").css("opacity","1")
//         setTimeout(() => {
//             $("#kt").css("display","block")
//         }, 200);
// })
// $("#slano").click(()=>{
//         $("#st").css("opacity","1")
//         setTimeout(() => {
//             $("#st").css("display","block")
//         }, 200);
// })
// $("#close").click(()=>{
//         $(".popUp").css("opacity","0")
//         setTimeout(() => {
//             $(".popUp").css("display","none")
//             $("#tt").css("display","none")
//             $("#kt").css("display","none")
//             $("#st").css("display","none")
//         }, 200);
// })

// let t1=0,t2=0
// $("#torte").mouseenter(()=>{
//     $("#subMeniTorte").css("display","block");   
//     setTimeout(() => {
//         $("#subMeniTorte").css("width","20vw");   
//         $("#subMeniTorte").css("opacity","1");
//     }, 100);
//     t2=0;
// })

// $("#torte").mouseleave(()=>{
//     setTimeout(() => {
//         if(t1==0){
//             // $("#subMeniTorte").css("opacity","0");
//         // $("#subMeniTorte").css("width","0vw");

//             setTimeout(() => {
//             }, 700);
//             $("#subMeniTorte").css("display","none");
//         }
        
//     }, 100);
// })

// $("#subMeniTorte").mouseenter(()=>{
//     t1=1;
//     t2=1;
// })
// $("#subMeniTorte").mouseleave(()=>{
//     setTimeout(() => {
//         if(t2==1){
//             // $("#subMeniTorte").css("opacity","0");
//             // $("#subMeniTorte").css("width","0vw");
//           setTimeout(() => {
//         }, 700);
//         $("#subMeniTorte").css("display","none");
//         }
//     }, 100);
//     t1=0
// })




// let f1=0,f2=0;
// $("#figure").mouseenter(()=>{
//     $("#subMeniFigure").css("display","block");   
//     setTimeout(() => {
//         // $("#subMeniFigure").css("width","20vw");
//         $("#subMeniFigure").css("opacity","1");
//     }, 100);
//     f2=0;
// })

// $("#figure").mouseleave(()=>{
//     setTimeout(() => {
//         if(f1==0){
//             // $("#subMeniFigure").css("opacity","0");
//             // $("#subMeniFigure").css("width","0vw");

//             setTimeout(() => {
//             }, 700);
//             $("#subMeniFigure").css("display","none");
//         }
        
//     }, 100);
// })

// $("#subMeniFigure").mouseenter(()=>{
//     f1=1;
//     f2=1;
// })
// $("#subMenFiguree").mouseleave(()=>{
//     setTimeout(() => {
//         if(f2==1){
//             // $("#subMeniFigure").css("opacity","0");
//             // $("#subMeniFigure").css("width","0vw");
//           setTimeout(() => {
//         }, 700);
//         $("#subMeniFigure").css("display","none");
//         }
//     }, 100);
//     f1=0
// })







// let u1=0,u2=0;
// $("#figure").mouseenter(()=>{
//     $("#subMeniFigure").css("display","block");   
//     setTimeout(() => {
//         // $("#subMeniFigure").css("width","20vw");
//         $("#subMeniFigure").css("opacity","1");
//     }, 100);
//     f2=0;
// })

// $("#figure").mouseleave(()=>{
//     setTimeout(() => {
//         if(f1==0){
//             // $("#subMeniFigure").css("opacity","0");
//             // $("#subMeniFigure").css("width","0vw");

//             setTimeout(() => {
//                 $("#subMeniFigure").css("display","none");
//             }, 700);
//         }
        
//     }, 100);
// })

// $("#subMeniFigure").mouseenter(()=>{
//     f1=1;
//     f2=1;
// })
// $("#subMenFiguree").mouseleave(()=>{
//     setTimeout(() => {
//         if(f2==1){
//             // $("#subMeniFigure").css("opacity","0");
//             // $("#subMeniFigure").css("width","0vw");
//           setTimeout(() => {
//             $("#subMeniFigure").css("display","none");
//           }, 700);
//         }
//     }, 100);
//     f1=0
// })
const sviNizovi= {
    1:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
    2:[16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
    3:[31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],
    4:[46,47,48,49,50,51,52,53,54,55,56,57,58,59,60],
    5:[61,62,63,64,65,66,67,68,69,70,71,72,73,74,75],
    6:[76,77,78,79,80,81,82,83,84,85,86,87,88,89,90],
    7:[91,92,93,94,95,96,97,98,99,100,101,102,103,104,105],
    8:[106,107,108,109,110,111,112,113,114,115,116,117,118,119,120],
    9:[121,122,123,124,125,126,127,128,129,130,131,132,133,134,135],
    10:[136,137,138,139,140,141,142,143,144,145,146,147,148,149,150],
    11:[151,152,153,154,155,156,157,158,159,160,161,162,163,164,165],
    12:[166,167,168,169,170,171,172,173,174,175,176,177,178,179,180],
    13:[181,182,183,184,185,186,187,188,189,190,191,192,193,194,195],
    14:[196,197,198,199,200,201,202,203,204,205,206,207,208,209,210],
    15:[211,212,213,214,215,216,217,218,219,220,221,222,223,224,225]
};
let redniBrojStrane=1;
let trenustniNiz=sviNizovi[redniBrojStrane];
let idTorte;
let maxStrana;

//console.log("Sada je= ",trenustniNiz[0]);



function strana(){
    idTorte=$(".idTorte").attr("id");
    //console.log("idTorte= ",idTorte);
    
    for(let i=1;i<16;i++){
        
        if(redniBrojStrane==i){
             $(".slikeWrap .slike img").css("opacity","0");
                $(".slikeWrap .slike").remove();
                $(".slikeWrap").append(`
                 <div class="slike">
                <img src="resources/images/`+idTorte+`/`+idTorte+``+trenustniNiz[0]+`.webp" alt="torta" loading="lazy" class="slikaTorte" id="`+idTorte+``+trenustniNiz[0]+`">
                <img src="resources/images/`+idTorte+`/`+idTorte+``+trenustniNiz[1]+`.webp" alt="torta" loading="lazy" class="slikaTorte" id="`+idTorte+``+trenustniNiz[1]+`">
                <img src="resources/images/`+idTorte+`/`+idTorte+``+trenustniNiz[2]+`.webp" alt="torta" loading="lazy" class="slikaTorte" id="`+idTorte+``+trenustniNiz[2]+`">
                <img src="resources/images/`+idTorte+`/`+idTorte+``+trenustniNiz[3]+`.webp" alt="torta" loading="lazy" class="slikaTorte" id="`+idTorte+``+trenustniNiz[3]+`">
                <img src="resources/images/`+idTorte+`/`+idTorte+``+trenustniNiz[4]+`.webp" alt="torta" loading="lazy" class="slikaTorte" id="`+idTorte+``+trenustniNiz[4]+`">
                <img src="resources/images/`+idTorte+`/`+idTorte+``+trenustniNiz[5]+`.webp" alt="torta" loading="lazy" class="slikaTorte" id="`+idTorte+``+trenustniNiz[5]+`">
                <img src="resources/images/`+idTorte+`/`+idTorte+``+trenustniNiz[6]+`.webp" alt="torta" loading="lazy" class="slikaTorte" id="`+idTorte+``+trenustniNiz[6]+`">
                <img src="resources/images/`+idTorte+`/`+idTorte+``+trenustniNiz[7]+`.webp" alt="torta" loading="lazy" class="slikaTorte" id="`+idTorte+``+trenustniNiz[7]+`">
                <img src="resources/images/`+idTorte+`/`+idTorte+``+trenustniNiz[8]+`.webp" alt="torta" loading="lazy" class="slikaTorte" id="`+idTorte+``+trenustniNiz[8]+`">
                <img src="resources/images/`+idTorte+`/`+idTorte+``+trenustniNiz[9]+`.webp" alt="torta" loading="lazy" class="slikaTorte" id="`+idTorte+``+trenustniNiz[9]+`">
                <img src="resources/images/`+idTorte+`/`+idTorte+``+trenustniNiz[10]+`.webp" alt="torta" loading="lazy" class="slikaTorte" id="`+idTorte+``+trenustniNiz[10]+`">
                <img src="resources/images/`+idTorte+`/`+idTorte+``+trenustniNiz[11]+`.webp" alt="torta" loading="lazy" class="slikaTorte" id="`+idTorte+``+trenustniNiz[11]+`">
                <img src="resources/images/`+idTorte+`/`+idTorte+``+trenustniNiz[12]+`.webp" alt="torta" loading="lazy" class="slikaTorte" id="`+idTorte+``+trenustniNiz[12]+`">
                <img src="resources/images/`+idTorte+`/`+idTorte+``+trenustniNiz[13]+`.webp" alt="torta" loading="lazy" class="slikaTorte" id="`+idTorte+``+trenustniNiz[13]+`">
                <img src="resources/images/`+idTorte+`/`+idTorte+``+trenustniNiz[14]+`.webp" alt="torta" loading="lazy" class="slikaTorte" id="`+idTorte+``+trenustniNiz[14]+`">
         </div>
         `)
         setTimeout(() => {
             $(".slikeWrap .slike img").css("opacity","1");
         }, 200);

            
        }
            
    }
    $('img').on('error', function() {
    $(this).css('display', 'none');
    });
    if(redniBrojStrane<4){
        $(".t1").css("display","none")
    }
    if(redniBrojStrane>3){
        $(".t1").css("display","block")
    }

    if(redniBrojStrane>maxStrana-4)
    {
        $(".t2").css("display","none")
    }
    if(redniBrojStrane<maxStrana-4){
        $(".t2").css("display","block")
    }
    
    $("p").each(function(){
        if($(this).text()==redniBrojStrane){
            $(".brojStrane").css("color","white")
            $(this).css('color', 'var(--secondary1)');
        }
    })
    maxStrana=$(".strane>p:last-of-type").text();
    console.log("Max strana je:"+ maxStrana);
    
    console.log("Redni broj strane je: "+redniBrojStrane);
    
}
$(".pomeraj").click(function(){
    let s=$(this).text();
    if(s=="<")
    {
        if(redniBrojStrane != 1)
        {
            redniBrojStrane--;
            trenustniNiz=sviNizovi[redniBrojStrane];
        }
    }
    else if(s==">")
    {
        if(redniBrojStrane!=maxStrana)
        {
            redniBrojStrane++;
            trenustniNiz=sviNizovi[redniBrojStrane];
        }
    }
    if(redniBrojStrane>4 && redniBrojStrane<maxStrana-3)
    {
        $(".curm").text(redniBrojStrane-1);
        $(".cur").text(redniBrojStrane);
        $(".curp").text(redniBrojStrane+1);
    }
    strana();
})
$(".brojStrane").click(function(){
    let t=$(this).text();
    redniBrojStrane=parseInt(t);
    trenustniNiz=sviNizovi[redniBrojStrane];

    $(".brojStrane").css("color","white")
    $(this).css("color","var(--secondary1)")

    if(redniBrojStrane<4)
    {
        $(".curm").text(4);
        $(".cur").text(5);
        $(".curp").text(6);
    }

    if(redniBrojStrane>maxStrana-3)
    {
        $(".curm").text(maxStrana-5);
        $(".cur").text(maxStrana-4);
        $(".curp").text(maxStrana-3);
    }
    strana();
})




window.onload = function(){
    strana();
}




let redniBrojSLike;

$("#x").click(()=>{
    $(".view").css("display","none");
})

$(document).on("click", ".slikaTorte", function() {
    $(".view").css("display","flex");  
    $("#velikaSlika").attr("src",$(this).attr("src"))

    redniBrojSLike=$(this).attr("id");

    
    
});
let idSlike;
let vrstaTorte

let redniBroj;

$("#nazad").click(()=>{
    redniBroj=redniBrojSLike;
    vrstaTorte=redniBrojSLike.substring(0,2);
    
    idSlike=redniBrojSLike.substring(2)
    idSlike=parseInt(idSlike)-1;
    
    
    redniBrojSLike=vrstaTorte+idSlike;
    $("#velikaSlika").attr("src",`resources/images/`+vrstaTorte+`/`+vrstaTorte+idSlike+`.webp`)
})

$("#napred").click(()=>{
    redniBroj=redniBrojSLike;
    vrstaTorte=redniBrojSLike.substring(0,2);
    
    idSlike=redniBrojSLike.substring(2)
    idSlike=parseInt(idSlike)+1;
    
    
    redniBrojSLike=vrstaTorte+idSlike;
    $("#velikaSlika").attr("src",`resources/images/`+vrstaTorte+`/`+vrstaTorte+idSlike+`.webp`)
})