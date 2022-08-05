class WeatherApp extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
      <div class="weather-app">
        <fieldset class="weather-app__body">
            <legend class="weather-app__title">Today's weather</legend>

            <p>Pretty hot today</p>

            <slot class="weahter-app__slot" />
        </fieldset>
      </div>
    `;
  }
}

customElements.define("weather-app", WeatherApp);