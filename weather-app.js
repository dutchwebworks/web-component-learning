// https://opensource.com/article/21/7/web-components

const weatherAppTemplate = document.createElement("template");

weatherAppTemplate.innerHTML = `
  <div class="weather-app">
    <fieldset class="weather-app__body">
        <legend>Today's weather</legend>

        <p>Pretty hot today</p>

        <slot />
    </fieldset>
  </div>
`;

class WeatherApp extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: "open" });
        this._shadowRoot.appendChild(weatherAppTemplate.content.cloneNode(true));
    }
}

window.customElements.define("weather-app", WeatherApp);