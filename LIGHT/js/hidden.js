  //get all objects of section selections
  var all = document.getElementById('all');
  var web = document.getElementById('web');
  var graphic = document.getElementById('graphic');
  var motion = document.getElementById('motion');
  //get all projects
  graphics = document.getElementsByClassName('graphic-section')
  websites = document.getElementsByClassName('web-section')
  //listeners for section clicks
  all.addEventListener('click',()=>{
    for(var i = 0; i < websites.length; i++){
      websites[i].hidden = false;
    }
    for(var x = 0; x < graphics.length; x++){
      graphics[x].hidden = false;
    }
  });
  web.addEventListener('click',()=>{
    for(var i = 0; i < websites.length; i++){
      websites[i].hidden = false;
    }
    for(var x = 0; x < graphics.length; x++){
      graphics[x].hidden = true;
    }
  });
  graphic.addEventListener('click',()=>{
    for(var x = 0; x < graphics.length; x++){
      graphics[x].hidden = false;
    }
    for(var i = 0; i < websites.length; i++){
      websites[i].hidden = true;
    }
  });
                    
