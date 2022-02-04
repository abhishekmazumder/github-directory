import SpinnerImg from "./assets/spinner.gif"

const Spinner = () => {
  return (
    <div className="w-100 mt-20">
      <img src={SpinnerImg} width={180} alt="Loading..."/>
    </div>
  )
}

export default Spinner
