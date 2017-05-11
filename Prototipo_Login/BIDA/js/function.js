
function changePage(fromPage, toPage) {
    $('#not-information-id').addClass('hidden');
    fromPage.addClass('hidden');
    toPage.removeClass('hidden');
}

function changePageWithNavigation(action, fromPage, toPage) {
    action.click(function() {
       changePage(fromPage, toPage);
    });
}

function changeBreadCrumbs(action, fromPage, toPage) {   
    action.click(function() {
        if(fromPage!=null) {
			if(fromPage.length>1) {
				for(var i=0; i<fromPage.length; i++) {
					if(!fromPage[i].hasClass('hidden')) {
						changePage(fromPage[i], toPage);
					}
				}
			} else {
				changePage(fromPage, toPage);
			}
		}
        else {
            goToMenu(action);
			var moduleName = getNameModule(action);
			$("[module='"+moduleName+"-div']").removeClass('hidden');
		}
        var childrensModule=$("[module='"+action.attr("module")+"']");
        for (var i=0; i<childrensModule.length; i++) { 
            var jChildren = $(childrensModule[i]);
            if(jChildren.attr("module-host")==undefined) {
				if(getLevelActive().attr('level')==jChildren.attr('level')) {
					getLevelActive().addClass('hidden');
				}
                jChildren.removeClass("hidden");
			}
        }
        var childrensModule=$("[module-host='"+action.attr("module")+"']");
        for (var i=0; i<childrensModule.length; i++) { 
            var jChildren = $(childrensModule[i]);
            jChildren.removeClass("hidden");
        }
        if($(this).attr("level")>0) {
            for (var i = Number(action.attr("level"))+1; i <= getLevelsBreadCrumbs(); i++) {
                var childrensBC=$(".breadcrumbs h2 a[level="+i+"]");
                for (var j=0; j<childrensBC.length; j++) { 
                    var jChildren = $(childrensBC[j]);
                    if(!jChildren.hasClass("hidden")&&jChildren.attr("level")!=undefined&&$(jChildren)[0]!=$(this)[0]) {
                        jChildren.addClass("hidden");
						var moduleName = jChildren.attr("module");
						var module = $(".zulu-right-section [module*="+moduleName.substr(0, moduleName.length-2)+"div]");
						module.addClass("hidden");
					}
                }
            }
			cleanRightButtons(action);
        }
        if($(this).attr("module-host")!=undefined) {
            $(this).addClass("hidden");
            var modulesHosted=$("[module-host='"+$(this).attr("module-host")+"']");
                for (var i=0; i<modulesHosted.length; i++) { 
                    var moduleChildren = $(modulesHosted[i]);
                    if(!moduleChildren.hasClass("hidden")) {
                        moduleChildren.addClass("hidden");
					}
                }
        }
        var lastChildren=$(".last-breadcrumbs");
        if(lastChildren[0]!=$(this)[0]) {
            var childrens=$(".breadcrumbs h2 a[class='']");
            $(childrens[childrens.length-1]).addClass("last-breadcrumbs");
            lastChildren.removeClass("last-breadcrumbs");
        }
    });
}

function getLevelActive() {
    var lastChildren=$(".last-breadcrumbs");
	return lastChildren;
}

function setLevelActive() {
    var lastChildren=$(".last-breadcrumbs");
	var levels=$("[level]");
	for (var i = 0; i<=levels.length-1; i++) {
		var levelChild = $(levels[i]);
        if(!levelChild.hasClass('hidden'))
			levelChild.addClass("last-breadcrumbs");
    };
	return lastChildren;
}

function getLevelsBreadCrumbs() {
    var levels=$("[level]");
    var maxLevel = 0;
    for (var i = 0; i<=levels.length-1; i++) {
        maxLevel = Math.max(maxLevel,Number($(levels[i]).attr("level")));
    };
    return maxLevel;
}

function goToMenu(module) {
    var modules = $(".zulu-right-section [module]");
	var moduleName = getNameModule(module);
    for (var i=0; i<modules.length; i++) {
        var jChildren = $(modules[i]);
        if(jChildren.attr('module')!=moduleName+"-bc"&&jChildren.attr('module')!=moduleName+'-div'&&jChildren.attr('module').indexOf("-bc-a")<0) {
            jChildren.addClass("hidden");
		}
    }
}

function cleanRightButtons(module) {
    var modules = $(".right-buttons [module-host]");
	var moduleName = getNameModule(module);
    for (var i=0; i<modules.length; i++) {
        var jChildren = $(modules[i]);
        if(jChildren.attr('module-host')!=moduleName+"-bc"&&jChildren.attr('module-host')!=moduleName+'-div'&&jChildren.attr('module-host').indexOf("-bc-a")<0) {
            jChildren.addClass("hidden");
		}
    }
}

function getNameModule(module) {
	var name = "";
	var nameModule = module.attr("module");
	var split = nameModule.split("-");
	for (var i=0; i<split.length-1; i++) {
		name+=(i>0?"-"+split[i]:split[i]);
	}
	return name
}

function backOneLevelBreadCrumbs() {
	var levels = $("[level][class!=hidden]");
	if (levels.length > 1) {
		levels[levels.length - 2].click();
	} else {
		$("[module=menu-div]").addClass('hidden');
		$("#items-home").removeClass('hidden');
		// $("#main-container").addClass('general-items');
	}
}

function resizeItems (){
	var TextHeight = $('.items .item-content.item-icon h1')
    for(i=0;i<TextHeight.length;i++){
        if($(TextHeight[i]).height()==16){
            $(TextHeight[i]).addClass("one-line");
        }
        if($(TextHeight[i]).height()==32){
            $(TextHeight[i]).addClass("two-lines");
        }
        if($(TextHeight[i]).height()==48){
            $(TextHeight[i]).addClass("three-lines");
        }
        if($(TextHeight[i]).height()==64){
            $(TextHeight[i]).addClass("four-lines");
        }
    }

    $('.items .item-content.item-icon h1').css('white-space','pre');

}

function formHeight (){
    // HEIGHT TO ASSISTED IMPLEMENTATION QUESTION FORM
    var ItemA = $('.accounting-policies-paragraph').height()
    var ItemB = 60
    var itemHeight = (+ItemA) + (+ItemB)

    $('.assisted-implementation-question-form-container').css({ 'height': 'calc(100% - ' + itemHeight + 'px'});
}
