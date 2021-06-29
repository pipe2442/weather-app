const dataForm = () =>  {
    const dom = document.querySelector('#content')
    const form = document.createElement('div')
    
    form.innerHTML = `
    <form>
        <input type="text" id ="userCity" placeholder="City"></input>
        <button type="button" id="formBtn" >Submit</button>
    </form>`

    document.body.insertBefore(form, document.body.firstChild);

}

export { dataForm };