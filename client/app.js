import _ from 'lodash';

(function(){
    window.onload = () => {
        const form = document.forms.lions;
        fetchAndPopulate();
        form.addEventListener('submit', e => {
            e.preventDefault();
            const formData = new FormData(form);
            window.fetch('/lions', {
                method: 'post',
                body: formData,
            })
                .then( res => (console.log('Success'), res.json(), fetchAndPopulate()))
                .then( json => console.log(json))
                .catch( err => console.log('Error', err))
            ;
        });
    };
    function populateLions(lions){
        const leonListTemplate = document.getElementById("lion_list_template").innerHTML;
        const lionsContainer = document.querySelector('.lion-list');
        const compiledLeonList = _.template(leonListTemplate);
        lionsContainer.innerHTML = compiledLeonList({ lions });
    }
    function fetchAndPopulate() {
        window.fetch('/lions')
          .then( res => res.json())
          .then(populateLions);
    }
})();