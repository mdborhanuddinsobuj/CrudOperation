// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


$(document).ready(function () {

    $('body').on('change', '#CountryId', function () {
        var CountryId = $(this).val();
        LoadState(CountryId);
    })

    $('body').on('change', '#StateId', function () {
        var StateId = $(this).val();
        LoadCity(StateId);
    })

    // Get States by Country ID
    //$('#CountryId').change(function () {
    //    $.ajax({
    //        type: "get",
    //        url: "/Employee/GetStatesByCountryId",
    //        data: { countryId: $('#CountryId').val() },
    //        datatype: "json",
    //        traditional: true,
    //        success: function (data) {
    //            var state = "<select id='StateId'>";
    //            state = state + '<option value="">Select State</option>';
    //            for (var i = 0; i < data.length; i++) {
    //                state = state + '<option value=' + data[i].id + '>' + data[i].stateName + '</option>';
    //            }
    //            state = state + '</select>';
    //            $('#StateId').html(state);
    //        }
    //    });
    //});

    // Get Cities by State ID
    //$('#StateId').change(function () {
    //    $.ajax({
    //        type: "get",
    //        url: "/Employee/GetCitiesByStateId",
    //        data: { stateId: $('#StateId').val() },
    //        datatype: "json",
    //        traditional: true,
    //        success: function (data) {
    //            var city = "<select id='CityId'>";
    //            city = city + '<option value="">Select City</option>';
    //            for (var i = 0; i < data.length; i++) {
    //                city = city + '<option value=' + data[i].id + '>' + data[i].cityName + '</option>';
    //            }
    //            city = city + '</select>';
    //            $('#CityId').html(city);
    //        }
    //    });
    //});

    //Checkbox Checked
    var $ssc = $("#Ssc");
    var $hsc = $("#Hsc");
    var $bsc = $("#Bsc");
    var $msc = $("#Msc");

    $hsc.on("click", function () {
        var anyChecked = $hsc.is(":checked");
        $ssc.prop("checked", anyChecked);
    });
    $bsc.on("click", function () {
        var anyChecked = $bsc.is(":checked");
        $ssc.prop("checked", anyChecked);
        $hsc.prop("checked", anyChecked);
    });
    $msc.on("click", function () {
        var anyChecked = $msc.is(":checked");
        $ssc.prop("checked", anyChecked);
        $hsc.prop("checked", anyChecked);
        $bsc.prop("checked", anyChecked);
    });

    $ssc.on("click", function () {
        var anyChecked = $ssc.is(":unchecked");
        $hsc.prop("unchecked", anyChecked);
        $bsc.prop("unchecked", anyChecked);
        $msc.prop("unchecked", anyChecked);
    });


});

function LoadState(CountryId) {
    var $state = $('#StateId');

    $.ajax({
        type: "get",
        url: "/Employee/GetStatesByCountryId",
        data: { countryId: CountryId },
        datatype: "json",
        traditional: true,
        success: function (data) {
            var state = "<select id='StateId'>";
            state = state + '<option value="">Select State</option>';
            for (var i = 0; i < data.length; i++) {
                state = state + '<option value=' + data[i].id + '>' + data[i].stateName + '</option>';
            }
            state = state + '</select>';
            $('#StateId').html(state);
        }
    });
}

function LoadCity(StateId) {
    var $city = $('#CityId');

    $.ajax({
        type: "get",
        url: "/Employee/GetCitiesByStateId",
        data: { stateId: StateId },
        datatype: "json",
        traditional: true,
        success: function (data) {
            var city = "<select id='CityId'>";
            city = city + '<option value="">Select City</option>';
            for (var i = 0; i < data.length; i++) {
                city = city + '<option value=' + data[i].id + '>' + data[i].cityName + '</option>';
            }
            city = city + '</select>';
            $('#CityId').html(city);
        }
    });
}

//Image Preview
function PreviewImage() {
    var oFReader = new FileReader();
    oFReader.readAsDataURL(document.getElementById("FileUpload").files[0]);

    oFReader.onload = function (oFREvent) {
        document.getElementById("UploadFile").src = oFREvent.target.result;
    };
};




$(function () {
    var PlaceHolderElement = $('#Placeholderhere');
    $('button[data-toggle="ajax-modal"]').click(function (event) {
        var url = $(this).data('url');
        var decodeUrl = decodeURIComponent(url);
        $.get(decodeUrl).done(function (data) {
            PlaceHolderElement.html(data);
            PlaceHolderElement.find('.modal').modal('show');
        })
    })



    PlaceHolderElement.on('click', '[data-save="modal"]', function (event) {
    var form = $(this).parents('.modal').find('form');
    var actionUrl = form.attr('action');
    var url = "/addemployee/" + actionUrl;
    var sendData = form.serialize();
    $.post(url, sendData).done(function (data) {
        PlaceHolderElement.find('.modal').modal('hide');
    })
})
});



