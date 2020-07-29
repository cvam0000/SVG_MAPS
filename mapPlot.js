var data_stutdowns_india = [1, 2, 3, 23, 4, 54, 567, 345, 2, 3, 56, 89, 65, 43, 21, 43, 54, 65, 12, 43, 65, 76, 98, 65, 43, 12, 43, 54, 12, 43, 45, 1, 500, 12, 34, 65, 12];


const value = data_stutdowns_india;
name = "State Name",
    stroke = StateId,
    color = pickcolor;
plot(value, name, color, stroke);



function plot(value, name, color, stroke) {
    var svg = '<svg   viewBox="0 0 432 488" id="cvambox">';
    stroke.map((item) => {
        var x = stroke.indexOf(item);
        var color_index = Math.floor(+(value[x]) / 50);
        console.log(color[color_index]);
        svg += '<path id="' + item[0] + '" d="' + item[1] + '" style="fill:' + color[color_index] + '"><title>' + item[0] + " " + value[x] + '</title></path>';
    });
    svg += "</svg>";

    var table = '<table> <tr><th> S.No </th> <th> State </th> <th> Total ShutDown Count </th> </tr>';
    stroke.map((item) => {
        table += '<tr><td>' + stroke.indexOf(item) + '</td><td>' + item[0] + '</td><td>' + value[stroke.indexOf(item)] + '</td></tr>';
    });
    $('#svg').html(svg);
    $('#table').html(table);
}




var image = $('#render-img');
let SR = $('#cvambox path');




SR.click(function() {
    const id_state = $(this).attr('id');
    stroke_dist = id_state + "_dist";
    var dist = eval(stroke_dist);
    return_back();
    plot(value, name, color, dist);
    dist_name(id_state);
});



function return_back() {
    var back_function = '<i onclick="back()" class="fa fa-arrow-left" style="font-size:24px"></i>';
    $('#back_to_map').html(back_function);
}

function dist_name(dist_name) {


    var name_function = '<h4><kbd>' + dist_name + '</kbd></h4>';

    $('#name').html(name_function);
}

function back() {
    location.reload();
    return false;
}