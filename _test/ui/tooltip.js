/**
 * Created with JetBrains PhpStorm.
 * User: xuheng
 * Date: 13-8-20
 * Time: 下午4:19
 * To change this template use File | Settings | File Templates.
 */
module('ui.tooltip');

test('tooltip', function () {
    var div = document.body.appendChild(document.createElement('div'));
    var $btn=$.eduibutton({
        icon : "bold",
        title: "测试"
    }).appendTo(div);

    $(div).attr('id', 'edui-test');
    $.eduitooltip('attachTo');

    setTimeout(function () {
        ua.click($btn[0]);
        var ishide=$(".edui-tooltip",$btn).css("display")=="none";
        equal(ishide,true,"检查按钮提示是否隐藏");

        if(browser.ie){
            ua.mouseenter($btn[0]);
        }else{
            ua.mouseover($btn[0]);
        }
        var isshow=$(".edui-tooltip",$btn).css("display")!="none";
        equal(isshow,true,"检查按钮提示是否显示");

        div.parentNode.removeChild(div);
        start();
    });
    stop();
});