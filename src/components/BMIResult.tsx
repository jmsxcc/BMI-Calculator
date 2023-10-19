interface Props {
  bmi: number;
}

const BMIResult = ({ bmi }: Props) => {
  const checkBmiResult = () => {
    if (bmi === 0) return "-";
    if (bmi < 18.5) return "Underweight";
    if (bmi < 25) return "Normal";
    if (bmi < 30) return "Overweight";
    if (bmi < 35) return "Obese";
    if (bmi >= 35) return "Extremely Obese";
  };

  const getResultColor = () => {
    if (bmi < 18.5) return "gray";
    if (bmi < 25) return "green";
    if (bmi < 30) return "yellow";
    if (bmi < 35) return "orange";
    return "red";
  };

  return (
    <div className="result">
      <p className="bmi">BMI: {bmi.toFixed(2)}</p>
      <p className={getResultColor()}>{checkBmiResult()}</p>
    </div>
  );
};

export default BMIResult;
