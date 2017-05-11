ready(function() {
    apply($('button'), buttonDeon);
    apply($('input[type="text"]'), textboxDeon);
    // apply($('.ul-scroll'), scrollDeon);
    // apply($('.div-scroll'), scrollDeon);
    apply($('.select-style select'), listboxDeon);
    apply($('.suggestBoxDeon select'), suggestBoxDeon);
    apply($('.suggestBoxDeon-type2 select'), suggestBoxDeon);
    apply($('.cropToolRectangle'), cropToolRectangle);
    apply($('.spinner'), spinnerDeon);
    apply($('.checkbox'), checkBoxDeon);
});

$( document ).ready(function() {

    // DUPLICATE FUNCTION
    $.fn.duplicate = function(count, cloneEvents) {
        var tmp = [];
        for ( var i = 0; i < count; i++ ) {
            $.merge( tmp, this.clone( cloneEvents ).get() );
        }
        return this.pushStack( tmp );
    };

    // $('.kansas-content .kansas-table-body>*').duplicate(19).prependTo('.kansas-content .kansas-table-body');

    $('.kansas-grid-content').on('scroll',function(){$('.kansas-table-header').css('top',$(this).scrollTop());});
    $('.kansas-grid-content').on('scroll',function(){$('.kansas-content .kansas-table-body>*>*:nth-child(1)').css('left',$(this).scrollLeft());});

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });

    var inp = $('form input[type="text"]');

    inp.on('blur', function(){
        $(this).parents('div.form-group').addClass('in-one');
    }).on('focus', function(){
        $(this).parents('div.form-group').removeClass('in-one');
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
});