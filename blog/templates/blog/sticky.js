
/*
window.onscroll = function()
{

    var sticky = document.getElementById("left-bar");
    if(document.body.scrollTop+document.documentElement.scrollTop > 60)
    {
        sticky.className = "stuck";          
    }
    else
    {
        sticky.className = "";
    }

<!DOCTYPE html>
{% load staticfiles %}
<html>
<head>
<meta charset="UTF-8">
    <title>Django Posts</title>
    <link rel="stylesheet" href="{% static 'css/blog.css' %}">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

</head>
<body>
    <header>
        <h1><a href="post_list.html">Bloooog</a></h1>
    </header>
    

    <div id="main">
        <div id="left-bar">
            <div class="left-bar-head">
                <p>Szukaj postów o...</p>
            </div>
           
            <a href="#">
                <div class="left-bar-nav">
                    <p>Python</p>
                </div>
            </a>
            <a href="#">
                <div class="left-bar-nav">
                    <p>Linux</p>
                </div>
            </a>
            <a href="#">
                <div class="left-bar-nav">
                    <p>Raspberry Pi</p>
                </div>
            </a>
            <div class="left-bar-foot">
                <a href="#"><img src="/static/images/facebook-logo.png"></a>
                <a href="#"><img src="/static/images/github-logo.png"></a>
                <a href="#"><img src="/static/images/python-logo.png"></a>
            </div>
        </div>
        
        {% for post in posts %}
        <div id="content">
            <div class="post">
                <h2><a href="post_list.html" id="link">{{ post.title }}</a></h2>
                <p class="date">Opublikowano: {{ post.published_date }}</p>
                <p>{{ post.text }}</p>
            </div>
        </div>
        {% endfor %}
    </div>
    
    <footer>Made by Bartosz Belski &copy; {% now "Y" %}</footer>
</body>
</html>
}*/