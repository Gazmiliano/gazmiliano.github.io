var nav = $("nav");
var line = $("<div/>").addClass("line");
line.appendTo(nav);
var active = nav.find(".active");
var pos = 0;
var wid = 0;

if (active.length) {
  pos = active.position().left;
  wid = active.width();
  line.css({
    left: pos,
    width: wid,
  });
}

function getPaging(str) {
  var clicked_li;
  var clicked_href;

  switch (str) {
    case 'page1':
      document.getElementById('page1').style.display = 'block';
      document.getElementById('page2').style.display = 'none';
      document.getElementById('page3').style.display = 'none';
      clicked_li = $("#link1");
      clicked_href = document.getElementById('hreflink1');
      break;
    case 'page2':
      document.getElementById('page1').style.display = 'none';
      document.getElementById('page2').style.display = 'block';
      document.getElementById('page3').style.display = 'none';
      clicked_li = $("#link2");
      clicked_href = document.getElementById('hreflink2');
      break;
    case 'page3':
      document.getElementById('page1').style.display = 'none';
      document.getElementById('page2').style.display = 'none';
      document.getElementById('page3').style.display = 'block';      
      clicked_li = $("#link3");
      clicked_href = document.getElementById('hreflink3');
      break;
    default:
      return;
      break;
  }

  active = nav.find(".active");
  pos = 0;
  wid = 0;

  if (active.length) {
    pos = active.position().left;
    wid = active.width();
    line.css({
      left: pos,
      width: wid,
    });
  }

  if (!clicked_li.hasClass("active") && !nav.hasClass("animate")) {  
    nav.addClass("animate");
    nav.find("ul li").removeClass("active");

    var position = clicked_li.position();
    var width = clicked_li.width();

    if (position.left >= pos) {      
      line.animate(
        {
          width: position.left - pos + width,
        },
        300,
        function () {
          line.animate(
            {
              width: width,
              left: position.left,
            },
            150,
            function () {
              nav.removeClass("animate");
            }
          );
          clicked_li.addClass("active");
        }
      );
    } else {
      line.animate(
        {
          left: position.left,
          width: pos - position.left + wid,
        },
        300,
        function () {
          line.animate(
            {
              width: width,
            },
            150,
            function () {
              nav.removeClass("animate");
            }
          );
          clicked_li.addClass("active");
        }
      );
    }

    pos = position.left;
    wid = width;
  }
}