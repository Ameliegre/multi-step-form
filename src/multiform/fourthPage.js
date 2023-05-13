function FourthPage({setStep, step, setFormValues}) {

    function handlePrevious() {
        setStep(step - 1)
    }

    function handleSubmit(){
        setStep(5)
    }

    return(
        <>
            <h1>Finishing up</h1>
            <p>Double-check everything looks OK before confirming.</p>
            <div className='btnWrapper'>
                <button type='button' onClick={handlePrevious} className='button goBackBtn'>Go Back</button>
                <button type='button' onClick={handleSubmit}>Confirm</button>
            </div>
        </>
    )
}

export default FourthPage