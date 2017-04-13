$('.drop-down-show-hide').hide();

$('#dropDown').change(function(){
$(this).find("option").each(function()
{
$('#' + this.value).hide();
});
    $('#' + this.value).show();

});
