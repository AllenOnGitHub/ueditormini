//splitbutton 类
///import button
UE.ui.define('splitbutton',{
    tpl :'<div class="edui-splitbutton"  unselectable="on" <%if(title){%>data-original-title="<%=title%>"<%}%>><div class="edui-btn"  unselectable="on" ><%if(icon){%><div  unselectable="on" class="edui-icon-<%=icon%> edui-icon"></div><%}%><%if(text){%><%=text%><%}%></div>'+
            '<div  unselectable="on" class="edui-btn edui-dropdown-toggle" >'+
                '<div  unselectable="on" class="edui-caret"><\/div>'+
            '</div>'+
        '</div>',
    defaultOpt:{
        text:'',
        title:'',
        click:function(){}
    },
    init : function(options){
        var me = this;
        me.root( $($.parseTmpl(me.tpl,options)));
        me.root().find('.edui-btn:first').click(function(evt){
            if(!me.disabled()){
                $.proxy(options.click,me)();
            }
        });
        me.root().find('.edui-dropdown-toggle').click(function(){
            if(!me.disabled()){
                me.trigger('arrowclick')
            }
        });
        me.root().hover(function () {
            if(!me.root().hasClass("disabled")){
                me.root().toggleClass('hover')
            }
        });

        return me;
    },
    wrapclick:function(fn,evt){
        if(!this.disabled()){
            $.proxy(fn,this,evt)()
        }
        return this;
    },
    disabled : function(state){
        if(state === undefined){
            return this.root().hasClass('disabled')
        }
        this.root().toggleClass('disabled',state).find('.edui-btn').toggleClass('disabled',state);
        return this;
    },
    active:function(state){
        if(state === undefined){
            return this.root().hasClass('active')
        }
        this.root().toggleClass('active',state).find('.edui-btn:first').toggleClass('active',state);
        return this;
    },
    mergeWith:function($obj){
        var me = this;
        me.data('$mergeObj',$obj);
        $obj.edui().data('$mergeObj',me.root());
        if(!$.contains(document.body,$obj[0])){
            $obj.appendTo(me.root());
        }
        me.root().on('click','.edui-dropdown-toggle',function(){
            me.wrapclick(function(){
                $obj.edui().show();
            })
        });
        me.register('click',me.root().find('.edui-dropdown-toggle'),function(evt){
            $obj.hide()
        });
    }
});