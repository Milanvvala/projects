import BackButton from "@/utils/BackButton"

function SurveyForm() {
  return (
    <>
      <main className="w-full flex flex-col bg-black text-white justify-center h-full items-center gap-4 py-20">
        <BackButton />
        <h1 id="title" className="font-bold text-4xl">
          FreeCodeCamp Survey Form
        </h1>
        <p id="description" className="font-light text-xl">
          Thank you for taking the time to help us improve the platform
        </p>
        <section>
          <form id="survey-form" className="flex flex-col gap-2">
            <label className="form-lable" id="name-label">
              Name
            </label>
            <input
              className="form-input "
              type="text"
              id="name"
              placeholder="Enter your Name"
              required
            />

            <label className="form-lable" id="email-label">
              Email
            </label>
            <input
              className="form-input "
              type="email"
              id="email"
              placeholder="Enter your Email"
              required
            />

            <label className="form-lable" id="number-label">
              Number
            </label>
            <input
              className="form-input "
              type="number"
              id="number"
              placeholder="Enter"
              min={1}
              max={100}
            />

            <label className="form-lable" id="number-label">
              Radio Input
            </label>
            <div className="flex text-sm flex gap-2 item-center">
              <span className="flex gap-2">
                <input type="radio" value="option1" name="ro1" />
                Option 1
              </span>
              <span className="flex gap-2">
                <input type="radio" value="option3" name="ro1" />
                Option 2
              </span>
            </div>

            <label className="form-lable" id="number-label">
              Checkboxes
            </label>
            <div className="flex text-sm flex gap-2 item-center">
              <span className="flex gap-2">
                <input type="checkbox" value="option1" name="co1" />
                Option 1{" "}
              </span>
              <span className="flex gap-2">
                <input type="checkbox" value="option2" name="co1" />
                Option 2{" "}
              </span>
            </div>

            <label className="form-lable" id="number-label">
              Select Dropdown
            </label>
            <select id="dropdown" className="form-input">
              <option value="do1">op1</option>
              <option value="do2">op2</option>
            </select>

            <label className="form-lable" id="number-label">
              Text Area
            </label>
            <textarea
              className="form-input"
              placeholder="Enter Massage"
            ></textarea>
            <br />
            <button id="submit" type="submit" className="button">
              Submit
            </button>
          </form>
        </section>
      </main>
    </>
  )
}
export default SurveyForm
