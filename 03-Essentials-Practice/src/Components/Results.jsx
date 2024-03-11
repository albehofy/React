import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ inputs }) {

    let resultData = calculateInvestmentResults(inputs);
    const INITIAL_INVSTMENT = resultData[0].valueEndOfYear - resultData[0].interest - resultData[0].annualInvestment
console.log(resultData)
    return <table id="result">
        <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested capital</th>
            </tr>
        </thead>
        <tbody>
            {resultData.map(yearData => {
                const TOTAL_INTEREST = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - INITIAL_INVSTMENT; 

                const TOTAL_AMOUNT_INVESTED = yearData.valueEndOfYear - TOTAL_INTEREST; 
                return<tr key={yearData.year}>
                        <td>{yearData.year}</td>
                        <td>{formatter.format(yearData.valueEndOfYear)}</td>
                        <td>{formatter.format(yearData.interest)}</td>
                        <td>{formatter.format(TOTAL_INTEREST)}</td>
                        <td>{formatter.format(TOTAL_AMOUNT_INVESTED)}</td>
                    </tr>
            })}
            <tr></tr>
        </tbody>
    </table>
}