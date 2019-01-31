$(document).ready(function() {


var skillsList = [];

var removedSkillsList = [];


// $('.addButton').on('click', function(evt) {
//     console.log("Is this working?");
// });

/* Add a new Skillset */
$('.addButton').on('click', function(evt) {
    var inputValue = $('.inputBar').val();
    var skillsList = [];
    var addedSkillsList = skillsList.push(inputValue);
    var newSkill = `
    <div class="skillsIndividual">
        <div class="deleteX">X</div>
        <div class="skillsText">${inputValue}</div>
    </div>
    `;
    var whatIsThis = $(`.skillsWrapper`).append(newSkill);
    return $('.inputBar').val("");
    // console.log(skillsList);
});


/* Remove a skillset */
// var removedSkillsList = [];
$(document).on('click', '.deleteX', function(evt) {
    console.log(this);
    // removedSkillsList.push(skillsList[0]);
    $(this).closest('.skillsIndividual').fadeOut(500, function() {
        $(this).remove();
    });
});
















});