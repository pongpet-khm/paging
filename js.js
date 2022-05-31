$( document ).ready(function() {
    let example = 150;
    let itemnumber = 8;
    let startnumber = 8;
    let i = 1;
    let coutni = 0;
    
    
    startlist(startnumber)
    function startlist(startnumber){
        for (let index = i; index <= startnumber; index++) {
            let urlapi = 'https://pokeapi.co/api/v2/pokemon/'+index;
            $.ajax({
                url: urlapi,
                data:{
                    format: 'json'
                },
                error() {
                   $('#info').html('<p>An error has occured</p>'); 
                },
                dataType: 'json',
                success(data){
                    datapack(data);
                //    console.log(data.forms[0].name +' img'+ data.sprites.front_default)
                }
            })
        }
    }

    
    let total = example/itemnumber;
    let totalmod = Math.ceil(total);
    for (let index = 1; index <= totalmod; index++) {
        $('#numbar').append('<button class="btn clickadd btn-dark col-auto me-3" data-pages="'+index+'">'+index+'</button>');
    }

    
       
        $('.clickadd').eq(0).removeClass('btn-dark').addClass('bg-white numpages');
        var myVar = $('.numpages').html();
        $('#pagenumber').html(myVar)
        


        $(".clickadd").click(function() {
            $('#profile-poke').html('');
            let vals = $(this).attr('data-pages');
            coutni = vals - 1;
            startnumber = itemnumber * vals;
            i = startnumber - itemnumber+1;
            // i = i * startnumber + 1;
            $('.clickadd').removeClass('bg-white numpages').addClass("btn-dark");
            $(this).removeClass('btn-dark').addClass( "bg-white numpages" );
            startlist(startnumber)
             myVar = $('.numpages').html();
            $('#pagenumber').html(myVar)
            
        });


        
        $("#preve").click(function() {
            coutni = coutni - 1;
            if (coutni < 0){
                coutni = 0;
            }
            // alert(coutni)
            $('.clickadd').removeClass('bg-white numpages').addClass("btn-dark");
            $('.clickadd').eq(coutni).removeClass('btn-dark').addClass('bg-white numpages');

            $('#profile-poke').html('');
            startnumber = startnumber - itemnumber;
            if(startnumber < itemnumber){
                startnumber = itemnumber;
            }

            i = startnumber - itemnumber+1;
            if(i < 1) {
                i = 1;
            }

            console.log(startnumber)

            startlist(startnumber)
            myVar = $('.numpages').html();
            $('#pagenumber').html(myVar)
        });

        $("#nexts").click(function() {
            coutni = coutni + 1;
            if(coutni > totalmod-1) {
                coutni = totalmod-1;
            }
          
            $('.clickadd').removeClass('bg-white numpages').addClass("btn-dark");
            $('.clickadd').eq(coutni).removeClass('btn-dark').addClass('bg-white numpages');

            $('#profile-poke').html('');
            startnumber = startnumber + itemnumber;
            if(startnumber > example){
                startnumber = example;
            }

            i = startnumber - itemnumber+1;
            
            console.log(startnumber)

            startlist(startnumber)
            myVar = $('.numpages').html();
            $('#pagenumber').html(myVar)
        });
    
 
   function datapack(data) {
       $('.profile-poke').append(
        '<div class="col-3 text-center mb-4">'+
           '<div class="col-12 mb-3 py-3 bdrd shadow zoom text-center bg-white">'+
           '<img class="img-fluid" src="'+data.sprites.front_default+'"/>'+
        '</div>'+
        '<div class="col-12"><span class="bg-light shadow p-2 bdrd fw-bold">'+data.forms[0].name+'</span></div>'+
        '</div>'
       )
       
   }


   $("#vehicle1").click(function() {
       if($('#vehicle1').is(':checked')){
        $('#inputtest').hide();
       }else{
        $('#inputtest').show();
       }
        
   })

   $("#vehicle2").click(function() {
        if($('#vehicle2').is(':checked')){
            $('#inputtest').show();
        }else{
            $('#inputtest').show();
        }
    })

    let countinput = 0;
    $('#addInput').click(function(){
        countinput = countinput + 1;
        $('#formtesrt').append('<input type="text" class="input-add" value="'+countinput+'">');
    })

    

});