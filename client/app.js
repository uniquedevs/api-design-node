import _ from 'lodash';

(function(){
    window.onload = () => {
        const form = document.forms.lions;
        window.fetch('/lions/1')
            .then( res => res.json())
            .then( json => console.log(json));
        form.addEventListener('submit', e => {
            e.preventDefault();
            const formData = new FormData(form);
            window.fetch('/lions', {
                method: 'post',
                body: formData,
            })
                .then( res => (console.log('Success'), res.json()))
                .then( json => console.log(json))
                .catch( err => console.log('Error', err))
            ;
        });
    };
    function populateLions(lions){
        const compiled = _.template('<% _.forEach(lions, function(lion) { %><li><%- lion.name %></li><% }); %>');
        compiled({ lions });
        const lionsContainer = document.querySelector('lion-list');
        lionsContainer.appendChild(compiled);
    }
})();