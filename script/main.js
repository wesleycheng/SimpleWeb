(function(){
    require.config({
         baseUrl: './lib/',
        paths: {
            'flexibleCSS': 'flexible_css',
            'flexible': 'flexible',
            'jQuery': 'jquery-2.1.1.min',
            'dialog': 'dialog',
            'pickerView': 'pickerView',
        },
        shim: {
            'flexibleCSS': {
                deps: [],
                exports: 'flexibleCSS'
            },
            'flexible': {
                deps: [],
                exports: 'flexible'
            },
            'dialog': {
                deps: ['jQuery'],
                exports: 'dialog'
            }
        }
    });

    require(['pickerView', 'dialog', 'flexibleCSS', 'flexible'],function(PickerView){
        $(document).ready(function(){
            var height = $(window).height();
            $('body').height(height);
            $('#content').height(height);

            $('.btn-test').click(function() {
                $.dialog({
                    overlayClose: true,
                    buttonText : {
                        ok : '确定'
                    },
                    titleText : '',
                    contentHtml : 'Test Test Test Test Test Test Test Test'
                });

            });

            var reservation = {

            };
        });

    });
}());