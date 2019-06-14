function pegaBanners(){
    $.ajax({
        url: 'http://www.d-zyne.com/APPS/ROA/banners.php',
        type: 'post',
        dataType: 'json',
        crossDomain: true,
        success: function(dados){
            $("#recebeBanners").empty();
            for(var i=0;dados.length>i;i++){
                $("#recebeBanners").append(dados[i].image);
            }
        }
    })
}

function pegaRockNews(){
    $.ajax({
       type : "POST",
       dataType:"json",
       crossDomain: true,
       url:"http://www.d-zyne.com/APPS/ROA/rockNews.php",
       success:function(data){
				$("#iframeVideo").attr('src', 'http://player.vimeo.com/video/'+data[0].videoID+'?title=1&amp;byline=0&amp;portrait=0&amp;color=FFFFFF&amp;autoplay=0&amp;loop=0&amp;wmode=transparent');
       },
       error      : function() {
				//$("#u60895-2").append(console.error("error"));
				alert("Not Working");
       }
    });
}



/*******************PRAYER REQUEST FUNCTIONS*************************/

const urlPrayerRequest = 'http://www.d-zyne.com/APPS/ROA/prayerRequest/';

function getGroups(){
	$.ajax({
		url: urlPrayerRequest+'webservice/getGroups.php',
		type: 'get',
		crossDomain: true,
		dataType: 'json',
		success: function(dados){
			$("#opto-recebe-groups").empty();
			for(var i=0;dados.length>i;i++){
				$("#opto-recebe-groups").append('<a href="#" onClick="return goToGroup('+dados[i].id+');"><div class="opto-group-box marginBottom20"><div class="opto-group-box-name">'+dados[i].name+'</div><div class="opto-group-box-description">'+dados[i].description+'</div><div class="opto-group-box-member-count">'+dados[i].members+'</div></div></a>');
			}
		}
	})
}


function goToGroup(id){
	localStorage.setItem('groupID', id);
	window.location.href="prayer-group.html";
}

function goToForm(id){
	var groupID = localStorage.getItem('groupID');
	window.location.href="prayer-form.html";
}


function getRequests(id){
	$.ajax({
		url: urlPrayerRequest+'webservice/getGroup.php',
		type: 'get',
		crossDomain: true,
		dataType: 'json',
		data: 'id='+id,
		crossDomain: true,
		success: function(dados){
			getGroupName(id);
			$("#recebeGroup").empty();
			
			if(dados.length == 0){
				$("#recebeGroup").html('No requirements');
			}else{
				for(var i=0;dados.length>i;i++){
					$("#recebeGroup").append('<a class="marginBottom20" href="#" onClick="return goToDetail('+dados[i].id+');"><div class="opto-group-request-box"><div class="opto-group-request-image"><img src="http://www.d-zyne.com/APPS/ROA/prayerRequest/images/'+dados[i].member_image+'" width="60" height="60" alt=""/></div><div class="opto-group-request-name">'+dados[i].member_fname+'&nbsp;'+dados[i].member_lname+'</div><div class="opto-group-request-date">request: '+dados[i].creation_date+'</div><div class="opto-group-request-arrow"><i class="fa fa-chevron-right"></i></div></div></a>');
				}
			}
		}
	})
}


function goToDetail(requestID){
	localStorage.setItem('requestID', requestID);
	window.location.href="prayer-group-details.html";
}


function getGroupName(id){
	$.ajax({
		url: urlPrayerRequest+'webservice/groupName.php',
		type: 'get',
		crossDomain: true,
		dataType: 'json',
		data: 'id='+id,
		success: function(dados){
			$("#groupName").html(dados[0].groupName);
		}
	})
}



$("#prayerRegisterForm").submit(function (e){
    e.preventDefault();
	
	var password = $("#registerPassword").val();
	var vpassword = $("#registerVpassword").val();
	
	if(password == vpassword){

		var formData = new FormData(this);
		$("#prayerSubmit").text('uploading...');
		$("#prayerSubmit").prop("disabled", true);
		$.ajax({
			url: urlPrayerRequest+'webservice/register.php',
			type: 'POST',
			data: formData,
			contentType: false,
			processData: false,
			success: function (newClientReturn) {
				if(newClientReturn == 'ok'){
						$("#formError").addClass('backgroundSucces');
						$("#formError").text('Registered successfully');
						$("#formError").show();
						$("#prayerSubmit").prop("disabled", false);
						$("#prayerSubmit").text('Register');
						setTimeout(function(){
							$("#formError").hide();
						},3000);
					}else{
						$("#formError").addClass('backgroundError');
						$("#formError").text(data);
						$("#formError").show();
						$("#prayerSubmit").prop("disabled", false);
						$("#prayerSubmit").text('Register');
						setTimeout(function(){
							$("#formError").hide();
						},3000);
					}
			}

		});
		
	}else{
		alert('The password does not match!');
	}
})


$("#prayerRequestForm").submit(function(e){
	e.preventDefault();
	var groupID = localStorage.getItem('groupID');
	var userID = localStorage.getItem('login');
	var text = $("#prayer_text").val();
	
	$.ajax({
		url: urlPrayerRequest+'webservice/sendRequest.php',
		type: 'get',
		crossDomain: true,
		data: 'groupID='+groupID+'&userID='+userID+'&text='+text,
		success: function(dados){
			window.location.href="prayer-group.html";
		}
	})
});



//==============LOGIN================
$("#submit-login").submit(function(e){
	e.preventDefault();
	var formData = $(this).serialize();
	$.ajax({
		url: urlPrayerRequest+'webservice/login.php',
		type: 'post',
		crossDomain: true,
		data: formData,
		dataType: 'html',
		before: function(){
			$("#prayerSubmit").text('loading...');
			$("#prayerSubmit").prop("disabled", true);
		},
		success: function(data){
			if(data != 'erro1'){
				var criaStorage = localStorage.setItem('login', data);
				$("#login-form:input").val('');
				window.location.href="prayer.html";
			}else if(data == 'erro1'){
				$("#formError").html('This user does not exist!');
				$("#formError").show();	
				setTimeout(function(){
					$("#formError").hide();
				},3000);
			}else{
				$("#formError").html('Error!');
				$("#formError").show();
				setTimeout(function(){
					$("#formError").hide();
				},3000);
			}
			
		}
	});
	
	return false;
});
              