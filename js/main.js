function header_menu_open() {
	
	var menu_750 = document.getElementById('menu_750');

	var pos = -200;
	var id = setInterval(frame, 10);
	function frame() {
		for (var i = 0; i < 10; i++) {
			if (pos == 0) {
				clearInterval(id);
			}
			else{
				pos++;
				menu_750.style.left = pos + "px ";
			}
		}
	}
}

function header_menu_close() {
	
	var menu_750 = document.getElementById('menu_750');

	var pos = 0;
	var id = setInterval(frame, 10);
	function frame() {
		for (var i = 0; i < 10; i++) {
			if (pos == -200) {
				clearInterval(id);
			}
			else{
				pos--;
				menu_750.style.left = pos + "px ";
			}
		}
	}
}


var sing = document.getElementById('sing');

sing.onclick = function() {
	
	var wrapper_id = document.getElementById('wrapper_id');

	var modal_one = document.createElement("div");

	modal_one.classList.add("window_modal_one");

	wrapper_id.appendChild(modal_one);

	var modal_one_window = document.createElement("div");

	modal_one_window.classList.add("modal_one_window");

	modal_one.appendChild(modal_one_window);

	modal_one_window.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit ducimus similique eligendi fuga esse. Praesentium eveniet in, dolores doloremque harum iure mollitia, dolorem modi numquam error deserunt voluptates, fuga blanditiis!";

	var btn_close_window = document.createElement("button");

	btn_close_window.classList.add("btn_close_modal");

	btn_close_window.innerHTML = "off";

	modal_one_window.appendChild(btn_close_window);

	btn_close_window.onclick = function() {
		location.reload();
	}
}

var quick_order = document.getElementById('quick_order');

quick_order.onclick = function() {

	var wrapper_id = document.getElementById('wrapper_id');

	var modal_one = document.createElement("div");

	modal_one.classList.add("window_modal_one");

	wrapper_id.appendChild(modal_one);

	var modal_one_window = document.createElement("div");

	modal_one_window.classList.add("modal_one_window");

	modal_one.appendChild(modal_one_window);

	modal_one_window.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit ducimus similique eligendi fuga esse. Praesentium eveniet in, dolores doloremque harum iure mollitia, dolorem modi numquam error deserunt voluptates, fuga blanditiis!";

	var btn_close_window = document.createElement("button");

	btn_close_window.classList.add("btn_close_modal");

	btn_close_window.innerHTML = "off";

	modal_one_window.appendChild(btn_close_window);

	btn_close_window.onclick = function() {
		location.reload();
	}
}


$(document).ready(function(){



$('.navigation_container li').on('click', function() {
  $(this).addClass('active_red').siblings().removeClass('active_red');
});

$(".sidebar_list_one").hide();
  
   $(".sidebar_item_one").click(function(){
      $(".sidebar_list_one").slideToggle(1500);
   });

$(".sidebar_list_two").hide();
  
   $(".sidebar_item_two").click(function(){
      $(".sidebar_list_two").slideToggle(1500);
   });

$(".sidebar_list_three").hide();
  
   $(".sidebar_item_three").click(function(){
      $(".sidebar_list_three").slideToggle(1500);
   });

   $(".sidebar_list_four").hide();
  
   $(".sidebar_item_four").click(function(){
      $(".sidebar_list_four").slideToggle(1500);
   });


      $(".list_menu_750_nav").hide();
  
   $(".header_menu_list").click(function(){
      $(".list_menu_750_nav").slideToggle(1500);
   });




}); 
