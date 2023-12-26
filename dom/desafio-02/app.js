new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlert(e) {
            alert('Alerta')
        },
        alterarTextDown(event){
            this.valor = event.target.value
        },
        alterarTextEnter(event){
            this.valor = event.target.value
        }
    }
})