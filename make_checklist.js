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
		console.log(h2)
		out += '## '+h2+'\n'

		// get the h3 level sections
		var h3s = h2s[i].querySelectorAll('.subtopic')		
		for (var j=0;j<h3s.length;j++) {
			var h3 = h3s[j].querySelector('h3').textContent
			re = /[0-9]+\.[0-9]+ /
			h3 = h3.replace(re, '')
			console.log(h3)
			out += '### '+h3+'\n'
			// get the guidelines
			var guidelines = h3s[j].querySelectorAll('.advisement')
			for (var k=0;k<guidelines.length;k++) {
				var temp = guidelines[k].innerHTML
				temp = temp.replace(/<a class="self"[^<]+<\/a>/,'')
				out += '1. [ ] '+temp+'\n'
				//out += '1. [ ] '+guidelines[k].innerHTML+'\n'
				}
			
			out += '\n'
			}

		}
	
	return out
	}





function showChecklists (section, listLocation) {
    // called after the page is loaded; sets up section by section lists of contents
    // click on the contents list to see the recommendations in checklist form
    
    var out = ''
    var checks, h3s
    
    h3s = section.querySelectorAll('h3')
    for (var h=0;h<h3s.length;h++) {
        out += `<details><summary>${ h3s[h].innerHTML }</summary>`
        checks = h3s[h].parentNode.querySelectorAll('.advisement')
        out += `<ul class="checklistGroup">`
        for (var c=0;c<checks.length; c++) out += `<li><input type="checkbox"> ${ checks[c].innerHTML } <a href="#${ checks[c].parentNode.id }" class="checklistMore">more</a></li>`
        out += `</ul>`
        out += `</details>`
        }
    
    
    document.getElementById(listLocation).innerHTML = out
    }








