
/**
 * 工具，允许多次onload不被覆盖
 * @param {方法} func 
 */
blog.addLoadEvent = function (func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function () {
            oldonload();
            func();
        }
    }
}

// 文字冒泡-社会主义核心价值观
blog.addLoadEvent(function () {
    var texts = ["富强", "民主", "文明", "和谐", "自由", "平等", "公正", "法治", "爱国", "敬业", "诚信", "友善"];
    blog.addEvent(window, 'click', function (ev) {
        var span = document.createElement('span');
        span.innerText = texts[parseInt(Math.random() * texts.length)];
        span.setAttribute("style", "left:" + ev.pageX + "px;top:" + (ev.pageY - 20) + "px;");
        span.className = "bubble select-none";
        document.body.appendChild(span);
        //动画结束后移除，事件和动画的时间要一致
        //考虑到兼容性，不使用webkitAnimationEnd
        setTimeout(function () {
            document.body.removeChild(span);
        }, 1000);
    });
});
