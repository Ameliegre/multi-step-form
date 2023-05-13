function ThirdPage({setStep, step, setFormValues}) {

    function handlePrevious() {
        setStep(step - 1)
    }

    function handleSubmit(){
        setStep(4)
    }

    return(
        <>
            <h1>Pick add-ons</h1>
            <p>Add-ons help enhance your gaming experience.</p>
            <div className='btnWrapper'>
                <button type='button' onClick={handlePrevious} className='button goBackBtn'>Go Back</button>
                <button type='button' onClick={handleSubmit}>Next Step</button>
            </div>

        </>
    )
}

export default ThirdPage