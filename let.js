$(document).ready(function()
			{
				$(".post1").click(function()
				{
					var text=$(".text1").val();
					if(text!="")
					{
						$(".container").append("<div class='media border rounded mx-1 p-3 bg-light'><img class='rounded-circle ml-2' height='100' width='100' src='https://www.w3schools.com/bootstrap4/img_avatar2.png'><div style='position:absolute;margin-top:95px;margin-left:20px;font-size:20px;'>Guriqbal</div><div class='media-body ml-3'><input style='border-radius:15px;margin-bottom:70px;' type='text' class='form-control bg-white' disabled value="+text+"><div class='btn-group' style='margin-top:-50px;'><button class='btn btn-danger'>❤ Like</button><button class='btn btn-warning'>📤 Reply</button></div></div></div>");
						$(".text1").val("");
					}
				});
				$('body').on('click', 'button.btn-danger', function() 
				{
					var count = $(this).data("count") || 0;
					$(this).data("count", ++count);
					if(count>1)
					{
						$(this).text("❤ "+count+" Likes");
					}
					else
					{
						$(this).text("❤ "+count+" Like");
					}
				});
				$('body').on('click', 'button.btn-warning', function() 
				{
					$(this).parents("div.media-body:eq(0)").append("<div class='media border rounded p-3'><img class='rounded-circle ml-2' height='100' width='100' src='https://www.w3schools.com/bootstrap4/img_avatar1.png'><div class='media-body was-validated mx-3'><div class='row form-group'><div class='col-2'>Name : </div><div class='col-10'><input style='border-radius:15px;' placeholder='Add Your Name Here' type='text' class='form-control bg-white mr-3 text2' required></div></div><div class='form-group row mt-2'><div class='col-2'>Comments : </div><div class='col-10'><textarea style='border-radius:15px;' placeholder='Add Your Comments Here' class='form-control bg-white mr-3 text3' required></textarea></div></div><button class='btn btn-primary post2' style='margin-left:40%;'>Post Comment</button></div></div>");
					$(this).prop("disabled",true);
				});
				$('body').on('click', '.post2', function()
				{
					var t1=$(".text2").val();
					var t2=$(".text3").val();
					if(t1!="" && t2!="")
					{
						$(this).parents("div.media-body:eq(1)").append("<div class='media border rounded p-3 bg-light'><img class='rounded-circle ml-2' height='100' width='100' src='https://www.w3schools.com/bootstrap4/img_avatar1.png'><div style='position:absolute;margin-top:95px;margin-left:33px;font-size:20px;'>"+t1+"</div><div class='media-body ml-3'><input style='border-radius:15px;margin-bottom:70px;' type='text' class='form-control bg-white' disabled value="+t2+"><div class='btn-group' style='margin-top:-50px;'><button class='btn btn-danger'>❤ Like</button><button class='btn btn-warning'>📤 Reply</button></div></div></div>");
						
						var reply = $(this).parents("div.media:eq(0)").siblings("div.btn-group").children("button.btn-warning");
						var count = reply.data("count") || 0;
						reply.data("count", ++count).prop("disabled",false);
						if(count>1)
						{
							reply.text("📤 "+count+" Replies")
						}
						else
						{
							reply.text("📤 "+count+" Reply")
						}
						
						$(this).parents("div.media:eq(0)").remove();
					}
				});
			});