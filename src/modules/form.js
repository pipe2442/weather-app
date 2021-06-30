const dataForm = () => {
  const form = document.createElement('div');

  form.innerHTML = `
    <h1 class="text-white text-center card-weather m-5"> Free Weather App </h1>
    <h4 class="text-white text-center card-weather m-5"> Look for your city. </h4>
    <form class="d-flex justify-content-center m-5">
        <input type="text" class="form-control" id ="userCity" placeholder="City"></input>
        <button type="button" class="btn btn-success" id="formBtn" >Submit</button>
    </form>`;

  document.body.insertBefore(form, document.body.firstChild);
};

export default dataForm;