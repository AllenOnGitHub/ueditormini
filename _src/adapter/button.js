UE.registerUI('bold italic redo undo source underline strikethrough superscript subscript insertorderedlist insertunorderedlist ' +
    'cleardoc selectall unlink print preview justifyleft justifycenter justifyright justifyfull',
    function(name) {
        var me = this;
        var $btn = $.eduibutton({
            icon : name,
            click : function(){
                me.execCommand(name)
            },
            title: this.getLang('labelMap')[name] || ''
        });

        this.addListener('selectionchange',function(){
            var state = this.queryCommandState(name);
            $btn.edui().disabled(state == -1).active(state == 1)
        });
        return $btn;
    }
);
