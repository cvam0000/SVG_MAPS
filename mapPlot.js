const value = '50',
    name = "State Name",
    stroke = StateId,
    color = pickcolor[13];
plot(value, name, color, stroke);



function plot(value, name, color, stroke) {
    var svg = '<svg   viewBox="0 0 432 488" id="cvambox">';
    stroke.map((item) => {
        svg += '<path id="' + item[0] + '" d="' + item[1] + '" fill="' + color + '"><title>' + item[0] + " " + value + '</title></path>';
    });
    svg += "</svg>";
    // console.log(svg);
    $('#svg').html(svg);
}




var image = $('#render-img');
let SR = $('#cvambox path');




SR.click(function() {
    const id_state = $(this).attr('id');
    stroke_dist = id_state + "_dist";
    //const stroke = stroke_dist;
    var dist = eval(stroke_dist);
    //console.log(typeof(eval(stroke_dist)));
    plot(value, name, color, dist);
});