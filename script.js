const sviNizovi = {
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
    15:[211,212,213,214,215,216,217,218,219,220,221,222,223,224,225],
    16:[226,227,228,229,230,231,232,233,234,235,236,237,238,239,240],
    17:[241,242,243,244,245,246,247,248,249,250,251,252,253,254,255],
    18:[256,257,258,259,260,261,262,263,264,265,266,267,268,269,270],
    19:[271,272,273,274,275,276,277,278,279,280,281,282,283,284,285],
    20:[286,287,288,289,290,291,292,293,294,295,296,297,298,299,300],
    21:[301,302,303,304,305,306,307,308,309,310,311,312,313,314,315],
    22:[316,317,318,319,320,321,322,323,324,325,326,327,328,329,330],
    23:[331,332,333,334,335,336,337,338,339,340,341,342,343,344,345],
    24:[346,347,348,349,350,351,352,353,354,355,356,357,358,359,360],
    25:[361,362,363,364,365,366,367,368,369,370,371,372,373,374,375],
    26:[376,377,378,379,380,381,382,383,384,385,386,387,388,389,390],
    27:[391,392,393,394,395,396,397,398,399,400,401,402,403,404,405],
    28:[406,407,408,409,410,411,412,413,414,415,416,417,418,419,420],
    29:[421,422,423,424,425,426,427,428,429,430,431,432,433,434,435],
    30:[436,437,438,439,440,441,442,443,444,445,446,447,448,449,450],
    31:[451,452,453,454,455,456,457,458,459,460,461,462,463,464,465],
    32:[466,467,468,469,470,471,472,473,474,475,476,477,478,479,480],
    33:[481,482,483,484,485,486,487,488,489,490,491,492,493,494,495],
    34:[496,497,498,499,500,501,502,503,504,505,506,507,508,509,510],
    35:[511,512,513,514,515,516,517,518,519,520,521,522,523,524,525],
    36:[526,527,528,529,530,531,532,533,534,535,536,537,538,539,540],
    37:[541,542,543,544,545,546,547,548,549,550,551,552,553,554,555],
    38:[556,557,558,559,560,561,562,563,564,565,566,567,568,569,570],
    39:[571,572,573,574,575,576,577,578,579,580,581,582,583,584,585],
    40:[586,587,588,589,590,591,592,593,594,595,596,597,598,599,600],
    41:[601,602,603,604,605,606,607,608,609,610,611,612,613,614,615],
    42:[616,617,618,619,620,621,622,623,624,625,626,627,628,629,630],
    43:[631,632,633,634,635,636,637,638,639,640,641,642,643,644,645],
    44:[646,647,648,649,650,651,652,653,654,655,656,657,658,659,660],
    45:[661,662,663,664,665,666,667,668,669,670,671,672,673,674,675],
    46:[676,677,678,679,680,681,682,683,684,685,686,687,688,689,690],
    47:[691,692,693,694,695,696,697,698,699,700,701,702,703,704,705],
    48:[706,707,708,709,710,711,712,713,714,715,716,717,718,719,720],
    49:[721,722,723,724,725,726,727,728,729,730,731,732,733,734,735],
    50:[736,737,738,739,740,741,742,743,744,745,746,747,748,749,750],
    51:[751,752,753,754,755,756,757,758,759,760,761,762,763,764,765],
    52:[766,767,768,769,770,771,772,773,774,775,776,777,778,779,780],
    53:[781,782,783,784,785,786,787,788,789,790,791,792,793,794,795],
    54:[796,797,798,799,800,801,802,803,804,805,806,807,808,809,810],
    55:[811,812,813,814,815,816,817,818,819,820,821,822,823,824,825]
};

const presekTorti= {
    1:"Boem torta",
    2:"Bueno",
    3:"Cheesecake",
    4:"Coko visnja",
    5:"Divlja ruza",
    6:"Jafa",
    7:"Kapri",
    8:"Kinderino",
    9:"Kreamasta sa orasima",
    10:"Moskva",
    11:"Nugat",
    12:"Posna ester",
    13:"Posna reforma",
    14:"Puslica",
    15:"Reforma",
    16:"Snikers",
    17:"Srneca leđa",
    18:"Švarcvald",
    19:"Tiramisu"
}
const kolaci= {
    1:"Bakin kolac",
    2:"Bakini kolaci",
    3:"Bela bajadera",
    4:"Coko Breskvice",
    5:"Ciz kejt u casi",
    6:"Coko mus u casi",
    7:"Crna bajadera",
    8:"nig",
    9:"Kreamasta sa orasima",
    10:"Moskva",
    11:"Nugat",
    12:"Posna ester",
    13:"Posna reforma",
    14:"Puslica",
    15:"Reforma",
    16:"Snikers",
    17:"Srneca leđa",
    18:"Švarcvald",
    19:"Tiramisu",
    20:"Kapri",
    21:"Kinderino",
    22:"Kreamasta sa orasima",
    23:"Moskva",
    24:"Nugat",
    25:"Posna ester",
    26:"Posna reforma",
    27:"Puslica",
    28:"Reforma",
    29:"Snikers",
    30:"Srneca leđa",
    31:"Švarcvald",
}

let redniBrojStrane=1;
let trenustniNiz=sviNizovi[redniBrojStrane];
let idTorte;
let maxStrana;



function strana(){
    idTorte=$(".idTorte").attr("id");
    trenustniNiz=sviNizovi[redniBrojStrane];
    
    for(let i=1;i<56;i++){
        
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




let redniBrojSLike="sm1";

$("#x").click(()=>{
    $(".view").css("opacity","0");  
    setTimeout(() => {
        $(".view").css("display","none");
    }, 500);
    $("body").css("overflow-y","auto");
})
let minSlika;
let maxSlika;
let vidljiveSlike

let idSlike;
let vrstaTorte;
let redniBroj;




$(document).on("click", ".slikaTorte", function() {
    $("body").css("overflow-y","hidden");
    $(window).scrollTop(0);

    
    $(".view").css("display","flex");  
    setTimeout(() => {
        $(".view").css("opacity","1");  
    }, 100);
    $("#velikaSlika").attr("src",$(this).attr("src"))

    redniBrojSLike=$(this).attr("id");
    vrstaTorte=redniBrojSLike.substring(0,2);   
    idSlike=redniBrojSLike.substring(2);


    

    
    
    if(vrstaTorte=="PT"){
        $("#sifra").text(presekTorti[idSlike]);
    }
    else{
        $("#sifra").text(redniBrojSLike);
    }


    console.log("redniBorojSLike="+redniBrojSLike);
    console.log("idSlike="+idSlike);
    console.log("vrstaTorte="+vrstaTorte);

    vidljiveSlike=$(".slike > img").filter(function() {
        return $(this).css("display") !== "none";
    });
    
       

    minSlika = $(".slike > img:first-of-type").attr("id");
    minSlika=minSlika.substring(2)

    maxSlika = vidljiveSlike.last().attr("id");
    maxSlika=maxSlika.substring(2)
    
    
});







$("#nazad").click(()=>{
    idSlike=parseInt(idSlike);
    redniBrojStrane=parseInt(redniBrojStrane);
    maxStrana=parseInt(maxStrana);
    minSlika= parseInt(minSlika);

    if ((redniBrojStrane == 1) && (idSlike == minSlika)){

    }
    else{
        vidljiveSlike=$(".slike > img").filter(function() {
        return $(this).css("display") !== "none";
    });
    minSlika = $(".slike > img:first-of-type").attr("id");
    minSlika=minSlika.substring(2)
    
    redniBroj=redniBrojSLike;
    vrstaTorte=redniBrojSLike.substring(0,2);   
    idSlike=redniBrojSLike.substring(2);
    
    minSlika=parseInt(minSlika);
    
    idSlike=parseInt(idSlike)-1;
    redniBrojSLike=vrstaTorte+idSlike;
    $("#velikaSlika").attr("src",`resources/images/`+vrstaTorte+`/`+vrstaTorte+idSlike+`.webp`)
    if(vrstaTorte=="PT"){
        $("#sifra").text(presekTorti[idSlike]);
    }else{
        $("#sifra").text(redniBrojSLike)
    }

    if(idSlike==(minSlika-1)){
        redniBrojStrane--;
        strana();
    }
    }
    
    
})

$("#napred").click(()=>{
    idSlike=parseInt(idSlike);
    redniBrojStrane=parseInt(redniBrojStrane);
    maxStrana=parseInt(maxStrana);
    maxSlika= parseInt(maxSlika);

    if ((redniBrojStrane == maxStrana) && (idSlike == maxSlika))
    {
        console.log("PRVI IF");  
    }
    else{

       vidljiveSlike=$(".slike > img").filter(function() {
            return $(this).css("display") !== "none";
        });
        maxSlika = vidljiveSlike.last().attr("id");
        maxSlika=maxSlika.substring(2);
    
    

        redniBroj=redniBrojSLike;
        vrstaTorte=redniBrojSLike.substring(0,2);
        idSlike=redniBrojSLike.substring(2)
    
    
    
        maxSlika=parseInt(maxSlika);


        idSlike=parseInt(idSlike)+1;
        redniBrojSLike=vrstaTorte+idSlike;

        $("#velikaSlika").attr("src",`resources/images/`+vrstaTorte+`/`+vrstaTorte+idSlike+`.webp`)
        if(vrstaTorte=="PT"){
            $("#sifra").text(presekTorti[idSlike]);
        }else{
            $("#sifra").text(redniBrojSLike)
        }

    }

    
    
    
    if((idSlike==(maxSlika+1)) && (redniBrojStrane != maxStrana)){
        redniBrojStrane++;
        strana();   
        console.log("CIGANEE");
        
    }
    
})