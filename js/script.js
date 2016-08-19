$(function(){
	var hideAdmin;
	var model = {
		currBunny: null,
		bunnies:[
			{name:"Fluffy",position:1,url:"images/bunny1.jpg",count:0},
			{name:"Snowy",position:2,url:"images/bunny2.jpg",count:0},
			{name:"Felix",position:3,url:"images/bunny3.jpg",count:0},
			{name:"Chewy",position:4,url:"images/bunny4.jpg",count:0},
			{name:"Mitten",position:5,url:"images/bunny5.jpg",count:0},
			{name:"Sparkle",position:6,url:"images/bunny6.jpg",count:0},
			{name:"Stountain",position:7,url:"images/bunny7.jpg",count:0},
			{name:"Cyrus",position:8,url:"images/bunny8.jpg",count:0},
			{name:"Cleo",position:9,url:"images/bunny9.jpg",count:0},
			{name:"Cookie",position:10,url:"images/bunny10.jpg",count:0}
		],
		adminVisible: null,
		inputName: null,
		inputUrl: null,
		inputCount: null,
		init:  function() {
			
		},
		getAllBunnies: function(){
			return this.bunnies;
		}
	};

	var octopus = {
		selectBunny: function(id){
			model.currBunny = model.bunnies[id-1]; //["name"]);
			bunnyView.render();
			
		},
		addBunnyClick: function(id){
			model.currBunny.count++;
			bunnyView.render();
			listView.render();
		},
		init: function(){
			model.init();
			listView.init();
			bunnyView.init();
			adminView.init();
			model.currBunny = model.bunnies[0];
			//listView.render();
		},
		showAdmin: function(){
			adminView.showPanel();
		},
		saveEdits: function(name,url,clicks){
			model.inputName=name;
			model.inputUrl=url;
			model.inputCount=clicks;
			model.currBunny.name=model.inputName;
			model.currBunny.url=model.inputUrl;
			model.currBunny.count=model.inputCount;
			bunnyView.render();
			listView.render();
			
		}

	};

	var listView = {
		init: function(){
			this.bunnyListElem = $('#bunnylist');
			this.bunnyMenuElem = $('#menu');
			this.render();
		},
		render: function(){
			$("#bunnylist").empty();
			var htmlStr = '';
			model.bunnies.forEach(function(bunny){
				htmlStr+='<div class="box"><div class="bunnylink" id="'+ 
				bunny.position +'">'+bunny.name+'</div><div id="'+bunny.position+'" class="count">'+bunny.count+'</div></div>';
				});
			//this.bunnyListElem.html(htmlStr);
			this.bunnyMenuElem.html(htmlStr);
			$(".bunnylink").on("click",$('bunnylink'),function(){
				octopus.selectBunny($(this).attr("id"));
				//$parent_box = $(this).closest('.box');
				//$parent_box.siblings().find('.count').slideUp();
				//$parent_box.find('.count').slideToggle(1000,'swing');
			//	return false;
			})
		},
		displayBunny: function(){
		}	
	};
	
	var bunnyView = {
		init: function(){
			this.$bunnyPanelElem = $('#bunnypanel');
			this.adminButton= $('#showAdminButton');
		},
		render: function(){
			var thisElem = "click-count" + model.currBunny.position;
			var thisID = "bunnypic"+ model.currBunny.position;
			this.$bunnyPanelElem.html("");
			this.$bunnyPanelElem.append(
				'<div class="bunnyframe">' +
		        '<h3 id="'+model.currBunny.position+'">'+model.currBunny.name+' Clicks:  '+model.currBunny.count+'</h3>' +
		        '<img id="'+model.currBunny.position+'" class="bunnypic" src="' + model.currBunny.url +'"/></div>');
			$("img").on("click",$('.bunnypic'),function(){
				octopus.addBunnyClick($(this).attr("id"));
			});
			
		}
	};

	var adminView = {
			
		init: function(){
			this.adminPanelElem = $('#adminpanel');
			this.adminFormElem= $('#adminform');
			this.detailsFormElem= $('#detailsform');
			this.cancelButton= $('#cancelbutton');
			this.saveButton= $('#savebutton');
			this.showAdminButton = $('#showadminbutton');
			this.inName = $('#inputName');
			this.inURL=$('#inputURL');
			this.inCount=$('#inputClicks');

			this.detailsFormElem.hide();
			model.showingAdmin=false;
			//enable listeners on buttons

			this.cancelButton.click(this.cancelInput);
			//this.saveButton.click(this.validateInput);
			this.showAdminButton.click(this.showPanel);
			this.detailsFormElem.submit(this.saveInput);
			this.render();
		},
		showPanel: function(){
			adminView.detailsFormElem.toggle();
			if(model.showingAdmin==true)
			{
				model.showingAdmin=false;
			}
			else
			{
				model.showingAdmin=true;
			}
			//alert(model.showingAdmin);
			return false;
		},
		hidePanel: function(){
			alert("do something!!!!");
		},
		saveInput: function(){
			//alert("save!");
			octopus.saveEdits(adminView.inName.val(),adminView.inURL.val(),adminView.inCount.val());
			return false;
		},
		validateInput: function(){
			alert("validate!");
			if(1==1)
			{
				//alert("now");
				adminView.saveInput();
			}
			return false;
		},
		cancelInput: function(){
			alert("cancel!");
			return false;
		},
		render: function(){

			
		}
	};

	octopus.init();
	
});

