export default function UserInput({userInputs, onInputChange}) {
    return <>
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label htmlFor="initialInvestment">initial invistment</label>
                    <input
                        type="number"
                        id="initialInvestment"
                        onChange={(event)=>onInputChange('initialInvestment', event.target.value)}
                        defaultValue={userInputs.initialInvestment}
                        required />
                </p>

                <p>
                    <label htmlFor="annualInvestment">annual invistment</label>
                    <input
                        type="number"
                        id="annualInvestment"
                        onChange={(event)=>onInputChange('annualInvestment', event.target.value)} 
                        defaultValue={userInputs.annualInvestment}
                        required />
                </p>
            </div>

            <div className="input-group">
                <p>
                    <label htmlFor="expectedReturn" >expected Result
                    </label>
                    <input
                        type="number"
                        id="expectedReturn"
                        onChange={(event)=>onInputChange('expectedReturn', event.target.value)} 
                        defaultValue={userInputs.expectedReturn}
                        required />
                </p>

                <p>
                    <label htmlFor="duration">duration
                    </label>
                    <input
                        type="number"
                        id="duration"
                        onChange={(event)=>onInputChange('duration', event.target.value)} 
                        defaultValue={userInputs.duration}
                        required />
                </p>
            </div>
        </section>
    </>
}