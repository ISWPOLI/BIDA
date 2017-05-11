ready(function() {
    apply($('button'), buttonDeon);
    apply($('input[type="text"]'), textboxDeon);
});

$(document).ready(function() {

    // DUPLICATE FUNCTION
    $.fn.duplicate = function(count, cloneEvents) {
        var tmp = [];
        for ( var i = 0; i < count; i++ ) {
            $.merge( tmp, this.clone( cloneEvents ).get() );
        }
        return this.pushStack( tmp );
    };

    // $('.kansas-content .kansas-table-body>*').duplicate(19).prependTo('.kansas-content .kansas-table-body');

    // TOOLTIP
    $('[data-toggle="tooltip"]').tooltip();

    // FIXED ITEMS ON SCROLL
    $('.kansas-grid-content').on('scroll',function(){$('.kansas-table-header').css('top',$(this).scrollTop());});
    $('.kansas-grid-content').on('scroll',function(){$('.kansas-content .kansas-table-body>*>*:nth-child(1)').css('left',$(this).scrollLeft());});

    // TEXT FIELD BLUR
    var inp = $('form input[type="text"]');

    inp.on('blur', function(){
        $(this).parents('div.form-group').addClass('in-one');
    }).on('focus', function(){
        $(this).parents('div.form-group').removeClass('in-one');
    });

    //EDIT PASSWORD
    $('.kansas-edit-password-button').click(function() {
        $(this).addClass('hidden');
        $('.kansas-close-edit-password-button').removeClass('hidden');
        $('#div-confirm-edit-password-new-user').removeClass('hidden');
    });

    //CLOSE EDIT PASSWORD
    $('.kansas-close-edit-password-button, #cancel-edit-user-button').click(function() {
        $('.kansas-close-edit-password-button').addClass('hidden');
        $('.kansas-edit-password-button').removeClass('hidden');
        $('#div-confirm-edit-password-new-user').addClass('hidden');
    });

    // ADDED SELECTED CLASS
    $('.kansas-check input').change(function() {
        $(this).parents('.kansas-table-grid').toggleClass('selected');
    });

    function err(){
        inp.blur(function() {
            if(!$.trim(this.value)){
                $(this).parents('div.form-group').addClass('in-one');
            }else{
                $(this).parents('div.form-group').removeClass('in-one');
            }
        });
    }

    inp.blur(err);

    // LOGIN FORM // FORGOT PASSWORD // PASSWORD RECOVERY
    changePageWithNavigation($('#forgot-password-button'), $('#login-form'), $('#forgot-password'));
    changePageWithNavigation($('#btn-recovery-cancel'), $('#forgot-password'), $('#login-form'));
    changePageWithNavigation($('#accept-button'), $('#div-confirmation-recovery'), $('#login-form'));
    //changePageWithNavigation($('#btn-change, #btn-change-cancel'), $('#change-password'), $('#login-form'));

});


function getQueryVariable(variable) {
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
           var pair = vars[i].split("=");
           if(pair[0] == variable){
            return pair[1];
        }
       }
       return(false);
    }

    ready(function() {
     if(getQueryVariable("recovery")) {
      if(getQueryVariable("recovery")=="true")
       recovery(true);
      else
       window.location.href = window.location.origin+window.location.pathname;
     }
     if(getQueryVariable("active")) {
      if(getQueryVariable("active")=="true")
       window.location.href = window.location.origin+window.location.pathname;
      else
       window.location.href = window.location.origin+window.location.pathname;
     }
    });

    function recovery(ws){
        if(ws) {
         $('#login-form').addClass('hidden');
         $('#change-password').removeClass('hidden');
        } else {
         $('#change-password').addClass('hidden');
         $('#login-form').removeClass('hidden');
        }
    }
