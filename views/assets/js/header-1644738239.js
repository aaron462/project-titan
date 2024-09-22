document.getElementById("header").innerHTML = `<a href="/" class="brand">Miracle Proxy</a>
<input id="mnavecb" type="checkbox">
<label for="mnavecb" class="mnave"><span class="mnavebutton"></span></label>
<ul class="navbar">
    <li><a href="/?z">Our Proxies</a></li>
    <li><a href="/?g">Games</a></li>
    <!-- tabindex="0" is required on the dropdowns -->
    <li class="dropdown-parent"><a href="#">M&#173;or&#173;e <i class="fas fa-ellipsis-v"></i></a>
        <div class="dropdown-child" tabindex="0">
            <ul class="subnavbar">
                <i class="fas fa-bars"></i>
                <li><a href="/?x">Book&#173;mark&#173;lets</a></li>
                <li><a href="/?in">Docs</a></li>
                <li><a href="/?faq">FA&#173;Q</a></li>
                <li><a href="/?t">TO&#173;S</a></li>
            </ul>
        </div>
    </li>
    <li class="dropdown-parent"><a href="#">Settings <i class="fas fa-cog"></i></a>
        <div class="dropdown-child" tabindex="0">
            <div id="csel"></div>
        </div>
    </li>
</ul>`