Class('ShareBoard.Widget.Header', {
    
    isa : 'ExtX.Shotenjin.Container',
    
    
    has : {
        cls                     : 'shb-header',
        
        style                   : 'position : relative',
        
        templateSources         : {
            
            init    : {
                /*tjfile(Header.tj.html)tjfile*/
            }
        }
    },
    
    
    after : {
        
        onRender : function (ct, position) {
        }
        
    },
    
    
    methods : {
        
        
    }
    
})