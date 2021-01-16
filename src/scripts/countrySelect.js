const DB_KEY = "country";
const slect = document.querySelector("select");

const refresh = () => {
    const getByStorageCountry = localStorage.getItem(DB_KEY);
    if (getByStorageCountry !== null) {
        slect
            .querySelector(`option[value=${getByStorageCountry}]`)
            .setAttribute("selected", "true");
    }
};

refresh();

const getValue = (event) => {
    const value = event.target.value;
    return value;
};

const setUpCountry = (country) => {
    localStorage.setItem(DB_KEY, country);
};

const init = (e) => {
    const country = getValue(e);
    setUpCountry(country);
};

slect.addEventListener("change", init);
