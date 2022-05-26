(function ($) {
    "use strict";
    $(window).on('load', function() {
        setTimeout(function(){
            $('body').addClass('loaded')
        }, 1000);
    })
})(jQuery);

window.onload = function hide (){
    const module = document.getElementById('modal');
    module.style.display = 'none'
}

function addTeam(){
    const inputText = document.getElementById('name-input');
    const teamChosen = document.getElementById('team-chosen');

    let newElement = document.createElement('h3');
    newElement.innerHTML = `- ${inputText.value}`

    teamChosen.appendChild(newElement);

    inputText.value = '';

    cekTeam(teamChosen,inputText);
}

function cekTeam(teamChosen,inputText){
    const countTeams = teamChosen.childElementCount;
    const buttonConfirm = document.getElementById('confirm-team');
    const buttonConfirmMember = document.getElementById('confirm-member');
    const inputText2 = document.getElementById('name-input');
   
    let moreTeam = 3 - countTeams

    buttonConfirm.innerText = `Need ${moreTeam} more people`

    
   if(countTeams === 3){
    buttonConfirmMember.disabled = true;
     inputText.disabled = true;
     buttonConfirm.classList.toggle('not-ready');
     buttonConfirm.classList.add('ready')
     inputText2.style.display = 'none'
     buttonConfirmMember.style.visibility = 'hidden'
    
     buttonConfirm.innerText = `Teams Ready`
   }
}

function addmodule(){
    const input = document.getElementById('member-input');
    input.style.display = 'none'
    const title = document.getElementById('team-chosen');
    title.style.display = 'none'
    const masthead = document.getElementById('masthead');
    masthead.style.display = 'none'
    const module = document.getElementById('modal');
    module.style.display = 'block'
    
}
