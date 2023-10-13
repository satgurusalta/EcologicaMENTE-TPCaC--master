const app = Vue.createApp({
    data() {
        return {
            ciudad: '',
            ciudadNombre: '',
            paisNombre: '',
            temperatura: 0,
            humedad: 0,
            descripcion: '',
            icono: '',
        };
    },
    methods: {
        buscarClima() {
            if (this.ciudad) {
                this.fetchdatosClima(this.ciudad);
            }
        },
        fetchdatosClima(ciudad) {
            const urlBase = 'https://api.openweathermap.org/data/2.5/weather?';
            const api_key = 'f77e7b07ddecaa76d309b980c819d00c';
            const difKelvin = 273.15;

            fetch(`${urlBase}q=${ciudad}&appid=${api_key}`)
                .then(response => response.json())
                .then(data => {
                    this.ciudadNombre = data.name;
                    this.paisNombre = data.sys.country;
                    this.temperatura = Math.floor(data.main.temp - difKelvin);
                    this.humedad = data.main.humidity;
                    this.descripcion = data.weather[0].description;
                    this.icono = data.weather[0].icon;
                });
        },
        iconoURL() {
            return `https://openweathermap.org/img/wn/${this.icono}@2x.png` ;
        },
    },
});

app.mount('#app');