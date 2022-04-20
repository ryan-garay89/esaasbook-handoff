// book_content.js
// Scripts for this project


// Checks what chapter/section we are on and highlights the corresponding menu item
$(document).ready(function() {
    let my_loc = window.location.href;
    let chapter_pattern = /chapter\/(\d+)/;
    let section_pattern = /section\/(\d+)/;
    let preface_pattern = /preface/;
    let preface_sel = my_loc.match(preface_pattern);
    let chapter_num = my_loc.match(chapter_pattern);
    let section_num = my_loc.match(section_pattern);

    if (chapter_num != null) {
        chapter_num = chapter_num[1];
        $("#c" + chapter_num).addClass("current");
        $("#c"  + chapter_num).addClass("active");
        $("#toctree-checkbox-"  + chapter_num).attr('checked',true);
        if (section_num != null) {
            section_num = section_num[1];
            $("#c" + chapter_num + "s" + section_num).addClass("current");
            $("#c"  + chapter_num + "s" + section_num).addClass("active");
        }
    } else if (preface_sel != null) {
        $("#p0").addClass("current");
        $("#p0").addClass("active");
    }
});

var myFormatter = function(annotation) {
    console.log(annotation.id);
    return "myCustomHighlight";
}

$(document).ready(function() {
    var reco = Recogito.init({
        content: 'main-content', 
        locale: 'auto',
        formatter: myFormatter,
        allowEmpty: true,
        widgets: [
        { widget: 'COMMENT' },
        { widget: 'TAG', vocabulary: [ 'Place', 'Person', 'Event', 'Organization', 'Animal' ] }
        ],
        relationVocabulary: [ 'isRelated', 'isPartOf', 'isSameAs ']
    });
    reco.on('selectAnnotation', function(a) {
        console.log('I made a selection!');
    });
    
    reco.on('createAnnotation', function(a) {
        console.log('I created an annotation!');
    });
    
});
