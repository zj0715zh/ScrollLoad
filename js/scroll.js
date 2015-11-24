
function scro01(){
    var a=$(document).scrollTop();
	var e=Math.floor(a/100);
	var b=$(".div2");
	var c=$(".div3");
	var d=$(".div4");
     switch(e){
		 case 2:
		 case 3:
		 case 4:
		 case 5:animate01()
		 break;
		 case 6:animate01();animate02()
		 break;
		 case 7:
		 case 8:
		 case 9:
		 case 10:
		 case 11:animate02();animate03()
		 break;
		 case 12:
		 case 13:
		 default:
		 break;
		 }
	function animate01(){
		b.find("div").eq(0).show(200).addClass("animate02");
		b.find("div").eq(1).show(200).addClass("animate03");
		}
    function animate02(){
		c.find("div").show(1000).css("transform","rotate(720deg)");
		}
	function animate03(){
		d.find("div").eq(0).show().addClass("animate04");
		d.find("div").eq(1).show().addClass("animate05");
		}
};
$(window).scroll(scro01);