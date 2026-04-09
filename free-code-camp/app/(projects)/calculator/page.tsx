"use client"
import BackButton from "@/utils/BackButton"
import { useReducer, useState } from "react"

const ACTIONS = {
  ADD_DIGIT: "add-digit",
  CHOOSE_OPERATION: "choose-operation",
  CLEAR: "clear",
  DELETE_DIGIT: "delete-digit",
  EVALUATE: "evaluate"
}

function reducer(state: any, { type, payload }: any) {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          numberValue: payload.digit,
          overwrite: false
        }
      }
      if (payload.digit == "0" && state.numberValue == "0") {
        return state
      }
      if (payload.digit == "." && state.numberValue.includes(".")) {
        return state
      }
      return {
        ...state,
        numberValue: `${state.numberValue || ""}${payload.digit}`
      }

    case ACTIONS.CHOOSE_OPERATION:
      if (state.equation == null && state.numberValue == null) {
        return state
      }

      if (state.numberValue == null) {
        return {
          ...state,
          operation: payload.operation
        }
      }

      if (state.equation == null) {
        return {
          ...state,
          operation: payload.operation,
          equation: state.numberValue,
          numberValue: null
        }
      }
      return {
        ...state,
        equation: evaluate(state),
        operation: payload.operation,
        numberValue: null
      }

    case ACTIONS.CLEAR:
      return {}


    case ACTIONS.EVALUATE:
      if (
        state.equation == null ||
        state.numberValue == null ||
        state.operation == null
      ) {
        return state
      }
      return {
        ...state,
        overwrite: true,
        numberValue: evaluate(state),
        equation: null,
        operation: null
      }
  }
}

function evaluate({ numberValue, equation, operation }: any) {
  const prev = parseFloat(equation)
  const now = parseFloat(numberValue)
  if (isNaN(prev) || isNaN(now)) return ""
  let result: any = ""
  switch (operation) {
    case "+":
      result = prev + now
      break
    case "-":
      result = prev - now
      break
    case "x":
      result = prev * now
      break
    case "/":
      result = prev / now
      break
  }

  return result.toString()
}

const intFormatter = new Intl.NumberFormat("en-us", {
  minimumFractionDigits: 0
})

function formatOperand(operand: any) {
  if (operand == null) return
  const [integer, decimal] = operand.split(".")
  if (decimal == null) return intFormatter.format(integer)
  return `${intFormatter.format(integer)}.${decimal}`
}

function Calculator() {
  const [{ numberValue, equation, operation }, dispatch] = useReducer(
    reducer,
    {}
  )

  function addDigit(digit: any) {
    dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })
  }
  function chooseOperation(operation: any) {
    dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })
  }

  const calc = [
    {
      id: "clear",
      tag: "AC",
      class: "col-span-2 bg-red-800"
    },
    { id: "divide", tag: "/", class: "bg-gray-800" },
    { id: "multiply", tag: "x", class: "bg-gray-800" },
    { id: "seven", tag: "7", class: "" },
    { id: "eight", tag: "8", class: "" },
    { id: "nine", tag: "9", class: "" },
    { id: "substract", tag: "-", class: "bg-gray-800" },
    { id: "four", tag: "4", class: "" },
    { id: "five", tag: "5", class: "" },
    { id: "six", tag: "6", class: "" },
    { id: "add", tag: "+", class: "bg-gray-800" },
    { id: "one", tag: "1", class: "" },
    { id: "two", tag: "2", class: "" },
    { id: "three", tag: "3", class: "" },
    {
      id: "equals",
      tag: "=",
      class: "row-span-2 bg-blue-800"
    },
    { id: "zero", tag: "0", class: "col-span-2" },
    { id: "decimal", tag: ".", class: "" }
  ]

  return (
    <>
      <main className="w-full flex flex-col bg-black text-white justify-center h-screen items-center gap-4">
      <BackButton />
        <div className="grid grid-cols-4 gap-2 border border-yellow-500 p-2 rounded-md">
          <div id='display' className="border border-green-500 roundedmd w-full col-span-4 p-2 text-right">
            {formatOperand(equation)} {operation}
            <br />
            {formatOperand(numberValue)}
          </div>
          {calc.map((e) => {
            return (
              <button
                className={`button ${e.class}`}
                key={e.tag}
                onClick={() => {
                  if (
                    e.tag == "0" ||
                    e.tag == "1" ||
                    e.tag == "2" ||
                    e.tag == "3" ||
                    e.tag == "4" ||
                    e.tag == "5" ||
                    e.tag == "6" ||
                    e.tag == "7" ||
                    e.tag == "8" ||
                    e.tag == "9" ||
                    e.tag == "."
                  ) {
                    addDigit(e.tag)
                  }
                  if (
                    e.tag == "+" ||
                    e.tag == "-" ||
                    e.tag == "x" ||
                    e.tag == "/"
                  ) {
                    chooseOperation(e.tag)
                  }
                  if (e.tag == "AC") {
                    dispatch({ type: ACTIONS.CLEAR })
                  }
                  if (e.tag == "=") {
                    dispatch({ type: ACTIONS.EVALUATE })
                  }
                }}
                id={e.id}
              >
                {e.tag}
              </button>
            )
          })}
        </div>
      </main>
    </>
  )
}
export default Calculator
