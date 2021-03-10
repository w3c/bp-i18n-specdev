function dumpData () {
	// outputs to a textarea code that can be used to create an outline version of the document
	console.log('hello')
	
	// find the h2 level sections
	var h2s = document.querySelectorAll('.topic')
	
	var out = ''
	var listitems, l    
    


	// process each h2 level section
	for (var i=0;i<h2s.length;i++) {
		var h2 = h2s[i].querySelector('h2').textContent
		var re = /[0-9]+\. /
		h2 = h2.replace(re, '')
		console.log(h2)
		out += '<section>\n<details class="sec" id="'+h2s[i].id+'">\n<summary class="h2">'+h2+'</summary>\n\n'
		//var summary = h2s[i].querySelector('.summary')
		///if (summary) out += '<div class="summary"><h3>In this section</h3><ul>'+summary.innerHTML+'</ul></div>\n'
		//out += '<div class="showhide"><a onclick="openAll(\''+h2s[i].id+'\', \'h3\',\'\');" href="#_">Open All</a> <a onclick="closeAll(\''+h2s[i].id+'\', \'h3\',\'\');" href="#_">Close All</a></div>\n'
		// get the h3 level sections
        
        
//<details class="sec" id="gscharset">
//    <summary class="h3">Getting started</summary>
//    <div class="resource-box" id="sec_gscharset">
//        <h5>Background reading</h5>

        
        
        
		var h3s = h2s[i].querySelectorAll('.subtopic')		
		for (var j=0;j<h3s.length;j++) {
			if (h3s[j].querySelector('h3') == null) continue
			var h3 = h3s[j].querySelector('h3').textContent
			re = /[0-9]+\.[0-9]+ /
			h3 = h3.replace(re, '')
			console.log('-',h3)
            out += '<details class="sec" id="'+h3s[j].id+'">\n'
            out += '<summary class="h3">'+h3+'</summary>\n'
			out += '<div class="resource-box" id="sec_'+h3s[j].id+'">\n'
            
			// get the see also's
			var xref = h3s[j].querySelector('.xref')
			if (xref) { 
				out += '<div class="xref"><h5>See also</h5>'
				var paras = xref.querySelectorAll('p')
				for (var p=0;p<paras.length;p++) out += paras[p].outerHTML+'\n'
				out += '</div>\n'
				}

            // get the guidelines
			var guidelines = h3s[j].querySelectorAll('.advisement')
			out += '<div class="checklist"><ul>\n'
			for (var k=0;k<guidelines.length;k++) {
				out += '<li class="bp">'+guidelines[k].innerHTML+'</li>\n'
				}
			out += '</ul>\n'
			out += '</div>\n'
			
			// get the how-to's 
			var howto = h3s[j].querySelector('.howto')
			if (howto) { 
				out += '<div><h5 class="howto">How to\'s</h5><ul>'
				listitems = howto.querySelectorAll('li.w3')
				for (l=0;l<listitems.length;l++) out += listitems[l].outerHTML+'\n'
				out += '</ul></div>\n'
				}

			// get the background reading 
			var background = h3s[j].querySelector('.background')
			if (background) { 
				out += '<div><h5 class="background">Background reading</h5><ul>'
				listitems = background.querySelectorAll('li.w3')
				for (l=0;l<listitems.length;l++) out += listitems[l].outerHTML+'\n'
				out += '</ul></div>\n'
				}

			out += '<div class="goto"><h5>Go to:</h5> <a href="#language">top of this section</a> &#x2022; <a href="#contentstart">top of this page</a> &#x2022; <a href="/International/technique-index">techniques home page</a></div>\n'				
			out += '</div>\n</details>\n\n'
			}

		out += '</details>\n</section>\n\n'
		}
	
	return out
	}


function createIssueText () {
	// outputs to a textarea markdown for just the checklist items that can be used to create an interactive checklist in a github issue
		
	// find the h2 level sections
	var h2s = document.querySelectorAll('.topic')
	
	var out = ''
	
	// process each h2 level section
	for (var i=0;i<h2s.length;i++) {
		var h2 = h2s[i].querySelector('h2').textContent
		var re = /[0-9]+\. /
		h2 = h2.replace(re, '')
		console.log('h2', h2)
		out += '## '+h2+'\n'

		// get the h3 level sections
		var h3s = h2s[i].querySelectorAll('.subtopic')
		for (var j=0;j<h3s.length;j++) {
			var h3 = h3s[j].querySelector('h3').textContent
			re = /[0-9]+\.[0-9]+ /
			h3 = h3.replace(re, '')
			console.log('h3',h3)
			out += '### '+h3+'\n'
			// get the guidelines
			var guidelines = h3s[j].querySelectorAll('.advisement')
			for (var k=0;k<guidelines.length;k++) {
				out += '1. [ ] '+guidelines[k].innerHTML+'\n'
				}
			
			out += '\n'
			}

		}
	
	return out
	}










