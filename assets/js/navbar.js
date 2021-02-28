document.write('<nav class="navbar "> <div class="container-fluid"> <div class="navbar-header"> <a class="navbar-left"><img src="../assets/img/school-logo.png" height="50" width:="50"></a> <a class="navbar-brand" href="../index.html">2021 Elections</a> </div> <div class="collapse navbar-collapse" id="myNavbar"> <ul class="nav navbar-nav"> <li class="dropdown"> <a class="dropdown-toggle" data-toggle="dropdown" href="#">Campaign groups<span class="caret"></span></a> <ul class="dropdown-menu"> <li><a href="JHCG_main.html">Junior High</a></li> <li><a href="SHCG_main.html">Senior High</a></li> </ul> </li> <li><a href="#">Publicity</a></li> </ul> <!--<ul class="nav navbar-nav navbar-right"> <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li> <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li> </ul>--> </div> </div> </nav>')
$(function () {
    $('.dropdown').hover(
        function () {
            $(this).addClass('open');
        },
        function () {
            $(this).removeClass('open');
        }
    );
});
// the same as navbar.template.html, just with line-breaks removed
// line-break removing software available at https://www.textfixer.com/tools/remove-line-breaks.php